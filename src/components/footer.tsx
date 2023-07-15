import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
const FooterInt = styled.footer `
    text-align: center;
    padding: 3vh 20px;
    display: flex;
    flex-direction: column;
    align-items:center ;
    margin: 0 5%;

    @media only screen and (max-width: 800px) {
        margin: 0;
    }
    
    &::before {
        content: "";
        display: block;
        position: relative;
        top: -40px;
        width: 90%;
        height: 2px;
        background-color: var(--var-color-component-advanced);

        @media only screen and (max-width: 800px) {
            width: 100%;
        }
`
const FooterContent = styled.h4 `
   font-weight: bold;
   font-size: 20px;
   font-family: 'Poppins', sans-serif;
   color: var(--var-color-component-white);
`
const CreatorNameInc = styled.span `
   color: var(--var-color-component-advanced);
`
const CopyRightSlot = styled.p `
    color: var(--var-color-component-white);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    margin-top: 11px;
`


export const Footer = () => {
    return(
        <FooterInt>
            <FooterContent>
            <Fade delay={60} cascade damping={1e-1} triggerOnce={true}>
                Designed & Developed by  
                </Fade>
            <CreatorNameInc> Ramazan Azimli</CreatorNameInc></FooterContent>
            <CopyRightSlot>Copyright 2023 ©</CopyRightSlot>
        </FooterInt>
    )
}