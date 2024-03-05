import { ProjectItemProps } from "../ProjectItem/ProjectItem.types";
import { SubtitlePortfolioProps } from "../SubtitlePortfolio/SubtitlePortfolio.types";

export interface ProjectSectionProps {
    /**
     * Defines ...
     */
    subtitle: SubtitlePortfolioProps;
    projects: ProjectItemProps[]
  }