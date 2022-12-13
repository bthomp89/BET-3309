import React, { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/logOutUser");
    navigate("/");
  }, []);
  return (
    <div>
      <Navigation />
    </div>
  );
}
