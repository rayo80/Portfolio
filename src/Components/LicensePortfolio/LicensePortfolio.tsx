import { Row } from "../Grid/Grid";
import SubtitlePortfolio from "../SubtitlePortfolio/SubtitlePorfolio";
import { LicenseItemsProps, LicensePortfolioProps } from "./LicensePortfolio.types";
import "./LicensePortfolio.scss"


const LicenseItem = ({
    title,
    items
    }: LicenseItemsProps)=> {
    return ( 
        <div className="LicenseItems">
            <h3 className="RQ-m-0 RQ-name RQ-f-18">{title}&nbsp;</h3>
            <div className="items">
                {items.map((item, index) => (
                    <div className="RQ-f-18  RQ-p-1  RQ-border-cyan-pf RQ-bg-cyan-pf RQ-canvas RQ-justify-center RQ-f-code" key={index}>
                        <p>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}


const LicensePortfolio = ({
    subtitle,
    rows
}: LicensePortfolioProps) => {
    return (
        <Row
            data-testid="LicensePortfolio"
            className={'LicensePortfolio'}
            noGutter
        >
            <SubtitlePortfolio {...subtitle}/>

                <div className={"RQ-d-inline-block"}>
                    { rows.map((row, i)=>
                        <LicenseItem key={i} title={row.title} items={row.items}/>
                    ) }

                </div>
        </Row>
    );
};

export default LicensePortfolio