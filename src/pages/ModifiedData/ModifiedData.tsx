import React from 'react';
import { Row, Col, Table, Dropdown, Button, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './ModifiedData.css';

const datax = require('../../data.json');

const generaColumns = (typeData: any): any => {
    switch (typeData) {
        case 'Colaborators': {
            return [{ title: "João da Silva", dataIndex: "João da Silva" }];

        }
        case 'Professions': {
            return [{ title: "Mecânico", dataIndex: "Mecânico" }];
        }
        case 'Areas': {
            return [{ title: "Galpão Primário", dataIndex: "Galpão Primário" }];
        }
        default: {
            return [
                {
                    title: 'Colaborador',
                    dataIndex: 'Colaborador',
                },
                {
                    title: 'Date',
                    dataIndex: 'Data',
                },
                {
                    title: 'Area',
                    dataIndex: 'Area',
                },
                {
                    title: 'Qnt Horas',
                    dataIndex: 'Qnt Horas',
                }
            ];

        }
    }
}
const generaData = (typeData: any, datax: any): any => {
    try {
        let data: any[] = []
        if (typeData === '') {
            data = datax.Data.map((value: any, index: number) => {
                return { ...value, key: index }
            })
        } else {
            data = datax[typeData].map((value: any, index: number) => {
                return { ...value, key: index }
            })
        }
        return data;
    } catch (e) { return [] }
}

const ModifiedData: React.FC = () => {
    const [typeData, setTypeData] = React.useState('')
    const [column, setColumn] = React.useState(generaColumns(datax))
    const [data, setData] = React.useState(generaData(typeData, datax))

    function handleChange(e: any) {

        setTypeData(e)
        setData(generaData(e, datax))
        setColumn(generaColumns(e))
    }
    const menu = (
        <Menu>
            <Menu.Item key='default' onClick={() => handleChange('')}>
                Default
            </Menu.Item>
            <Menu.Item key='Colaborators' onClick={() => handleChange('Colaborators')}>
                Colboradores
            </Menu.Item >
            <Menu.Item key='Professions' onClick={() => handleChange('Professions')}>
                Professions
            </Menu.Item>
            <Menu.Item key='Areas' onClick={() => handleChange('Areas')}>
                Areas
            </Menu.Item>
        </Menu>
    )
    return (
        <Row className='main-modified' justify='start' align='top'>

            <Dropdown overlay={menu} ><Button className='button-data'> "Select type"<DownOutlined /></Button></Dropdown>
            <Col span={24} className='col-data'>
                <h2>{typeData === '' ? "VIEWS ALL" : typeData}</h2>

                <Table columns={column} dataSource={data} pagination={{ size: 'small' }} />
            </Col>
        </Row>

    )
}
export default ModifiedData;