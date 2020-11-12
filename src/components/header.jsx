import React from "react";

export default function Header() {
  return (
    <div className="d-flex justify-content-between wrapper">
      <div className="w-25">
        <img
          src="http://192.168.1.100:85/assets/img/redbus_india_logo.png"
          alt=""
          height="100px"
          width="100px"
        />
      </div>
      <div className="d-flex w-25">
        <div
          style={{ backgroundColor: "orange", height: "20px" }}
          className="w-25 border m-2 text-center"
        >
          SIGNUP
        </div>
        <div
          style={{ backgroundColor: "orange", height: "20px" }}
          className="w-25 border m-2 text-center"
        >
          LOGIN
        </div>
      </div>
    </div>
  );
}