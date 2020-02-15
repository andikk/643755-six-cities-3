import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import Property from "../property/property.jsx";

class App extends PureComponent {
  constructor(props) {
    super(props);
  }


  render() {
    const {offersCount, offers} = this.props;


    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main offersCount={offersCount}
              offers={offers}
            />
          </Route>
          <Route path="/offer/:id">
            {console.log(123)}
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

export default App;
