import "../Home-comment/comment.css";

import Slider from "./slider";

const Comment = () => {
    return (
      <div className="comment-div">

        <div className="c-title">
          <h1>
            <span style={{ fontSize: "6vw" }}>“</span>Elevate your journey
            <br></br> with trusted guides, expert drivers, and<br></br>
            seamless coordination.
          </h1>
        </div>

        <div className="c-comment-slide">

            <Slider/>
         </div>

          
      </div>
    );
}
 
export default Comment;