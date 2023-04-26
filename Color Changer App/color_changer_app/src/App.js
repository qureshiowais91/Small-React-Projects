import { useState } from "react";
import Colorchanger from "./components/colorChanger";
import Box from "./components/displayBox";

function App() {

  const [color,setColor] = useState("#ff0000");

  function setBackGroundValue(value){
    setColor(value)
  }


  return (
  
    <div className="App">
       <Colorchanger setBackGroundValue={setBackGroundValue}></Colorchanger>
       <Box BackGroundColor={color}/>
    </div>
  );
}

export default App;
