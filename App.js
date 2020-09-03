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
  Drawer
} from 'native-base';

import axios from 'axios'


// import HomeActivity from './activity/home';
import InputActivity from './activity/input';
import ReadActivity from './activity/read';

export default class AnatomyExample extends Component {
  // constructor(props) {
  //   super(props);
  //   // this.onChangeUsername = this.onChangeUsername.bind(this);
  //   // this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     username: '',
  //   }
  // }

  // // onChangeUsername(e,) {
  // //   this.setState({
  // //     username: e.target.value
  // //   });
  // // }

  // onSubmit = () => {
  //   const users = {
  //     username: this.state.username
  //   }
  //   // e.preventDefault();

  //   // const user = {
  //   //   username: this.state.username,
  //   // }

  //   console.log(' USER ', users);

  //   axios.post('http://192.168.1.20:5000/users/add', users)
  //     .then(res => console.log(res.data))
  // }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Test Project</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Tabs renderTabBar={() => <ScrollableTab />}>
            <Tab heading="Input">
              <InputActivity />
            </Tab>
            <Tab heading="Read">
              <ReadActivity />
            </Tab>
          </Tabs>

        </Content>

        <Footer>
          <FooterTab>
            <Button full>
              <Text>Test Project Application</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
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
      //     <Form>
      //       <Card>
      //         <CardItem>
      //           <Icon active name="logo-googleplus" />
      //           <Item>
      //             <Input placeholder="Username"
      //               onChangeText={username =>
      //                 // console.log(namahotel)
      //                 this.setState({ username: username })
      //               }
      //               value={this.state.username}
      //             />
      //           </Item>
      //           <Right>
      //             <Icon name="arrow-forward" />
      //           </Right>
      //         </CardItem>
      //       </Card>

      //     </Form>
      //     <Button block light style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }} onPress={this.onSubmit}>
      //       <Text>Submit</Text>
      //     </Button>
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
