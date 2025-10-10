import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web & Mobile Developer",
          "Angular | React Native | NestJS",
          "Frontend Specialist",
          "Passionate about Scalable Apps",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
