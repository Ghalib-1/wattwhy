'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function DiagnoseRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/');
  }, [router]);

  return (
    <main className="max-w-2xl mx-auto p-6">
      <p className="text-slate-600">Redirecting…</p>
    </main>
  );
}