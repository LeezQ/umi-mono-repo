import React from 'react';
import { Spin } from 'antd';

// loading components from code split
// https://umijs.org/plugin/umi-plugin-react.html#dynamicimport
export default () => (
  <div style={{ position: 'absolute', top: '40%', left: 0, right: 0, textAlign: 'center' }}>
    <Spin size="large" />
    <p style={{ fontSize: '18px', marginTop: '24px' }}>页面加载中...</p>
  </div>
);
