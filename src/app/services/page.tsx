'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, UtensilsCrossed, ShoppingCart, Smartphone, TrendingUp, ClipboardList } from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  status: 'Available Now' | 'Coming Soon';
}

function ServiceCard({ icon, title, description, status }: ServiceCardProps) {
  const isAvailable = status === 'Available Now';
  return (
    <Card className="bg-card/80 h-full flex flex-col">
      <CardHeader>
        <div className="flex justify-between items-start">
            <div className="bg-primary/10 h-12 w-12 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            {status === 'Coming Soon' && (
                <Badge variant="outline">Coming Soon</Badge>
            )}
        </div>
        <CardTitle className="font-headline text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col justify-end">
        <p className="text-muted-foreground mb-4">{description}</p>
        {isAvailable && (
             <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <span className="text-sm font-medium text-green-400">Available Now</span>
            </div>
        )}
      </CardContent>
    </Card>
  );
}

interface HowItWorksStepProps {
  step: number;
  title: string;
  description: string;
  alignment: 'left' | 'right';
}

function HowItWorksStep({ step, title, description, alignment }: HowItWorksStepProps) {
    const cardContent = (
         <Card className="bg-card/80 p-4 text-center">
            <h4 className="font-bold">{title}</h4>
            <p className="text-sm text-muted-foreground">{description}</p>
        </Card>
    );
    const stepCircle = (
        <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-bold text-primary-foreground">
            {step}
        </div>
    );

    if (alignment === 'left') {
        return (
            <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-8 w-full">
                {cardContent}
                {stepCircle}
                <div></div>
            </div>
        )
    }

    return (
         <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-8 w-full">
            <div></div>
            {stepCircle}
            {cardContent}
        </div>
    )
}

export default function ServicesPage() {
    const services: ServiceCardProps[] = [
        {
            icon: <Sparkles className="h-6 w-6 text-primary" />,
            title: "AI Recipe Recommendation",
            description: "Our advanced AI analyzes your ingredients and suggests the most relevant Indian recipes, ranked by ingredient match and popularity.",
            status: "Available Now"
        },
        {
            icon: <UtensilsCrossed className="h-6 w-6 text-primary" />,
            title: "Ingredient-to-Recipe Mapping",
            description: "Smart mapping system that understands ingredient relationships and suggests recipes you can actually make with what you have.",
            status: "Available Now"
        },
        {
            icon: <ShoppingCart className="h-6 w-6 text-primary" />,
            title: "Grocery Integration",
            description: "Seamless links to Blinkit, Zepto, and Swiggy Instamart for instant ordering of missing ingredients.",
            status: "Available Now"
        },
        {
            icon: <Smartphone className="h-6 w-6 text-primary" />,
            title: "Smart Cooking Assistant",
            description: "Interactive step-by-step cooking guidance with timers, tips, and voice commands.",
            status: "Coming Soon"
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-primary" />,
            title: "Grocery Price Comparison",
            description: "Compare prices across Blinkit, Zepto, and Instamart to find the best deals on your ingredients.",
            status: "Coming Soon"
        },
        {
            icon: <ClipboardList className="h-6 w-6 text-primary" />,
            title: "Meal Planner",
            description: "AI-powered weekly meal planning based on your preferences, dietary restrictions, and budget.",
            status: "Coming Soon"
        },
    ];

    const howItWorksSteps = [
        { step: 1, title: "Enter Your Ingredients", description: "Add the ingredients you have in your kitchen", alignment: 'left' as const },
        { step: 2, title: "AI Generates Recipes", description: "Our AI finds the best matching Indian recipes", alignment: 'right' as const },
        { step: 3, title: "Order Missing Items", description: "One-click links to order missing ingredients", alignment: 'left' as const },
        { step: 4, title: "Start Cooking!", description: "Follow step-by-step instructions and enjoy", alignment: 'right' as const },
    ];

    return (
        <div className="flex-1">
            <section className="py-16 md:py-24">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <h1 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h1>
                        <p className="mt-4 text-lg text-muted-foreground">Everything you need to transform your cooking experience</p>
                    </div>
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => <ServiceCard key={service.title} {...service} />)}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container max-w-3xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold">How CookMitra Works</h2>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                        <div className="space-y-16">
                            {howItWorksSteps.map(step => (
                                <HowItWorksStep key={step.step} {...step} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
