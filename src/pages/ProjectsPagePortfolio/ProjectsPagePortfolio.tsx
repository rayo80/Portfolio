import React from 'react';
import HeaderPortfolio from '../../Components/HeaderPortfolio';
import data from '../../public/data_projects.json'
import ProjectsPortfolio from '../../Components/ProjectsPortfolio';


const ProjectsPage = () => {
    return ( 
    <>
  
        <div className="content-center-sides">
            <ProjectsPortfolio header={data.projectsPortfolio.header} arrProjects={data.projectsPortfolio.projects}/>

        </div>

    </>

     );
}
 
export default ProjectsPage;