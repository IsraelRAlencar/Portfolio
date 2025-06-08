'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from './ui/Button'; // Ajuste o caminho se necessário

const COOKIE_NAME = 'NEXT_LOCALE';

export default function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const nextLocale = locale === 'pt' ? 'en' : 'pt';

  const onSelectLocale = () => {
    document.cookie = `${COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; SameSite=Lax`;

    startTransition(() => {
      router.refresh();
    });
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onSelectLocale}
      disabled={isPending}
      className="border-border hover:bg-accent"
    >
      {nextLocale.toUpperCase()}
    </Button>
  );
}