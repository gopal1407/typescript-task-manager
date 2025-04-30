import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  return (
    <nav style={{ padding: "10px" }}>
      <Link to="/">Dashboard</Link>{" | "}
      {isAuthenticated && (
  <>
    <Link to="/profile" style={{ marginLeft: "10px" }}>Profile</Link>
    <span style={{ marginLeft: "10px" }}>
      Welcome, {user?.name || user?.email}
    </span>
    <button
      onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
      style={{ marginLeft: "10px" }}
    >
      Logout
    </button>
  </>
)}

    </nav>
  );
};


export default Navbar;
