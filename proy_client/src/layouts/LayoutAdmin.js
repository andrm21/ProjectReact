import React, { useState } from "react";
import { Layout } from "antd";
import MenuTop from "../components/AdminComponents/MenuTop";
import MenuSider from "../components/AdminComponents/MenuSider";
import "./LayoautAdmin.scss";

export default function LayoutAdmin() {
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <MenuSider menuCollapsed={menuCollapsed} />
      <Layout className='layout-admin'>
        <Header className='layout-admin-header'>
          <MenuTop
            menuCollapsed={menuCollapsed}
            setMenuCollapsed={setMenuCollapsed}
          />
        </Header>
        <Content className='layout-admin-content'>
          <h1>Rutas</h1>
        </Content>
        <Footer className='layout-admin-footer'>MERN React</Footer>
      </Layout>
    </Layout>
  );
}