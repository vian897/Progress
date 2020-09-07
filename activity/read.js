
import React, {
    Component,
} from 'react';

import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight, Alert, Modal, Button } from 'react-native';

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
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            modalVisible: false,
            lastRefresh: Date(Date.now()).toString(),

        }
        this.refreshScreen = this.refreshScreen.bind(this)
    }

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    refreshScreen() {
        this.setState({ lastRefresh: Date(Date.now()).toString() })
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

    getDataspec(id) {
        axios.get(`http://192.168.1.20:5000/exercises/update/${id}`)
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

    // onChangeUsername(e,) {
    //   this.setState({
    //     username: e.target.value
    //   });
    // }

    // onSubmit = () => {
    //     const users = {
    //         username: this.state.username
    //     }
    //     // e.preventDefault();

    //     // const user = {
    //     //   username: this.state.username,
    //     // }

    //     console.log(' USER ', users);

    //     axios.post('http://192.168.1.20:5000/users/add', users)
    //         .then(res => console.log(res.data))
    // }
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
                    <Text style={styles.txtHeader}> Daftar User </Text>
                </View>


                <SwipeListView
                    keyExtractor={this.keyExtractor}
                    data={this.state.users}
                    renderItem={({ item }) => (
                        <TouchableHighlight
                            onPress={() => {
                                console.log(item._id);
                                this.createTwoButtonAlert(item._id, item.username, item.description, item.date)
                            }}
                            style={styles.rowFront}
                            underlayColor={'#EEEEEE'}
                        >
                            <View>
                                <Text>
                                    {item.username}
                                </Text>
                                <Text>

                                    {item.description}
                                </Text>
                                <Text>
                                    {item.date}
                                </Text>

                                {/* <Modal
                                    animationType="slide"
                                    transparent={true}
                                    visible={modalVisible}
                                    onRequestClose={() => {
                                        Alert.alert("Modal has been closed.");
                                    }}
                                >
                                    <View style={styles.centeredView}>
                                        <View style={styles.modalView}>
                                            <Text style={styles.modalText}>ini deskripsi {item.description}</Text>

                                            <TouchableHighlight
                                                style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                                                onPress={() => {
                                                    this.setModalVisible(!modalVisible);
                                                }}
                                            >
                                                <Text style={styles.textStyle}>Hide Modal</Text>
                                            </TouchableHighlight>
                                        </View>
                                    </View>
                                </Modal> */}
                            </View>

                        </TouchableHighlight>

                    )}
                />


                {/* <Button
                    title={"REFRESH"}
                    onPress={() => { this.getData() }}
                /> */}
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
        backgroundColor: 'brown',
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
        alignItems: 'flex-start',
        backgroundColor: '#C2B0E0',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'flex-start',
        paddingLeft: 20,
        height: 70,
    },
    rowBack: {
        alignItems: 'center',
        backgroundColor: '#DDD',
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