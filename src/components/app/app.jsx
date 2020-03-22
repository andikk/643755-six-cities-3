import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Main from "../main/main.jsx";
import Favorites from "../favorites/favorites.jsx";
import Property from "../property/property.jsx";
import Signin from "../signin/signin.jsx";
import withRouteAuth from "../../hocs/with-route-auth.js";

const AuthRoute = withRouteAuth(Route);

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Signin}/>
        <AuthRoute exact path="/favorites" component={Favorites}/>
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

};

export default App;
