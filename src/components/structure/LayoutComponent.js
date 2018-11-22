import React from 'react';
import PropTypes from 'prop-types';
import {Layout} from 'antd';
const { Header, Content, Footer, Sider } = Layout;

import MenuComponent from './Menu';

import 'antd/dist/antd.css';

class LayoutComponent extends React.Component {
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => { console.log(broken); }}
          onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
          <div className="logo" />
          <MenuComponent />

        </Sider>


        <Layout>
          <Header style={{ background: '#fff', padding: '0 0 0 20px' }}>
            <p>Здесь будет компонент с header</p>
          </Header>
          <Content style={{ margin: '40px 16px 0' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Создано AKrivova
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

LayoutComponent.propTypes = {
  children: PropTypes.node
};

export default LayoutComponent;
