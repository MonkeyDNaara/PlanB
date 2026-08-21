const SignUp = () => {
  return (
    <div className="login-container">
      <h2>Sign Up right now and become a part of the culture</h2>
      <form action="submit">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button id="loginButton">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
