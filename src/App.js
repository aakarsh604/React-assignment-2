import logo from './logo.svg';
import './App.css';
import {Logo} from './components/logo';
import {Link} from './components/link';
import {Button} from './components/button.jsx'

function App() {
  return (
    <div className="container">
      <Logo></Logo>
      <Link></Link>
      <Button></Button>
    </div>
  );
}

export default App;
