import { SubtitlePortfolioProps } from "./SubtitlePortfolio.types"
import './SubtitlePortfolio.scss'
const SubtitlePortfolio = ({numberOrder, text, width}: SubtitlePortfolioProps) => {

    return (
    <div
        className={"RQ-d-flex RQ-align-center SubtitlePortfolio RQ-f-26"}
      >
        <p className={"RQ-theme RQ-mr-2 RQ-f-code"}>{`${numberOrder}.`}</p>
        <p className={"RQ-name RQ-f-helvetica RQ-f-semi-bold RQ-one-line"}>{text}</p>
        <hr className={'line'} style={{"width": `${width}%`}}/>
    </div>
)}


export default SubtitlePortfolio;
