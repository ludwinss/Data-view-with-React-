import * as React from 'react';
import { Menu, Card, Col, Row, Table, Dropdown, Button } from 'antd';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DownOutlined } from '@ant-design/icons';

interface Props {
    filterData: any;
    filterNewData: any;
    origiData: any
}

const BarCard: React.FunctionComponent<Props> = (props) => {
    const filter = 'Colaborador'
    const [filterByBar, setFilterByBar] = React.useState(props.filterData);
    const [existWhere, setExistWhere] = React.useState(null)
    React.useEffect(() => {
        function handleChange() {
            setFilterByBar(props.filterNewData(props.filterData, filter, existWhere))
        }
        handleChange()
    }, [props.filterData])

    const columns = [
        {
            title: 'Colaborador',
            dataIndex: 'Colaborador',
        },
        {
            title: 'Total Horas',
            dataIndex: 'Total Horas',
            sorter: {
                compare: (a: any, b: any) => a['Total Horas'] - b['Total Horas'],
            }
        },
    ]
    const generaData = () => {
        var data: any[] = []
        if (!existWhere) {
            data = Object.values(filterByBar).map((values: any, index: number) => {
                values['key'] = index
                return values;
            })
        } else {
            let newFilter = props.filterNewData(props.filterData, 'Area', existWhere)
            data = props.filterNewData(newFilter, 'Colaborador', null)
            data = Object.values(data).map((values: any, index) => {
                values['key'] = index
                return values
            })
        }
        return data;
    }
    const expandedRowRender: any = (e: any) => {
        let tmpArray: any[] = existWhere ? props.filterData.filter((val: any) => (val[filter] === e[filter] && val['Area'] === e['Area'][0])) :
            props.filterData.filter((val: any) => val[filter] === e[filter])
        const columns = existWhere ? [{
            title: 'Data',
            dataIndex: 'Data'
        }, {
            title: 'Qnt Horas',
            dataIndex: 'Qnt Horas'
        }] : [
            {
                title: 'Area',
                key: 'Area',
                dataIndex: 'Area'
            }, {
                title: 'Data',
                key: 'Data',
                dataIndex: 'Data'
            }, {
                title: 'Qnt Horas',
                key: "Qnt Horas",
                dataIndex: 'Qnt Horas'
            }
        ]

        let data: any[] = []
        tmpArray.forEach((values: any, index: number) => {
            data.push({ ...values, key: index })
        });
        return <Table columns={columns} dataSource={data} />;

    }

    const cardHeader: any = () => {
        let allKeys: any[] = [];
        (props.origiData.Areas).forEach((val: any) => {
            allKeys = allKeys.concat(Object.keys(val).concat(Object.values(val)))
        })
        let unique = Array.from(new Set(allKeys))

        const menu = (
            <Menu>
                <Menu.Item key={null} onClick={() => setExistWhere(null)}>All Areas</Menu.Item>
                {unique.map((values: any) => {
                    return <Menu.Item key={values} onClick={() => setExistWhere(values)}>{values}</Menu.Item>
                })}
            </Menu>);
        return (<>
            <Dropdown overlay={menu} ><Button>{existWhere ? existWhere : "Select Area"} <DownOutlined /></Button></Dropdown>
        </>
        )
    }


    return (
        <Card extra={cardHeader()} title={existWhere ? <h3>{existWhere}</h3> : <h3>All Areas</h3>}>
            <Row align='middle' justify='center'>
                <Col span='14' sm={24} xs={24} lg={14}>
                    <ResponsiveContainer width='100%' height={400}>
                        <BarChart
                            width={500}
                            height={300}
                            data={generaData()}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="Colaborador" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="Total Horas" fill="#8884d8" background={{ fill: '#eee' }} />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
                <Col span='10' sm={24} xs={24} lg={10}>
                    <h4>Ranking</h4>
                    <Table dataSource={generaData()} columns={columns}
                        size='small'
                        bordered
                        expandable={{ expandedRowRender }}
                    />

                </Col>
            </Row>
        </Card>
    );
};
export default BarCard;