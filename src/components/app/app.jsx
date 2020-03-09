import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {connect} from "react-redux";
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";
import {getSortedOffersInCitySelector} from "../../selectors";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main offers={offers}
            />
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
};

const mapStateToProps = (state) => ({
  offers: getSortedOffersInCitySelector(state),
});

export {App};
export default connect(mapStateToProps)(App);
