import './App.css';
import Nextpage from './Nextpage';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <>
    

   <BrowserRouter>
       
      <Routes>

            <Route path='/' element={<Home/>}> </Route>
           
		       <Route path="/nextpage" element={<Nextpage/>}/>
	    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
