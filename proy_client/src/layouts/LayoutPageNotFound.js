import React from "react";
import { Layout } from "antd";
export default function LayoutPageNotFound(props) {
  const { children } = props;
  return (
    <Layout>
      <h2>Pagina no encontrada</h2>
      
      {children}
    </Layout>
  );
}