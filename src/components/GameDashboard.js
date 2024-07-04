import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import { supabase } from "../supabaseClient";

function GameDashboard() {

  const [responseData, setResponseData] = useState();

  useEffect(() => {
    const fetchData = async () => {
    const { data, error } = await supabase.from('tmp_lol_summoner').select('name').eq('lol_id', 3)
    if (error){
      console.log(error);
    } else{
      setResponseData(data);
      console.log(data);
    }
  }
    fetchData();
    return () => {
    };
  },[]);


  return (
    <div className="GameDashboard">
      <header className="GameDashboard-header">
        <p>Moin GameDashboard</p>
        <Scoreboard />
      </header>
      <div>
      {responseData ? (
        <div>Summoner Name: {responseData[0].name}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
    </div>
  );
}

export default GameDashboard;
