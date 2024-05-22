import { useEffect, useState } from "react";
import MyComponents from "./components/MyComponents";
import "./App.css";

function App() {
  /* --------------------------Code1 start--------------------------- */

  /*  
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
      console.log("App component is Mount ...");
    }, []);
  */

  /* --------------------------Code1 end--------------------------- */

  /* --------------------------Code2 start--------------------------- */

  /*
  const [time, setTime] = useState(0);
  useEffect(() => {
    // Mounted
    console.log("up --> " + time);
    setTimeout(() => {
      // SetTimeout Runs a function once after a specified delay.
      console.log("up " + time);
      setTime(time + 1);
      console.log("down " + time);
    }, 1000);
    console.log("down --> " + time);
  }, []);
  */

  /*
  const [time, setTime] = useState(0);
  useEffect(() => {
    // Mounted
    console.log("up --> " + time);
    setTimeout(() => {
      // SetTimeout Runs a function once after a specified delay.
      console.log("up " + time);
      setTime(time + 1);
      console.log("down " + time);
    }, 1000);
    console.log("down --> " + time);
  }, [time]);
  */

  /*
  const [time, setTime] = useState(0);
  useEffect(() => {
    // Mounted
    console.log("up --> " + time);
    const timer = setInterval(() => {
      // SetTimeout Runs a function once after a specified delay.
      console.log("up " + time);
      setTime(time + 1);
      console.log("down " + time);
    }, 1000);
    console.log("down --> " + time);
  }, []);
  */

  // /*
  const [time, setTime] = useState(0);
  useEffect(() => {
    // Mounted
    const timer = setInterval(() => {
      // SetTimeout Runs a function once after a specified delay.
      setTime(time + 1);
    }, 1000);
    return function () {
      clearInterval(timer);
    };
  }, [time]);
  // */

  /* --------------------------Code2 end--------------------------- */

  return (
    /* ---------------------------Code1 start-------------------------- */

    /*
    <div className="visible">
      {isVisible ? <MyComponents /> : <></>}
      <br />
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}>
        Toggle
      </button>
    </div>
    */

    /* ---------------------------Code1 end-------------------------- */

    /* --------------------------Code2 start--------------------------- */

    <div className="timer">
      <h2>StopWatch</h2>
      <h2>Current time is: {time}</h2>
    </div>

    /* --------------------------Code2 end--------------------------- */
  );
}

export default App;
