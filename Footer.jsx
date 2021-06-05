import React from "react";

var curryear = new Date().getFullYear();
function Footer() {
  return (
    <footer>
      <p>copyright @ {curryear}</p>
    </footer>
  );
}

export default Footer;
