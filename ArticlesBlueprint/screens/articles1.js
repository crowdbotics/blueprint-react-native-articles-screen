import React from 'react';
import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Text, withStyles} from 'react-native-ui-kitten';
import {SocialBar} from '../components/socialBar';
import {data} from '../../../data';

const moment = require('moment');

class _Articles1 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = item => `${item.id}`;

  onItemPressed = id => {
    this.props.navigation.navigate('Article', {id: id});
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item.id)}
      style={this.props.themedStyle.cardContainer}>
      <ImageBackground
        source={item.photo}
        style={this.props.themedStyle.cardImage}>
        <View style={this.props.themedStyle.card}>
          <View style={this.props.themedStyle.cardContent}>
            <Text category="h6" style={this.props.themedStyle.text}>
              {item.header}
            </Text>
            <Text
              category="c1"
              appearance="hint"
              style={this.props.themedStyle.textTime}>
              {moment()
                .add(item.time, 'seconds')
                .fromNow()}
            </Text>
            <View style={this.props.themedStyle.cardBottom}>
              <SocialBar color="#ffffff" />
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={this.props.themedStyle.root}
    />
  );
}

export default Articles1 = withStyles(_Articles1, theme => ({
  cardContainer: {
    backgroundColor: theme['color-basic-100'],
  },
  root: {
    backgroundColor: theme['color-basic-100'],
  },

  footer: {
    width: 240,
  },
  card: {
    marginVertical: 8,
    backgroundColor: 'transparent',
    
    //maxHeight: 520
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    padding: 10,
  },
  cardBottom: {
    padding: 10,
    width: '100%',
    Height: 100,
    marginTop: 20,
  },
  avatar: {
    marginRight: 16,
  },
  text: {
    color: '#ffffff',
  },
  textTime: {
    color: '#f2f2f2',
    // marginTop: 5,
  },
  image: {
    width: '100%',
    // minHeight: 220,
    maxHeight: 220,
  },
  cardImage: {
    height: 220,
    width: '100%',
    justifyContent: 'flex-end',
    alignItem: 'flex-end',
  },
}));
