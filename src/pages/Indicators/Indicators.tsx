import React from "react";
import { Layout } from "antd";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";
import "./Indicators.css";
const datax = require('../../data');
const { Content } = Layout;


function group(newData: any, key: string) {
  return newData.reduce((acc: any, next: any) => {
    (acc[next[key]] = acc[next[key]] || []).push(next)
    return acc
  }, {})
}
function filterNewData(newData: any, key: string, where: string) {
  try {
    if (newData.length > 0) {
      let allKeys = Object.keys(newData[0]);
      if (allKeys.indexOf(key) !== -1) {
        allKeys.splice(allKeys.indexOf(key), 1)
      }
      let groupBy = group(newData, key);
      return where?groupBy[where]:Object.values(groupBy).map((values: any) => {
        const newObj = values.reduce((acc: any, next: any) => {
            allKeys.forEach(valve => {
              (acc[valve] = acc[valve] || []).push(next[valve])
            })
          
          return { ...acc, [key]: next[key] }
        }, {})
        let totalHours = newObj['Qnt Horas'].reduce((acc: any, next: any) => { return acc + parseInt(next) }, 0)
        return { ...newObj, 'Total Horas': totalHours }
      })
    }
    return []
  } catch (e) {
    return []
  }
}

const Indicators: React.FC<{}> = () => {
  const [data, setData] = React.useState(datax)
  const [filterData, setFilterData] = React.useState(datax.Data);
  function handleData(newData: any) {
    setFilterData(newData)
  }
  return (
    <Layout style={{ minHeight: "100vh", minWidth: "100%" }}>
      <Content className="indicators-content">
        <PageHeader data={data} filterData={filterData} handleData={handleData} />
        <PageContent data={data} filterData={filterData} filterNewData={filterNewData} handleData={handleData} />
      </Content>
    </Layout>
  )
};

export default Indicators;