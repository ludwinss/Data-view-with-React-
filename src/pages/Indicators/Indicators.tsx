import React from "react";
import { Layout } from "antd";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import "./Indicators.css";

const { Content } = Layout;

const Indicators: React.FC<{}> = () => {
  return (
      <Layout style={{ minHeight: "100vh", minWidth: "100%" }}>
        <Content className="indicators-content">
          <PageHeader />
          <PageContent />
        </Content>
      </Layout>
  )
};

export default Indicators;