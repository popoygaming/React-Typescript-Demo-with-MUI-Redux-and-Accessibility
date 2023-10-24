import "../styles.css";
import * as React from "react";
import * as Constants from "../Constants";
import {
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  FormControl,
  FormLabel,
  RadioGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { FormControlLabel, Radio, Link } from "@mui/material";

interface Props {
  onSubmitFeedback: (feedback: IFeedback) => void;
}

export default function FeedbackForm({ onSubmitFeedback }: Props) {
  const [userTpe, setUserType] = React.useState(Constants.UserTypes.Visitor);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [feedbackMsg, setFeedbackMsg] = React.useState("");
  const [showDialog, setShowDialog] = React.useState(false);
  const [dialogMessage, setDialogMessage] = React.useState("");

  const submitButtonRef = React.useRef(null);
  const [isSubmitBtnFocused, setSubmitBtnFocused] = React.useState(false);

  const textFieldsProps = {
    variant: "outlined",
    fullWidth: true,
    required: true,
  };

  const gridProps = {
    xs: 12,
    item: true,
  };

  const handleUserTypeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType((event.target as HTMLInputElement).value);
  };

  const handleSubmitBtnKeyDown = (event) => {
    if (event.key === "Enter" || event.key === "") {
      event.preventDefault();
      submitButtonRef?.current.click();
    }
  };

  const handleSubmitBtnBlur = () => {
    setSubmitBtnFocused(false);
  };

  const handleSubmitBtnFocus = () => {
    setSubmitBtnFocused(true);
  };

  return (
    <div className="DemoForm">
      <h2>Submit Feedback</h2>
      <Card>
        <CardContent>
          <form data-testid="submitForm">
            <Grid container spacing={1}>
              <Grid {...gridProps}>
                <TextField
                  {...textFieldsProps}
                  data-testid="firstName"
                  label="First Name"
                  value={firstName}
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Grid>
              <Grid {...gridProps}>
                <TextField
                  {...textFieldsProps}
                  data-testid="lastName"
                  label="Last Name"
                  value={lastName}
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Grid>
              <Grid {...gridProps}>
                <TextField
                  {...textFieldsProps}
                  data-testid="email"
                  label="Email"
                  value={email}
                  type={"email"}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Grid>
              <Grid {...gridProps}>
                <TextField
                  {...textFieldsProps}
                  data-testid="phone"
                  label="Phone"
                  value={phone}
                  type={"number"}
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                />
              </Grid>
              <Grid {...gridProps}>
                <TextField
                  {...textFieldsProps}
                  data-testid="fbMessage"
                  label="Message"
                  value={feedbackMsg}
                  multiline
                  rows={2}
                  onChange={(e) => {
                    setFeedbackMsg(e.target.value);
                  }}
                />
              </Grid>
              <Grid {...gridProps}>
                <Button
                  // type="submit"
                  data-testid="submitBtn"
                  variant="contained"
                  color="primary"
                  fullWidth
                  ref={submitButtonRef}
                  // onFocus={setSubmitBtnFocused(true)}
                  // onBlur={setSubmitBtnFocused(false)}
                  onFocus={handleSubmitBtnFocus}
                  onBlur={handleSubmitBtnBlur}
                  tabIndex={isSubmitBtnFocused ? 1 : 0}
                  onClick={() => {
                    if (
                      firstName &&
                      lastName &&
                      email &&
                      phone &&
                      feedbackMsg
                    ) {
                      const newFeedback: IFeedback = {
                        id: Math.floor(Math.random() * 100) + 1,
                        firstName: firstName,
                        lastName: lastName,
                        email: email,
                        phone: phone,
                        feedbackMsg: feedbackMsg,
                      };

                      console.log(newFeedback);
                      onSubmitFeedback(newFeedback);
                      setDialogMessage("Feedback successfully submitted!");
                      setShowDialog(true);

                      setFirstName("");
                      setLastName("");
                      setEmail("");
                      setPhone("");
                      setFeedbackMsg("");
                    } else {
                      setDialogMessage(
                        "Please fill up correctly all required fields.",
                      );
                      setShowDialog(true);
                    }
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <Dialog
        open={showDialog}
        onClose={() => {
          setShowDialog(false);
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Feedback Submission"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {dialogMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              setShowDialog(false);
            }}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      {/* <FormControl>
        <h3>User Type</h3>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={userTpe}
          onChange={handleUserTypeChange}
        >
          <FormControlLabel
            value={Constants.UserTypes.Visitor}
            control={<Radio />}
            label={Constants.UserTypes.Visitor}
          />
          <FormControlLabel
            value={Constants.UserTypes.Admin}
            control={<Radio />}
            label={Constants.UserTypes.Admin}
          />
        </RadioGroup>
        {userTpe === Constants.UserTypes.Admin && (
          <Link href="#">Show all feedbacks</Link>
        )}
      </FormControl> */}
    </div>
  );
}
