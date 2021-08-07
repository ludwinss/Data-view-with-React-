import React from 'react';
import moment from 'moment';

import { Button, Menu, Dropdown, Row, Col, DatePicker } from 'antd';

import { DownOutlined, TableOutlined, CalendarOutlined, EditOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
interface Props {
    data: any;
    handleData: any;
}

function intervalDate(data: any, pickIntervalDate: any) {
    if (pickIntervalDate) {
        let [minDate, maxDate] = pickIntervalDate;
        minDate = minDate.format('YYYY-MM-DD')
        maxDate = maxDate.format('YYYY-MM-DD')
        let filterData = data.Data.filter((values: any) => {
            let date = ((values.Data.split('/')).reverse()).join('-')
            return moment(date).isBetween(minDate, maxDate, 'days', '[]')
        })
        return filterData;
    }
    return null;
}

function filterBy(typeFilter: string, data: any) {
    let newData: object;
    switch (typeFilter) {
        case 'Last Week': {
            newData = data.Data.filter((values: any) => {
                let iniWeek = moment().subtract(1, 'weeks').startOf('week').format('YYYY-MM-DD');
                let finWeek = moment().subtract(1, 'weeks').endOf('week').format('YYYY-MM-DD');
                let date = ((values.Data.split('/')).reverse()).join('-')
                return moment(date).isBetween(iniWeek, finWeek, 'days', '[]');
            })

            return newData;
        }
        case 'Last Month': {
            newData = data.Data.filter((values: any) => {
                let iniWeek = moment().subtract(1, 'months').startOf('month').format('YYYY-MM-DD');
                let finWeek = moment().subtract(1, 'months').endOf('month').format('YYYY-MM-DD');
                let date = ((values.Data.split('/')).reverse()).join('-')
                return moment(date).isBetween(iniWeek, finWeek, 'days', '[]')
            })
            return newData;
        }
        case 'Last Year': {
            newData = data.Data.filter((values: any) => {
                let iniWeek = moment().subtract(1, 'years').startOf('year').format('YYYY-MM-DD');
                let finWeek = moment().subtract(1, 'years').endOf('year').format('YYYY-MM-DD');
                let date = ((values.Data.split('/')).reverse()).join('-')
                return moment(date).isBetween(iniWeek, finWeek, 'days', '[]')
            })
            return newData;
        }
        default: {
            return data.Data;
        }
    }
}

const SearchComponent: React.FC<Props> = (props) => {

    const [typeFilter, setTypeFilter] = React.useState('')

    const menu = (
        <Menu >
            <Menu.Item key='default' className='search-items' onClick={() => {
                setTypeFilter('Default');
                props.handleData(filterBy('Default', props.data))
            }}>
                <TableOutlined />
                Default

            </Menu.Item>
            <Menu.Item key='week' className='search-items' onClick={() => { setTypeFilter("Last Week"); props.handleData(filterBy('Last Week', props.data)) }}>
                <CalendarOutlined />
                Last week
            </Menu.Item>
            <Menu.Item key='month' className='search-items' onClick={() => { setTypeFilter("Last Month"); props.handleData(filterBy('Last Month', props.data)) }}>
                <CalendarOutlined />
                Last month
            </Menu.Item>
            <Menu.Item key='year' className='search-items' onClick={() => { setTypeFilter("Last Year"); props.handleData(filterBy('Last Year', props.data)) }}>
                <CalendarOutlined />
                Last year
            </Menu.Item>
            <Menu.Item key='personalize' className='search-items' onClick={() => setTypeFilter("Personalize")}>
                <EditOutlined />
                Personalize
            </Menu.Item>
        </Menu >
    )
    return (
        <Row justify='end'>
            {typeFilter === 'Personalize' ?
                <RangePicker format='YYYY-MM-DD' style={{width:'190px'}}onChange={(e) => {
                    let date = intervalDate(props.data, e);
                    if (date) {
                        props.handleData(date)
                    }
                }} />
                : null}
            <Col>
                <Dropdown overlay={menu}>
                    <Button className='button-dropdown'>
                        {typeFilter === '' ? <>Choose the Date</> : typeFilter}
                        <DownOutlined />
                    </Button>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default SearchComponent;