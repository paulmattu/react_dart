import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'
import GameDashboard from "./components/GameDashboard";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/HomePage";

import { supabase } from "./supabaseClient";
import Auth from "./Auth";
import Account from "./Account";

function App() {
  const [session, setSession] = useState(null);
  const basename = process.env.REACT_APP_BASENAME || "";

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    // <Router basename={basename}>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/dashboard" element={<GameDashboard />} />
    //     {/* weitere Routen hier */}

    //     {/* Fallback-Route für nicht definierte Pfade */}
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </Router>
    <div className="container" style={{ padding: "50px 0 100px 0" }}>
      {!session ? (
        <Auth />
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
}

export default App;
