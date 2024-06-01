import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UserData from "./components/UserData";

function App() {
  const [username, setUsername] = useState("sayeesh007");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSumbit = () => {
    fetchUserData();
  };
  async function fetchUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const result = await response.json();
    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchUserData();

    return () => {};
  }, []);

  return (
    <>
      <input
        type="text"
        name="profile"
        id="profile-input"
        placeholder="Search the Github user"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSumbit}>search</button>
      {loading? <h1>Loading........</h1>:<UserData props={data}/>}
    </>
  );
}

export default App;
