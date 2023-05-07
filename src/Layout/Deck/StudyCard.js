import React from "react";
import Next from "../Next";
import Reset from "../Reset";

function StudyCard({
  cardText,
  onBack,
  onEnd,
  cardNum,
  cardTotal,
  next,
  flip,
  reset,
}) {
  return (
    <>
      <div>
        <div>
          <div>
            <h3>{cardText}</h3>
          </div>
        </div>
        <div>
          <h6>{`Card ${cardNum} of ${cardTotal}`}</h6>
        </div>
        <div onClick={flip}>Flip</div>
        {onBack ? <Next next={next} /> : null}
        {onEnd ? <Reset reset={reset} /> : null}
      </div>
    </>
  );
}

export default StudyCard;
