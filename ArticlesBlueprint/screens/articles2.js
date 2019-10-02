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

class _Articles2 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = item => `${item.id}`;

  onItemPressed = item => {
    this.props.navigation.navigate('Article', {id: item.id});
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <View style={this.props.themedStyle.card}>
        <ImageBackground
          source={item.photo}
          style={this.props.themedStyle.cardImage}>
          <View style={this.props.themedStyle.cardContent}>
            <Text category="h6" style={this.props.themedStyle.text}>
              {item.header}
            </Text>
            <Text
              style={this.props.themedStyle.time}
              category="c1"
              appearance="hint"
              style={this.props.themedStyle.textTime}>
              {moment()
                .add(item.time, 'seconds')
                .fromNow()}
            </Text>
          </View>
        </ImageBackground>
        <View style={this.props.themedStyle.cardBottom}>
          <SocialBar  />
        </View>
      </View>
    </TouchableOpacity>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={this.props.themedStyle.container}
    />
  );
}

export default Articles2 = withStyles(_Articles2, theme => ({
  container: {
    backgroundColor: theme['color-basic-400'],
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  time: {
    marginTop: 5,
  },
  card: {
    marginVertical: 8,
    backgroundColor: theme['color-basic-100'],
    //maxHeight: 520
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    padding: 10,
    backgroundColor: 'rgba(102, 102, 102, 0.5)'//#666666'
  },
  cardBottom: {
    padding: 10,
    width: '100%',
    Height: 100,
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
    maxHeight: 220,
  },
  cardImage: {
    height: 220,
    width: '100%',
  },
}));
