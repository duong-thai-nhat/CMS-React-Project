import "./SectionLeft.css"

import { HeaderComponent } from "../Header/HeaderComponent";
import { Content } from "../Content/Content";
import logo from '../../img/logo.png'

export const SectionLeft = () => {
    return(
        <section className="navbar">
            <div className="navbar-menu">
                <div className="navbar-menu-container-logo">
                    <img src={logo} alt="logo" className="navbar-logo"/>
                </div>
                <HeaderComponent></HeaderComponent>
            </div>
        </section>
    )
}