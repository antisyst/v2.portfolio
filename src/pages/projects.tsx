import Navigation from '@/components/navigation';
import styled from 'styled-components';
import { Footer } from '@/components/footer';

const PageLayout = styled.main `
    text-align: center;
`
const FirstContent = styled.h1 `
    font-weight: bold;
    font-size: calc(10px + 5vmin);
    font-family: 'Poppins', sans-serif;
    text-align: left;
    color: var(--var-color-component-white);
    margin: 4vh 0;
    padding-left: 30px;

    span {
      color: var(--var-color-component-advanced);
    }

    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 6.2vmin);
        padding-left: 20px;
    }
`
const ProjectsLayout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    padding: 10vh 10%;
    margin-top: 1vh;

    @media only screen and (max-width: 768px) {
        padding: 0px 2%;
        margin-top: 10vh;
        margin-bottom: 8vh;
    }
`
const ProjectsContainer = styled.div `
    text-align: center;
    display: flex;
    border-bottom: 7px solid var(--var-color-component-advanced);
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 10vh;
    align-items: center;
`
const ProjectItem = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 7px;
    justify-content: center;
    width: 410px;
    clip-path: polygon(30px 0%, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%, 0% 30px);
    text-align: center;
    transition: all 0.4s ease-out;
    border: 1.5px solid var(--var-color-component-white);
    height: 480px;
    padding: 35px 30px;
    background: var(--var-color-component-rgba);

    &:hover {
        transition: all 0.4s ease-out;
        transform: scale(1.01);
        border: 1.5px solid var(--var-color-component-advanced);
    }

    @media only screen and (max-width: 768px) {
    width: 100%;
    width: 380px;
    margin: 8px 0;
    height: 470px;

    }
`
const ProjectItemH1 = styled.h1 `
    font-family: 'Poppins', sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: var(--var-color-component-white);
`
const ProjectContent = styled.p `
    color: var(--var-color-component-white);
    margin-top: 20px;
    font-family: 'Poppins', sans-serif;
    font-size: 17px;
    font-weight: 600;
`
const ProjectDomain = styled.a `
    color: var(--var-color-component-advanced);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    text-decoration: underline;
    margin-top: 10px;
`
const TechStack = styled.div `
    border-top: 2px solid var(--var-color-component-advanced);
    border-bottom: 2px solid var(--var-color-component-advanced);
    padding: 10px 0;
    font-weight: 700;
    margin-top: 20px;
    width: 100%;
    font-family: 'Poppins', sans-serif;
`
const TechStackItems = styled.p `
    margin: 7px 0;
    color: var(--var-color-component-advanced);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 19px;
`
const ProjectButton = styled.a `
    text-decoration: none;
    padding: 19px 23px;
    background: var(--var-color-component-advanced);
    color: var(--var-color-component-white);
    font-weight: bold;
    margin-top: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    width: 100%;
    border-radius: 8px;
    transition: all 0.4s ease-out;
    font-size: 20px;
    filter: drop-shadow(0 0 0.1rem var(--var-color-component-advanced));

    &:hover {
    transition: all 0.4s ease-out;
    color: var(--var-color-component-white); 
    filter: drop-shadow(0 0 0.23rem var(--var-color-component-advanced));
    }

    @media only screen and (max-width: 768px) {
        cursor: none;
    }
`
// Works Container Started
    const WorksContainer = styled.div `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10vh;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    `
    const WorksItem = styled.div `
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0, 0.5);
    padding: 20px;
    width: 320px;
    border: 1.6px solid var(--var-color-component-white);
    height: 230px;
    margin: 6px;
    border-radius: 20px;
    font-family: 'Poppins', sans-serif;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media only screen and (max-width: 768px)  {
        width: 350px;
    height: 240px;
    }
    `
    const WorksButton = styled.a `
    text-decoration: none;
    padding: 17px 23px;
    background: var(--var-color-component-black);
    color: var(--var-color-component-white);
    font-weight: bold;
    margin-top: 30px;
    width: 100%;
    border-radius: 14px;
    border: 2px solid var(--var-color-component-advanced);
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    transition: all 0.4s ease-out;
    font-size: 20px;

    &:hover {
    background: var(--var-color-component-advanced);
    transition: all 0.4s ease-out;
    color: var(--var-color-component-white);
    }

    @media only screen and (max-width: 768px) {
        cursor: none;
    }
    `
    const WorksH1 = styled.h1 `
    color: var(--var-color-component-white);
    font-weight: bold;
    height: 87px;
    font-size: 33px;
    font-family: 'Poppins', sans-serif;
    `


// Works Container Stopped
export default function Projects() {
    return(
        <PageLayout>
          <Navigation/>
          <ProjectsLayout>
                <FirstContent>Projects <span>&</span> Works</FirstContent>
                <ProjectsContainer>
                    <ProjectItem>
                        <ProjectItemH1>datan - real-time chat app</ProjectItemH1>
                        <ProjectDomain href="https://datan.netlify.app" target="_blank">datan.netlify.app</ProjectDomain>
                        <ProjectContent>
                        datan is user-friendly platform that allows you to connect with friends in real-time.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, Firebase, SASS</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://datan.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>voicex - voice to text generator</ProjectItemH1>
                        <ProjectDomain href="http://voicexapp.netlify.app/" target="_blank">voicexapp.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Modern and user-friendly and that allows users to easily convert their speech into text.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, Redux, SASS,  Toolkit</TechStackItems>
                        </TechStack>
                        <ProjectButton href="http://voicexapp.netlify.app/" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>raxios - movie search app</ProjectItemH1>
                        <ProjectDomain href="https://raxios.netlify.app/" target="_blank">raxios.netlify.app</ProjectDomain>
                        <ProjectContent>
                        The app displays a list of matching movies with their posters and description.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, Axios, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://raxios.netlify.app/" target="_blank">Visit Project</ProjectButton>    
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>.notemind - create notes</ProjectItemH1>
                        <ProjectDomain href="https://notemind.netlify.app" target="_blank">notemind.netlify.app</ProjectDomain>
                        <ProjectContent>
                        You can quickly create unlimited new notes and collections.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, MUI </TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://notemind.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>weatvibe - today weather</ProjectItemH1>
                        <ProjectDomain href="https://weatvibe.netlify.app/" target="_blank">weatvibe.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get weather forecast information for all locations around the world with one touch.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ViteJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://weatvibe.netlify.app/" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>vath. - fast shipping service</ProjectItemH1>
                        <ProjectDomain href="https://vathapp.netlify.app" target="_blank">vathapp.netlify.app</ProjectDomain>
                        <ProjectContent>
                        We are here to rescue you. By using our shipping service, your goods will arrive in less than a day.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ViteJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://vathapp.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>snax - The Better Sneakers Place</ProjectItemH1>
                        <ProjectDomain href="https://snaxstore.netlify.app" target="_blank">snaxstore.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get The Better Sneakers & Shoes with worldwide shipping in Snax Online Store.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>React, Redux, Axios, Bootstrap</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://snaxstore.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>   
                    <ProjectItem>
                        <ProjectItemH1>realcovid - COVID-19 Tracker</ProjectItemH1>
                        <ProjectDomain href="https://realcovid.netlify.app" target="_blank">realcovid.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Provides up-to-date information on the latest COVID-19 cases, deaths and etc.
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://realcovid.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                    <ProjectItem>
                        <ProjectItemH1>namest. - random name generator</ProjectItemH1>
                        <ProjectDomain href="https://namest.netlify.app" target="_blank">namest.netlify.app</ProjectDomain>
                        <ProjectContent>
                        Get Random Person Information fast ( name, surname, country, age, email ).
                        </ProjectContent>
                        <TechStack>
                            <TechStackItems>ReactJS, TypeScript, SASS, REST</TechStackItems>
                        </TechStack>
                        <ProjectButton href="https://namest.netlify.app" target="_blank">Visit Project</ProjectButton>
                    </ProjectItem>
                </ProjectsContainer>
            <WorksContainer>
                <WorksItem>
                    <WorksH1>URL Shortener</WorksH1>
                    <WorksButton href="https://rmznurl.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Translator</WorksH1>
                    <WorksButton href="https://rmznlang.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Digital Consultancy</WorksH1>
                    <WorksButton href="http://digitalcons.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Sign Form</WorksH1>
                    <WorksButton href="https://rmznform.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Infinite Gallery</WorksH1>
                    <WorksButton href="https://infinitygallery.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Advanced Navbar</WorksH1>
                    <WorksButton href="https://perfectnav.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Truth or Dare</WorksH1>
                    <WorksButton href="https://dogru.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Password Generator</WorksH1>
                    <WorksButton href="https://rmznpass.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Crypto Price Track</WorksH1>
                    <WorksButton href="https://coinpricetrack.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Quote Generator</WorksH1>
                    <WorksButton href="https://quotepe.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Quiz App</WorksH1>
                    <WorksButton href="https://rmznquiz.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Calculator App</WorksH1>
                    <WorksButton href="https://rmzncalc.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Music Player</WorksH1>
                    <WorksButton href="https://mscplyr.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>To Do App</WorksH1>
                    <WorksButton href="https://rmzntodo.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Country Info</WorksH1>
                    <WorksButton href="http://reginfo.netlify.app/" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Pricing Cards</WorksH1>
                    <WorksButton href="https://plans-card.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Meme Tool</WorksH1>
                    <WorksButton href="https://memegenapp.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Cars Marketplace</WorksH1>
                    <WorksButton href="https://zastcars.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>CDN Network</WorksH1>
                    <WorksButton href="https://cdnverse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Junior Portfolio Template</WorksH1>
                    <WorksButton href="https://cdnverse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>E-commerce Template</WorksH1>
                    <WorksButton href="https://exowear.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Beautiful Carousel</WorksH1>
                    <WorksButton href="https://landsense.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Collapse</WorksH1>
                    <WorksButton href="https://rmzncollapse.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Backend Template</WorksH1>
                    <WorksButton href="https://jamesrobert.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Awesome Landing Page</WorksH1>
                    <WorksButton href="https://devolve.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
                <WorksItem>
                    <WorksH1>Virtual  Keyboard</WorksH1>
                    <WorksButton href="https://vrkey.netlify.app" target="_blank">Visit Project</WorksButton>
                </WorksItem>
            </WorksContainer>
          </ProjectsLayout>
          <Footer/>
        </PageLayout>
    )
}
