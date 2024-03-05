import { motion } from 'framer-motion';
import ProcessorSVG from '../ProcessorSVG';
import "./MainSection.scss";
import { Col, Row } from '../Grid/Grid';
import { MainSectionProps } from './MainSection.types';

//animacion para este componente
const OwnSectMotion ={
    hidden:{
        opacity:0,
        y:"20vh",
    },
    show:{
        opacity:1,
        y:0,
        transition:{
            type:"spring",
            stiffness:20,
        }
    }
}

const MainSection = ({
    greeting,
    name,
    subtitle,
    content,
    resume,
  }: MainSectionProps) => {
    return ( 
        <motion.div
            variants={OwnSectMotion}
            initial="hidden"
            animate="show"   
        >
            <Row
                data-testid="MainSection"
                className={"MainSection RQ-d-flex"}
                noGutter
            >
                <Col xs={18} sm={18} other={8} className="content RQ-l-1">
                    <p className={"RQ-f-16 RQ-theme RQ-my-1 RQ-f-code"}>{greeting}</p>
                    <h1 className={"RQ-f-semi-bold RQ-f-helvetica RQ-name RQ-my-1 SV-text-6xl xs-SV-text-3xl"}>
                        {name}
                    </h1>
                    <h2
                        className={
                        "RQ-f-semi-bold RQ-f-helvetica RQ-subTitle RQ-my-1 SV-text-6xl xs-SV-text-3xl"
                        }
                    >
                        {subtitle}
                    </h2>
                    <Col xs={18} other={13} className="home-description">
                        <p className={"RQ-f-18 RQ-l-1_8em RQ-description RQ-f-helvetica RQ-mt-2"}>
                        {content}
                        </p>
                    </Col>
                    <Col xs={18} other={13} className={"RQ-mt-4 download"}>
                        <a
                        href={resume.goTo}
                        target="_blank"
                        className={
                            "RQ-f-18 RQ-theme RQ-border-cyan-pf RQ-d-flex RQ-justify-center RQ-f-code"
                        }
                        >
                        {resume.text}
                        </a>
                    </Col>
                </Col>
                <Col
                xs={18}
                sm={18}
                other={10}
                className="RQ-d-flex RQ-justify-center img-about"
                >
                    <ProcessorSVG/>
                </Col>
            </Row>
        </motion.div>    
     );
}
 
export default MainSection;


