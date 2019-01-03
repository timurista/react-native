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

class SignInForm extends Component {
  state = { phone: "", code: "", error: "" };

  handleSubmit = async () => {
    console.log("submit pressed");
    console.log(ROOT_URL, this.state.phone);

    try {
      let res = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {
        phone: this.state.phone,
        code: this.state.code
      });
      console.log(res);
    } catch (e) {
      console.log(e);
      // this.setState({ error: e });
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
        <FormValidationMessage>Phone is required</FormValidationMessage>
        <FormLabel>Enter Code</FormLabel>
        <FormInput
          value={this.state.code}
          onChangeText={code => this.setState({ code })}
        />
        <FormValidationMessage>Code is required</FormValidationMessage>
        <Button title="Submit" onPress={this.handleSubmit} />
        <FormValidationMessage>{this.state.error}</FormValidationMessage>
      </View>
    );
  }
}

export default SignInForm;
