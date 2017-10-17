import { Animated } from "react-native";

export default RootClass => class extends RootClass {
    
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: (navigation.state.params && navigation.state.params.tabBarVisible) ? navigation.state.params.tabBarVisible : false,
    headerStyle: {
      height: (navigation.state.params && navigation.state.params.height) ? navigation.state.params.height : 0,
    }
  });

  constructor(props) { 
    super(props);
    this.heightAnimation = new Animated.Value(0);
  }

  _animationHeightHundle() { 
    Animated.timing(this.heightAnimation, {
      toValue: 1,
      duration: 3000
    }).start();
  }

  test() { 
    this._animationHeightHundle();
    const anim = this.heightAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 100]
    });
  }

  _hundlerScroll({ y }) { 
    const { navigation } = this.props;
    let previous = this.state.y;

    this.setState({ y }, () => { 
      if (this.state.y > 0) { 
        navigation.setParams({
          tabBarVisible: (previous <= this.state.y) ? false : true, 
          height: (previous <= this.state.y) ? 0 : this._animationHeightHundle(), 
        });
      };
    });
  }

};