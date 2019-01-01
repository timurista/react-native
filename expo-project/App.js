import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Deck from "./src/Deck";
import { DATA } from "./deckdata";
import { Card, Button } from "react-native-elements";
import { SignUpForm } from "./src/SignUpForm";

export default class App extends React.Component {
  renderCard = item => {
    return (
      <Card key={item.id} title={item.text} image={{ uri: item.uri }}>
        <Text style={{ marginBottom: 10 }}>
          I can customize the Card further.
        </Text>
        <Button
          icons={{ name: "code" }}
          backgroundColor="#03a9f4"
          title="View Now!"
        />
      </Card>
    );
  };

  renderNoMoreCards() {
    return (
      <Card title="All Done!">
        <Text>There's no more content here</Text>
        <Button title="Get More" backgroundColor="#03a9f4" />
      </Card>
    );
  }

  render() {
    const deck = (
      <Deck
        data={DATA}
        renderCard={this.renderCard}
        renderNoMoreCards={this.renderNoMoreCards}
      />
    );
    const signUp = <SignUpForm />;
    return <View style={styles.container}>{signUp}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
