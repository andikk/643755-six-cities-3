import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import {getSortedOffersInCitySelector} from "../../selectors";
import Signin from "../signin/signin.jsx";
import history from "../../history.js";
import withRouteAuth from "../../hocs/with-route-auth.js";

const AuthRoute = withRouteAuth(Route);

class App extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter history={history}>
        <Switch>
          <Route exact path="/">
            <Main offers={offers}/>
          </Route>
          <Route exact path="/login" component={Signin}/>
          <AuthRoute exact path="/favorites">
            <Favorites/>
          </AuthRoute>
          <Route path="/offer/:id" exact component={Property}/>
          <Route
            render={() => (
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = (state) => ({
  offers: getSortedOffersInCitySelector(state),
});

export {App};
export default connect(mapStateToProps)(App);
