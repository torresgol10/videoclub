import { Route } from 'wouter';
import './App.css';
import Home from 'pages/Home';
import Search from 'pages/Search';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
      <Route path="/search/:keyword" component={Search} />
    </div>
  );
}

export default App;
