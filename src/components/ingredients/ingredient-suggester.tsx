"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, ShoppingCart } from "lucide-react";
import { suggestMissingIngredientsAction } from "@/app/actions";
import type { SuggestMissingIngredientsOutput } from "@/ai/flows/suggest-missing-ingredients";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  userIngredients: z.string().min(3, "Please enter at least one ingredient."),
  requiredIngredients: z.string().min(3, "Please enter at least one ingredient."),
});

type FormValues = z.infer<typeof formSchema>;

export default function IngredientSuggester() {
    const [result, setResult] = useState<SuggestMissingIngredientsOutput | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
          userIngredients: "",
          requiredIngredients: "",
        },
    });
    
    async function onSubmit(values: FormValues) {
        setIsLoading(true);
        setResult(null);

        const input = {
            userIngredients: values.userIngredients.split(',').map(s => s.trim()),
            requiredIngredients: values.requiredIngredients.split(',').map(s => s.trim()),
        };

        const response = await suggestMissingIngredientsAction(input);

        if (response.success && response.data) {
            setResult(response.data);
        } else {
            toast({
                variant: "destructive",
                title: "Error",
                description: response.error,
            });
        }
        setIsLoading(false);
    }

    return (
        <div className="container mx-auto py-8 md:py-12 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-1">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline">Find Missing Ingredients</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    <FormField
                                    control={form.control}
                                    name="requiredIngredients"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Recipe Ingredients</FormLabel>
                                        <FormControl>
                                            <Textarea
                                            placeholder="e.g., onion, tomato, paneer, rice..."
                                            {...field}
                                            className="min-h-[100px]"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Enter all ingredients for the recipe, separated by commas.
                                        </FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                     <FormField
                                    control={form.control}
                                    name="userIngredients"
                                    render={({ field }) => (
                                        <FormItem>
                                        <FormLabel>Your Available Ingredients</FormLabel>
                                        <FormControl>
                                            <Textarea
                                            placeholder="e.g., onion, tomato..."
                                            {...field}
                                            className="min-h-[100px]"
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Enter ingredients you have, separated by commas.
                                        </FormDescription>
                                        <FormMessage />
                                        </FormItem>
                                    )}
                                    />
                                    <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                                        {isLoading ? (
                                            <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Checking...
                                            </>
                                        ) : (
                                            "Find Missing"
                                        )}
                                    </Button>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                </div>
                 <div className="lg:col-span-2">
                    {isLoading && (
                        <Card className="flex items-center justify-center min-h-[400px]">
                            <Loader2 className="h-12 w-12 animate-spin text-primary" />
                        </Card>
                    )}
                    {result && !isLoading && (
                         <Card>
                            <CardHeader>
                                <CardTitle className="font-headline">Missing Ingredients</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {result.missingIngredients.length > 0 ? (
                                     <div className="space-y-4">
                                        {result.missingIngredients.map((item) => (
                                            <div key={item.name} className="space-y-2 rounded-lg border p-4">
                                                <h4 className="font-semibold">{item.name}</h4>
                                                <div className="flex flex-col space-y-2">
                                                    {item.purchaseLinks.map((link) => (
                                                        <Button key={link.retailer} variant="link" asChild className="justify-start p-0 h-auto">
                                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                                <ShoppingCart className="mr-2 h-4 w-4" />
                                                                Buy on {link.retailer}
                                                            </a>
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p>You have all the ingredients!</p>
                                )}
                            </CardContent>
                         </Card>
                    )}
                    {!result && !isLoading && (
                        <Card className="flex items-center justify-center min-h-[400px] border-dashed">
                            <div className="text-center text-muted-foreground">
                                <h3 className="font-headline text-2xl mb-2">Missing ingredients will appear here</h3>
                                <p>Fill out the form to see what you need to buy.</p>
                            </div>
                        </Card>
                    )}
                 </div>
            </div>
        </div>
    );
}
