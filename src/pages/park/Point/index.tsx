import { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { Form, Input, Tooltip, Button, Select, Spin, message } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { fakeSubmitForm } from './service';
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 12 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};
export default () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  const [form] = Form.useForm();
  const { run: onFinish } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: (result: any) => {
      message.success('ok');
      console.log('result: ', result);
    },
  });
  const handleReset = () => {
    form.resetFields();
  };
  const handleChange = () => {};
  return (
    <Spin spinning={loading} size="large">
      <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="status"
          label="积分减免"
          rules={[
            {
              required: true,
              message: '请选择积分减免',
            },
          ]}
        >
          <Select placeholder="请选择积分减免" onChange={handleChange} allowClear>
            <Option value="on">开启</Option>
            <Option value="off">关闭</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="ratio"
          label={
            <span>
              积分兑换比例&nbsp;
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: '请输入积分兑换比例',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="请输入积分兑换比例" suffix="积分/小时" />
        </Form.Item>
        <Form.Item {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            保 存
          </Button>
          <Button style={{ marginLeft: 10 }} onClick={handleReset}>
            重 置
          </Button>
        </Form.Item>
      </Form>
    </Spin>
  );
};
