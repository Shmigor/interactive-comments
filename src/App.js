import './App.css';
import Main from './main/Main';
import data from "./data.js"
import Comment from "./comment/Comment"

function App() {
  return (
    <div className="App">

      {data.map((item)=>
          <Main
          content={item.content}
          score={item.score}
          date={item.createdAt}
          user={item.username}
          image = {item.image}
          />
      )}

      <Comment/>
    </div>
  );
}

export default App;
