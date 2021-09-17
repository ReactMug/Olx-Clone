import Advertisement from './advertisement/Advertisement';
import './App.css';
import Header from './header/Header';
import Products from './products/Products';
import Recommend from './recommend/Recommend';
import TopBar from './topbar/TopBar';
function App() {
  return (
    <div className="App">
      <Header/>
      <TopBar/> 
      <Advertisement/> 
      <Recommend/>
      <Products/>
    </div>
  );
}

export default App;
