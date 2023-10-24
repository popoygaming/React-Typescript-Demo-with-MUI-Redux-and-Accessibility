import * as actionTypes from "./actionTypes";
// import "../type";

export function addFeedback(feedback: IFeedback) {
  const action: FeedbackAction = {
    type: actionTypes.ADD_FEEDBACKMSG,
    feedback
  };

  return simulateHttpRequest(action);
}

export function removeFeedback(feedback: IFeedback) {
  const action: FeedbackAction = {
    type: actionTypes.REMOVE_FEEDBACKMSG,
    feedback
  };
  return simulateHttpRequest(action);
}

export function simulateHttpRequest(action: FeedbackAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 10);
  };
}
