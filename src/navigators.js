
import React, { Component } from 'react';
import { DrawerNavigator, StackNavigator, TabNavigator } from 'react-navigation'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Home from './Home'
import About from './About'
import ItemList from './ItemList'
import Item from './Item'
import TabA from './TabA'
import TabB from './TabB'
import TabC from './TabC'

export const Stack = StackNavigator({
  ItemList: { screen: ItemList },
  Item: { screen: Item },
}, {
  initialRouteName: 'ItemList',
})

export const Tabs = TabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: TabC },
})

export const Drawer = DrawerNavigator({
  Stack: { screen: Stack },
  Tabs: { screen: Tabs },
  None: { screen: About },
})
