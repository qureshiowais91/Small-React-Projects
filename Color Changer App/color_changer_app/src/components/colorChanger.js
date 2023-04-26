
function Colorchanger(prop) {
    function colorChangeHandler(event){
        prop.setBackGroundValue(event.target.value);
    }


  return (
    <div>
      <p>Choose your  colors:</p>
      <label>Color</label>

      <input onClick={colorChangeHandler} type="button"   value="#ffaaaa"></input>
      
      <input onClick={colorChangeHandler} type="button"  value="#000011"></input>
    
    </div>
  );
}

export default Colorchanger;
