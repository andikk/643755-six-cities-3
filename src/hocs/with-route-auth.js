import React from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {Redirect} from "react-router-dom";
import {getAuthorizationStatusSelector} from "../selectors.js";

const withRouteAuth = (Component) => {
  function WithRouteAuth({hasAuth, ...props}) {
    const {location} = props;
    const currentLocation = location && location.pathname;

    return (hasAuth === `AUTH`) ? (
      <Component {...props}/>
    ) : (
      <Redirect
        to={{
          pathname: `/login`,
          state: {referrer: currentLocation},
        }}/>
    );
  }

  WithRouteAuth.propTypes = Component.propTypes;

  return WithRouteAuth;
};

const mapStateToProps = (state) => {
  return {hasAuth: getAuthorizationStatusSelector(state)};
};

export {withRouteAuth};
export default compose(
    connect(mapStateToProps),
    withRouteAuth
);
