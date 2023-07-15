import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useRef } from 'react';
import { FiLinkedin, FiInstagram, FiGithub, FiPlay } from 'react-icons/fi'

const StyledContainer = styled.div `
width: 40px;
position: fixed;
bottom: 0px;
left: auto;
right: 40px;
z-index: 10;
@media (max-width: 800px) {
 display: none;
  }
`
const StyledItems = styled.ul `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    margin: 0px;
    padding: 0px;
    list-style: none;
    
    &::after {
        content: "";
        display: block;
        width: 1.3px;
        height: 130px;
        margin: 0px auto;
        background: #fff;
    }
`
const StyledItem = styled.a `
    display: inline-block;
    text-decoration: none;
    font-size: 32px;
    transition: all 0.2s ease-out;
    text-decoration-skip-ink: auto;
    color: var(--var-color-component-white);
    position: relative;

    &:hover {
        color: var(--var-color-component-advanced);
    }
`
const StyledButton = styled.button `
display: inline-block;
text-decoration: none;
font-size: 32px;
background: none;
border: none;
transition: all 0.2s ease-out;
text-decoration-skip-ink: auto;
color: #fff;
position: relative;
`
const FixedLiElement = styled.li  `
    margin: 7px 0;
`


export const FixedElements = () => { 
    return(
        <StyledContainer>
            <StyledItems>
            <Fade  triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://www.instagram.com/rmznzz/' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiInstagram/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            <Fade  triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://www.linkedin.com/in/ramazan-azimli-135475245/' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiLinkedin/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            <Fade  triggerOnce={true} direction={"up"} cascade damping={1e-1}>
                <FixedLiElement>
                   <StyledItem href='https://github.com/antisyst' className='animate__animated animate__fadeInUp' target='_blank'>
                        <FiGithub/>
                   </StyledItem>
                </FixedLiElement>
            </Fade>
            </StyledItems>
        </StyledContainer>
    )
}