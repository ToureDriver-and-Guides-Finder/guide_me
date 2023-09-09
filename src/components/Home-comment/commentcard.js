import { StarFill,Star } from "react-bootstrap-icons";
import profile from "../../images/profile.png"
const CommentCard = () => {
  return (
    <div className="card c-card">
      <div className="card-body c-card-body">
        <div className="c-card-body-comment">
          <h5 className="card-title">
            Unbelievable day. Being with the elephants was so surreal, you were
            able to get really close to them. The trek to the waterfall was
            tricky but rewarding. It was so cool. Great way to cool off after a
            long hike.{" "}
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
          <img src={profile} alt="..." className="rounded-circle" />
          <p className="card-text fw-bold">John</p>
          <p className="card-text fw-light">Driver</p>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
