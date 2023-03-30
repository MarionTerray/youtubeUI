
import '../styles/App.css';
import Header from "./Header"
import Nav from "./Nav"
import FilterBar from "./FilterBar"
import VideoContent from "./VideoContent"
  
      
/*regroupe components */

function App() {
  return (
    <div className="App">
      <Header />
      <div className='MainContent'>
        <Nav />
        <div className='VideoSection'>
          <FilterBar />
          <VideoContent />
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
