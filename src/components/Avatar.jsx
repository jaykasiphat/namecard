import React from "react";
import profilePic from "../assets/me.jpg";

export default function Avatar() {
  return <img src={profilePic} alt="profile picture" className="profile-pic" />;
}
