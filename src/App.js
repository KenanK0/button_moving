import logo from "./logo.svg";
import "./App.css";

function App() {
  const moveIt = (e) => {
    //to move it inside a container only, we need to put the button inside a container,put the container in a relative postion
    // give the container an height and width
    //  get the container width and height
    // const container = e.target.parentElement;
    // const availableWidth = container.clientWidth - e.target.offsetWidth;
    // const availableHeight = container.clientHeight - e.target.offsetHeight;

    // e.target.style.backgroundColor = "purple";

    const availableWidth = window.innerWidth - e.target.offsetWidth;
    const availableHeight = window.innerHeight - e.target.offsetHeight;
    e.target.style.position = "absolute";
    e.target.style.top = Math.floor(Math.random() * availableHeight) + "px";
    e.target.style.left = Math.floor(Math.random() * availableWidth) + "px";

    // e.target.style.backgroundColor = "purple";
    e.target.style.position = "absolute";
    e.target.style.top = Math.floor(Math.random() * availableHeight) + "px";
    e.target.style.left = Math.floor(Math.random() * availableWidth) + "px";
  };
  return (
    <div className="App">
      {/* <div id="container"> */}
        <button onMouseOver={moveIt}>Kenan K</button>
      {/* </div> */}
    </div>
  );
}

export default App;
