import React from 'react';
import { Layout ,Alert} from "antd";
import { Route, Switch } from "react-router-dom";
import Indicators from "../../../pages/Indicators/Indicators";
import ModifiedData from "../../../pages/ModifiedData/ModifiedData";

const example=require("../../../data.json")

const { Content } = Layout;

const MainContet: React.FC<{}> = () => {
  return (
    <Content>
      <Switch>
        <Route path="/modified" component={ModifiedData} />
        <Route path="/" component={Indicators} />
      </Switch>
    </ Content>
  )
}

export default MainContet;
