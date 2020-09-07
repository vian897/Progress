
import React, {
    Component
} from 'react';


import { TextInput, Navigator } from 'react-native';



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
    Form,
    Label,
    ActionSheet
} from 'native-base';

import axios from 'axios'

var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        // this.stateDate = { chosenDate: new Date() };
        // this.setDate = this.setDate.bind(this);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            date: '',
        }
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    // onChangeUsername(e,) {
    //   this.setState({
    //     username: e.target.value
    //   });
    // }

    onSubmit = () => {
        const exercises = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }
        // e.preventDefault();

        // const user = {
        //   username: this.state.username,
        // }

        console.log(' EXERCISES ', exercises);

        axios.post('http://192.168.1.38:5000/exercises/add', exercises)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Card>
                            <CardItem>
                                <Item floatingLabel>

                                    <Label>Username</Label>
                                    <Input
                                        onChangeText={username =>
                                            // console.log(namahotel)
                                            this.setState({ username: username })
                                        }
                                        value={this.state.username}
                                    />
                                </Item>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Item floatingLabel>
                                    <Label>What To do</Label>
                                    <Input
                                        onChangeText={description =>
                                            // console.log(namahotel)
                                            this.setState({ description: description })
                                        }
                                        value={this.state.description}
                                    />
                                </Item>
                            </CardItem>
                        </Card>
                        <Card>
                            <CardItem>
                                <Item floatingLabel>

                                    <Label>Duration</Label>
                                    <Input
                                        keyboardType='numeric'
                                        onChangeText={date =>
                                            // console.log(namahotel)
                                            this.setState({ date: date })
                                        }
                                        value={this.state.date}
                                    />
                                </Item>
                            </CardItem>
                        </Card>

                    </Form>
                    <Button rounded success block
                        style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
                        onPress={() => {
                            this.onSubmit();
                            this.props.navigation.navigate('Read')
                        }}>

                        <Text>Submit</Text>
                    </Button>
                    <Button rounded block
                        style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
                        onPress={() => { this.props.navigation.navigate('Read') }} >
                        <Text>
                            READ DATA
                            </Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}