import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "bootstrap/dist/css/bootstrap.css";
import Form from "./components/Form";
import StateHookForm from "./components/StateHookForm";
import ReactHookForm from "./components/ReactHookForm";

function App() {
  // return <Form />;
  // return <StateHookForm />;
  return <ReactHookForm />;
}

export default App;
