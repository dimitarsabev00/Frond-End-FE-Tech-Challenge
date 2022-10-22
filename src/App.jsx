import "./App.css";
import NavBar from "./components/NavBar";
import Posts from "./components/Posts";
import Users from "./components/Users";

function App() {
  return (
    <div className="container">
      <NavBar />
      <Posts />
      <Users />
    </div>
  );
}

export default App;
