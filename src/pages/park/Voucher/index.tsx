import { PlusOutlined } from '@ant-design/icons';
import { Button, message, Modal } from 'antd';
import React, { useState, useRef } from 'react';
import { PageContainer, FooterToolbar } from '@ant-design/pro-layout';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import ProTable from '@ant-design/pro-table';
import { rule, addRule, updateRule, removeRule } from './service';
import type { TableListItem, TableListPagination } from './data';
import CreateForm from './components/CreateForm';
import UpdateForm from './components/UpdateForm';

const TableList: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<TableListItem> | undefined>(undefined);
  const [updateVisible, setUpdateVisible] = useState<boolean>(false);
  const [selectedRowsState, setSelectedRows] = useState<TableListItem[]>([]);
  const actionRef = useRef<ActionType>();
  const handleSubmit = (values: TableListItem) => {
    addRule({ ...values });
    message.success('添加成功');
    setVisible(false);
    if (actionRef.current) {
      actionRef.current.reload();
    }
  };
  const handleUpdSubmit = (values: TableListItem) => {
    updateRule({ ...values });
    message.success('修改成功');
    setUpdateVisible(false);
    if (actionRef.current) {
      actionRef.current.reload();
    }
  };
  const handleRemove = async (selectedRows: TableListItem[]) => {
    const hide = message.loading('正在删除');
    if (!selectedRows) return true;
    console.log(selectedRows);
    console.log(selectedRows.map((row) => row.key));
    try {
      await removeRule({
        key: selectedRows.map((row) => row.key),
      });
      hide();
      message.success('删除成功，即将刷新');
      if (actionRef.current) {
        actionRef.current.reload();
      }
      return true;
    } catch (error) {
      hide();
      message.error('删除失败，请重试');
      return false;
    }
  };

  const columns: ProColumns<TableListItem>[] = [
    {
      title: 'key',
      dataIndex: 'key',
      valueType: 'textarea',
      hideInSearch: true,
      hideInTable: true,
    },
    {
      title: '昵称',
      dataIndex: 'nickname',
      sorter: true,
      valueType: 'textarea',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      // renderText: (val: string) => `${val}万`,
      hideInForm: true,
      valueEnum: {
        '0': {
          text: '保密',
        },
        '1': {
          text: '男',
        },
        '2': {
          text: '女',
        },
      },
    },
    {
      title: '用户名',
      dataIndex: 'username',
      sorter: true,
      defaultSortOrder: 'descend',
      valueType: 'textarea',
    },
    {
      title: '账号',
      dataIndex: 'account',
      sorter: true,
      valueType: 'textarea',
    },
    {
      title: '操作',
      dataIndex: 'option',
      valueType: 'option',
      render: (_, record) => [
        <a
          key="key"
          onClick={(e) => {
            e.preventDefault();
            setUpdateVisible(true);
            setCurrent(record);
          }}
        >
          修改
        </a>,
        <a
          key="key"
          onClick={(e) => {
            e.preventDefault();
            Modal.confirm({
              title: '删除任务',
              content: '确定删除该任务吗？',
              okText: '确认',
              cancelText: '取消',
              onOk: async () => {
                await handleRemove([record]);
              },
            });
            setSelectedRows([]);
          }}
        >
          删除
        </a>,
      ],
    },
  ];

  return (
    <PageContainer content="ant-pro实现增删查改">
      <ProTable<TableListItem, TableListPagination>
        headerTitle="查询表格"
        actionRef={actionRef}
        rowKey="key"
        search={{
          labelWidth: 120,
        }}
        toolBarRender={() => [
          <Button
            type="primary"
            key="primary"
            onClick={() => {
              setVisible(true);
              setCurrent({});
            }}
          >
            <PlusOutlined />
            新建
          </Button>,
        ]}
        request={rule}
        columns={columns}
        rowSelection={{
          onChange: (_, selectedRows) => {
            console.log('选择开始：' + selectedRows.length);
            setSelectedRows(selectedRows);
          },
        }}
      />
      {selectedRowsState?.length > 0 && (
        <FooterToolbar
          extra={
            <div>
              已选择{' '}
              <a
                style={{
                  fontWeight: 600,
                }}
              >
                {selectedRowsState.length}
              </a>{' '}
              项
            </div>
          }
        >
          <Button
            onClick={async () => {
              await handleRemove(selectedRowsState);
              setSelectedRows([]);
            }}
          >
            批量删除
          </Button>
        </FooterToolbar>
      )}
      <CreateForm
        done={true}
        visible={visible}
        current={current}
        onSubmit={handleSubmit}
        onVisibleChange={setVisible}
      />
      <UpdateForm
        done={true}
        updateVisible={updateVisible}
        current={current}
        onSubmit={handleUpdSubmit}
        onVisibleChange={setUpdateVisible}
      />
    </PageContainer>
  );
};

export default TableList;
