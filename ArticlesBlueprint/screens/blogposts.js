import React from 'react';
import {FlatList, View, Image, TouchableOpacity} from 'react-native';
import {Text, Avatar, withStyles} from 'react-native-ui-kitten';
import {data} from '../../../data';

const moment = require('moment');

class _Blogposts extends React.Component {
  static navigationOptions = {
    title: 'Blog posts'.toUpperCase(),
  };

  state = {
    data: data.getArticles('post'),
  };

  extractItemKey = item => `${item.id}`;

  onItemPressed = item => {
    this.props.navigation.navigate('Article', {id: item.id});
  };

  renderItem = ({item}) => {
    const user = data.getUser(item.userId)
    
    return (
    <TouchableOpacity
      delayPressIn={70}
      activeOpacity={0.8}
      onPress={() => this.onItemPressed(item)}>
      <View style={this.props.themedStyle.card}>
        <View style={this.props.themedStyle.cardImage}>
          <Image
            style={this.props.themedStyle.image}
            source={item.photo}
          />
        </View>

        <View style={this.props.themedStyle.cardHeader}>
          <Text category="s1" style={this.props.themedStyle.text}>
            {item.header}
          </Text>
        </View>
        <View style={this.props.themedStyle.cardContent}>
          <View>
            <Text
              category="p1"
              style={this.props.themedStyle.text}
              numberOfLines={2}>
              {item.text}
            </Text>
          </View>
        </View>
        <View style={this.props.themedStyle.cardBottom}>
          <View style={this.props.themedStyle.userInfo}>
            <Avatar
              source={user.photo}
              size="small"
              style={this.props.themedStyle.avatar}
            />
            <Text
              category="s1"
              style={
                this.props.themedStyle.text
              }>{`${user.firstName} ${user.lastName}`}</Text>
          </View>
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
    </TouchableOpacity>
  )};

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={this.props.themedStyle.container}
    />
  );
}

export default Blogposts = withStyles(_Blogposts, theme => ({
  container: {
    backgroundColor: theme['color-basic-400'],
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  card: {
    marginVertical: 8,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 17,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

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
