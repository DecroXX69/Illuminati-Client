import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>

      <Gallery />
    </Router>
     
    
  );
}

export default App;
