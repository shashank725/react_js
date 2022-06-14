import React, { useState, useEffect } from "react"


// // useState Hook
// function App() {
//   // const nameStateVariable = useState("Rahul");            //Its an array
//   // console.log("nameStateVariable :", nameStateVariable);
//   // const handleClick = () => {
//   //   nameStateVariable[1]("Shashank Shekhar");
//   // };
//   // Does the same thing as above
//   const [name, setName] = useState("Rahul");              //Destructured the array
//   console.log(name);
//   const handleClick = () => {
//     setName("Shashank Shekhar")
//   };
//   return (
//     <React.Fragment>
//       {/* <h1>{nameStateVariable[0]}</h1>                     //For line 5  */}
//       <h1>{name}</h1>
//       <button onClick={handleClick}>Change</button>
//     </React.Fragment>
//   );
// }
// export  default App;



// useEffect Hook
function App(){
  const [countUp, setCountUp] = useState(0);
  const [countDown, setCountDown] = useState(25);
  const handleIncrement = () => {
    setCountUp(countUp + 1);
  };
  const handleDecrement = () => {
    setCountDown(countDown - 1);
  };
  // useEffect(() => {
  //   console.log("useEffect called");
  // });
  useEffect(() => {                   //Another way of writing useEffect (It only runs when the element in the list changes)
    console.log("useEffect called");
  }, [countUp]);
  console.log("Rendered");
  return (
    <React.Fragment>
      <h1>Count Up : {countUp}</h1>
      <button onClick={handleIncrement}>Increment</button>

      <h1>Count Down : {countDown}</h1>
      <button onClick={handleDecrement}>Decrement</button>
    </React.Fragment>
  )
}
export default App;
