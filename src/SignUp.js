import { useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [accept, setAccept] = useState(false);
  const [send, setSend] = useState(false);
  // console.log(name, email, password, confirmPassword);
  function hundleSubmit(event) {
    event.preventDefault();
    setAccept(true);
    if (name === "" || password.length < 8 || confirmPassword !== password) {
      setSend(false);
      console.log("erorrrrrrrrr");
    } else console.log("sessufle regisist");
  }
  return (
    <div className="login-section padding-tb section-bg">
      <div className="container sign_form ">
        <div className="account-wrapper sign_form ">
          <form onSubmit={hundleSubmit}>
            <label htmlFor="name">Name :</label>
            <input
              type="text"
              placeholder="name...."
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {name === "" && accept && <p> this field is required </p>}
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              placeholder="example@mail.com"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {password.length < 8 && accept && (
              <p> the password must more than 8 charchter</p>
            )}
            <label htmlFor="confirm">Confirm Password :</label>
            <input
              type="password"
              placeholder="password"
              id="confirm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {confirmPassword !== password && accept && (
              <p> the password is not match</p>
            )}
            <div style={{ textAlign: "center" }}>
              <button type="submit" onClick={hundleSubmit}>
                Registar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
