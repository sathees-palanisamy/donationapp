import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <ul className="navStyle">
        <li>
         
          <Link to="/">Home</Link>
      
        </li>
        <li>
          <Link to="/form">Form</Link>
        </li>
        <li>
          <Link to="/list">List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
