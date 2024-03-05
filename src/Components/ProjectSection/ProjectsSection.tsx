import React, { useEffect, useRef, useState } from 'react';

import { ProjectSectionProps } from './ProjectSection.types';
import ProjectItem from '../ProjectItem/ProjectItem';
import { Col, Row } from '../Grid/Grid';
import "./ProjectSection.scss";
import SubtitlePortfolio from '../SubtitlePortfolio/SubtitlePorfolio';
import { getRefValue, useStateRef } from '../../lib/custom_hooks';
import { getTouchEventData } from '../../lib/dom';

const ProjectsSection = ({subtitle, projects}: ProjectSectionProps) => {

  const PolygonRight = ({ listKey }: { listKey: number}) => (
    <svg height="45" width="30" className={"polygon"} key={listKey}>
      <polygon points="5,10 5,40 23,25" strokeWidth="4" strokeLinejoin="round"/>
    </svg>
  );

  const PolygonLeft = ({ listKey }: { listKey: number}) => (
    <svg height="45" width="30" className={"polygon"} key={listKey}>
      <polygon points="5,10 5,40 23,25" strokeWidth="4" strokeLinejoin="round" transform="scale(-1,1) translate(-30,0)"/>
    </svg>
  );

  const arrayProjects: number[] = Array.from(Array(projects.length).keys());


  const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
  const currentOffsetXRef = useRef(0);
  const startXRef = useRef(0);

  
  const containerRef = useRef<HTMLUListElement>(null);
  const minOffsetXRef = useRef(0);

  const [isSwiping, setIsSwiping] = useState(false);

  const onTouchMove = (e: TouchEvent | MouseEvent) => {
    console.log('onTouchMove')
    const currentX = getTouchEventData(e).clientX;
    const diff = getRefValue(startXRef) - currentX;

    let newOffsetX = getRefValue(currentOffsetXRef) - diff;

    const maxOffsetX = 0;
    const minOffsetX = getRefValue(minOffsetXRef);
    
    if (newOffsetX > maxOffsetX) {
      newOffsetX = maxOffsetX;
    }

    if (newOffsetX < minOffsetX) {
      newOffsetX = minOffsetX;
    }

    setOffsetX(newOffsetX);
  };

  const onTouchEnd = () => {
    console.log('onTouchEnd')
    const containerWidth = getRefValue(containerRef).offsetWidth;
    const scrollWidth = getRefValue(containerRef).scrollWidth;
    const itemWith = scrollWidth/arrayProjects.length 
    console.log('arraylenght', arrayProjects.length)
    console.log('itemWith', itemWith)
    let newOffsetX = getRefValue(offsetXRef);
    console.log('newOffsetX', newOffsetX)
    console.log('containerwidht', containerWidth)
    newOffsetX = Math.round(newOffsetX / itemWith) * itemWith;
    setIsSwiping(false);
    setOffsetX(newOffsetX);
    
    window.removeEventListener('touchend', onTouchEnd);
    window.removeEventListener('touchmove', onTouchMove);
    window.removeEventListener('mouseup', onTouchEnd);
    window.removeEventListener('mousemove', onTouchMove);
  };


  const onTouchStart = (
    e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>
  ) => {
    console.log('onTouchStart')
    setIsSwiping(true);
    currentOffsetXRef.current = getRefValue(offsetXRef)
    startXRef.current = getTouchEventData(e).clientX;

    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);
    window.addEventListener('mousemove', onTouchMove);
    window.addEventListener('mouseup', onTouchEnd);
    
    //offsetx container
    const containerEl = getRefValue(containerRef);
    minOffsetXRef.current = containerEl.offsetWidth - containerEl.scrollWidth;

    console.log('currenttoffsetxred', currentOffsetXRef.current)
    console.log('startelemetnx', startXRef.current)
    console.log('scrollwithc', containerEl.scrollWidth)
    console.log('offsetWidth', containerEl.offsetWidth)

  };

  const OptionMove = (e: React.MouseEventHandler<HTMLAnchorElement> | React.MouseEvent<HTMLAnchorElement>, key: number) => {
      currentOffsetXRef.current = getRefValue(offsetXRef)
      const containerWidth = getRefValue(containerRef).offsetWidth;
      const scrollWidth = getRefValue(containerRef).scrollWidth;
      const itemWith = scrollWidth/arrayProjects.length 

      

      // mover derecha o izquierda
      let newOffsetX = currentOffsetXRef.current
      console.log(newOffsetX)
      console.log(containerWidth)
      console.log(scrollWidth)
      console.log(itemWith)
      if (key == 0){
        if (newOffsetX < 0){
          newOffsetX = currentOffsetXRef.current + itemWith;}
      }
      else{
        if (containerWidth-scrollWidth < newOffsetX - itemWith/2){
        newOffsetX = currentOffsetXRef.current - itemWith;}
      }

      setOffsetX(newOffsetX);
  };
  
  return (
    <div className={"LastProjectsSection"} id={"LastProjectsSection"}>
      <SubtitlePortfolio {...subtitle}/>
      <p className={"projects-desc RQ-mb-5 RQ-f-16 RQ-name RQ-f-18 RQ-py-5 RQ-px-4"}>
        Each project is unique. Here are some of my works.
      </p>
      <div className={"swiper-container RQ-px-1"} onTouchStart={onTouchStart} onMouseDown={onTouchStart}>
        <ul className={`swiper-list ${isSwiping ? 'is-swiping' : ''}`} style={{ transform: `translate3d(${offsetX}px, 0, 0)` }} ref={containerRef} draggable={false}>
          {arrayProjects.map((i, index) => (

            <Col key={index} ulg={18} olg={6} className={"items"}>
              <ProjectItem {...projects[i]}/>
            </Col>


          ))}
        </ul>
      </div>
      <div className={"selector-section RQ-pt-3"}>
        <a
          style={{ cursor: "pointer" }}
          key={0}
          onClick={(e) => OptionMove(e, 0)}
        >
          <PolygonLeft listKey={0} />
        </a>
        <a
          style={{ cursor: "pointer" }}
          key={1}
          onClick={(e) => OptionMove(e, 1)}
        >
          <PolygonRight listKey={1} />
        </a>
      </div>

    </div>
  );

                          

}
 
export default ProjectsSection;