import Header from './Components/Header';
import Add from './Components/Add/Add';
import View from './Components/View';
import Edit from './Components/Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/Add' element={<Add/>} />
    <Route path='/' element={<View/>} />
    <Route path='/Edit' element={<Edit/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
