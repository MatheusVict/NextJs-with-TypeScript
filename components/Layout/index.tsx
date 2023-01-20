import React, { ReactNode, useState } from 'react'
import { Layout, Menu, MenuProps } from "antd";
import { ApartmentOutlined, AppstoreOutlined, BankOutlined, GiftOutlined } from '@ant-design/icons';
import {Typography} from 'antd';

const {Link} = Typography

const items: MenuProps['items'] = [
  {
    label: <Link href="/">Home</Link>,
    key: 'mail',
    icon: <BankOutlined />
  },
  {
    label: <Link href="/brands">Brands</Link>,
    key: 'app',
    icon: <AppstoreOutlined />,
    disabled: false,
  },
  {
    label: (
      <Link href='/computers'>Computers</Link>
    ),
    key: 'alipay',
    icon: <ApartmentOutlined />
  },
  {
    label: (
      <Link href='/deals'>Deals</Link>
    ),
    key: 'alipay',
    icon: <GiftOutlined />
  },
];

interface ApplicationLayoutProps {
  children: ReactNode
}

const {Header, Content, Footer} = Layout

const ApplicationLayout = ({children}: ApplicationLayoutProps) => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };
  return (
      <Layout>
        <Header><Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} theme='dark'/></Header>
        <Content>{children}</Content>
        <Footer>Project NextJs 20223</Footer>
      </Layout>
  )
}

export default ApplicationLayout