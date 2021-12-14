import { Layout } from 'antd';
import { Badge } from 'antd';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import "./App.css";
import MapContainer from './Maps';

const { Header,Sider,Content } = Layout;

const { TabPane } = Tabs;


function Navbar() {
    return (
        <div>
         <Layout className="layout-1">
             <Sider className="Navbar-sider">
                 <div className="icon-div">
                 <img src="./images/icon.svg" alt="icon" className="icon"/>
                 </div>
                 <div className="Navbar-element">
                   <img src="./images/assets.svg" alt="assets" className="assets"/>
                   <p className="sidebar-text">Assets</p>
                 </div>
                 <div className="Navbar-element">
                   <Badge count={3}>
                   <img src="./images/events.svg" alt="events" className="events"/>
                   </Badge>
                   <p className="sidebar-text">Events</p>
                 </div>
                 <div className="Navbar-element">
                   <Badge count={1}>
                   <img src="./images/messaging.svg" alt="messaging" className="messaging"/>
                   </Badge>
                   <p className="sidebar-text">Messaging</p>
                 </div>
                 <div className="Navbar-element">
                   <img src="./images/admin.svg" alt="admin" className="admin"/>  
                   <p className="sidebar-text">Admin</p>
                 </div>
                 <div className="Navbar-end-element">
                   <img src="./images/profile.svg" alt="profile" className="profile"/>
                   <p className="sidebar-text">Profile</p>
                 </div>
             </Sider>
                <Header className="nav-header">N. Little Rock Metro Area
                  <img src="./images/down.svg" alt="down" className="down"/> 
                  <span className="refresh-class">
                  <img src="./images/refresh.svg" alt="refresh" className="refresh"/>
                
                   <sup className="last-update">last update</sup>
                   <sub className="last-update">9:15am</sub>
                  </span>
                <div className="tabs-first">
                    <div className="new-sign"><p className="sign">+</p></div>
                  <Tabs className="tabs-list-view">
                   <TabPane className="tab-1" tab="Nautical-Filter" key="1"></TabPane>
                   <TabPane className="tab" tab="Filter-preset" key="2"></TabPane>
                   <TabPane className="tab" tab="Filter-preset" key="3"></TabPane>
                   <TabPane className="tab" tab="Filter-preset" key="4"></TabPane>
                  </Tabs>
                  </div>
                  <div>
                    <h5>
                      CURRENT WEATHER
                      <p>
                        58
                        <p>WINDY</p>
                      </p>
                    </h5>
                  </div>
                </Header>
                <Content>
                  <MapContainer />
                </Content>
        </Layout>
        </div>
    )
}
export default Navbar;
