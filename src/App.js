import React from 'react'
import 'antd/dist/antd.css'
import './index.css'
import './App.css'

import { Breadcrumb, Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

function App() {
    const menuItems = [
        { key: '1', label: 'Home' },
        { key: '2', label: 'Professional' },
        { key: '3', label: 'Personal' },
        { key: '4', label: 'Contact' },
    ]

    return (
        <Layout className="layout" style={{ minHeight: '100vh' }}>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
            </Header>
            <Content>
                <div className="site-layout-content">Content</div>
            </Content>
            <Footer>©2022 Created by Cameron Dunning</Footer>
        </Layout>
    )
}

export default App
