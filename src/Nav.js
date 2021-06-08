import React, {useEffect, useState} from "react";

function Nav() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setShow(true);
            } else {
                setShow(false)
            }
        });
        return () => {
            window.removeEventListener("scroll", () => {})
        }
    })
  return (
    <div className={`navbar ${show && 'nav-black'}`}>
      <div className="logo">
        <img src="images/logo.png" alt="" />
      </div>
      <div className="log-icon">
        <i class="fas fa-user"></i>
      </div>
    </div>
  );
}

export default Nav;
