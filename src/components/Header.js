import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout, user }) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
          <Link className="header__title" to="/forums">
              <h1>Web Dev Network</h1>
          </Link>
          <Link className="button button--link" to="/chat">Chat Room</Link>
          <Link className="button button--link" to={`/users/${user.uid}`}>User Profile</Link>
        <button className="button button--link" onClick={startLogout}>Logout</button>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

const mapStateToProps = (state) => {
  return {
      user: state.auth
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
