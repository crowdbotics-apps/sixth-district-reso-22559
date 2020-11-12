import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList172087Navigator from '../features/ArticleList172087/navigator';
import ArticleList172086Navigator from '../features/ArticleList172086/navigator';
import ArticleList172069Navigator from '../features/ArticleList172069/navigator';
import ArticleList172068Navigator from '../features/ArticleList172068/navigator';
import ArticleList172067Navigator from '../features/ArticleList172067/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList172087: { screen: ArticleList172087Navigator },
ArticleList172086: { screen: ArticleList172086Navigator },
ArticleList172069: { screen: ArticleList172069Navigator },
ArticleList172068: { screen: ArticleList172068Navigator },
ArticleList172067: { screen: ArticleList172067Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
