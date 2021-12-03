import { useState, useEffect } from 'react';
import { useRequest } from 'umi';
import { Form, Input, Tooltip, Button, Spin, message, Divider } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { fakeSubmitForm } from './service';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
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
  const [form] = Form.useForm();
  const { quill, quillRef } = useQuill();
  const { run: onFinish } = useRequest(fakeSubmitForm, {
    manual: true,
    onSuccess: (result: any) => {
      message.success('ok');
      console.log('result: ', result);
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);
  useEffect(() => {
    if (quill) {
      quill.clipboard.dangerouslyPasteHTML('<p>hello pro</p>');
      quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
        console.log('source: ', source);
        console.log('oldDelta: ', oldDelta);
        console.log('delta: ', delta);
        // console.log(form);
        console.log('Text change!');
        console.log(quill.getText()); // Get text only
        console.log(quill.getContents()); // Get delta contents
        console.log(quill.root.innerHTML); // Get innerHTML using quill
        console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
        form.setFieldsValue({ content: quill.root.innerHTML });
      });
    }
  }, [form, quill, quillRef]);
  const handleReset = () => {
    form.resetFields();
  };

  return (
    <Spin spinning={loading} size="large">
      <Divider orientation="left">停车系统配置管理</Divider>
      <Form {...formItemLayout} form={form} name="register" onFinish={onFinish} scrollToFirstError>
        <Form.Item
          name="ratio"
          label={
            <span>
              非文字提示
              <Tooltip title="What do you want others to call you?">
                <QuestionCircleOutlined />
              </Tooltip>
            </span>
          }
          rules={[
            {
              required: true,
              message: '请输入非文字提示',
              whitespace: true,
            },
          ]}
        >
          <Input placeholder="请输入非文字提示" />
        </Form.Item>
        <Form.Item
          name="content"
          label={<span>停车场介绍</span>}
          rules={[
            {
              required: true,
              message: '请输入停车场介绍',
              whitespace: true,
            },
          ]}
        >
          <div style={{ height: 250 }}>
            <div ref={quillRef} />
          </div>
        </Form.Item>
        <Form.Item {...tailFormItemLayout} />
        <Form.Item {...tailFormItemLayout} style={{ marginTop: 30 }}>
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
