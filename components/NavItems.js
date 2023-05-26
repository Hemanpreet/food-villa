import {Link} from "react-router-dom";
import Instamart from "./Instamart";
// functional component 2-NavItems of Header i.e navbar
export const NavItems = () => (
    <div>
      <ul className="flex py-10">
      <Link to="/">
      <li className="px-3">Home</li>
      </Link> 
       <Link to="/about">
       <li className="px-3">About</li>
       </Link>
       <Link to="/contact">
        <li className="px-3">Contact</li>
        </Link>
        <Link to="/instamart">
          <li className="px-3">Instamart</li>
        </Link>
      </ul>
    </div>
  );
//   named export can export multiple components in a file
