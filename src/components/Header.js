import React from "react";
import { Link } from "react-router-dom";
import style from "../style/header.module.css";

function Header() {
  return (
    <div className={style.Header}>
      <Link exact to="/explore">
        <img src="/images/search.png" />
      </Link>
      <div className={style.navItems}>
        <Link exact to="/friends_invite">
          <img src="/images/invite.png" />
        </Link>
        <Link exact to="/upcoming">
          <img src="/images/calendar.png" />
        </Link>
        <Link exact to="/activity">
          <img src="/images/noti.png" />
        </Link>
        <Link exact to="/profile">
          <img src="/images/b1.png" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
