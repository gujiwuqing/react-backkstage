import { ParamsType } from '@ant-design/pro-provider';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { Button, Input } from 'antd';
import { ReactNode, useState, useRef } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';

export interface DragTableProps<T, U extends ParamsType>
  extends ProTableProps<T, U> {
  renderActions?: () => ReactNode;
  renderSider?: () => ReactNode;
  inputPlaceholderText?: string;
  actionRef?: any;
  onResetTable?: () => void;
  onDragTable: (e: any) => void;
  dataSource: any[];
  dragTableData: (array: any) => void;
}

export function BaseTableDrag<T, U extends ParamsType>({
  renderActions,
  renderSider,
  inputPlaceholderText = '请输入用户名/真实姓名',
  request,
  actionRef,
  dataSource = [],
  onResetTable,
  onDragTable,
  dragTableData,
  ...reset
}: DragTableProps<T, U>) {
  const [searchStr, setSearchStr] = useState<string>('');
  const searchInput = useRef<any>(null);

  const SortableItem = SortableElement((props: any) => <tr {...props} />);
  const SortableContain = SortableContainer((props: any) => (
    <tbody {...props} />
  ));

  const onSortStart = (e: any) => {
    let atter = Array.from(e.nodes[0]['node']['cells']).map((res: any) => {
      return {
        height: res.clientHeight + 'px',
        width: res.clientWidth + 'px',
      };
    });
    atter.forEach((res, index) => {
      e.helper.children[index].style.height = res.height;
      e.helper.children[index].style.width = res.width;
      e.helper.children[index].style.maxWidth = res.width;
      e.helper.children[index].style.maxHeight = res.height;
      e.helper.children[index].style.overflow = 'hidden';
      e.helper.children[index].style.textOverflow = 'ellipsis';
      e.helper.children[index].style.whiteSpace = 'nowrap';
      e.helper.children[index].style.padding = '16px';
    });

    e.helper.style.backgroundColor = '#fafafa';
    e.helper.style.opaction = '0.8';
  };

  const onSortEnd = (e: any) => {
    if (e.oldIndex !== e.newIndex) {
      const newData = arrayMove(
        [].concat(dataSource as any),
        e.oldIndex,
        e.newIndex,
      ).filter((el) => !!el);
      dragTableData(newData);
      onDragTable({
        oldData: { ...dataSource[e.oldIndex], index: e.oldIndex },
        newData: { ...dataSource[e.newIndex], index: e.newIndex },
      });
    }
  };

  const DraggableContainer = (props: any) => (
    <SortableContain
      distance={20}
      disableAutoscroll
      onSortStart={onSortStart}
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow = ({ ...restProps }) => {
    const index = dataSource?.findIndex(
      (x) => x.id === restProps['data-row-key'],
    );
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <ProTable<T, U>
      actionRef={actionRef}
      className="io-biz-table"
      dataSource={dataSource}
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
      options={{
        reload: () => {
          actionRef?.current?.reloadAndRest();
          setSearchStr('');
          searchInput.current.state.value = '';
          onResetTable && onResetTable();
        },
        density: false,
        setting: true,
        fullScreen: true,
      }}
      search={false}
      toolbar={{
        search: (
          <div className="io-biz-table__action-container">
            {renderActions && renderActions()}
          </div>
        ),
        actions: [
          <Input
            key="search"
            style={{ width: 208 }}
            allowClear
            ref={searchInput}
            placeholder={inputPlaceholderText}
            onBlur={(e) => {
              setSearchStr(e.target.value);
            }}
          />,
          <Button
            key="search-button"
            type="primary"
            onClick={() => {
              actionRef?.current?.reload();
            }}
          >
            查询
          </Button>,
          <Button
            key="reset-button"
            type="default"
            onClick={() => {
              actionRef?.current?.reloadAndRest();
              setSearchStr('');
              searchInput.current.state.value = '';
              onResetTable && onResetTable();
            }}
          >
            重置
          </Button>,
        ],
      }}
      tableRender={(_, dom) => (
        <div className="io-table-container">
          {renderSider && (
            <div className="io-table-container__sider">{renderSider()}</div>
          )}
          <div className="io-table-container__content">{dom}</div>
        </div>
      )}
      request={
        request
          ? (params, sort, filter) => {
              return request(
                {
                  ...params,
                  keyword: searchStr,
                },
                sort,
                filter,
              );
            }
          : undefined
      }
      {...reset}
    />
  );
}
