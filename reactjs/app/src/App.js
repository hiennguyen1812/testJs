import './App.css';
import {Hello, HelloC} from './DemoMain';
import Example from './StateandProps'
function App() {
  return (
    <div className="App">
      <Hello name="USER" />
      <HelloC/>
      <Example/>
    </div>
  );
}

export default App;
