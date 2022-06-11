import React, { useState } from "react"


function App() {
  // const nameStateVariable = useState("Rahul");            //Its an array
  // console.log("nameStateVariable :", nameStateVariable);
  // const handleClick = () => {
  //   nameStateVariable[1]("Shashank Shekhar");
  // };
  // Does the same thing as above
  const [name, setName] = useState("Rahul");              //Destructured the array
  console.log(name);
  const handleClick = () => {
    setName("Shashank Shekhar")
  };
  return (
    <React.Fragment>
      {/* <h1>{nameStateVariable[0]}</h1>                     //For line 5  */}
      <h1>{name}</h1>
      <button onClick={handleClick}>Change</button>
    </React.Fragment>
  );
}
export  default App;
