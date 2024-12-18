import "./App.css";
import Nav from "./Components/Nav";
import LogIn from "./Components/LogIn";
import { useEffect, useState } from "react";
import DashBoard from "./Components/DashBoard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // explain dependancy array
  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);

  return (
    <div>
      <Nav loggedIn={loggedIn} />
      {loggedIn ? (
        <DashBoard />
      ) : (
        <LogIn setLoggedIn={setLoggedIn} name={"Cesar"} />
      )}
    </div>
  );
}

export default App;
