import Head from 'next/head';
import Navigation from '@/components/navigation';
import { Showcase } from '@/components/showcase';
import { useEffect, useState, useRef } from 'react';
import { FixedElements } from '@/components/fixed';
import BetaNotification from '@/components/beta';
import { Footer } from '@/components/footer';
const Home = () => {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === 'u') {
        event.preventDefault();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  useEffect(() => {
    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  interface HomeProps {
    data: any; 
    id: string;
  }
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

 

  return (
    <>
      <Head>
        <title>Ramazan Azimli / Frontend Developer</title>
        <meta name="description" content="Crafting Engaging User Experiences with Creative Design & Advanced Technology." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@700&family=DM+Sans:wght@400;500;700&family=Poppins:wght@700;800;900&display=swap" rel="stylesheet" />
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@500,600,700&f[]=outfit@800,500,700&f[]=beVietnam-pro@600,900,700,800&f[]=work-sans@800,600,700,601&f[]=red-hat-display@800,900,700&f[]=clash-display@700,600&f[]=poppins@900,500,800,700,600&display=swap" rel="stylesheet"/>
        <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation/>
      <div className="cursor-slow" ref={cursorRef}></div>
      <BetaNotification/>
      <Showcase/>
      <FixedElements/>
      <Footer/>
    </>
  )
}
export default Home;