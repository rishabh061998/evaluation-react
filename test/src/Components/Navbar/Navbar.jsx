//import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        {/* Populate 5 buttons with EXACT same classnames as of their routes name */}
        <button className="home" style={{display:"block"}}>Home</button>
            <button className="history"style={{display:"inline-block"}}> History </button>  
         
            <button className="Mystery">Mystery</button>
            <button className="Mythology">Mythology</button>
            <button className="Technology">Technology</button>
    
      </div>
    </>
  );
};
