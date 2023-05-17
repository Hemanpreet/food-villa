import {Link} from "react-router-dom";
// functional component 2-NavItems of Header i.e navbar
export const NavItems = () => (
    <div className="nav-items">
      <ul>
      <Link to="/">
      <li>Home</li>
      </Link>
       
       <Link to="/about">
       <li>About</li>
       </Link>
       <Link to="/contact">
        <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
//   named export can export multiple components in a file
