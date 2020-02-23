import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeId: -1
    };

    this._onHeaderClickHandle = this._onHeaderClickHandle.bind(this);
  }

  _onHeaderClickHandle(id) {
    this.setState({
      activeId: id
    });
  }

  _renderApp() {
    const {offersCount, offers} = this.props;
    const {activeId} = this.state;

    if (activeId < 0) {
      return (
        // <Main offersCount={offersCount}
        //   offers={offers} onHeaderClick={this._onHeaderClickHandle}
        // />
        <Main/>
      );
    }

    if (activeId >= 0) {
      return (
        <Property card={offers[activeId]}/>
      );
    }

    return null;
  }

  render() {
    const {offers} = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {this._renderApp()}
          </Route>
          <Route path="/offer/">
            <Property card={offers[0]}/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export {App};
export default connect(mapStateToProps)(App);
