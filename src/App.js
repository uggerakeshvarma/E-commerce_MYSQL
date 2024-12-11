import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AppRoute } from './App.Router';
import { Header } from './Header/Header';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Header />
    <AppRoute></AppRoute>
    </BrowserRouter>
    </div>
  );
}

export default App;
