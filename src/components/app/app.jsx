import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {getSortedOffersInCitySelector} from "../../selectors";
import Signin from "../signin/signin.jsx";
import {ActionCreator, Operation} from "../../reducer";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers, login} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main offers={offers}
            />
          </Route>
          <Route exact path="/login">
            <Signin onSubmit={login}/>
          </Route>
          <Route path="/offer/:id">
            {({match}) => (
              <Property card={offers[match.params.id]}/>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  offers: getSortedOffersInCitySelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(Operation.login(authData));
  }
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
