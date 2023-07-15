import React, { useState } from 'react';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';

interface Tab {
  id: number;
  tabTitle: string;
  title: string;
  position: string;
  content1: string;
  content2: string;
  content3: string;
  content4: string;
  content5: string;
  content6: string;
  techStack: string;
}
const Container = styled.div `
    width: 96%;
    margin: 0 auto;

    @media only screen and (min-width: 768px) and (max-width: 1000px) {
      width: 100%;
    }
`
const TabsInt = styled.div `
    display: flex;
    justify-content: space-between;

    @media only screen and (max-width: 900px) {
      overflow-x: auto;
    }

    button {
        background-color: lightgray;
        border: none;
        color: var(--var-color-component-advanced);
        cursor: pointer;
        font-family: 'Poppins', sans-serif;
        padding: 25px;
        font-weight: bold;
        font-size: 20px;
        border-top: 5px solid var(--var-color-component-black);
        border-bottom: 5px solid var(--var-color-component-white);
        width: 100%;
        background-color: var(--var-color-component-black);
        transition: all 0.5s ease-out;

        &:hover {
            color: var(--var-color-component-white);
        }
        &:disabled {
            border-top: 5px solid var(--var-color-component-advanced);
            border-bottom: 5px solid var(--var-color-component-advanced);
            color: var(--var-color-component-white);
    }
`
const TabTitle = styled.h1 `
    color: var(--var-color-component-white);
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
`
const TabContent = styled.div `
    padding: 50px 80px;
    background-color: var(--var-color-component-black);
    font-weight: 300;
    line-height: 30px;
    font-size: 16px;
    text-align: justify;

    button {
    font-size: 15px;
}
@media only screen and (max-width: 1000px) {
  padding: 5px;
  margin-top: 12px;
}
`
const ContentPosition = styled.h3 `
 color: var(--var-color-component-advanced);
 font-family: 'Poppins', sans-serif;
 font-weight: bold;
`
const BulletInt = styled.ul `
  list-style: none;
  font-family: 'Poppins', sans-serif;
  color: var(--var-color-component-white);

  @media only screen and (max-width: 800px) {
    padding-left: 6px;
  }
`
const BulletPoint = styled.li `
  list-style: none;
  font-weight: 500;
  font-size: 17px;
  vertical-align: baseline;


  &::before {
    content: "▹";
    font-size: 35px;
    left: 18.3%;
    position: absolute;
    color: var(--var-color-component-advanced);

    @media only screen and (max-width: 1000px) {
    left: 0;
    }
  }
`
const TechStackInt = styled.li `
  color: var(--var-color-component-advanced);
  font-weight: bold;
  font-size: 19px;
  list-style: none;

  &::before {
    content: "▹";
    font-size: 35px;
    left: 18.3%;
    position: absolute;
    color: var(--var-color-component-white);

    @media only screen and (max-width: 1000px) {
      left: 0;
      }
  }
`
const Tabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('1');
  const tabs: Tab[] = [
    {
      id: 1,
      tabTitle: 'Kleros',
      position: 'Frontend Engineer',
      title: 'Kleros',
      content1:
        'Delivered an overall fast, yet accessible and silky smooth user experience in the app.',
      content2:
        'Actively participated in back-end development tasks and successfully integrated front-end application with back-end services.',
      content3:
        'Implemented user interface tests to optimize performance and eliminate potential issues, ensuring a bug-free and smooth user experience.',
      content4:
        'Analyzed user behaviors and preferences to create custom user experiences and adapted UIs.',
      content5:
        'Implemented best practices for accessibility, ensuring compliance with WCAG standards and providing an inclusive user experience for all users.',
      content6:
        'Managed code repositories, review tools, and continuous integration processes to improve website analytics and end user feedback.',
      techStack: ' React.js, TypeScript, Redux, Redux Thunk, SCSS, Git, jQuery'
    },
    {
        id: 2,
        tabTitle: 'Pepper',
        position: 'Frontend React Developer',
        title: 'Pepper',
        content1:
          'Optimized page elements to reduce loading time and debugged code to ensure cross-browser usability.',
        content2:
          'Assisted in the development of web pages using outdated coding practices, leading to increased user experience and functionality.',
        content3:
          'Implemented user interface tests to optimize performance and eliminate potential issues',
        content4:
          'Analyzed user behaviors and preferences to create custom user experiences and adapted UIs.',
        content5:
          'Implemented and tested application functionality to ensure successful operations across all platforms',
        content6:
          'Developed and maintained reusable UI components, reducing development time and improving code maintainability.',
        techStack: 'Next.js, TypeScript, Redux, Jest, Webpack, jQuery, SCSS'
      },
      {
        id: 3,
        tabTitle: 'Pixelate',
        position: 'Mid. Frontend Engineer',
        title: 'Pixelate Solutions',
        content1:
          'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.',
        content2:
          'Actively participated in back-end development tasks and successfully integrated front-end application with back-end services',
        content3:
          'Assisted in the development and maintenance of front-end web applications, resulting in a positive impact on the company overall performance.',
        content4:
          'Implemented performance monitoring and analytics tools, providing insights into user behavior and identifying areas for improvement.',
        content5:
          'Spearheaded the successful refactoring of the client-side web architecture to introduce a reliable SPA (Single Page Applications).',
        content6:
          'Built custom interactive components to enrich user experience',
        techStack: ' React, TypeScript, Bootstrap, Styled Components, MUI '
      },
      {
        id: 4,
        tabTitle: 'Pixem2HTML',
        position: 'Frontend Developer',
        title: 'Pixem2HTML',
        content1:
          'Crafted, audited and improved design, accessibility and overall experience of products.',
        content2:
          'Debugged and troubleshot websites, identifying and resolving any issues efficiently.',
        content3:
          'Implemented responsive design principles to ensure seamless use experience across various devices and screen sizes.',
        content4:
          'Enforced healthy codebases, coding style and standards.',
        content5:
          'Completed projects on time and delivered to clients accordingly.',
        content6:
          'Communicated effectively with project managers and the team',
        techStack: ' JavaScript, HTML, CSS, React.js, Bootstrap, LessCSS, Vitest '
      }
    
  ];

  const handleTabClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCurrentTab(e.currentTarget.id);
  };

  return (
    <Container>
      <TabsInt>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            id={tab.id.toString()}
            disabled={currentTab === tab.id.toString()}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </TabsInt>
      <TabContent>
        {tabs.map((tab) => (
          <div key={tab.id}>
            {currentTab === tab.id.toString() && (
              <div>
                <Fade>
                  <TabTitle>{tab.title}</TabTitle>
                </Fade>
                <Fade>
                   <ContentPosition>{tab.position}</ContentPosition>
                </Fade>
                <Fade>
                <BulletInt>
                  <BulletPoint>{tab.content1}</BulletPoint>
                  <BulletPoint>{tab.content2}</BulletPoint>
                  <BulletPoint>{tab.content3}</BulletPoint>
                  <BulletPoint>{tab.content4}</BulletPoint>
                  <BulletPoint>{tab.content5}</BulletPoint>
                  <BulletPoint>{tab.content6}</BulletPoint>
                  <TechStackInt>Tech Stack: {tab.techStack}</TechStackInt>
                </BulletInt>
                </Fade>
              </div>
            )}
          </div>
        ))}
      </TabContent>
    </Container>
  );
};

export default Tabs;
