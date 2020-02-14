import {createStackNavigator} from 'react-navigation-stack';

import Articles1 from './screens/articles1';
import Articles2 from './screens/articles2';
import Articles3 from './screens/articles3';
import Articles4 from './screens/articles4';
import BlogPosts from './screens/blogposts';
import Article from './screens/article';

import Home from './screens';

export default ArticlesBlueprintNavigator = createStackNavigator(
  {
    Home: {screen: Home},
    Articles1: {screen: Articles1},
    Articles2: {screen: Articles2},
    Articles3: {screen: Articles3},
    Articles4: {screen: Articles4},
    BlogPosts: {screen: BlogPosts},
    Article: {screen: Article},
  },
  {
    initialRouteName: 'Home',
  },
);
