'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Mic, Volume2, VolumeX, Sparkles, UtensilsCrossed, Salad, Zap, Clock, Flame, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendMessageToAI, type ChatMessage } from '@/app/ai-chat/actions';
import { useToast } from '@/hooks/use-toast';
import { ChutkiIcon } from '@/components/icons/chutki-icon';
import { CookMitraLogo } from '@/components/icons/cook-mitra-logo';
import { useLanguage } from '@/context/language-context';

const QUICK_SUGGESTIONS = [
  { icon: <UtensilsCrossed className="h-5 w-5" />, text: 'Suggest a recipe with chicken and rice' },
  { icon: <Salad className="h-5 w-5" />, text: 'What are some healthy breakfast ideas?' },
  { icon: <Zap className="h-5 w-5" />, text: 'Give me a recipe that takes less than 20 minutes' },
  { icon: <Sparkles className="h-5 w-5" />, text: 'How do I make my curry less spicy?' },
];

const StructuredResponse = ({ text }: { text: string }) => {
  const sections = text.split(/(?=🍽|🧂|👨‍🍳|⏱|🔥)/g);

  return (
    <div className="space-y-1">
      {sections.map((section, index) => {
        const trimmedSection = section.trim();
        if (!trimmedSection) return null;

        if (trimmedSection.startsWith('🍽')) {
          return <h3 key={index} className="font-headline text-lg font-bold !mt-2 !mb-3 animate-in fade-in slide-in-from-left-2 duration-500">{trimmedSection.replace('🍽', '').trim()}</h3>;
        }

        if (trimmedSection.startsWith('🧂') || trimmedSection.startsWith('👨‍🍳')) {
          const lines = trimmedSection.split('\n');
          const title = lines.shift() || '';
          const isUnordered = lines.some(l => l.trim().startsWith('-'));

          return (
            <div key={index} className="!mt-3 animate-in fade-in slide-in-from-left-2 duration-500" style={{ animationDelay: `${index * 100}ms` }}>
              <h4 className="font-semibold !mb-1">{title.trim()}</h4>
              {isUnordered 
                ? <ul className="list-disc list-inside space-y-0.5">{lines.map((l, j) => <li key={j}>{l.replace('-', '').trim()}</li>)}</ul>
                : <ol className="list-decimal list-inside space-y-1">{lines.map((l, j) => <li key={j}>{l.replace(/^\d+\.\s*/, '')}</li>)}</ol>
              }
            </div>
          );
        }

        if (trimmedSection.startsWith('⏱') || trimmedSection.startsWith('🔥')) {
          const Icon = trimmedSection.startsWith('⏱') ? Clock : Flame;
          return (
            <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground !mt-2 animate-in fade-in duration-700">
              <Icon className="h-4 w-4" />
              <span>{trimmedSection.replace(/[⏱🔥]/, '').trim()}</span>
            </div>
          );
        }

        return <p key={index} className="animate-in fade-in duration-500">{trimmedSection}</p>;
      })}
    </div>
  );
};

export default function ChatInterface() {
  const { user } = useUser();
  const { language, t } = useLanguage();
  const { toast } = useToast();

  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<any>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speakingMessageIndex, setSpeakingMessageIndex] = useState<number | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    if ('speechSynthesis' in window) {
      const updateVoices = () => setVoices(window.speechSynthesis.getVoices());
      window.speechSynthesis.onvoiceschanged = updateVoices;
      updateVoices();
    }
    
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.lang = language === 'en' ? 'en-IN' : language === 'ta' ? 'ta-IN' : 'hi-IN';
      recognition.onresult = (event: any) => {
        setInput(event.results[0][0].transcript);
        setIsListening(false);
      };
      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      recognitionRef.current = recognition;
    }
    
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  useEffect(() => {
    if (chatContainerRef.current) {
        const scrollContainer = chatContainerRef.current.querySelector('[data-radix-scroll-area-viewport]');
        if (scrollContainer) {
            scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
        }
    }
  }, [messages, isLoading]);

  const stopSpeech = useCallback(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    setSpeakingMessageIndex(null);
  }, []);

  const toggleSpeech = useCallback((index: number, text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;
    
    // If currently speaking this message, stop/mute it immediately!
    if (isSpeaking && speakingMessageIndex === index) {
      stopSpeech();
      toast({ title: "Muted", description: "Audio response stopped." });
      return;
    }

    stopSpeech();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-IN' : language === 'ta' ? 'ta-IN' : 'hi-IN';
    
    const selectedVoice = voices.find(v => v.lang.startsWith(language) && /female/i.test(v.name)) || 
                        voices.find(v => v.lang.startsWith(language)) ||
                        voices.find(v => v.default);
    
    if (selectedVoice) utterance.voice = selectedVoice;
    
    utterance.onstart = () => {
      setIsSpeaking(true);
      setSpeakingMessageIndex(index);
    };
    utterance.onend = () => {
      setIsSpeaking(false);
      setSpeakingMessageIndex(null);
    };
    utterance.onerror = () => {
      setIsSpeaking(false);
      setSpeakingMessageIndex(null);
    };

    window.speechSynthesis.speak(utterance);
  }, [isSpeaking, speakingMessageIndex, voices, language, stopSpeech, toast]);

  const handleSendMessage = async (messageContent: string) => {
    const trimmedContent = messageContent.trim();
    if (!trimmedContent) return;

    const newMessages: ChatMessage[] = [...messages, { role: 'user', content: trimmedContent }];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    try {
        const result = await sendMessageToAI(newMessages, language);
        if (result.success && result.data) {
          const aiResponseText = result.data as string;
          setMessages(prev => {
            const nextMsgs = [...prev, { role: 'assistant', content: aiResponseText }];
            toggleSpeech(nextMsgs.length - 1, aiResponseText);
            return nextMsgs;
          });
        } else {
          toast({ variant: 'destructive', title: 'AI Error', description: result.error || 'Failed to connect to Chef Momo.' });
        }
    } finally {
        setIsLoading(false);
    }
  };
  
  const handleVoiceInput = () => {
    if (!recognitionRef.current) return;
    if (isListening) recognitionRef.current.stop();
    else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (e) { console.error(e); }
    }
  };

  const userInitial = user?.displayName?.[0] || user?.email?.[0] || 'U';

  return (
    <Card className="h-full w-full flex flex-col bg-card/80 backdrop-blur-sm border border-stone-200/80 dark:border-stone-800/80 shadow-xs overflow-hidden rounded-[2.5rem] transition-all duration-500">
        <ScrollArea className="flex-grow p-4 md:p-6" ref={chatContainerRef}>
            <div className="space-y-6 pb-12">
            {messages.length === 0 && !isLoading && (
                <div className="text-center py-10 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-2 duration-700">
                    <div className="mb-4 relative">
                        <CookMitraLogo width={88} height={88} className="w-22 h-22 transition-transform duration-500 hover:scale-105" />
                        <Sparkles className="h-6 w-6 text-[#F4A21A] absolute -top-1 -right-1 animate-pulse" />
                    </div>
                    <h2 className="font-headline text-2xl md:text-3xl font-semibold text-stone-900 dark:text-stone-100 tracking-tight">{t('chat.title')}</h2>
                    <p className="text-stone-500 text-sm mt-1.5 mb-8 max-w-xs font-normal">{t('chat.subtitle')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl px-2">
                        {QUICK_SUGGESTIONS.map((suggestion, i) => (
                        <Button 
                            key={i} 
                            variant="outline" 
                            className="h-auto min-h-[64px] text-left justify-start p-4 rounded-2xl whitespace-normal hover:scale-[1.02] hover:border-[#F4A21A]/50 transition-all border-stone-200/80 dark:border-stone-800/80 shadow-xs bg-stone-50/50 dark:bg-stone-900/30" 
                            onClick={() => handleSendMessage(suggestion.text)}
                        >
                            <div className="flex items-center gap-3.5 w-full">
                                <div className="p-2.5 rounded-xl bg-amber-500/10 text-[#F4A21A] shrink-0">
                                    {suggestion.icon}
                                </div>
                                <span className="text-sm font-medium leading-normal text-stone-800 dark:text-stone-200 whitespace-normal break-words flex-1">
                                    {suggestion.text}
                                </span>
                            </div>
                        </Button>
                        ))}
                    </div>
                </div>
            )}
            {messages.map((message, index) => (
                <div key={index} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                {message.role === 'assistant' && (
                    <CookMitraLogo width={32} height={32} className="w-8 h-8 rounded-full shrink-0" />
                )}
                <div className={cn('max-w-md rounded-2xl p-4 text-sm transition-all', message.role === 'user' ? 'bg-[#F4A21A] text-white font-medium shadow-md shadow-amber-500/20 rounded-br-none' : 'bg-stone-100/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800/80 rounded-bl-none shadow-xs text-stone-900 dark:text-stone-100')}>
                    {message.role === 'assistant' ? <StructuredResponse text={message.content} /> : message.content}
                    {message.role === 'assistant' && (
                        <Button 
                            variant="ghost" 
                            size="icon" 
                            className={cn(
                              "h-7 w-7 mt-2 -ml-1 transition-all rounded-full",
                              isSpeaking && speakingMessageIndex === index 
                                ? "text-red-500 hover:text-red-600 bg-red-500/10 hover:bg-red-500/20" 
                                : "text-stone-400 hover:text-[#F4A21A]"
                            )} 
                            onClick={() => toggleSpeech(index, message.content)}
                            title={isSpeaking && speakingMessageIndex === index ? "Mute audio response" : "Read aloud response"}
                        >
                            {isSpeaking && speakingMessageIndex === index ? (
                                <VolumeX className="h-4 w-4 text-red-500 animate-pulse" />
                            ) : (
                                <Volume2 className="h-4 w-4" />
                            )}
                        </Button>
                    )}
                </div>
                {message.role === 'user' && (
                    <Avatar className="h-8 w-8 hover:scale-110 transition-transform">
                        <AvatarFallback className="bg-stone-200 dark:bg-stone-800 text-stone-800 dark:text-stone-200 font-bold">{userInitial.toUpperCase()}</AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {isLoading && (
                <div className="flex items-start gap-3 justify-start animate-in fade-in duration-300">
                    <CookMitraLogo width={32} height={32} className="w-8 h-8 rounded-full shrink-0 animate-pulse" />
                    <div className="rounded-2xl p-4 text-sm bg-stone-100/80 dark:bg-stone-900/80 border border-stone-200/80 dark:border-stone-800/80 rounded-bl-none shadow-xs space-y-2.5 max-w-sm w-full">
                        <div className="flex items-center gap-2 mb-1">
                            <Loader2 className="h-4 w-4 animate-spin text-[#F4A21A] shrink-0" />
                            <span className="text-xs font-bold text-[#F4A21A] animate-pulse">{t('chat.thinking')}</span>
                        </div>
                        <div className="h-3 w-4/5 rounded bg-stone-200/70 dark:bg-stone-800/70 animate-pulse" />
                        <div className="h-3 w-full rounded bg-stone-200/50 dark:bg-stone-800/50 animate-pulse" />
                        <div className="h-3 w-3/5 rounded bg-stone-200/40 dark:bg-stone-800/40 animate-pulse" />
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="p-4 border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50/50 dark:bg-stone-900/40 backdrop-blur-sm">
            <div className="relative max-w-4xl mx-auto flex items-center">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
                    placeholder={isListening ? "Listening..." : t('chat.placeholder')}
                    className="h-14 pr-28 rounded-full bg-card border border-stone-200/80 dark:border-stone-800/80 shadow-xs pl-6 text-sm focus-visible:ring-2 focus-visible:ring-[#F4A21A]"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
                    <Button type="button" size="icon" variant={isListening ? "destructive" : "ghost"} onClick={handleVoiceInput} className="h-10 w-10 rounded-full hover:scale-105 transition-transform">
                        <Mic className="h-5 w-5" />
                    </Button>
                    <Button type="submit" size="icon" onClick={() => handleSendMessage(input)} disabled={isLoading || !input.trim()} className="h-10 w-10 rounded-full bg-[#F4A21A] hover:bg-[#E09015] text-white shadow-md shadow-amber-500/25 border-0 transition-transform active:scale-95 flex items-center justify-center">
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  );
}
