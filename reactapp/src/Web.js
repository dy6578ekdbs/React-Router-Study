import React from "react";
import { Link, Route } from "react-router-dom";
import WebPost from "./WebPost";

const Web = () => {
  return (
    <div>
      <h1>This is Web</h1>
      <ul>
        <li>
          <Link to="1">Post #1</Link>
        </li>
        <li>
          <Link to="2">Post #2</Link>
        </li>
        <li>
          <Link to="3">Post #3</Link>
        </li>
        <li>
          <Link to="4">Post #4</Link>
        </li>
      </ul>

    </div>
  );
};

export default Web;