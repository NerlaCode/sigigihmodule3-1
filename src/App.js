import { Sample as ClassCounterSample } from "./ClassCounter";
import { Sample as ClassCounterRefactorSample } from "./ClassCounterRefactor";
import { Sample as InputElementSample } from "./InputElement";
import { Sample as NaiveCounterSample } from "./NaiveCounter";
import { Sample as NetworkCallSample } from "./NetworkCall";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Generasi Gigih 2.0 </h1>
      <h2>Start editing to see some magic happen!</h2>
      <NaiveCounterSample />
      <hr />
      <ClassCounterSample />
      <hr />
      <ClassCounterRefactorSample />
      <hr />
      <InputElementSample />
      <hr />
      <NetworkCallSample />
    </div>
  );
}
