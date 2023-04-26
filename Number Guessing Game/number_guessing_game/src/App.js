import { useState } from "react";
import "./App.css";
import Guessnumber from "./components/Guessnumber";


function App() {
  const [flag,setFlag] = useState(false);
  function getNumber(value) {
    if(value!=0){
      setFlag("not in range")
    }
    else if(value === parseInt(Math.random()*10) ){
      setFlag(true)
    }else{
      setFlag(false)
      console.log("value")
    }
  }
  return (
    <div className="App">
      <Guessnumber enteredNumber={getNumber}  flg={flag}></Guessnumber>
    </div>
  );
}

export default App;
