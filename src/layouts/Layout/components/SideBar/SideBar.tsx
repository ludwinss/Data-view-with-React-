import React from "react";
import { Layout } from "antd";

import Header from "./Header";
import Menu from "./Menu";

import "./SideBar.css";

const { Sider } = Layout;

const MainSideMenu: React.FC = () => {
  return (
    <Sider
      className="side-menu"
      width={272}
      collapsedWidth={70}
      trigger={null}
      collapsible
      collapsed={false}
    >
      <Header/>
      <Menu />
    </Sider>
  );
};

export default MainSideMenu;
