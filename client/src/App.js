

import { Route, Routes } from 'react-router-dom'
import { AuthContext } from './components/contexts/AuthContext';
import useLocalStorage from './components/hooks/UseLocaleStorage';
import About from './components/About/About';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';

import GuestHome from './components/GuestHome/GuestHome'
import Login from './components/Login/Login';
import MyPosts from './components/MyPosts/MyPosts';
import Register from './components/Register/Register';
import Logout from './components/Logout/Logout';
import UserHome from './components/UserHome/UserHome';
import Create from './components/Create/Create';
import Navigation from './components/Navigation/Navigation';
import NasaSpacePhoto from './components/NasaSpacePhoto/NasaSpacePhoto';

function App() {

  const initialAuthInfo = {
    _id: '',
    email: '',
    accessToken: '',
  };
  const [user, setUser] = useLocalStorage('user', initialAuthInfo);

  const login = (authData) => {
    setUser(authData);
  }

  const logout = () => {
    setUser(initialAuthInfo);
  };



  return (
    <AuthContext.Provider value={{user, login, logout}}>
    <div className="App">
      <Navigation />
      <Routes>

        <Route exact path="/" element={<GuestHome />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/register" element={<Register />}></Route>
        <Route path="/logout" element={<Logout />} />
        <Route exact path="/about" element={<About />}></Route>


        <Route exact path="/userHome" element={<UserHome />}></Route>
        <Route exact path="/myPosts" element={<MyPosts />}></Route>
        <Route exact path="/details/:postId" element={<Details />}></Route>
        <Route exact path="/details/edit/:postId" element={<Edit />}></Route>


        <Route exact path="/create" element={<Create />}></Route>
        <Route exact path="/getSpacePhoto" element={<NasaSpacePhoto />}></Route>








      </Routes>
    </div>
    </AuthContext.Provider>
  );
}

export default App;
