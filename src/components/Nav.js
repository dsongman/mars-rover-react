import React, {Component} from 'react';
import {DatePicker, Menu} from 'antd';
import moment from 'moment';

import './Nav.css';

const DEFAULT_KEYS = ['curiosity'];

/**
 * @class Menu
 * @extends {Component}
 */
class Nav extends Component {
  /**
   * @memberof Menu
   */
  constructor() {
    super();
    this.onClickMenuItem = this.onClickMenuItem.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
  }
  /**
   * @param {String} rover 
   * @memberof Menu
   */
  onClickMenuItem(rover) {
    console.log(rover);
  }
  /**
   * @param {any} date 
   * @param {any} dateString 
   * @memberof Menu
   */
  onChangeDate(date, dateString) {
    console.log(date, dateString);
  }
  /**
   * @returns {Component}
   * @memberof Menu
   */
  render() {
    return (
      <div className="Nav">
        <Menu className="Nav__Menu" defaultSelectedKeys={DEFAULT_KEYS} mode="horizontal" onClick={this.onClickMenuItem}>
          <Menu.Item className="Nav__Menu__Item" key="curiosity">Curiosity</Menu.Item>
          <Menu.Item className="Nav__Menu__Item" key="opportunity">Opportunity</Menu.Item>
          <Menu.Item className="Nav__Menu__Item" key="spirit">Sprit</Menu.Item>
        </Menu>
        <div className="Nav__DatePicker">
          <DatePicker onChange={this.onChangeDate} defaultValue={moment()} format="M/D/YYYY" />
        </div>
      </div>
    );
  }
}

export default Nav;
