import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

import { PieChartOutlined ,DatabaseOutlined} from '@ant-design/icons';
interface Props{
  isOpen:boolean
}

const MainMenu: React.FC<Props> = (props) => {
  return (
    <Menu className="menu" defaultSelectedKeys={["indicadores"]} style={props.isOpen?{marginTop:'50px'}:{}} mode="vertical">
      <Menu.Item key="indicadores" className="menu-item" icon={<PieChartOutlined style={{fontSize:'24px'}} />}>
        GRAFICOS
        <Link to="/indicadores" />
      </Menu.Item>
      <Menu.Item key="indicadore" className="menu-item" icon={<DatabaseOutlined style={{fontSize:"24px"}}/>}>
        DATA
        <Link to="/modified" />
      </Menu.Item>
    </Menu>
  )
}

export default MainMenu;
