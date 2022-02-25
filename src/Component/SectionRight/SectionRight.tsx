import "./SectionRight.css"

import { Menu } from '../Menu/Menu'
import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsOrientation } from "@reach/tabs";
import "@reach/tabs/styles.css";
import { Content } from "../Content/Content"

export const SectionRight = () => {
    return(
        <section className="section-content">
             <Tabs orientation={TabsOrientation.Vertical} style={{display: 'flex', width: '100%'}}>
                    <Menu></Menu>
                    <Content></Content>
            </Tabs>
        </section>
    )
}