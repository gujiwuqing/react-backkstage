import ExportJsonExcel from 'js-export-excel';
import React from 'react';
import ex from 'umi/dist';

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
  const ExportBtnClick = () => {
    const data = tableData; //表格内部数据
    var option = {};
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
    option.fileName = '无购买邀评管理'; //设置excel名称
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
    <button className="formBtn searchBtn" onClick={ExportBtnClick}>
      导出
    </button>
  );
};

export default Excel;
