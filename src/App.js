import React from "react";
// import Form from "./screen/Form";
// import Homes from "./routes/router";
import "./App.css";
import { TypeAnimation } from "react-type-animation";
import AppRouter from "./routes/Approuter";

// import "./style.css";
const App = () => {
  return (
    <>
      <div className="App">
        <h1>
          <TypeAnimation
            sequence={[
              "Welcome to the Lms System",
              1000,
              "LMS means Learning Management System",
              3000,
              "This will basically help the students",
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2em" }}
          />
        </h1>
        <AppRouter />
      </div>
    </>
  );
};

export default App;
