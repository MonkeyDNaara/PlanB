const Login = () => {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form action="submit">
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />
        <button id="loginButton">Login</button>
      </form>
    </div>
  );
};

export default Login;
