import styled from 'styled-components';
import Navigation from '@/components/navigation';
import Tabs from '@/components/tab';
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
    margin: 3vh 0;
    padding-left: 30px;

    
    @media only screen and (max-width: 768px) {
        font-size: calc(10px + 8vmin);
    }
`
const ExperienceLayout = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: max-content;
    padding: 11vh 10%;

    @media only screen and (min-width: 768px) and (max-width: 1000px) {
      padding: 11vh 4%;
    }

    @media only screen and (max-width: 768px) {
        padding: 0px 2%;
        margin-top: 10vh;
        margin-bottom: 8vh;
    }
`





const Experience = () => {
  return (
    <PageLayout>
      <Navigation />
      <ExperienceLayout>
        <FirstContent>Experience</FirstContent>
        <Tabs/>
      </ExperienceLayout>
      <Footer/>
    </PageLayout>
  );
}

export default Experience;
