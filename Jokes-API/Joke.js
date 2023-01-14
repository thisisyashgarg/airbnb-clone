import React from "react";

export default function Joke({ setup, punchline }) {
  // console.log(props);
  return (
    <div>
      {setup && <h3>Setup: {setup}</h3>}
      <p>Punchline: {punchline}</p>
      <hr />
    </div>
  );
}
