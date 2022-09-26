import Content from "../content/Content";
import Counter from "../counter/Counter";
import User from "../user/User";


function Main(props) {
    return(
        <div className="main">
          <Counter 
          score={props.score}/>
            <div className="main-wrapper">
              <User 
              user={props.user} 
              date={props.date}
              image={props.image}/>
              <Content 
              content={props.content}/>
            </div>
        </div>
    )
}

export default Main;