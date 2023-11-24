/* eslint-disable react/prop-types */
//import { useState } from 'react'
import "./App.css";
import Button from "./propscomponent";

// function App() {
//   return (
//     <>
//       <Button title={"Click Me!"} color={"null"}>
//         <p>Ini Merupakan Child Componen</p>
//       </Button>
//       <Button title={"Click Me!"} color={"red"}>
//         <p>Ini Merupakan Child Componen</p>
//       </Button>
//       <Button title={"Click Me!"} color={"yellow"}>
//         <p>Ini Merupakan Child Componen</p>
//       </Button>
//     </>
//   );
// }

function App() {
  return (
    <>
      <Button title="Click Me!" color="null">
        <p>Ini Merupakan Child Componen</p>
      </Button>
      <Button title="Click Me!" color="red">
        <p>Ini Merupakan Child Componen</p>
      </Button>
      <Button title="Click Me!" color="yellow">
        <p>Ini Merupakan Child Componen</p>
      </Button>
    </>
  );
}

export default App;
