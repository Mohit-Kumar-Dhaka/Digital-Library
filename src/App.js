import './App.css';
import {Header} from './Components/Header';
import {Main} from './Components/Main';
import {Main2} from './Components/Main2';
import { Navbar } from './Components/Navbar';
import { Contact } from './Components/Contact';
import { Search } from './Components/Search';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Search/>
      <Main/>
      <Main2/>
      <Contact/>
    </div>
  );
}

export default App;
