import React from 'react';
import {DatePicker, Menu} from 'antd';

import './Nav.css';

/**
 * Nav Component
 * 
 * @param {Object} param
 * @param {Array} param.rover
 * @param {Moment} param.date
 * @param {Function} param.onClickMenuItem
 * @param {Function} param.onChangeDate
 * @returns {Component}
 */
const Nav = ({rover, date, onClickMenuItem, onChangeDate}) => (
  <div className="Nav">
    <Menu className="Nav__Menu" selectedKeys={rover} mode="horizontal" onClick={onClickMenuItem}>
      <Menu.Item className="Nav__Menu__Item" key="curiosity">Curiosity</Menu.Item>
      <Menu.Item className="Nav__Menu__Item" key="opportunity">Opportunity</Menu.Item>
      <Menu.Item className="Nav__Menu__Item" key="spirit">Sprit</Menu.Item>
    </Menu>
    <div className="Nav__DatePicker">
      <DatePicker onChange={onChangeDate} value={date} format="M/D/YYYY" />
    </div>
  </div>
);

export default Nav;
