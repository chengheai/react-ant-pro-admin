import React from 'react';
import { useHistory } from 'umi';
import { Card } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

const Park: React.FC = ({ children }) => {
  const history = useHistory();

  return history?.location?.pathname === '/park/voucher-config' ? (
    <>{children}</>
  ) : (
    <PageHeaderWrapper>
      <Card>{children}</Card>
    </PageHeaderWrapper>
  );
};

export default Park;
