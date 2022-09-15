import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";

function App() {
  return <div className="App">
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    {/* <ConditionalRenderingClass /> */}
    {/* <ConditionalRenderingFunctional connected={true} /> */}
    {/* <NestingComponents /> */}
    <MethodsAsPropsParent />
  </div>;
}

export default App;
