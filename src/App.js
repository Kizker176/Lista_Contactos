import logo from './logo.svg';
import './App.css';
import ContactoListComponent from './components/container/contacto_list';

function App() {
  return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <ContactoListComponent></ContactoListComponent>
    </div>
  );
}

export default App;
