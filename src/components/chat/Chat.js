import React, { Component } from 'react';
import firebase from 'firebase';
import guid from 'guid';
// import Header from '../../component/Header';
import ChatBox from './ChatBox';
import ChatList from './ChatList';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class Chat extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {
        this.guid = guid.create();
        firebase.initializeApp({
            apiKey: "AIzaSyBOXcIiQtM0cReafiirKmlhqRg1JaTf26M",
            authDomain: "react-training-chat.firebaseapp.com",
            databaseURL: "https://react-training-chat.firebaseio.com",
            projectId: "react-training-chat",
            storageBucket: "react-training-chat.appspot.com",
            messagingSenderId: "216397669617"
        });
    }


    onClick = event => {
        event.preventDefault();
        console.log('clicked', this);
    }

    onClick2(event) {
        event.preventDefault();
        console.log('NUMBER TWO ClICKED', this);
    }

    render() {
        return (
            <div>
                {/* <Header title='Firebase Chat App' onClick={this.onClick} /> */}
                <MuiThemeProvider>
                    <AppBar
                        title="Firebase Chat App"
                        iconClassNameRight="muidocs-icon-navigation-expand-more"
                        showMenuIconButton="false"
                    />
                    <ChatList db={firebase} guid={this.guid.value} />
                    <ChatBox db={firebase} guid={this.guid.value} />
                </MuiThemeProvider>
            </div>
        );
    }
}

export default Chat;
