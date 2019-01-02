import React, { Component } from "react";
import { View, Text } from "react-native";
import {
  FormLabel,
  FormInput,
  Button,
  FormValidationMessage
} from "react-native-elements";

class SignUpForm extends Component {
  state = { phone: "" };
  render() {
    return (
      <View style={{ marginBottom: 10 }}>
        <FormLabel>text</FormLabel>
        <FormInput />
        <Button title="Submit" />
      </View>
    );
  }
}

export default SignUpForm;
