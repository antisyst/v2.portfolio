import styled from "styled-components";
import Lottie from 'react-lottie';
import animationData from '../assets/error-animation.json';
import Link from "next/link";
import { useRef } from "react";

const PageLayout = styled.main `
    text-align: center;
`
const ErrorInterface = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-weight: bold;
    font-family: 'Chakra Petch', sans-serif;

    div:nth-child(1) {
      pointer-events: none;

      svg {
       pointer-events: none;
      }
    }
   

    div:nth-child(2) {
      display: none;
      pointer-events: none;

      svg {
       pointer-events: none;
      }

      @media only screen and (max-width: 800px) {
        display: block;
        pointer-events: none;

        svg {
         pointer-events: none;
        }
      }
    }
    div:nth-child(1) {
      @media only screen and (max-width: 800px) {
        display: none;
        pointer-events: none;

        svg {
         pointer-events: none;
        }
      }
    }
`
const ErrorContent = styled.div `
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  text-decoration: none;
  color: var(--var-color-component-white);

  a {
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: var(--var-color-component-white);
    font-size: 22px;
    filter: drop-shadow(0 0 0.75rem var(--var-color-component-advanced));
    padding: 14px 33px;
    border-radius: 8px;
    background: var(--var-color-component-advanced);
  }
`
const Error = () => {

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleButtonClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        disableCheck: true,
        hover: true,
        controls: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

    return(
        <PageLayout>
            <ErrorInterface>
              <Lottie  options={defaultOptions} height={500} width={500} />
              <Lottie  options={defaultOptions} height={250} width={300} />
              <br /><br />
              <ErrorContent>
                <Link href='/' onClick={handleButtonClick}>Back Home</Link>
                <audio ref={audioRef} src="https://audio.jukehost.co.uk/N8C0Cyif3kgNzKP7wQjw6i2khENs2f6F" />
              </ErrorContent>
            </ErrorInterface>
        </PageLayout>
    )
}

export default Error;