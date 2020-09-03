
import React, {
    Component
} from 'react';

import {
    Container,
    Header,
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
    Form
} from 'native-base';

import axios from 'axios'

export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    // onChangeUsername(e,) {
    //   this.setState({
    //     username: e.target.value
    //   });
    // }

    onSubmit = () => {
        const users = {
            username: this.state.username
        }
        // e.preventDefault();

        // const user = {
        //   username: this.state.username,
        // }

        console.log(' USER ', users);

        axios.post('http://192.168.1.20:5000/users/add', users)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Card>
                            <CardItem>
                                <Icon active name="logo-googleplus" />
                                <Item>
                                    <Input placeholder="Username"
                                        onChangeText={username =>
                                            // console.log(namahotel)
                                            this.setState({ username: username })
                                        }
                                        value={this.state.username}
                                    />
                                </Item>
                                <Right>
                                    <Icon name="arrow-forward" />
                                </Right>
                            </CardItem>
                        </Card>

                    </Form>
                    <Button block light style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }} onPress={this.onSubmit}>
                        <Text>Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}