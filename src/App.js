import React from "react";

export default () => (
  <div style={{ padding: "2rem 3rem" }}>
    <h1 className="title">ubralo-react-app</h1>
    {helloworld}
  </div>
);

const helloworld = (
  <h2>
    <span role="img" aria-labelledby="hello World">
      😘 🌎
    </span>
  </h2>
);
