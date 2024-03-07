import React from 'react';
import HeaderPortfolio from '../../Components/HeaderPortfolio';
import data from '../../public/data_about.json'
import ExperiencePortfolio from '../../Components/ExperiencePortfolio';


const AboutPage = () => {
    return ( 
    <>

  
        <div className="content-center-sides">
            <ExperiencePortfolio header={data.experiencePortfolio.header} arrExp={data.experiencePortfolio.arrExp}/>
            <ExperiencePortfolio header={data.studiesPortfolio.header} arrExp={data.studiesPortfolio.arrExp}/>
            <ExperiencePortfolio header={data.licensePortfolio.header} arrExp={data.licensePortfolio.arrExp}/>
        </div>
  
  

    </>

     );
}
 
export default AboutPage;