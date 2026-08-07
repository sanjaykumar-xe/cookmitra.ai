'use client';

import { useUser, useAuth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, User as UserIcon, Mail, LogOut } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function ProfilePage() {
    const { user, isUserLoading } = useUser();
    const [mounted, setMounted] = useState(false);
    const auth = useAuth();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (mounted && !isUserLoading) {
            if (!user) {
                router.push('/login');
            } else if (user.providerData.some(p => p.providerId === 'password') && !user.emailVerified) {
                router.push('/verify-email');
            }
        }
    }, [user, isUserLoading, router, mounted]);

    if (!mounted || isUserLoading || !user) {
        return (
            <div className="flex h-screen items-center justify-center">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }

    const userInitial = user.displayName?.[0] || user.email?.[0] || '?';

    const handleLogout = async () => {
        if (auth) {
            await auth.signOut();
        }
        router.push('/login');
    };

    return (
        <div className="container mx-auto py-8 md:py-12 px-4">
            <div className="max-w-md mx-auto">
                 <Card>
                    <CardHeader className="items-center text-center">
                        <Avatar className="h-24 w-24 mb-4">
                            <AvatarImage src={user.photoURL || undefined} alt={user.displayName || "User"} />
                            <AvatarFallback className="text-4xl">{userInitial.toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <CardTitle className="font-headline text-3xl font-medium">{user.displayName || "Profile"}</CardTitle>
                        <CardDescription>Your personal account details</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4 rounded-md border p-3">
                            <UserIcon className="h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-sm text-muted-foreground">Display Name</p>
                                <p className="font-medium">{user.displayName}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 rounded-md border p-3">
                            <Mail className="h-5 w-5 text-muted-foreground" />
                            <div>
                                <p className="text-sm text-muted-foreground">Email Address</p>
                                <p className="font-medium">{user.email}</p>
                            </div>
                        </div>
                        <Button onClick={handleLogout} variant="destructive" className="w-full mt-4">
                            <LogOut className="mr-2 h-4 w-4" />
                            Logout
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
