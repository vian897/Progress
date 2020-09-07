
import React, {
    Component,
} from 'react';

import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, Alert, Modal, Button, ListView } from 'react-native';

// import {} from

import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Left,
    Right,
    Body,
    Icon,
    SwipeRow,
    Card,
    CardItem,
    Item,
    Input,
    Form
} from 'native-base';

import axios from 'axios';

import { SwipeListView } from 'react-native-swipe-list-view';

export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    getData() {
        axios.get('http://192.168.1.38:5000/exercises/')
            .then(Response => {
                const users = Response.data;
                this.setState({ users })
                console.log(users)
            })
            .catch((Error) => {
                console.log(Error);
            })
    }

    componentDidUpdate() {
        this.getData()
    }


    componentDidMount() {
        this.getData();
        axios.get('http://192.168.1.38:5000/exercises/')
            .then(Response => {
                const users = Response.data;
                this.setState({ users })
                console.log(users)
            })
            .catch((Error) => {
                console.log(Error);
            })
    }


    key = (item, index) => index.toString()
    createTwoButtonAlert(id, name, deskripsi, durasi) {
        Alert.alert(
            "Action",
            "Select Action",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "EDIT",
                    onPress: () => {
                        this.props.navigation.navigate('Update', { ID: id, NAMA: name, DESKRIPSI: deskripsi, DURASI: durasi });
                    },
                    style: "cancel"
                },
                {
                    text: "DELETE", onPress: () => {
                        axios.delete(`http://192.168.1.38:5000/exercises/${id}`).then(res => console.log(res.data));
                        this.getData()
                    }
                }
            ],
            { cancelable: false }
        );
    }

    createThreeButtonAlert = () =>
        Alert.alert(
            "Alert Title",
            "My Alert Msg",
            [
                {
                    text: "Ask me later",
                    onPress: () => console.log("Ask me later pressed")
                },
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    keyExtractor = (item, index) => index.toString()

    render() {
        const { modalVisible } = this.state;

        return (
            <View style={styles.container} >
                <View style={styles.header}>
                    <Text style={styles.txtHeader}> Daftar List To Do </Text>
                </View>

                <FlatList
                    keyExtractor={this.keyExtractor}
                    data={this.state.users}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => {
                                console.log(item._id);
                                this.createTwoButtonAlert(item._id, item.username, item.description, item.date)
                            }}
                            style={styles.rowFront}
                        >
                            <Content>
                                <Card>
                                    <CardItem>
                                        <Icon style={{ fontSize: 24 }} type="FontAwesome5" name="hotel" />
                                        <Text>{item.username}{"\n"}{item.description}{"\n"}{item.date}</Text>
                                    </CardItem>
                                </Card>
                            </Content>
                        </TouchableHighlight>
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginTop: 20,
        flex: 1,
    },
    txtHeader: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    },
    header: {
        marginTop: -20,
        height: 60,
        backgroundColor: '#9933ff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    subtitleView: {
        flexDirection: 'row',
        paddingLeft: 10,
        marginBottom: -10,
        paddingTop: 5

    },
    ratingImage: {
        height: 19.21,
        width: 100
    },
    ratingText: {
        paddingLeft: 2,
        color: 'grey'
    },

    backTextWhite: {
        color: '#FFF',
    },
    rowFront: {
        borderBottomColor: 'black',
        justifyContent: 'flex-start',
        marginStart: 10,
        marginEnd: 10,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#ccff33',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    editBtn: {
        alignItems: 'center',
        backgroundColor: '#ccff33',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    deltBtn: {
        textAlign: 'right',
        marginEnd: 24,
        backgroundColor: '#ff0066',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 15,
    },
    backRightBtn: {
        alignItems: 'center',
        bottom: 0,
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        width: 75,
    },
    backRightBtnLeft: {
        backgroundColor: 'blue',
        right: 75,
    },
    backRightBtnRight: {
        backgroundColor: 'red',
        right: 0,
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});