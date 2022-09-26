import CommentImage from "../images/avatars/image-juliusomo.png"

function Comment() {
    return(
        <div className="comment-container">
            <img src={CommentImage} alt="avatar"/>
            <form>
                <input className="comment-container-input" value="Add a comment..."></input>
            </form>
            <button className="btn">Send</button>
        </div>
    )
}
export default Comment;