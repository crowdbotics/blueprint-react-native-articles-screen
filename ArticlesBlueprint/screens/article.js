import React from 'react';

import {ScrollView, Image, View, TouchableOpacity} from 'react-native';
import {Text, withStyles, Avatar} from 'react-native-ui-kitten';
import {data} from '../../../data';
import {SocialBar} from '../components/socialBar';

const moment = require('moment');

class _Article extends React.Component {
  static navigationOptions = {
    title: 'Article View'.toUpperCase(),
  };

  constructor(props) {
    super(props);
    const articleId = this.props.navigation.getParam('id', 1);
    this.data = data.getArticle(articleId);
  }

  onAvatarPressed = () => {
    //this.props.navigation.navigate('ProfileV1', { id: this.data.user.id });
  };

  render = () => {
    const user = data.getUser(this.data.userId)
    
    return(
    <ScrollView style={this.props.themedStyle.root}>
      <View style={this.props.themedStyle.card}>
        <View style={this.props.themedStyle.cardImage}>
          <Image
            style={this.props.themedStyle.image}
            source={this.data.photo}
          />
        </View>
        <View style={this.props.themedStyle.cardHeader}>
          <View>
            <Text category="s1" style={this.props.themedStyle.text}>
              {this.data.header}
            </Text>
            <Text
              category="c1"
              appearance="hint"
              style={this.props.themedStyle.textTime}>
              {moment()
                .add(this.data.time, 'seconds')
                .fromNow()}
            </Text>
          </View>
          <TouchableOpacity onPress={this.onAvatarPressed}>
            <Avatar
              source={user.photo}
              size="small"
              style={this.props.themedStyle.avatar}
            />
          </TouchableOpacity>
        </View>
        <View style={this.props.themedStyle.cardContent}>
          <View>
            <Text category="p1" style={this.props.themedStyle.text}>
              {this.data.text}
            </Text>
          </View>
        </View>
        <View style={this.props.themedStyle.cardBottom}>
          <SocialBar />
        </View>
      </View>
    </ScrollView>
  )};
}

export default Article = withStyles(_Article, theme => ({
  root: {
    backgroundColor: theme['color-basic-100'],
  },
  title: {
    marginBottom: 5,
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    //maxHeight: 520
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: theme['color-basic-600'],
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
