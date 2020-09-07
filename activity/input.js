
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

        this.state = {
            username: '',
            description: '',
            date: '',
        }
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    onSubmit = () => {
        const exercises = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }
        console.log(' EXERCISES ', exercises);

        axios.post('http://192.168.1.38:5000/exercises/add', exercises)
            .then(res => console.log(res.data))
    }

    render() {
        return (
            <Container>
                <Content>
                    <Form>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                placeholder='Nama'
                                onChangeText={username =>
                                    this.setState({ username: username })
                                }
                                value={this.state.username}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                placeholder='What To Do'
                                onChangeText={description =>
                                    this.setState({ description: description })
                                }
                                value={this.state.description}
                            />
                        </Item>
                        <Item rounded
                            style={{ marginTop: 12, marginLeft: 12, marginRight: 12 }}>
                            <Input
                                keyboardType='numeric'
                                placeholder='Duration'
                                onChangeText={date =>
                                    this.setState({ date: date })
                                }
                                value={this.state.date}
                            />
                        </Item>

                    </Form>
                    <Button rounded success block
                        style={{ marginLeft: 12, marginRight: 12, marginTop: 20 }}
                        onPress={() => {
                            this.onSubmit();
                            this.props.navigation.navigate('Read')
                        }}>

                        <Text>Submit</Text>
                    </Button>
                    <Button rounded block
                        style={{ marginLeft: 12, marginRight: 12, marginTop: 20 }}
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