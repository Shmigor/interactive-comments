// import AmyRobson from "../images/avatars/image-amyrobson.png";
import Reply from "../images/icon-reply.svg"
import Delete from "../images/icon-delete.svg"

function User(props) {
    return(
        <div className="user-container">
            <div className="user-container-info">
                <img className="user-container-img" src={props.image} alt="avatar" />
                <span className="user-container-name">{props.user}</span>
                <span className="user-container-date">{props.date}</span>
            </div>
            <div className="user-container-reply">
                <img src={Delete} alt="delete" />
                <span className="delete">Delete</span>
                <img src={Reply} alt="reply" />
                <span className="reply">Reply</span>
            </div>
        </div>
    )
}

export default User