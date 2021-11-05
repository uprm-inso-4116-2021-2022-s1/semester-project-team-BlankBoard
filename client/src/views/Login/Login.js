/* eslint-disable no-undef */
import { React, useState } from "react";
import { useCookies } from "react-cookie";

const Login = () => {
  const [cookies, setCookie] = useCookies(["user"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div style={styles.div0}>
      <div style={styles.div1}>
        <h1 style={styles.h1}>Log In</h1>
        <h3 style={styles.h3}>
          New to Blank Board? <a href="/Register">Create a new account!</a>
        </h3>

        <form style={styles.form}>
          <lable for="email" style={styles.lable}>
            Email
          </lable>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="bb@gmail.com"
            style={styles.input}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <br></br>
          <lable
            for="pwd"
            style={styles.lable}
            onChange={(e) => setPassword(e.target.value)}
          >
            Password{" "}
          </lable>
          <br></br>
          <input
            type="password"
            id="pwd"
            name="pwd"
            placeholder="•••••••••"
            style={styles.input}
          ></input>
          <button>{cookies.user}</button>
          <button
            type="submit"
            style={styles.submitBtn}
            onClick={handleCookies}
          >
            {" "}
            Log In
          </button>
        </form>
      </div>
      <div style={styles.div2}>
        <h1>[LOGO]</h1>
        <h1 style={styles.middleOR}>OR</h1>
      </div>
      <div style={styles.div3}>
        <button type="button" style={styles.googlelBtn}>
          Continue with Google
        </button>
        <button type="button" style={styles.linkeinBtn}>
          Continue with LinkedIn
        </button>
        <button type="button" style={styles.facebookBtn}>
          Continue with Facebook
        </button>
      </div>
    </div>
  );

  function handleCookies() {
    setCookie("user", email, { path: "/", maxAge: 3600 });
  }
};

const styles = (StyleSheet.create = {
  googlelBtn: {
    backgroundColor: "red",
    color: "white",
    fontSize: "26px",
    width: "80%",
    border: "0px solid",
    borderRadius: "5px",
    margin: "35% 0 10% 10%",
    padding: "10px 30px",
  },

  linkeinBtn: {
    backgroundColor: "navy",
    color: "white",
    fontSize: "26px",
    width: "80%",
    border: "0px solid",
    borderRadius: "5px",
    margin: "0 0 10% 10%",
    padding: "10px 30px",
  },

  facebookBtn: {
    backgroundColor: "blue",
    color: "white",
    fontSize: "26px",
    width: "80%",
    border: "0px solid",
    borderRadius: "5px",
    margin: "0% 0 10% 10%",
    padding: "10px 30px",
  },

  div0: {
    backgroundColor: "#efb6b6",
  },

  div1: {
    display: "grid",
    width: "45%",
    float: "left",
    padding: "0 0 10% 0",
  },

  div2: {
    display: "grid",
    width: "10%",
    float: "left",
    padding: "0 0 10% 0",
  },

  div3: {
    display: "grid",
    width: "45%",
    float: "left",
    padding: "0 0 10% 0",
  },

  form: {
    margin: "0 10% 0 20%",
  },

  input: {
    margin: "8px 0 28px 0",
    borderRadius: "5px",
    border: "1px solid black",
    fontSize: "26px",
    width: "100%",
  },

  lable: {
    fontSize: "26px",
  },

  h1: {
    margin: "20% 0% 1% 20% ",
    fontSize: "40px",
  },

  h3: {
    margin: "0% 0% 10% 20% ",
  },

  middleOR: {
    padding: "200% 0% 150% 0%",
    textAlign: "center",
  },

  submitBtn: {
    backgroundColor: "black",
    color: "#eee",
    borderRadius: "5px",
    border: "0px solid",
    fontSize: "26px",
    width: "101%",
    padding: "10px 0px",
    margin: "5% 0",
  },
});

export default Login;
