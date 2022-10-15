import logo from './logo.svg';
import './App.css';
import CreateQuestion from './components/CreateQuestion';
import {Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import EditQuestion from './components/EditQuestion';
import Cards from './components/Cards';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/cards' element={<Cards/>}/>
        <Route path='/createQuestions' element={<CreateQuestion/>}/>
        <Route path='/EditQuestions' element={<EditQuestion/>}/>
      </Routes>
    </div>
  );
}

export default App;
