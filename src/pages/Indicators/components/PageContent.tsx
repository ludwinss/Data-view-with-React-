import React from "react";
import {  Col, Row } from 'antd';
import BarCard from "./BarCard";
import PieChartCard from "./PieChartCard";
interface Props {
  data: any
  filterData:any,
  handleData:any,
  filterNewData:any
}

const PageContent: React.FC<Props> = (props) => {
  return (
    <div>
      <Row gutter={[24, 16]}>
        <Col span={24} >
          <BarCard filterData={props.filterData} filterNewData={props.filterNewData} origiData={props.data}/>
        </Col>
        <Col span={12} sm={24} xs={24} lg={12}>
          <PieChartCard filterData={props.filterData} filterNewData={props.filterNewData} origiData={props.data}/>
        </Col>
      </Row>
    </div>
  );
};

export default PageContent;
