import "./AboutPortfolio.scss";
import { AboutPortfolioProps } from "./AboutPortfolio.types";
import { Col, Row } from "../Grid/Grid";
import Image from "../Image/Image";
import { motion } from "framer-motion";

const AboutPortfolio = ({
  header,
  pathImage,
  arrAbout,
  arrThoughts,
}: AboutPortfolioProps) => {


  return (
    <div
      data-testid="AboutPortfolio"
      className={"AboutPortfolio"}
      id={"AboutPortfolio"}
    >
      <Row className={"About RQ-d-flex"} noGutter flex>
        <Col olg={10} ulg={18} className={"content"}>
          <div className={"RQ-d-flex RQ-align-center RQ-mb-4 RQ-f-26"}>
            <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>{`${header.numberOrder}.`}</p>
            <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>{header.text}</p>
            <hr className={"line"} />
          </div>
          <div className={"RQ-name RQ-f-18 RQ-description-content"}  dangerouslySetInnerHTML={{ __html: arrAbout }}/>
          <div className={"RQ-mt-3 options RQ-d-flex"}>
            <motion.a whileHover={{scale:1.05}} 
              href="/projects"
              className={
                          "RQ-f-18 RQ-border-cyan-pf RQ-bg-cyan-pf RQ-canvas RQ-justify-center RQ-f-code"
                        }
                        >

              Projects
            </motion.a>  
            <motion.a whileHover={{scale:1.05}}
                href="/about"
                className={
                      "RQ-f-18 RQ-theme RQ-border-cyan-pf  RQ-justify-center RQ-f-code"
                    }
                >   
                Read More
            </motion.a> 

          </div>
          
        </Col>
        <Col olg={8} ulg={18}>
          <Image
            classImg={""}
            pathImage={pathImage}
            altImage={"portfolio"}
            border={true}
            fade={true}
          />
        </Col>

      </Row>
      <Row className={"thoughts RQ-d-flex RQ-justify-center RQ-mx-5"} noGutter flex>
        {arrThoughts.map((item, index) => (
          <Col umd={18} omd={6} key={index}>
            <div
              className={`container RQ-description ${
                index === 0 ? "RQ-ml-4" : "RQ-ml-4"
              }`}
            >
              <p className={"RQ-f-14"}>"{item}"</p><br/>
              <p className={"signature RQ-f-13"}></p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AboutPortfolio;
