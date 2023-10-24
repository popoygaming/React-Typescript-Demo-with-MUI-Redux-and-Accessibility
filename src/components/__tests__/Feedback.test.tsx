// function sum(a: number, b: number): number {
//   return a + b;
// }

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });

import React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  addFeedback,
  removeFeedback,
} from "../../store/FeedbackStore/actionCreators";
import { Dispatch } from "redux";
import { render, fireEvent, screen } from "@testing-library/react";
import FeedbackForm from "../FeedbackForm";

const feedbacks: readonly IFeedback[] = useSelector(
  (state: FeedbackState) => state.feedbacks,
  shallowEqual,
);
const dispatch: Dispatch<any> = useDispatch();
const submitFeedback = React.useCallback(
  (feedback: IFeedback) => dispatch(addFeedback(feedback)),
  [dispatch],
);

describe("FeedbackForm", () => {
  test("should prevent feedback submission", () => {
    render(<FeedbackForm onSubmitFeedback={submitFeedback} />);
    const firstNameElement = screen.getByTestId("firstName");
    // expect(firstNameElement).toBeUndefined();
  });
});
