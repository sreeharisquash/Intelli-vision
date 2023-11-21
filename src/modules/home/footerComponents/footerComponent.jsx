import React from "react";

export default function Footer({ head, para }) {
  return (
    <>
      <h2>{head}</h2>
      <ul>
        <li>{para}</li>
      </ul>
    </>
  );
}
