'use client';

import { useState, useEffect } from 'react';
import { Bell, BellDot, CheckCheck, Info, X } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

type Notification = {
  id: string;
  message: string;
  time: string;
  read: boolean;
};

export function NotificationCenter({ iconClasses }: { iconClasses: string }) {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [hasUnread, setHasUnread] = useState(false);

  useEffect(() => {
    // Initial mock notifications
    const mockNotifications = [
      { id: '1', message: "Welcome to CookMitra AI!", time: '2 hours ago', read: false },
      { id: '2', message: "New recipes added to the library.", time: '1 day ago', read: false },
      { id: '3', message: "Tip: Use voice commands for hands-free cooking.", time: '2 days ago', read: true },
    ];
    setNotifications(mockNotifications);
  }, []);

  useEffect(() => {
    setHasUnread(notifications.some(n => !n.read));
  }, [notifications]);

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const clearNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="group p-3 rounded-lg hover:bg-zinc-800 relative">
          {hasUnread ? (
            <BellDot className={cn(iconClasses, "text-primary")} />
          ) : (
            <Bell className={iconClasses} />
          )}
          {hasUnread && (
            <span className="absolute top-3 right-3 h-2 w-2 rounded-full bg-primary animate-pulse" />
          )}
        </button>
      </PopoverTrigger>
      <PopoverContent side="right" className="w-80 p-0 bg-card/95 backdrop-blur-md border-border/60">
        <div className="p-4 border-b flex items-center justify-between">
          <h3 className="font-headline font-bold text-lg">Notifications</h3>
          {hasUnread && (
            <Button variant="ghost" size="sm" onClick={markAllRead} className="h-8 text-xs text-primary hover:text-primary/80">
              <CheckCheck className="h-3 w-3 mr-1" />
              Mark All Read
            </Button>
          )}
        </div>
        <ScrollArea className="h-[350px]">
          {notifications.length > 0 ? (
            <div className="flex flex-col">
              {notifications.map((n) => (
                <div 
                  key={n.id} 
                  className={cn(
                    "p-4 border-b last:border-0 relative group transition-colors",
                    !n.read ? "bg-primary/5" : "hover:bg-muted/30"
                  )}
                >
                  <div className="flex gap-3">
                    <div className={cn(
                      "h-8 w-8 rounded-full flex items-center justify-center shrink-0",
                      !n.read ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    )}>
                      <Info className="h-4 w-4" />
                    </div>
                    <div className="space-y-1">
                      <p className={cn("text-sm", !n.read ? "font-semibold" : "text-muted-foreground")}>
                        {n.message}
                      </p>
                      <p className="text-[10px] text-muted-foreground">{n.time}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => clearNotification(n.id)}
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-[350px] text-center p-6 space-y-2">
              <div className="bg-muted rounded-full p-4">
                <Bell className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">No new notifications</p>
            </div>
          )}
        </ScrollArea>
      </PopoverContent>
    </Popover>
  );
}
