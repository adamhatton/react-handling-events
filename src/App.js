import "./App.css";
import EventsClass from "./components/EventsClass";
import EventsFunctional from "./components/EventsFunctional";
import ConditionalRenderingClass from "./components/ConditionalRenderingClass";
import ConditionalRenderingFunctional from "./components/ConditionalRenderingFunctional";
import NestingComponents from "./components/NestingComponents";
import MethodsAsPropsParent from "./components/MethodsAsPropsParent";
import RenderingLists from "./components/RenderingLists";
import Clock from "./components/Clock";
import LifeCyclesCDM from "./components/LifeCyclesCDM";
import LifeCyclesCDU from "./components/LifeCyclesCDU";
import LifeCyclesCWU from "./components/LifeCyclesCWU";
import ControlledForm from "./components/ControlledForm";

function App() {
  return <div className="App">
    {/* <EventsFunctional /> */}
    {/* <EventsClass /> */}
    {/* <ConditionalRenderingClass /> */}
    {/* <ConditionalRenderingFunctional connected={true} /> */}
    {/* <NestingComponents /> */}
    {/* <MethodsAsPropsParent /> */}
    {/* <RenderingLists /> */}
    {/* <Clock /> */}
    {/* <LifeCyclesCDM /> */}
    {/* <LifeCyclesCDU /> */}
    {/* <LifeCyclesCWU /> */}
    <ControlledForm />
  </div>;
}

export default App;
