import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");

  const [password, setPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Будь ласка, заповніть всі поля.");
      return;
    }
    console.log({
      username,
      password,
    });
    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Логін:
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Пароль:
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleInputChange}
            required
          />
        </label>
        <br />
        <button type="submit">Вхід</button>
      </form>
    </div>
  );
};

export default Login;
