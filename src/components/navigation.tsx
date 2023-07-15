import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx"
import MainLogo from "@/assets/logo";
import styled from 'styled-components';
import { VscClose } from 'react-icons/vsc';
import { BiLogoTelegram } from 'react-icons/bi'
import { FiLinkedin, FiGithub, FiInstagram } from "react-icons/fi";
import { useRef } from "react";
import { Fade } from "react-awesome-reveal";
import Link from 'next/link'


//styled start
const Header = styled.header `
background: rgba(0,0,0, 0.7);
backdrop-filter: blur(16px);
width: 100%;
height: 100px;
position: fixed;
translate: 0 -105px;
font-weight: bold;
font-family: 'General Sans', 'Poppins', sans-serif;
top: 0;
left: 0;
padding: 0 1.5rem;
transition: 0.3s ease all;

@media (min-width: 48em) {
    padding: 0 3rem;
    font-weight: bold;
    font-family: 'General Sans', 'Poppins', sans-serif;
}

@media only screen and (max-width: 760px) {
  height: 80px;
}
`
const HeaderContent = styled.div `
overflow: hidden;
color: #fff;
margin: 0 auto;
max-width: 1920px;
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
z-index: 100;

.logo {
    font-size: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    margin-top: 10px;
    z-index: 100000;
  svg {
    width: 80px;
    height: 66px;

    @media only screen and (max-width: 700px) {
      width: 63px;
      height: 46px;
    } 
  }
}
`

const HeaderNav = styled.div `
top: 0;
right: 100%;
bottom: 0;
width: 100%;
height: 100vh;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;
z-index: 10001;
background: rgba(0,0,0);
transform: translate(0);
transition: 0.3s ease transform;

@media (min-width: 48em)  {
    transform: none;
    flex-direction: row;
    background: transparent;
    width: auto;
    height: 100%;
    position: static;

    ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;

        @media (min-width: 48em) {
            flex-direction: row;
            align-items: center;
            margin-bottom: 0;
            margin-right: calc(0.5rem + 16px);
        }
    }
}
@media only screen and (max-width: 700px) {
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 10vh;
}
`
const HeaderToggle = styled.div `
display: flex;
align-items: center;
font-size: 2rem;
transition: 0.3s ease all;
cursor: none;
position: relative;

svg {
  width: 36px;
  height: 36px;
  cursor: none;
}

&:hover {
  color: var(--var-color-component-advanced);
}
@media (min-width: 48em) {
  display: none;
}
`
const ContentUL = styled.ul `
list-style: none;
padding: 0;
display: flex;
flex-direction: column;
margin-bottom: 32px;
margin-top: 2px;
@media (min-width: 48em)  {
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  margin-right: calc(0.5rem + 16px);
}
  li:not(:last-child) {
    margin-bottom: 32px;

    @media (min-width: 48em) {
      margin-bottom: 0;
      margin-right: 16px;
    }
  }
  @media only screen and (max-width: 700px) {
    align-items: flex-start;
  }

 
    a {
      background: transparent;
      font-size: 20px;
      border: none;
      margin: 0 8px;
      border-top-left-radius: 8px;
      border-top-right-radius: 8px;
      padding: 0.5em 0.81em;
      color: var(--var-color-component-white);
      border-bottom: 2px solid rgba(0,0,0,0);
      color: var(--var-color-component-white);
      position: relative;
      transition: .5s ease;
      
      @media only screen and (max-width: 700px) {
        font-size: 25px;
        width: 350px;
        display: flex;
      } 
      
      &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 3px;
        width: 0;
        background-color: var(--var-color-component-advanced);
        transition: .5s ease;
      }
      &:hover {
        color: #1e1e2b;
        transition-delay: .5s;
        border-bottom: 2px solid var(--var-color-component-advanced);
        filter: drop-shadow(0 0 0.75rem var(--var-color-component-advanced));
      }
      &:hover::before {
        width: 100%;
      }
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        height: 0;
        width: 100%;
        background-color: var(--var-color-component-advanced);
        transition: .4s ease;
        z-index: -1;
      }
      &:hover::after {
        height: 100%;
        transition-delay: 0.4s;
        color: var(--var-color-component-white);
      }
      }
    }
  
`

const CreatorContent = styled.div `
  text-align: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 30vh;
  justify-content: center;
  display: none;
   margin-left: 10px;


  @media only screen and (max-width: 700px) {
    display: flex;
  }
`
const NavSocialsItem = styled.a `
  margin: 7px 20px;
  text-decoration: none;
  color: var(--var-color-component-white);

  svg {
    width: 47px;
    height: 47px;
  }
`
//styled stop

function Navigation() {
  const [isToggleClicked, setIsToggleClicked] = useState(false);
  useEffect(() => {
    if (isToggleClicked) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isToggleClicked]);
  
  const lastScrollTop = useRef(0);

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        var { pageYOffset } = window;
        if (pageYOffset > lastScrollTop.current) {
          
          setIsNavbarVisible(false);
        } else if (pageYOffset < lastScrollTop.current) {
          
          setIsNavbarVisible(true);
        } 
        lastScrollTop.current = pageYOffset <= 0 ? 0 : pageYOffset;
      },
      { passive: true }
    );
  }, []);

  
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };



  return (
    <Header className={`${isNavbarVisible ? "visible" : ""}`}>
      <HeaderContent>
        <Link href="/" className="logo">
         <MainLogo/>
        </Link>
        <HeaderNav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ContentUL>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/experience">Experience</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="https://t.me/rmzn_dev" target="_blank">Contact</Link>
            </li>
            <a href="">
              Resume
            </a>
          </ContentUL>
            <CreatorContent>
              <Fade direction='up' delay={50}>
                <NavSocialsItem href="https://www.linkedin.com/in/ramazan-azimli-135475245/" target="_blank">
                  <FiLinkedin/>
                </NavSocialsItem>
              </Fade>
              <Fade direction='up' delay={130}>
                <NavSocialsItem href="https://github.com/antisyst" target="_blank">
                  <FiGithub/>
                </NavSocialsItem>
              </Fade>
              <Fade direction='up' delay={210}>
                <NavSocialsItem href="https://www.instagram.com/rmznzz" target="_blank">
                  <FiInstagram/>
                </NavSocialsItem>
              </Fade>
              <Fade direction='up' delay={290}>
                <NavSocialsItem href="https://t.me/rmzn_dev" target="_blank">
                  <BiLogoTelegram/>
                </NavSocialsItem>
              </Fade>
            </CreatorContent>
        </HeaderNav>
            <HeaderToggle onClick={() => setIsToggleClicked(!isToggleClicked)}>
      {!menuOpen ? (
        <RxHamburgerMenu onClick={menuToggleHandler}  />
      ) : (
        <Fade direction='right'>
         <VscClose onClick={menuToggleHandler} className='closeEnfx' />
        </Fade>
      )}
    </HeaderToggle>
      </HeaderContent>
    </Header>
  );
}

export default Navigation;