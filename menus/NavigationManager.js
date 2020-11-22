
import React from 'react';
import Animated, { timing } from 'react-native-reanimated';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator, TransitionPresets} from 'react-navigation-stack'
import MainMenu from './MainMenu.js'
import PlayerSelection from './PlayerSelection.js'


const AppStackNav = createStackNavigator(
    {
    MainMenu: {
        screen: MainMenu
    },
    PlayerSelect: {
        screen: PlayerSelection
    },
},
{
    initialRouteName: 'MainMenu',
    defaultNavigationOptions: {
        ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,
    },

},
);

const AppNav = createAppContainer(AppStackNav);

export default AppNav;
