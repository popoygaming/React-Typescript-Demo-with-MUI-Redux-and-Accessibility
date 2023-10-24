interface IFeedback {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  feedbackMsg: string;
}

type FeedbackState = {
  feedbacks: IFeedback[];
};

type FeedbackAction = {
  type: string;
  feedback: IFeedback;
};

type DispatchType = (args: FeedbackAction) => FeedbackAction;
