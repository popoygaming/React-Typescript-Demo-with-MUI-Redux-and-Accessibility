import * as actionTypes from "./actionTypes";
// import "../type";

const initialState: FeedbackState = {
  feedbacks: [
    // {
    //   id: 9,
    //   firstName: "Ethan",
    //   lastName: "Hunt",
    //   email: "ethan.hunt@mitest.com",
    //   phone: 63087878,
    //   feedbackMsg: "Runner"
    // },
    // {
    //   id: 2,
    //   firstName: "Jason",
    //   lastName: "Bourne",
    //   email: "jason.bourne@cix.com",
    //   phone: 63087878,
    //   feedbackMsg: "Silent"
    // }
  ]
};

export const reducer = (
  state: FeedbackState = initialState,
  action: FeedbackAction
): FeedbackState => {
  switch (action.type) {
    case actionTypes.ADD_FEEDBACKMSG:
      const newFeedback: IFeedback = {
        id: action.feedback.id,
        firstName: action.feedback.firstName,
        lastName: action.feedback.lastName,
        email: action.feedback.email,
        phone: action.feedback.phone,
        feedbackMsg: action.feedback.feedbackMsg
      };
      return {
        ...state,
        feedbacks: state.feedbacks.concat(newFeedback)
      };
    case actionTypes.REMOVE_FEEDBACKMSG:
      const updatedFeedbacks: IFeedback[] = state.feedbacks.filter(
        (feedback) => feedback.id !== action.feedback.id
      );
      return {
        ...state,
        feedbacks: updatedFeedbacks
      };
  }
  return state;
};

// export default reducer;
