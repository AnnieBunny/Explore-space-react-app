

import { Route,Routes} from 'react-router-dom'
import About from './components/About/About';

import GuestHome from './components/GuestHome/GuestHome'
import Login from './components/Login/Login';
import MyPosts from './components/MyPosts/MyPosts';
import Register from './components/Register/Register';
import UserHome from './components/UserHome/UserHome';
import Create from './components/Create/Create';
import Navigation from './components/Navigation/Navigation';
import NasaSpacePhoto from './components/NasaSpacePhoto/NasaSpacePhoto';

function App() {
  return (
    <div className="App">
<Navigation />
    <Routes>

      <Route exact path="/" element={<GuestHome/>}></Route>
      <Route exact path="/login" element={<Login/>}></Route>
      <Route exact path="/register" element={<Register/>}></Route>
      <Route exact path="/about" element={<About/>}></Route>


      <Route exact path="/userHome" element={<UserHome/>}></Route>
      <Route exact path="/myPosts" element={<MyPosts/>}></Route>
      <Route exact path="/create" element={<Create/>}></Route>
      <Route exact path="/getSpacePhoto" element={<NasaSpacePhoto/>}></Route>








    </Routes>
    </div>
  );
}

export default App;
