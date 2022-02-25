import "./main.css";
import { SectionLeft } from "../SectionLeft/SectionLeft";
import { SectionRight } from "../SectionRight/SectionRight";

export const Main = () => {
    return(
        <div className="main">
            <SectionLeft></SectionLeft>
            <SectionRight></SectionRight>
        </div>
    )
}