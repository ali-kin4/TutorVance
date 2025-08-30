'use client';

import dynamic from 'next/dynamic';

// Import the adapted component lazily to keep the page lean
const TutorvanceApp = dynamic(() => import('./components/Tutorvance'), {
  ssr: false,
});

export default function Page() {
  return <TutorvanceApp />;
}

