import { Link, Navigate } from 'react-router-dom';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';
import { useState } from 'react';

const Register = () => {
  const [isLogin, setIsLogin] = useState(false);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      setIsLogin(res);
    } catch (err) {
      console.log(err);
    }
  };

  //   const signInWithGoogle = () => {
  //     signInWithPopup(auth, provider)
  //       .then((res) => console.log(res))
  //       .catch((error) => console.log(error));
  //   };

  return (
    <div className="form-container">
      <h2 className="form-title">Register</h2>
      <form className="form">
        <div className="input-group">
          <input type="text" placeholder="user name" id="displayName" />
          <label htmlFor="displayName">Name</label>
        </div>
        <div className="input-group">
          <input type="email" placeholder="email" id="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-group">
          <input type="password" placeholder="password" id="password" />
          <label htmlFor="password">Password</label>
        </div>
        <button className="accent-btn">Sign Up</button>
      </form>
      <p>
        Have an account? <Link to={'/login'}>Log in</Link>
      </p>
      <button onClick={signInWithGoogle}>Sign In with Google </button>
      {isLogin && (
        <Navigate
          to={'/'}
          state={JSON.parse(JSON.stringify(isLogin))}
          replace={true}
        />
      )}
    </div>
  );
};

export default Register;
