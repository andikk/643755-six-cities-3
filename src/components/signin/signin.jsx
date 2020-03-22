import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getAuthorizationStatusSelector} from "../../selectors.js";
import {Operation} from "../../reducer";

class Signin extends PureComponent {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate(prevProps) {
    const {authorizationStatus, history, location} = this.props;
    const {state: {referer = `/`} = {}} = location;

    if (prevProps.authorizationStatus !== this.props.authorizationStatus) {
      return (authorizationStatus === `NO_AUTH`) ? true : history.push(referer);
    }

    return true;
  }

  handleSubmit(evt) {
    const {login} = this.props;

    evt.preventDefault();

    return login({
      login: this.loginRef.current.value,
      password: this.passwordRef.current.value,
    });
  }

  render() {

    return (
      <div className="page page--gray page--login">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link to='/' className="header__logo-link" href="#">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">

                    <Link to="/login" className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper"> </div>
                      <span className="header__login">Sign in</span>
                    </Link>

                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--login">
          <div className="page__login-container container">
            <section className="login">
              <h1 className="login__title">Sign in</h1>
              <form action=""
                onSubmit={this.handleSubmit} className="login__form form" method="post">
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">E-mail</label>
                  <input className="login__input form__input" ref={this.loginRef} type="email" name="email" placeholder="Email" required=""/>
                </div>
                <div className="login__input-wrapper form__input-wrapper">
                  <label className="visually-hidden">Password</label>
                  <input className="login__input form__input" ref={this.passwordRef} type="password" name="password" placeholder="Password"
                    required=""/>
                </div>
                <button className="login__submit form__submit button" type="submit">Sign in</button>
              </form>
            </section>
            <section className="locations locations--login locations--current">
              <div className="locations__item">
                <a className="locations__item-link" href="#">
                  <span>Amsterdam</span>
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    );
  }
}

Signin.propTypes = {
  login: PropTypes.func.isRequired,
  authorizationStatus: PropTypes.string,
  history: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatusSelector(state)
  };
};

const mapDispatchToProps = (dispatch) => ({
  login: (authData) => dispatch(Operation.login(authData))
});

export {Signin};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
