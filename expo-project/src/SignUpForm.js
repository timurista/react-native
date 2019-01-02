import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";
import axios from "axios";
import { ROOT_URL } from "../secrets/project_urls";

class SignUpForm extends Component {
  state = { phone: "" };

  handleSubmit = async () => {
    console.log("submit pressed");
    console.log(ROOT_URL, this.state.phone);

    try {
      await axios.post(`${ROOT_URL}/createUser`, {
        phone: this.state.phone
      });

      await axios.post(`${ROOT_URL}/requestOneTimePassword`, {
        phone: this.state.phone
      });
      console.log("REQ RES", requestedRes);
    } catch (e) {
      console.log(e);
    }
  };
  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput
          value={this.state.phone}
          onChangeText={phone => this.setState({ phone })}
        />
        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUpForm;
