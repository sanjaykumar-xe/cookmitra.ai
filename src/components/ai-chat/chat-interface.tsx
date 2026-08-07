'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useUser } from '@/lib/firebase';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Send, Mic, Volume2, Sparkles, UtensilsCrossed, Salad, Zap, Clock, Flame, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { sendMessageToAI, type ChatMessage } from '@/app/ai-chat/actions';
import { useToast } from '@/hooks/use-toast';
import { ChutkiIcon } from '@/components/icons/chutki-icon';
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

  const playResponse = useCallback((text: string) => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window) || !text) return;
    
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'en' ? 'en-IN' : language === 'ta' ? 'ta-IN' : 'hi-IN';
    
    const selectedVoice = voices.find(v => v.lang.startsWith(language) && /female/i.test(v.name)) || 
                        voices.find(v => v.lang.startsWith(language)) ||
                        voices.find(v => v.default);
    
    if (selectedVoice) utterance.voice = selectedVoice;
    
    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  }, [voices, language]);

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
          setMessages(prev => [...prev, { role: 'assistant', content: result.data as string }]);
          playResponse(result.data as string);
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
    <Card className="h-full w-full flex flex-col bg-card/30 dark:bg-card/50 overflow-hidden border-0 rounded-none transition-all duration-500">
        <ScrollArea className="flex-grow p-4 md:p-6" ref={chatContainerRef}>
            <div className="space-y-6 pb-12">
            {messages.length === 0 && !isLoading && (
                <div className="text-center py-12 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-2 duration-700">
                    <div className="h-20 w-20 mb-4"><ChutkiIcon /></div>
                    <h2 className="font-headline text-2xl md:text-3xl">{t('chat.title')}</h2>
                    <p className="text-muted-foreground mt-2 mb-8 max-w-xs">{t('chat.subtitle')}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-md">
                        {QUICK_SUGGESTIONS.map((suggestion, i) => (
                        <Button key={i} variant="outline" className="h-auto text-left justify-start p-3 rounded-2xl hover:scale-105 transition-transform border-border/60" onClick={() => handleSendMessage(suggestion.text)}>
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-600 dark:bg-amber-500/20 dark:text-amber-400 shrink-0">{suggestion.icon}</div>
                                <span className="text-sm font-medium leading-tight">{suggestion.text}</span>
                            </div>
                        </Button>
                        ))}
                    </div>
                </div>
            )}
            {messages.map((message, index) => (
                <div key={index} className={cn('flex items-start gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
                {message.role === 'assistant' && (
                    <Avatar className="h-8 w-8 hover:scale-110 transition-transform"><ChutkiIcon className="h-full w-full" /></Avatar>
                )}
                <div className={cn('max-w-md rounded-2xl p-3 text-sm transition-all', message.role === 'user' ? 'bg-primary text-primary-foreground rounded-br-none shadow-md' : 'bg-muted dark:bg-card border rounded-bl-none shadow-sm')}>
                    {message.role === 'assistant' ? <StructuredResponse text={message.content} /> : message.content}
                    {message.role === 'assistant' && (
                        <Button variant="ghost" size="icon" className="h-7 w-7 mt-2 -ml-1 text-muted-foreground hover:text-primary" onClick={() => playResponse(message.content)}>
                            <Volume2 className={cn("h-4 w-4", isSpeaking && "text-primary animate-pulse")} />
                        </Button>
                    )}
                </div>
                {message.role === 'user' && (
                    <Avatar className="h-8 w-8 hover:scale-110 transition-transform">
                        <AvatarFallback className="bg-zinc-200 dark:bg-zinc-800">{userInitial.toUpperCase()}</AvatarFallback>
                    </Avatar>
                )}
                </div>
            ))}
            {isLoading && (
                <div className="flex items-start gap-3 justify-start">
                    <Avatar className="h-8 w-8 animate-bounce"><ChutkiIcon className="h-full w-full" /></Avatar>
                    <div className="rounded-2xl p-3 text-sm bg-muted dark:bg-card border rounded-bl-none flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        <span className="animate-pulse">{t('chat.thinking')}</span>
                    </div>
                </div>
            )}
            </div>
        </ScrollArea>
        <div className="p-4 border-t bg-background/50 backdrop-blur-sm">
            <div className="relative max-w-5xl mx-auto">
                <Input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage(input)}
                    placeholder={isListening ? "Listening..." : t('chat.placeholder')}
                    className="h-12 pr-24 rounded-xl"
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                    <Button type="button" size="icon" variant={isListening ? "destructive" : "ghost"} onClick={handleVoiceInput} className="hover:scale-110 transition-transform">
                        <Mic className="h-5 w-5" />
                    </Button>
                    <Button type="submit" size="icon" onClick={() => handleSendMessage(input)} disabled={isLoading || !input.trim()} className="hover:scale-110 transition-transform">
                        <Send className="h-5 w-5" />
                    </Button>
                </div>
            </div>
        </div>
    </Card>
  );
}
