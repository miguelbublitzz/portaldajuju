"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Copy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const TEN_MINUTES_IN_MS = 10 * 60 * 1000;
const PIX_KEY = '08999280993';

export default function TimerOverlay({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const isPaid = searchParams.get('paid') === 'true';

  const [isClient, setIsClient] = useState(false);
  const [endTime, setEndTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const { toast } = useToast();

  useEffect(() => {
    setIsClient(true);
    if (!isPaid) {
      const storedEndTime = localStorage.getItem('sessionEndTime');
      if (storedEndTime) {
        setEndTime(parseInt(storedEndTime, 10));
      } else {
        const newEndTime = Date.now() + TEN_MINUTES_IN_MS;
        setEndTime(newEndTime);
        localStorage.setItem('sessionEndTime', newEndTime.toString());
      }
    } else {
      localStorage.removeItem('sessionEndTime');
      setEndTime(null);
    }
  }, [isPaid]);

  useEffect(() => {
    if (endTime === null) return;

    const interval = setInterval(() => {
      const now = Date.now();
      const remaining = Math.max(0, endTime - now);
      setTimeLeft(remaining);

      if (remaining === 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [endTime]);

  const formatTime = (ms: number | null) => {
    if (ms === null) return '10:00';
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const copyPixKey = () => {
    navigator.clipboard.writeText(PIX_KEY);
    toast({
      title: 'Chave PIX copiada!',
      description: 'Você pode colar a chave no seu app de pagamentos.',
    });
  };

  if (!isClient) {
    return null; // Render nothing on the server
  }

  if (isPaid) {
    return <>{children}</>;
  }

  if (timeLeft === 0) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/90 backdrop-blur-sm fade-in-overlay">
        <div className="text-center p-8 max-w-md mx-auto bg-card rounded-lg shadow-2xl">
          <h1 className="text-5xl mb-4">⏰</h1>
          <h2 className="text-2xl font-bold font-headline text-primary mb-3">O tempo acabou!</h2>
          <p className="text-lg text-foreground/80 mb-6">
            Seu acesso expirou. Para continuar navegando e ter acesso vitalício, envie o pagamento.
          </p>
          <div className="w-full p-4 border-2 border-dashed border-primary/50 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">Chave PIX (Celular)</p>
            <div className="flex items-center justify-center space-x-2">
                <p className="text-lg font-mono font-bold text-primary">{PIX_KEY}</p>
                <Button variant="ghost" size="icon" onClick={copyPixKey}>
                    <Copy className="h-5 w-5" />
                </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {children}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50">
        <div className="px-4 py-2 bg-card/80 backdrop-blur-sm border rounded-full shadow-lg text-center">
            <p className="text-sm text-primary font-headline">Seu acesso acaba em:</p>
            <p className="text-2xl font-bold font-mono text-primary tracking-widest">{formatTime(timeLeft)}</p>
            <div className="mt-1 flex items-center justify-center space-x-1">
                 <p className="text-xs text-muted-foreground">PIX:</p>
                 <p className="text-xs font-mono text-muted-foreground">{PIX_KEY}</p>
            </div>
        </div>
      </div>
    </>
  );
}
