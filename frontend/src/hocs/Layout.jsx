import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { connect } from 'react-redux';
import { checkAuthenticated, load_user } from '../actions/auth';

const Layout = ({ checkAuthenticated, load_user, children }) => {
    useEffect(() => {
        checkAuthenticated();
        load_user();
    }, []);
    const [isSignedIn, setIsSignedIn] = useState(window.location.href == "http://localhost:3000/sign-in")
  
    return (
        <div>
            {  !isSignedIn  ?  <Navbar/> : null }
            {children}
        </div>
    );
};

export default connect(null, { checkAuthenticated, load_user })(Layout);