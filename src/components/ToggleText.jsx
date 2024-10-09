import { useState } from "react";


const ToggleText=()=>{
  const [statusShow,setStatusShow]=useState(false);
  const toggleTxt =()=>{
    setStatusShow(prevState => !prevState);
  }
  return(
    <div>
    
    <button 
    className="bg-gray-50 text-gray-500 text-xl px-10 py-3 mx-10"
    onClick={toggleTxt}>Enter</button>
    {statusShow && <p
    className="text-xl my-6 text-gray-600 mx-10">Hello,World!!</p>}
    
    </div>

  )
}


export default ToggleText;