
import React, {
    Component
} from 'react';


import { TextInput } from 'react-native';


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
    DatePicker,
    Label
} from 'native-base';

import axios from 'axios'

export default class UpdateCRUD extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            description: '',
            date: ''
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.38:5000/exercises/' + this.props.route.params.ID)
            .then(Response => {
                this.setState({
                    username: Response.data.username,
                    description: Response.data.description,
                    date: Response.data.date
                })
            })
            .catch((Error) => {
                console.log(Error);
            })
    }

    onUpdate(id) {
        const exercises = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }

        console.log(' EXERCISES ', exercises);

        axios.post('http://192.168.1.38:5000/exercises/update/' + this.props.route.params.ID, exercises)
            .then(res => console.log(res.data))
    }

    render() {
        console.log(this.props.route.params.ID)
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
                    <Button rounded block style={{ marginLeft: 20, marginRight: 20, marginTop: 20 }}
                        onPress={() => {
                            this.onUpdate(this.props.route.params.ID);
                            this.props.navigation.navigate('Read')
                        }}>
                        <Text>UPDATE</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}