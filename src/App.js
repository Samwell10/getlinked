import './App.css';
import {Provider} from 'react-redux';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Register from './Pages/Register/Register';
import store from './Redux/Store';


function App() {
  return (
    <Router>
      <Provider store={store}>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/register' element={<Register/>}/>
            </Routes>
          </div>
      </Provider>
    </Router>
   
  );
}

export default App;
