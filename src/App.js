import { Route, Routes } from 'react-router-dom';
import Description from './components/description';
import MovieCardsApp from './components/MovieCardsApp';

function App() {
  
  

  return (
    <>
      <Routes>
        <Route exact path="/" element={<MovieCardsApp />} />
        <Route path="/description/" element={<Description />} />
      </Routes>
      
   </>
    
    
    
  );
}

export default App;
