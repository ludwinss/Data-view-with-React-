import React from 'react';
import { Row, Col } from "antd";

import SearchComponent from './SearchComponent';
import './PageHeader.css';
interface Props {
  handleData: any,
  data: any,
  filterData: any,
}
const PageHeader: React.FC<Props> = (props) => {

  return (
    <Row className='root-header' justify='end'>
      <Col span={24}>
        <SearchComponent data={props.data} handleData={props.handleData} />
      </Col>
    </Row>
  )
}

export default PageHeader;