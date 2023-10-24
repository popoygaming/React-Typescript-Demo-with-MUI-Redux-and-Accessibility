import * as React from "react";
import "./styles.css";
import FeedbackForm from "./components/FeedbackForm";

import { useSelector, shallowEqual, useDispatch } from "react-redux";

import {
  addFeedback,
  removeFeedback
} from "./store/FeedbackStore/actionCreators";
import { Dispatch } from "redux";
import FeedbackList from "./components/FeedbackList";

const App: React.FC = () => {
  const feedbacks: readonly IFeedback[] = useSelector(
    (state: FeedbackState) => state.feedbacks,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const submitFeedback = React.useCallback(
    (feedback: IFeedback) => dispatch(addFeedback(feedback)),
    [dispatch]
  );

  return (
    <div className="App">
      <FeedbackForm onSubmitFeedback={submitFeedback} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default App;
