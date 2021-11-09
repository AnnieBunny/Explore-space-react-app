

import { Route,Routes} from 'react-router-dom'

import GuestHome from './components/GuestHome/GuestHome'


function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/guestHome" element={<GuestHome/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
