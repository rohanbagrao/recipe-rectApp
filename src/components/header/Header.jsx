import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import './style.css';
import {
  MDBNavbar,
  MDBBtn,
  MDBContainer,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  return (

    <div>
      <MDBNavbar light bgColor='dark'>
        <MDBContainer tag="form" fluid className='justify-content-end'>
          {isAuthenticated ? (
             <>
            <MDBBtn outline color="secondary" size="sm" type='button' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
              Log Out
            </MDBBtn> 
            <Link to={`/save`}>
          <MDBBtn color='dark'>
        Saved Recipes
      </MDBBtn>
      </Link>
      </>
          ) : (
            <MDBBtn outline color="secondary" size="sm" type='button' onClick={() => loginWithRedirect()}>Log In</MDBBtn> 
          )}
          

        </MDBContainer>
      </MDBNavbar>
    </div>






  )
}

export default Header