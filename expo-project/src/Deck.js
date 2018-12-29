import React, { Component } from "react";
import {
  View,
  Animated,
  Text,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager
} from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeLeft: console.log,
    onSwipeRight: console.log,
    renderNoMoreCards: () => {
      <Text>No More cards</Text>;
    }
  };
  constructor(props) {
    super(props);
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => {
        // excecuted anytime user presses on screen
        // means user presses on screen
        return true;
      },
      onPanResponderMove: (_, gesture) => {
        // console.log(gesture);
        // dx, dy is really what we care about
        this.position.setValue({ x: gesture.dx, y: gesture.dy });
      },
      onPanResponderRelease: (_, gesture) => {
        // find amount it is swapped by
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe("left");
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = {
      index: 0
    };
  }

  resetPosition = () => {
    Animated.spring(this.position, {
      x: 0,
      y: 0
    }).start();
  };

  forceSwipe(direction = "right") {
    const dir = direction === "right" ? 1 : -1;
    Animated.timing(this.position, {
      toValue: { x: dir * SCREEN_WIDTH * 2, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => {
      this.onSwipeComplete(direction);
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data !== this.props.data) {
      this.setState({ index: 0 });
    }
  }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);

    // next time update is called it needs to animate any
    // changes made to component
    LayoutAnimation.spring();
  }

  onSwipeComplete(direction) {
    const item = this.props.data[this.state.index];
    direction === "right"
      ? this.props.onSwipeRight(item)
      : this.props.onSwipeLeft(item);

    // reset so card 1 is at top
    this.position.setValue({ x: 0, y: 0 });
    this.setState(prev => ({ index: prev.index + 1 }));
  }

  getCardStyle = () => {
    const rotate = this.position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
      outputRange: ["-120deg", "0deg", "120deg"]
    });
    return {
      ...this.position.getLayout(),
      transform: [{ rotate }]
    };
  };

  renderCards = () => {
    if (this.state.index >= this.props.data.length) {
      return this.props.renderNoMoreCards();
    }

    return this.props.data
      .map((item, i) => {
        if (i < this.state.index) {
          return null;
        }
        if (i === this.state.index) {
          return (
            <Animated.View
              key={item.id}
              style={[this.getCardStyle(), styles.cardStyle]}
              {...this.panResponder.panHandlers}
            >
              {this.props.renderCard(item)}
            </Animated.View>
          );
        }

        return (
          <Animated.View
            key={item.id}
            style={[styles.cardStyle, { top: 10 * (i - this.state.index) }]}
          >
            {this.props.renderCard(item)}
          </Animated.View>
        );
      })
      .reverse();
  };

  render() {
    return <View>{this.renderCards()}</View>;
  }
}

const styles = {
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH
  }
};

export default Deck;
