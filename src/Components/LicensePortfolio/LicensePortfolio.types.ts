import { SubtitlePortfolioProps } from "../SubtitlePortfolio/SubtitlePortfolio.types";

export interface LicenseItemsProps{
    title: string;
    items: string[];

}

export interface LicensePortfolioProps{
    subtitle: SubtitlePortfolioProps;
    rows: LicenseItemsProps[]
}