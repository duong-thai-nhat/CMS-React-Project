import './Content.css';
import { TableData } from "./Content-table-data/ContentTableData";
import CheckTicket from './CheckTickets/CheckTicket'
import { ContentTool } from "./ContentTool/ContentTool";
import Chart from './ContentChart/LineChart';
import Example from './DonutChart/DonutChart';
import { Tabs, TabList, Tab, TabPanels, TabPanel, TabsOrientation } from "@reach/tabs";
import "@reach/tabs/styles.css";

export const Content = () => {
    return (
        <div style={{flex: 1}}>
            <TabPanels>
                <div className="content">
                    <TabPanel>
                        <h3 className="content-heading">Thống kê</h3>
                        <Chart></Chart>
                        <Example></Example>
                    </TabPanel>
                    <TabPanel>
                        <h3 className="content-heading">Danh sách vé</h3>
                        <ContentTool></ContentTool>
                        <TableData></TableData>
                    </TabPanel>
                    <TabPanel>
                        <h3 className="content-heading">Đối soát vé</h3>
                        <CheckTicket></CheckTicket>
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                    <TabPanel>
                        
                    </TabPanel>
                </div>
            </TabPanels>
        </div>
    )
}