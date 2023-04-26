function Guessnumber(prop) {
  function submitHandler(event){
    event.preventDefault()
    prop.enteredNumber(event.target[0].value)
    console.log(event.target[0].value)

  }

  return (
    <div>
      <form onSubmit={submitHandler} >
      <input type="number" />
      <button  type="submit">Check</button>
        {/* {console.log(prop.flag)} */}
        { prop.flag ? <p>Correct</p> : <p>Incorrect</p>}
       </form> 
    </div>
  );
}


export default Guessnumber;
