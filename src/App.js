import logo from './logo.svg';
import './App.css';
import { GradientsDemo } from './components/gradients';
import { TextGradientsDemo } from './components/textGradientsDemo';
import { Web3Colors } from './components/web3colors';
import { ColorsComponent } from './components/colorsComponent';

function App() {
  return (
    <div className="App">

      {/* <GradientsDemo /> */}
      {/* <TextGradientsDemo/> */}
      {/* <Web3Colors/> */}
      <ColorsComponent/>
    </div>
  );
}

export default App;
