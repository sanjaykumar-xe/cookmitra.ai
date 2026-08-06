'use client';

import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search, Filter, Leaf, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';
import { healthyFoods, healthyFoodCategories, type HealthyFood, type HealthyFoodCategory } from '@/lib/healthy-foods';
import Image from "next/image";

function HealthyFoodCard({ food }: { food: HealthyFood }) {
  return (
    <Card className="bg-card/80 border-border/60 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between hover:shadow-lg hover:shadow-primary/10 hover:scale-105 min-w-[260px] w-full">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full bg-muted/20">
          <Image
            src={food.imageUrl}
            alt={food.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="rounded-t-lg object-cover"
            data-ai-hint={food.imageHint}
          />
        </div>
        <div className="p-4">
            <CardTitle className="text-lg font-bold">{food.name}</CardTitle>
            <CardDescription className="line-clamp-2 mt-1">{food.description}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-end">
        <div className="flex items-start gap-2 text-sm text-muted-foreground border-t pt-3 mt-auto">
            <Heart className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
            <p className="line-clamp-3"><span className="font-semibold text-foreground">Benefits:</span> {food.benefits}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function HealthyFoodsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<HealthyFoodCategory>('All');

  const filteredFoods = useMemo(() => {
    return healthyFoods.filter(food => {
      const matchesCategory = activeCategory === 'All' || food.category === activeCategory;
      const matchesSearch = food.name.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, activeCategory]);
  
  return (
    <div className="container max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-6">
      <div className="w-full">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold flex items-center justify-center gap-3 text-primary"><Leaf className="h-10 w-10"/>Healthy Foods</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore a catalog of nutritious foods to incorporate into your diet.
          </p>
        </div>

        <div className="w-full mb-8">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search healthy foods by name..."
              className="pl-10 h-12 text-base"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <Filter className="h-5 w-5 text-muted-foreground mr-2 hidden md:block" />
            {healthyFoodCategories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                className={cn(
                  "rounded-full px-6",
                  activeCategory === category && "bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                )}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          {filteredFoods.map(food => (
            <HealthyFoodCard key={food.id} food={food} />
          ))}
        </div>

        {filteredFoods.length === 0 && (
          <div className="text-center py-16 col-span-full">
              <p className="text-muted-foreground">No healthy foods found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
