/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  Component
} from 'react';

import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,

  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Card,
  CardItem,
  Item,
  Input,
  Form,
  Drawer,
  View
} from 'native-base';

import axios from 'axios'

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// import HomeActivity from './activity/home';
import InputActivity from './activity/inpuddata';
import ReadActivity from './activity/read';
import UpdateActivity from './activity/update';

const Stack = createStackNavigator();

export default class AnatomyExample extends Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Input" component={InputActivity} />
          <Stack.Screen name="Read" component={ReadActivity} />
          <Stack.Screen name="Update" component={UpdateActivity} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
