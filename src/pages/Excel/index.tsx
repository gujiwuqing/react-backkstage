import ExportJsonExcel from 'js-export-excel';
import React from 'react';
import { Table, Button } from 'antd';

const tableData = [
  {
    itemCode: '001',
    invitedTime: '2021-01-1',
    invitedBuyer: 'test',
  },
  {
    itemCode: '002',
    invitedTime: '2021-01-1',
    invitedBuyer: 'test',
  },
  {
    itemCode: '003',
    invitedTime: '2021-01-1',
    invitedBuyer: 'test',
  },
  {
    itemCode: '004',
    invitedTime: '2021-01-1',
    invitedBuyer: 'test',
  },
  {
    itemCode: '005',
    invitedTime: '2021-01-1',
    invitedBuyer: 'test',
  },
];

const Excel = () => {
  const columns = [
    {
      title: '产品编号',
      dataIndex: 'itemCode',
    },
    {
      title: '受邀时间',
      dataIndex: 'invitedTime',
    },
    {
      title: '受邀买家',
      dataIndex: 'invitedBuyer',
    },
  ];
  const ExportBtnClick = () => {
    const data = tableData; //表格内部数据
    const option = {};
    let dataTable = [];
    if (data) {
      for (let i in data) {
        if (data) {
          let obj = {
            产品编号: data[i].itemCode,
            受邀时间: data[i].invitedTime,
            受邀买家: data[i].invitedBuyer,
          };
          dataTable.push(obj);
        }
      }
    }
    option.fileName = 'Test Excel'; //设置excel名称
    option.datas = [
      {
        sheetData: dataTable,
        sheetName: 'sheet',
        sheetFilter: ['产品编号', '受邀时间', '受邀买家'],
        sheetHeader: ['产品编号', '受邀时间', '受邀买家'],
      },
    ];
    var toExcel = new ExportJsonExcel(option);
    toExcel.saveExcel();
  };
  return (
    <>
      <Button
        type="primary"
        onClick={ExportBtnClick}
        style={{ marginBottom: 20 }}
      >
        导出
      </Button>
      <Table dataSource={tableData} columns={columns} />
    </>
  );
};

export default Excel;
