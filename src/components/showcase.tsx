import styled from 'styled-components';
import Lottie from 'react-lottie';
import animationData from '../assets/react-svg-animatin_ddr.json';
import { Fade } from 'react-awesome-reveal';

const ShowcaseInt = styled.div `
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 4vh;
    height: 100vh;
    padding: 0px 10%;
    margin-bottom: 4vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 6%;
    }
`
const NameSpace = styled.h1 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 9vmin);
    color: var(--var-color-component-white);


    @media only screen and (max-width: 768px) {
    font-size: calc(10px + 11vmin);
    }
`
const ShowcaseSpan = styled.span  `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 2.5vmin);
    color: var(--var-color-component-advanced);

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 4vmin);
        }

        span {
            font-weight: 900;
            font-family: 'Poppins', sans-serif;
            font-size: calc(10px + 3vmin);
            color: var(--var-color-component-primary);
        
            @media only screen and (max-width: 768px) {
                font-size: calc(10px + 4vmin);
                }
        }
`
const ShowcaseH2 = styled.h2 `
    font-weight: bold;
    font-family: 'General Sans', sans-serif;
    font-size: calc(10px + 6.8vmin);
     display: flex;
     flex-wrap: wrap;
     flex-direction: row;
     align-items: center;

     @media only screen and (max-width: 1000px) {
        display: block;
     }

    b {
    color: var(--var-color-component-advanced);
    margin-left: 4px;
    }
    div {
        margin: 0;
        pointer-events: none;

        @media only screen and (max-width: 1000px) {
            display: none;
        }

    }
    color: var(--var-color-component-white);

   svg {
    display: inline-block;
    pointer-events: none;
    filter: drop-shadow(0 0 0.75rem var(--var-color-component-advanced));
   }

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 8.2vmin);
        }
        
`
const CraftText = styled.h3 `
    font-weight: bold;
    font-family: "General Sans", sans-serif;
    font-size: calc(10px + 4vmin);
    color: var(--var-color-component-white);
    padding-right: 4%;
    margin-top: 15px;
`
export const Showcase = () => {

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
        <ShowcaseInt>
                    <ShowcaseSpan className="animate__animated animate__fadeIn textFrame">
                        <Fade delay={100} cascade damping={1e-1} triggerOnce={true}>
                            Hi, my name is
                        </Fade>
                    </ShowcaseSpan>
                    <NameSpace>Ramazan Azimli</NameSpace>
                    <ShowcaseH2 className="animate__animated animate__fadeIn">I'm Frontend <Lottie  options={defaultOptions} height={150} width={220} /> Developer<b>.</b></ShowcaseH2>
                    <CraftText>
                      Crafting Engaging User Experiences with Creative Design & Advanced Technology.
                    </CraftText>
        </ShowcaseInt>
    )
}