import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

class MainPage extends React.Component {
  static propTypes = {
  };
  static defaultProps = {
  };
  render() {
    return (
      <Col xs={{ span: 5 }} lg={{ span: 24 }}>
        <Row>
          <Col span={12}>col-12</Col>
          <Col span={12}>col-12</Col>
        </Row>
      </Col>
    );
  }
}
export default connect()(MainPage);