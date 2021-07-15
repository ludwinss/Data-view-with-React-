import React from 'react';
import { Layout } from "antd";
import { Route, Switch } from "react-router-dom";
import Indicators from "../../../pages/Indicators/Indicators";

const { Content } = Layout;

const MainContet: React.FC<{}> = () => {
  return (
    <Content>
      <Switch>
        <Route path="/" component={Indicators} />
      </Switch>
    </ Content>
  )
}

export default MainContet;
