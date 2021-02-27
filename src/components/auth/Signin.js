import React from "react";
import { Link } from 'react-router-dom'


const Signin = () => {
  return( 
  <div className="mt-5">
  
    <div className="grid align__item">

      <div className="register">

        <img height="100px" src="https://avatars.githubusercontent.com/u/67744643?s=200&v=4" alt=""/>
       

        <h2>Sign In</h2>

        <form action="" method="post" className="form">

            <div className="form__field">
              <input type="email" placeholder="info@mailaddress.com" />
            </div>

            <div className="form__field">
              <input type="password" placeholder="••••••••••••" />
            </div>

            <div className="form__field">
              <input type="submit" value="Log In" />
            </div>

        </form>

        <p>Don't have an account? <Link to="/signup">Register Here</Link></p>

      </div>

    </div>
  
  </div>);
};

export default Signin;
