import Home from 'pages/Home';
import { Route } from 'wouter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path="/" component={Home} />
    </div>
  );
}

export default App;
