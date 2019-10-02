import React from 'react';
import {FlatList, Image, View, TouchableOpacity} from 'react-native';
import {Text, withStyles} from 'react-native-ui-kitten';
import {SocialBar} from '../components/socialBar';
import {data} from '../../../data';

class _Articles4 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase(),
  };

  state = {
    data: data.getArticles(),
  };

  extractItemKey = item => `${item.id}`;

  renderItem = ({item}) => {
    const user = data.getUser(item.userId);

    return (
      <TouchableOpacity
        delayPressIn={70}
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('Article', {id: item.id})
        }>
        <View style={this.props.themedStyle.card}>
          <View style={this.props.themedStyle.cardImage}>
            <Image
              style={this.props.themedStyle.image}
              source={item.photo}
              resizeMode="cover"
            />
          </View>

          <View style={this.props.themedStyle.cardContent}>
            <Text
              numberOfLines={1}
              category="s2"
              style={this.props.themedStyle.text}>
              {item.header}
            </Text>
            <Text
              category="c1"
              appearance="hint"
              style={this.props.themedStyle.textTime}>
              {`${user.firstName} ${user.lastName}`}
            </Text>
            <Text
              numberOfLines={2}
              category="c1"
              style={[this.props.themedStyle.text, {marginTop: 13}]}>
              {item.text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  render = () => (
    <View>
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={this.extractItemKey}
        style={this.props.themedStyle.container}
      />
    </View>
  );
}

export default Articles4 = withStyles(_Articles4, theme => ({
  container: {
    backgroundColor: theme['color-basic-400'],
    paddingVertical: 8,
    paddingHorizontal: 14,
  },

  card: {
    marginVertical: 8,
    backgroundColor: theme['color-basic-100'],
    flexDirection: 'row',
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
  },
  cardContent: {
    padding: 10,
    flex: 6,
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
    maxHeight: 110,
  },
  cardImage: {
    maxHeight: 110,
    flex: 4,
  },
}));
