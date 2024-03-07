import React from 'react';
import HeaderPortfolio from '../../Components/HeaderPortfolio';
import MainSection from '../../Components/MainSection/MainSection';
import data from '../../public/data.json'
import AboutPortfolio from '../../Components/AboutPortfolio';
import ProjectsSection from '../../Components/ProjectSection/ProjectsSection';
import './MainPagePortfolio.scss'
import ContactPortfolio from '../../Components/ContactPortfolio/Contact';
import SkillsPortfolio from '../../Components/SkillsPortfolio';
const MainPage = () => {
    return ( 
    <>

        <div className="content-center-sides">
            <MainSection
                greeting={data.homePortfolio.greeting}
                name={data.homePortfolio.name}
                subtitle={data.homePortfolio.subtitle}
                content={data.homePortfolio.content}
                resume={data.homePortfolio.resume}
            />
            
            <ProjectsSection
                subtitle={data.projectsSection.subtitle}
                projects={data.projectsSection.projects}

            />

            <AboutPortfolio 
                header={data.aboutPortfolio.header}
                pathImage={data.aboutPortfolio.pathImage}
                arrAbout={data.aboutPortfolio.arrAbout}
                arrThoughts={data.aboutPortfolio.arrThoughts}/>


            <SkillsPortfolio header={data.skillsPortfolio.header}
                arrTech={data.skillsPortfolio.arrTech}/>
            <ContactPortfolio 
              header={data.contactPortfolio.header} 
              phrase={data.contactPortfolio.phrase}
              content1={data.contactPortfolio.content1}
              content2={data.contactPortfolio.content2}
              buttonText={data.contactPortfolio.buttonText}
              signature={data.contactPortfolio.signature}
              buttonGoTo={data.contactPortfolio.buttonGoTo}

            />
        </div>
  
  

    </>

     );
}
 
export default MainPage;