import type { FC } from 'react';
import { ModalForm, ProFormText, ProFormSelect } from '@ant-design/pro-form';
import type { TableListItem } from '../data.d';
type CreateFormProps = {
  done: boolean;
  visible: boolean;
  current: Partial<TableListItem> | undefined;
  onSubmit: (values: TableListItem) => void;
  onVisibleChange?: (b: boolean) => void;
};

const CreateForm: FC<CreateFormProps> = (props) => {
  const { done, visible, current, onSubmit, onVisibleChange } = props;
  if (!visible) {
    return null;
  }
  return (
    <ModalForm<TableListItem>
      visible={visible}
      title={'添加'}
      width={640}
      onFinish={async (values) => {
        onSubmit(values);
      }}
      onVisibleChange={onVisibleChange}
      initialValues={current}
      modalProps={{
        onCancel: () => {
          return true;
        },
        destroyOnClose: true,
        bodyStyle: done ? { padding: '72px o' } : {},
      }}
    >
      {
        <>
          <ProFormText
            name="nickname"
            rules={[
              {
                required: true,
                message: '请输入昵称',
              },
            ]}
            label="昵称"
            placeholder="请输入"
          />
          <ProFormSelect
            rules={[
              {
                required: true,
                message: '请选择性别',
              },
            ]}
            options={[
              {
                value: '1',
                label: '男',
              },
              {
                value: '2',
                label: '女',
              },
              {
                value: '0',
                label: '保密',
              },
            ]}
            name="sex"
            label="性别"
          />
          <ProFormText
            name="account"
            rules={[
              {
                required: true,
                message: '请输入账号名称',
              },
            ]}
            label="账号名称"
            placeholder="请输入"
          />
          <ProFormText
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名称',
              },
            ]}
            label="用户名称"
            placeholder="请输入"
          />
        </>
      }
    </ModalForm>
  );
};
export default CreateForm;
