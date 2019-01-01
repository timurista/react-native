import React, { Component } from "react";
import { View, Text } from "react-native";
import { FormLabel, FormInput, Button } from "react-native-elements";

export default class SignUpForm extends Component {
  render() {
    return (
      <View>
        <FormLabel>Enter Phone Number</FormLabel>
        <FormInput />
        <Button title="Submit" />
      </View>
    );
  }
}
