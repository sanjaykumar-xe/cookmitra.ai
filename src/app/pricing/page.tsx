'use client';

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { RupeeIcon } from '@/components/icons/rupee-icon';
import { Check, Sparkles, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const { toast } = useToast();

  const handleDemoAction = () => {
    toast({
      title: "Hackathon Demo Mode 🎉",
      description: "This is a student project! Every feature is currently unlocked for everyone to explore for free.",
    });
  };

  const tiers = [
    {
      name: "Free",
      price: "0",
      desc: "Perfect for casual home cooking",
      features: [
        "Generate up to 10 AI recipes/month",
        "Basic meal planning",
        "Community access",
        "Ingredient substitutions"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "99",
      desc: "For everyday cooking enthusiasts",
      features: [
        "Unlimited AI recipe generation",
        "Full weekly meal planning",
        "Batch cooking mode",
        "Voice input assistance",
        "Priority Chef Momo responses",
        "Ad-free experience"
      ],
      cta: "Go Pro",
      popular: true
    },
    {
      name: "Family",
      price: "199",
      desc: "For households and hostels",
      features: [
        "Everything in Pro",
        "Shared pantry (up to 5 accounts)",
        "Shared meal planning calendar",
        "Bulk grocery list aggregation",
        "Personalized kid-friendly modes"
      ],
      cta: "Join the Family",
      popular: false
    }
  ];

  return (
    <div className="content-container py-12 md:py-20 px-4">
      {/* Page Header */}
      <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
        <h1 className="font-headline text-fluid-h1 font-medium tracking-tight">
          Simple, Honest Pricing
        </h1>
        <p className="mt-4 text-fluid-subtitle font-medium text-muted-foreground max-w-2xl mx-auto opacity-80">
          CookMitra AI is free during our hackathon demo period — no credit card, no limits.
        </p>
      </div>

      {/* Hackathon Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-16"
      >
        <Card className="bg-primary/10 border-primary/20 shadow-xl overflow-hidden relative group">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          <CardContent className="p-8 text-center flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <Sparkles className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed">
              <span className="font-bold text-primary">Currently 100% Free</span> — This is a student hackathon project, and every feature is unlocked for everyone during the demo period.
            </p>
          </CardContent>
        </Card>
      </motion.div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-grid mb-16">
        {tiers.map((tier, idx) => (
          <motion.div
            key={tier.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
          >
            <Card className={cn(
              "h-full flex flex-col glass-card relative transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5",
              tier.popular ? "border-primary/40 ring-1 ring-primary/20 shadow-primary/10" : "border-primary/5"
            )}>
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-black uppercase tracking-widest text-[10px] px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="p-fluid-card text-center pb-0">
                <CardTitle className="font-headline text-2xl font-medium">{tier.name}</CardTitle>
                <div className="mt-4 flex items-center justify-center gap-1">
                  <RupeeIcon className="h-6 w-6 text-primary" />
                  <span className="text-5xl font-black tracking-tighter">{tier.price}</span>
                  <span className="text-muted-foreground text-sm font-medium">/month</span>
                </div>
                <CardDescription className="pt-2 font-medium opacity-70">
                  {tier.desc}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-fluid-card flex-grow space-y-6">
                <div className="h-px bg-primary/10 w-full" />
                <ul className="space-y-4">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                      <div className="bg-primary/10 rounded-full p-1 mt-0.5 shrink-0">
                        <Check className="h-3 w-3 text-primary" />
                      </div>
                      <span className="opacity-80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <div className="p-fluid-card pt-0 mt-auto">
                <Button 
                  onClick={handleDemoAction}
                  variant={tier.popular ? "default" : "outline"}
                  className={cn(
                    "w-full h-12 rounded-xl font-bold transition-transform active:scale-95",
                    !tier.popular && "border-primary/30 text-primary hover:bg-primary/5"
                  )}
                >
                  {tier.cta}
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Bottom FAQ Note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="max-w-3xl mx-auto text-center p-8 rounded-[2rem] border border-dashed border-border bg-card/30"
      >
        <div className="flex justify-center mb-4 text-muted-foreground/30">
          <Heart className="h-8 w-8" />
        </div>
        <h3 className="font-headline text-xl font-medium mb-3">Why show pricing if it&apos;s free?</h3>
        <p className="text-sm text-muted-foreground leading-relaxed font-medium">
          We built this to show how CookMitra AI could sustainably grow beyond the hackathon — 
          feel free to explore every tier&apos;s features right now, free of charge.
        </p>
      </motion.div>
    </div>
  );
}
