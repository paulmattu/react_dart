import { useEffect, useState } from "react";
import Scoreboard from "./Scoreboard";
import { createClient } from '@supabase/supabase-js'
  // Create a single supabase client for interacting with your database
  const supabase = createClient('https://ktybjwdxzvjsskcozsvj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0eWJqd2R4enZqc3NrY296c3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0NjIyNTYsImV4cCI6MjAyMDAzODI1Nn0.QneI-B3l784NLS3C72_oqOtFRflHkS9t10220-5q8Hs')


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
