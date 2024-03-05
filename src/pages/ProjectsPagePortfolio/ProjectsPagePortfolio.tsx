import React from 'react';
import HeaderPortfolio from '../../Components/HeaderPortfolio';
import data from '../../public/data_projects.json'
import ProjectsPortfolio from '../../Components/ProjectsPortfolio';


const ProjectsPage = () => {
    return ( 
    <>
        <div className={"root-base-portfolio"}>
        <React.Suspense fallback="Loading...">
          <HeaderPortfolio logo={data.headerPortfolio.logo} menuHeader={data.headerPortfolio.menuHeader}></HeaderPortfolio>
        </React.Suspense>
  
        <div className="content-center-sides">
            <ProjectsPortfolio header={data.projectsPortfolio.header} arrProjects={data.projectsPortfolio.projects}/>

        </div>
  
  
  
      </div>
    </>

     );
}
 
export default ProjectsPage;