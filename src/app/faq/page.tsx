'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge";
import { LifeBuoy, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What is CookMitra AI?",
    answer: "CookMitra AI is an AI-powered cooking companion built for Indian home cooking. It helps you generate recipes from ingredients you already have, plan healthy weekly meals, chat with an AI cooking assistant, and manage your kitchen pantry — all in one place."
  },
  {
    question: "Is CookMitra AI free to use?",
    answer: "Yes! CookMitra AI is completely free during our hackathon demo period. Check out our Pricing page for a look at how the product could evolve in the future."
  },
  {
    question: "How does the AI Recipe Generator work?",
    answer: "Just type in the ingredients you have (or scan a photo of your pantry, or use voice input), set your budget and cook time preferences, and our AI crafts a complete recipe with instructions, nutrition info, and a cost breakdown — tailored to what's actually in your kitchen."
  },
  {
    question: "What is Batch Cooking mode?",
    answer: "Toggle on Batch Cooking mode when generating a recipe, choose how many days you're cooking for, and the AI will scale the recipe up accordingly plus add storage and reheating instructions — perfect for students and hostel life."
  },
  {
    question: "Who is Chef Momo?",
    answer: "Chef Momo is your AI cooking assistant, available anytime to answer cooking questions, suggest substitutions, and help troubleshoot recipes in real time — just like texting a knowledgeable friend."
  },
  {
    question: "Can I save my favorite recipes?",
    answer: "Yes — tap 'Save Recipe' on any generated or library recipe, and it'll appear in 'My Saved Recipes' for quick access anytime."
  },
  {
    question: "What is the Pantry feature?",
    answer: "My Pantry lets you keep a running list of ingredients you have at home, so you don't have to retype them every time you want a recipe. You can manually pull items from your Pantry into the Recipe Generator whenever you'd like."
  },
  {
    question: "How accurate are the cost and nutrition estimates?",
    answer: "Estimates are AI-generated based on typical Indian grocery prices and standard nutritional data. They're meant as helpful guidance, not exact figures — actual costs and nutrition may vary by brand, region, and season."
  }
];

export default function FaqPage() {
  return (
    <div className="content-container py-12 md:py-20 px-4">
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 animate-in fade-in slide-in-from-top-4 duration-700">
            <Badge variant="outline" className="mb-4 py-1.5 px-4 border-primary/20 bg-primary/5 text-primary">
                <LifeBuoy className="h-4 w-4 mr-2" />
                Help Center
            </Badge>
            <h1 className="font-headline text-fluid-h1 font-medium tracking-tight">
                Frequently Asked Questions
            </h1>
            <p className="mt-4 text-fluid-subtitle text-muted-foreground opacity-80">
                Everything you need to know about cooking with CookMitra AI
            </p>
        </div>

        {/* Accordion List */}
        <div className="max-w-3xl mx-auto space-y-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
                {faqItems.map((item, index) => (
                     <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                     >
                        <AccordionItem 
                            value={`item-${index}`}
                            className="border rounded-2xl px-6 bg-card/50 backdrop-blur-sm hover:bg-card hover:shadow-md transition-all duration-300 border-border/40 overflow-hidden"
                        >
                            <AccordionTrigger className="text-left font-bold text-lg py-6 hover:no-underline hover:text-primary transition-colors group">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pt-1 opacity-90">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </motion.div>
                ))}
            </Accordion>

            {/* Contact Card */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="pt-12"
            >
                <Card className="text-center bg-primary/5 border-primary/10 p-8 rounded-[2rem] border-dashed border-2">
                    <CardHeader className="p-0 mb-4">
                        <div className="mx-auto bg-primary/10 h-12 w-12 rounded-full flex items-center justify-center mb-2">
                            <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <CardTitle className="font-headline text-2xl font-medium">
                            Still have questions?
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-4">
                        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
                            Can&apos;t find what you&apos;re looking for? Reach out to our support team.
                        </p>
                        <Link 
                            href="mailto:cookmitra.ai@gmail.com" 
                            className="inline-block text-primary font-bold text-lg hover:underline underline-offset-4"
                        >
                            cookmitra.ai@gmail.com
                        </Link>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    </div>
  );
}
