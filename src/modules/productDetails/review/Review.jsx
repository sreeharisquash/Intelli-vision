import React from "react";
import "./Review.css";
import CommonButton from "../../commonButton/commonButton";

const Review = () => {
  const starsSequence = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="add-review">
        <h5>Add a review</h5>
        <p className="mt-3 fst-italic">
          Your email address will not be published. <br />
          Required fields are marked <i className="fas fa-star"></i>
        </p>
      </div>
      <div className="rating-section">
        <h5>Your rating</h5>
        <div className="stars-container">
          {starsSequence.map((groupSize, groupIndex) => (
            <React.Fragment key={groupIndex}>
              {Array.from({ length: groupSize }, (_, starIndex) => (
                <i key={starIndex} className="fas fa-star star-icon"></i>
              ))}
              {groupIndex < starsSequence.length - 1 && (
                <div className="gap"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="your-review">
          <h5 className="important">
            Your review <i className="fas fa-star"></i>
          </h5>
          <textarea type="text-area" class="form-control mt-4" id="text-area" />
          <div className="name-email">
            <div class="mb-3" style={{ minWidth: "48%" }}>
              <h5 for="firstName" class="form-label">
                Name
                <i className="fas fa-star"></i>
              </h5>
              <input type="email" class="form-control" id="firstName" />
            </div>
            <div class="mb-3" style={{ minWidth: "48%" }}>
              <h5 for="lastName" class="form-label">
                Email
                <i className="fas fa-star"></i>
              </h5>
              <input type="email" class="form-control" id="lastName" />
            </div>
          </div>
          <div className="d-flex gap-3 mt-4 mb-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="defaultCheck1"
            />
            <h5>
              Save my name, email, and website in this browser for the next time
              I comment.
            </h5>
          </div>
          <CommonButton color="#170F58" label="Submit" fontClr="white"/>
        </div>
      </div>
    </>
  );
};
export default Review;
