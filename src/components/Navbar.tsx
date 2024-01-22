import { useState } from "react";

export const Navbar = () => {
  const [userData, setUserData] = useState({});
  return (
    <nav>
      <ul>
        <li>MIXBUSS</li>
        <div>
          <li>HOME</li>
          {userData ? <li>LOGOUT</li> : <li>LOGIN</li>}
        </div>
      </ul>
    </nav>
  );
};
