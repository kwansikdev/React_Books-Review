import React from "react";

import { Layout, Menu, Icon } from "antd";

import withAuth from "../hocs/withAuth";
import BooksContainer from "../containers/BooksContainer";
import NavConatainers from "../containers/NavConatainers";

const Home = props => {
  const { SubMenu } = Menu;
  const { Content, Sider } = Layout;

  return (
    <Layout style={{ height: "100vh" }}>
      <NavConatainers />
      <Layout>
        <Sider width={200} style={{ background: "#fff" }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  User
                </span>
              }
            >
              <Menu.Item key="1">List</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "24px" }}>
          <Content
            style={{
              background: "#fff",
              padding: 24,
              margin: 0,
              minHeight: 280,
              borderRadius: "30px",
              overflowY: "auto"
            }}
          >
            <BooksContainer />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default withAuth(Home);
