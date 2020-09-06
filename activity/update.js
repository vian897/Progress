
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
        // this.stateDate = { chosenDate: new Date() };
        // this.setDate = this.setDate.bind(this);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            description: '',
            date: ''
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.20:5000/exercises/' + this.props.route.params.ID)
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
        // e.preventDefault();

        // const user = {
        //   username: this.state.username,
        // }

        console.log(' EXERCISES ', exercises);

        axios.post('http://192.168.1.20:5000/exercises/update/' + this.props.route.params.ID, exercises)
            .then(res => console.log(res.data))
    }

    render() {
        console.log(this.props.route.params.ID)
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