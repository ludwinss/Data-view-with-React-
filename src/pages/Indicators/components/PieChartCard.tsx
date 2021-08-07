import * as React from 'react';
import { Card, Col, Row, Timeline } from 'antd';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface Props {
    filterData: any;
    filterNewData: any;
    origiData: any
}

const PieChartCard: React.FunctionComponent<Props> = (props) => {
    const filter = 'Area'
    const [filterByChart, setFilterByChart] = React.useState(props.filterData);
    React.useEffect(() => {
        let refreshData = props.filterNewData(props.filterData, filter, null)
        setFilterByChart(refreshData)
    }, [props.filterData])

    const generaData = () => {
        var data: any[] = []
        data = filterByChart.map((values: any,index:number) => {
            return { 'Area': values[filter], 'Total Horas': values['Total Horas'], key:index}
        })

        return data;
    }
    function generaColor(n: number) {
        let arrayColor: any[] = [];
        for (let i = 0; i < n; i++) {
            let n = (Math.random() * 0xfffff * 1000000).toString(16);
            arrayColor.push('#' + n.slice(0, 6))
        }
        return arrayColor;
    }
    const COLORS = generaColor(generaData().length)
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = (e: any) => {
        let { cx, cy, innerRadius, outerRadius, midAngle, percent } = e;
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <Card title='Pie Chart about the Areas'>
            <Row justify='center'>
                <Col span='8'>

                    <h4>Ranking</h4>
                    <Timeline>
                        {generaData().map((value: any, index: number) => {
                            return <Timeline.Item key={index} color={COLORS[index]}> {value['Area']}</Timeline.Item>
                        })}
                    </Timeline>

                </Col>
                <Col span='16'>
                    <ResponsiveContainer width='100%' height={300}>
                        <PieChart width={400} height={300} >
                            <Pie
                                data={generaData()}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                label={renderCustomizedLabel}
                                fill="#8884d8"
                                dataKey="Total Horas"
                            >
                                {generaData().map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}

                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </Col>
            </Row>
        </Card>
    );
};
export default PieChartCard;