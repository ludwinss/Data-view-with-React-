import React from "react";
import { Layout } from "antd";
import Menu from "./Menu";
import IconTrackfy from '../../../../Icons/Trackfy';
import "./SideBar.css";
interface Props{
  isOpen:boolean
}
const { Header } = Layout
const { Sider } = Layout;

const MainSideMenu: React.FC<Props> = (props) => {
  return (
    <Sider
      className="side-menu"
      collapsed={props.isOpen}
      collapsedWidth={70}
    >
      {props.isOpen ? null :
        <Header className="menu-header">
          <IconTrackfy className="menu-system-title" />
        </Header>
      }
      <Menu isOpen={props.isOpen}/>
    </Sider>
  );
};

export default MainSideMenu;
