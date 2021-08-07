import React from "react";
import { Layout, Button } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'

import SideBar from "./components/SideBar/SideBar";
import Content from "./components/Content";

import "antd/dist/antd.css";
import "./Layout.css";

const CefLayout: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Layout >
      <SideBar isOpen={isOpen} />
      <div className='button-side'>
        <Button size='large' shape='circle' onClick={() => setIsOpen(!isOpen)} icon={
          true ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
        }>
        </Button>
      </div>
      <Layout>
        <Content />
      </Layout>
    </Layout>
  );
}

export default CefLayout;
