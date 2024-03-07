import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPagePortfolio/MainPagePortfolio';
import AboutPage from './pages/AboutPagePortfolio/AboutPagePortfolio';
import ProjectsPage from './pages/ProjectsPagePortfolio/ProjectsPagePortfolio';
import React from 'react';
import HeaderPortfolio from './Components/HeaderPortfolio';
import data from './public/data.json'

function App() {

  return (

    // <div className={"root-base-portfolio"}>
    //   <React.Suspense fallback="Loading...">
    //     <HeaderPortfolio logo={data.headerPortfolio.logo} menuHeader={data.headerPortfolio.menuHeader}></HeaderPortfolio>
    //   </React.Suspense>

    //   <div className="content-center-sides">
    //     <MainSection
    //       greeting={data.homePortfolio.greeting}
    //       name={data.homePortfolio.name}
    //       subtitle={data.homePortfolio.subtitle}
    //       content={data.homePortfolio.content}
    //       resume={data.homePortfolio.resume}
    //     />

    //   </div>



    // </div>
  <>
    <Router>
      <div className={"root-base-portfolio"}>
        <React.Suspense fallback="Loading...">
            <HeaderPortfolio logo={data.headerPortfolio.logo} menuHeader={data.headerPortfolio.menuHeader}></HeaderPortfolio>
          </React.Suspense>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/about" element={<AboutPage/>}>
          </Route>
          <Route path="/projects" element={<ProjectsPage/>}>
          </Route>
        </Routes>
      </div>
    </Router> 
  </>)
  {/* <Router>
      <Routes>
        <Route path="/about" element={<AboutPage/>}>
        </Route>
        <Route path="/projects" element={<ProjectsPage/>}>
        </Route>
        <Route path="/" element={<MainPage/>}/>
      </Routes>
    </Router> */}

}

export default App
