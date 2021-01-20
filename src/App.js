import React, { useState } from "react";
import './App.css';

function App() {
  const [getin , setgetin] = useState("");


  // function Get Text in
  function gettingIN(event) {
    var textin = event.target.value;
    setgetin(textin);
  }

  return (
    <div className="maindiv">

      {/* create note button */}
      <div className="cont1">
      <button>
        Create Note
      </button>
      </div>

      {/* show written notes here  */}
      <div className="cont2">

      </div>

      {/* show write note div */}
      <div className="cont3">
       <form>
         <textarea id="getin" placeholder="Write Note here" onChange={gettingIN}>
         </textarea>
       </form>
      </div>
      



    </div>
  );
}

export default App;
