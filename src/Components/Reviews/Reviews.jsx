import React from "react";
import { ReviewStyle } from "./Reviews.sytle";

function Reviews({ reviews }) {
  console.log(reviews);
  return (
    <ReviewStyle>
      <h4>Reviews.</h4>
      <div className="reviews">
        {reviews.map((review) => {
          return (
            <div key={review.id} className="review">
              <h3>{review.autor}: </h3>
              <p>{review.opinion}</p>
            </div>
          );
        })}
      </div>
    </ReviewStyle>
  );
}

export default Reviews;
