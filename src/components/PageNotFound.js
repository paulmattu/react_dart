import { useNavigate } from "react-router-dom";

function PageNotFound() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div className="PageNotFound">
      <header className="PageNotFound-header">
        <p>Moin PageNotFound</p>
        <button onClick={handleClick}>Go to Home</button>
      </header>
    </div>
  );
}

export default PageNotFound;