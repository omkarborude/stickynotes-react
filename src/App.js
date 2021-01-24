import React, { useState } from "react";
import './App.css';

function App() {
  const [getin,setgetin] = useState(null);
  const [showwritenote,setshowwritenote] = useState(false);

  const [notelist,updateNoteList] = useState([]);


 

  // function Get Text in
  function gettingIN(event) {
    var textin = event.target.value;
    setgetin(textin);
  }


  const addNoteHandler = () =>  {
    updateNoteList((oldnotes) => {
      return [...oldnotes,getin];
    }) 
  }



  


  return (
    <div className="maindiv">

      {/* create note button */}
      <div className="cont1">
       <button onClick={() => setshowwritenote(true)} id="createBTN">
        Create Note
       </button>
      </div>

      {/* show written notes here  */}
      <div className="cont2">
        {
          notelist.map((noteval) => {
             return <li> {noteval} </li>
          })
        }
      </div>

      {/* show write note div */}
      {
      showwritenote?
      <div className="cont3">
       <form>
         <textarea id="getin" placeholder="Write Note here" onChange={gettingIN}>
         </textarea>

         <i class="fas fa-check-square" id="checkBTN" onClick={addNoteHandler}></i>
         <i class="fas fa-window-close" id="cutBTN" onClick={() => setshowwritenote(false)}></i>
       </form>
      </div>:null
      }
      



    </div>
  );
}

export default App;
