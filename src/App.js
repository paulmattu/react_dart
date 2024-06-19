import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameDashboard from "./components/GameDashboard";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/HomePage";

function App() {
  const basename = process.env.REACT_APP_BASENAME || '';
  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<GameDashboard />} />
        {/* weitere Routen hier */}

        {/* Fallback-Route für nicht definierte Pfade */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
