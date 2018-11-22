import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Icon, Button } from 'antd';

class MenuComponent extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={this.state.collapsed}
      >
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>Главная</span>
          <NavLink to='/' className='nav-link' />
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="desktop" />
          <span>О проекте</span>
          <NavLink to='/about' className='nav-link' />
        </Menu.Item>
      </Menu>
    );
  }
}


export default MenuComponent;