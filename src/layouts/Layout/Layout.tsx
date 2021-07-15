import React from "react";
import { Layout } from "antd";

import ScrollBar from 'react-custom-scrollbars';
import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content";

import "antd/dist/antd.css";
import "./Layout.css";

const CefLayout: React.FC = () => {
    return (
      <Layout style={{ minHeight: "100vh", overflow: "hidden" }}>
        <SideBar/>
        <Layout style={{ zIndex: 10 }}>
          <ScrollBar>
            <Content />
          </ScrollBar>
        </Layout>
      </Layout>
    );
}

export default CefLayout;
