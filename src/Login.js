import React from "react";

export default function Login() {
  const title = "Login";
  const subTitle = "Login with Social Media";
  const btnText = "Login Now";
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log();
    alert("successfully Login");
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleLogin}>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  placeholder="Email Address "
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  placeholder="password  "
                  required
                />
              </div>
              <div className="form-group">
                <div className=" d-flex  justify-content-between  flex-wrap ">
                  <div className="checkgroup">
                    <input type="checkbox" name="remember" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="lab-btn">
                  {btnText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
