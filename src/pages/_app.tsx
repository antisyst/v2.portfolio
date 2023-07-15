import '@/styles/globals.scss'
import '@/styles/progress.scss'
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Router from 'next/router';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'F12') {
        event.preventDefault();
        router.push('/error'); 
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);




  return(
    <>
     <Component {...pageProps} />
    </>
  )
}
