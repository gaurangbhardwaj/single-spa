import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@shell/react-app-1",
  app: () => System.import("http://localhost:9001/react-app-1.js"),
  activeWhen: ["/app1"],
});

registerApplication({
  name: "@shell/react-app-2",
  app: () => System.import("http://localhost:9002/react-app-2.js"),
  activeWhen: ["/app2"],
});

// Start single-spa
start();

export default function Root(props) {
  return <section>{props.name} Welcome to the Shell App!</section>;
}
