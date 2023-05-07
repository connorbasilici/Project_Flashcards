import React from "react";
import { Link } from "react-router-dom";

export default function BreadCrumbNav({
  pageName = "Page Name",
  link = "",
  linkName = "",
}) {
  return (
    <>
      <div className="row">
        <Link to="/">Home</Link>
        <Link to={link}>{linkName}</Link>
        <p>/ {pageName}</p>
      </div>
    </>
  );
}
