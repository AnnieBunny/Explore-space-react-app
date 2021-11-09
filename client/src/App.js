

import { Route,Routes} from 'react-router-dom'
import About from './components/About/About';

import GuestHome from './components/GuestHome/GuestHome'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UserHome from './components/UserHome/UserHome';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<GuestHome/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>


      <Route exact path="/userHome" element={<UserHome/>}></Route>





    </Routes>
    </div>
  );
}

export default App;
