import { useState } from "react";
import { supabase } from "./supabaseClient";

export default function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const handleSignUp = async (event) => {
    event.preventDefault();

    setLoading(true);
    if ((password == password2)) {
      const { error } = await supabase.auth.signUp({
        email: email,
        password: password,
        // options: {
        //   emailRedirectTo: "https://example.com/welcome",
        // },
      });
      if (error) {
        alert(error.error_description || error.message);
      } else {
        alert("Check your email for the login link!");
        console.log(error)
      }
    } else {
      alert("Passwörter stimmen nicht überein!");
    }
    setLoading(false);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      alert(error.error_description || error.message);
    }
    setLoading(false);
  };

  return (
    <div className="row flex flex-center">
      <div className="col-6 form-widget">
        <h1 className="header">Sign Up with your email below</h1>
        <form className="form-widget" onSubmit={handleSignUp}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password2}
              required={true}
              onChange={(e) => setPassword2(e.target.value)}
            />
          </div>
          <div>
            <button className={"button block"} disabled={loading}>
              {loading ? <span>Loading</span> : <span>sign Up</span>}
            </button>
          </div>
        </form>
        <h1 className="header">Sign In with your email below</h1>
        <form className="form-widget" onSubmit={handleSignIn}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={"button block"} disabled={loading}>
              {loading ? <span>Loading</span> : <span>sign In</span>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
