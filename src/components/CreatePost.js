import React from "react";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Icon from "@material-ui/core/Icon";
import axios from "axios";

export default class CreatePost extends React.Component {
  state = {
    body: ""
  };
  handleFormChange = event => {
    this.setState({ body: event.target.value });
  };
  handleFormSubmit = () => {
    axios
      .post("/createCard",{
        body:this.state.body,
        userHandle:"test user"
      })
      .then(res => {
        console.log(res);
        window.location.reload()
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div id="form-container">
        <FormControl fullWidth={true}>
          <TextField
            multiline={true}
            placeholder="Share something nice"
            required={true}
            rows="3"
            variant="filled"
            value={this.state.body}
            onChange={this.handleFormChange}
          />
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          style={{ borderRadius: "0" }}
          onClick={this.handleFormSubmit}
        >
          Send
          <Icon>send</Icon>
        </Button>
      </div>
    );
  }
}
