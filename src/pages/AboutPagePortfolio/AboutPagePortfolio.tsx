import React from 'react';
import HeaderPortfolio from '../../Components/HeaderPortfolio';
import data from '../../public/data_about.json'
import ExperiencePortfolio from '../../Components/ExperiencePortfolio';


const AboutPage = () => {
    return ( 
    <>
        <div className={"root-base-portfolio"}>
        <React.Suspense fallback="Loading...">
          <HeaderPortfolio logo={data.headerPortfolio.logo} menuHeader={data.headerPortfolio.menuHeader}></HeaderPortfolio>
        </React.Suspense>
  
        <div className="content-center-sides">
            <ExperiencePortfolio header={data.experiencePortfolio.header} arrExp={data.experiencePortfolio.arrExp}/>
            <ExperiencePortfolio header={data.studiesPortfolio.header} arrExp={data.studiesPortfolio.arrExp}/>
            <ExperiencePortfolio header={data.licensePortfolio.header} arrExp={data.licensePortfolio.arrExp}/>
        </div>
  
  
  
      </div>
    </>

     );
}
 
export default AboutPage;