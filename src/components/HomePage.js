import { useNavigate } from "react-router-dom";

function HomePage() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/dashboard");
  }

  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <p>Moin HomePage</p>
        <button onClick={handleClick}>Go to Game Dashboard</button>
      </header>
    </div>
  );
}

export default HomePage;
