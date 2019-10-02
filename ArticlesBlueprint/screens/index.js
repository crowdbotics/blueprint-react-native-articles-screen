import React, {PureComponent} from 'react';
import {View, Platform, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-ui-kitten';

export default class Root extends PureComponent {
  static navigationOptions = {
    title: 'Articles Blueprint'.toUpperCase(),
    headerBackTitle: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => this.props.navigation.navigate('Articles1')}
          style={styles.item}>
          Article List V1
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Articles2')}
          style={styles.item}>
          Article List V2
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Articles3')}
          style={styles.item}>
          Article List V3
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Articles4')}
          style={styles.item}>
          Article List V4
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('BlogPosts')}
          style={styles.item}>
          Blog Posts
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('Article')}
          style={styles.item}>
          Article View
        </Button>

        <Button
          onPress={() => this.props.navigation.navigate('SplashScreen')}
          style={styles.item}>
          Main Menu
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  statusbar: {
    height: Platform.select({ios: 20, android: 0}),
  },
  item: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: 'gray',
  },
});
