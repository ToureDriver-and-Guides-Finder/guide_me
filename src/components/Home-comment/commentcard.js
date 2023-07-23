import { StarFill,Star } from "react-bootstrap-icons";
import profile from "../../images/profile.png"
const CommentCard = () => {
  return (
    <div className="card c-card">
      <div className="card-body c-card-body">
        <div className="c-card-body-comment">
          <h5 className="card-title">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            malesuada dolor et ultrices semper. Cras interdum sed{" "}
          </h5>
          <div>
            <StarFill />
            <StarFill />
            <StarFill />
            <StarFill />
            <Star />
          </div>
        </div>
        <div className="c-card-body-profile">
          <img src={profile} alt="..." class="rounded-circle" />
          <p className="card-text fw-bold">John</p>
          <p className="card-text fw-light">Driver</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
