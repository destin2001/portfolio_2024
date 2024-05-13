import { render, Component } from "preact";
import Application from "@/components/Application";
import "@/stylesheets/main.scss";

function Main() {
  return <Application />;
}

render(<Main />, document.getElementById("app"));
