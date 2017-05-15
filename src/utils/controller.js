import React, { Component } from "react";
import PropTypes from "prop-types";
import History from "react-history/BrowserHistory";

import theme from "../themes/default";
import Context from "./context";

export default class Controller extends Component {
  static propTypes = {
    children: PropTypes.node,
    store: PropTypes.object,
    theme: PropTypes.object
  }
  render() {
    const styles = this.props.theme ? this.props.theme : theme();
    return (
      <History>
        {(history) => {
          const { action, location } = history;
          const printEnabled = location.search.indexOf("print") !== -1;
          return (
            <Context
              store={this.props.store}
              history={history}
              styles={printEnabled ? styles.print : styles.screen}
            >
              {this.props.children}
            </Context>
          );
        }}
      </History>

    );
  }
}
