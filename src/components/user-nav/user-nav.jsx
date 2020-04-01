import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getAuthorizationStatusSelector, getUserSelector} from "../../selectors";

const UserNav = (props) => {
  const {authorizationStatus, user} = props;

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          {(authorizationStatus === `AUTH`) &&
          <Link to="/favorites" className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper"> </div>
            <span className="header__user-name user__name">{ user && user.email }</span>
          </Link>
          }
          {(authorizationStatus === `NO_AUTH`) &&
          <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
            <div className="header__avatar-wrapper user__avatar-wrapper"> </div>
            <span className="header__login">Sign in</span>
          </Link>
          }
        </li>
      </ul>
    </nav>
  );
};

UserNav.propTypes = {
  authorizationStatus: PropTypes.string,
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: getUserSelector(state),
    authorizationStatus: getAuthorizationStatusSelector(state)
  };
};

export {UserNav};
export default connect(mapStateToProps, null)(UserNav);
