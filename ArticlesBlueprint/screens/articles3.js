import React from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import {Text, withStyles} from 'react-native-ui-kitten';
import {SocialBar} from '../components/socialBar';
import {data} from '../../../data';

const moment = require('moment');

class _Articles3 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = item => `${item.id}`;

  onItemPressed = (item) => {
    this.props.navigation.navigate('Article', {id: item.id});
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <View style={this.props.themedStyle.card}>
        <View style={this.props.themedStyle.cardHeader}>
          <View>
            <Text category="s1" style={this.props.themedStyle.text}>
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
          </View>
        </View>
        <View style={this.props.themedStyle.cardImage}>
          <Image
            style={this.props.themedStyle.image}
            source={item.photo}
          />
        </View>

        <View style={this.props.themedStyle.cardBottom}>
          <SocialBar />
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

export default Articles3 = withStyles(_Articles3, theme => ({
  container: {
    backgroundColor: theme['color-basic-400'],
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  card: {
    marginVertical: 8,
  },
  footer: {
    paddingTop: 16,
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
    color: theme['color-basic-1000'],
  },
  textTime: {
    color: theme['color-basic-600'],
    // marginTop: 5,
  },
  image: {
    width: '100%',
    // minHeight: 220,
    maxHeight: 220,
  },
  cardImage: {
    maxHeight: 220,
  },
}));
