import React, { ReactNode } from 'react'
import { Layout } from "antd";


interface ApplicationLayoutProps {
  children: ReactNode
}

const {Header, Content, Footer} = Layout

const ApplicationLayout = ({children}: ApplicationLayoutProps) => {
  return (
      <Layout>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
      </Layout>
  )
}

export default ApplicationLayout