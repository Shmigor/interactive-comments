import './App.css';
import Main from './main/Main';
import data from "./data.js"

function App() {
  return (
    <div className="App">

      {data.map((item)=>
          <Main
          content={item.content}
          score={item.score}
          date={item.createdAt}
          user={item.username}
          image = {item.image}/>
      )}

    </div>
  );
}

export default App;
