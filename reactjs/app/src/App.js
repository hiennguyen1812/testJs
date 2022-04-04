import './App.css';
import {Hello, HelloC} from './DemoMain';
import Example from './StateandProps'
import LifeCircleAndHook from './LifeCircleAndHook';
function App() {
  return (
    <div className="App">
      <Hello name="USER" />
      <HelloC/>
      <Example/>
      <LifeCircleAndHook/>
    </div>
  );
}

export default App;
