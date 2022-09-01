import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });
//   console.log(user);
  const db = [
    {
      username: "user1",
      password: "test",
    },
  ];

  const inputHandler = (e) => {
    // console.log(e);
    setUser((all) => ({ ...all, [e.target.name]: e.target.value }));
  };

  let handleForm = (e) => {
    e.preventDefault();
    if (user.username === "" || user.password === "") {
      return alert("All fields required");
    } else {
      console.log(user);
    }
  };

  return (
    <form>
      <h2>Please login</h2>
      <label>
        <input
          placeholder="Username"
          type="text"
          name="username"
          onChange={inputHandler}
        //   required
        />
      </label>
      <label>
        <input
          placeholder="Password"
          type="password"
          name="password"
          onChange={inputHandler}
        //   required
        />
      </label>
      <input type="submit" onClick={handleForm} />
    </form>
  );
};

export default Login;
