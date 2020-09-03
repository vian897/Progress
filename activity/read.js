
import React, {
    Component
} from 'react';


import { View, Text, FlatList, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';

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
    Card,
    CardItem,
    Item,
    Input,
    Form
} from 'native-base';

import axios from 'axios'

import { SwipeListView } from 'react-native-swipe-list-view'

export default class AnatomyExample extends Component {
    constructor(props) {
        super(props);
        // this.onChangeUsername = this.onChangeUsername.bind(this);
        // this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
        }
    }

    componentDidMount() {
        axios.get('http://192.168.1.20:5000/users/')
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

    render() {
        return (<View style={styles.container} >
            <View style={styles.header}>
                <Text style={styles.txtHeader}> Daftar User </Text>
            </View>
            <SwipeListView
                data={this.state.users}
                renderItem={({ item }) => (
                    <TouchableHighlight
                        onPress={() => console.log('You touched me')}
                        style={styles.rowFront}
                        underlayColor={'#EEEEEE'}
                    >
                        <View>
                            <Text>{item.username}</Text>
                        </View>
                    </TouchableHighlight>
                )}
                renderHiddenItem={(data, rowMap) => (
                    <View style={styles.rowBack}>
                        <Text>Left</Text>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnLeft]}
                            onPress={() => closeRow(rowMap, data.item.key)}
                        >
                            <Text style={styles.backTextWhite}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.backRightBtn, styles.backRightBtnRight]}
                            onPress={() => deleteRow(rowMap, data.item.key)}
                        >
                            <Text style={styles.backTextWhite}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                leftOpenValue={75}
                rightOpenValue={-150}
                previewRowKey={'0'}
                previewOpenValue={-40}
                previewOpenDelay={3000}
            />
        </View>
        )
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
        alignItems: 'center',
        backgroundColor: '#CCC',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        justifyContent: 'center',
        height: 50,
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
});