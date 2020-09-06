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
import InputActivity from './activity/input';
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

      // <View>

      // </View>

      // <Container>
      //   <Header>
      //     <Left>
      //       <Button transparent>
      //         <Icon name='menu' />
      //       </Button>
      //     </Left>
      //     <Body>
      //       <Title>Test Project</Title>
      //     </Body>
      //     <Right />
      //   </Header>

      //   <Content>
      //     <Tabs renderTabBar={() => <ScrollableTab />}>
      //       <Tab heading="Input">
      //         <InputActivity />
      //       </Tab>
      //       <Tab heading="Read">
      //         <ReadActivity />
      //       </Tab>
      //     </Tabs>

      //   </Content>

      //   <Footer>
      //     <FooterTab>
      //       <Button full>
      //         <Text>Test Project Application</Text>
      //       </Button>
      //     </FooterTab>
      //   </Footer>
      // </Container>
    );
  }
}

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });
