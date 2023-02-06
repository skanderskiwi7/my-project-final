import "../Navbar/navbar.css";
import React from "react";
import SearchBar from "../searchbar/SearchBar";
const NavBar = () => {
  return (
    <div>
      <ul>
        <li class="mak">Home</li>
        <li class="mak">Contact us</li>
        <li>
          <SearchBar />
        </li>
      </ul>

      {/* <a
        class="shameless-plug"
        href="https://scottyzen.com/?cp"
        target="_blank"
      ></a> */}
    </div>
  );
};
export default NavBar;
