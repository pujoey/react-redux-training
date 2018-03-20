import React, { Component } from 'react';
import { FirebaseTable } from "../../Constants";

export default class ChatBox extends Component {

    constructor(props) {
        super(props);
        this.state = {
            chat: ''
        }
    }

    onChange = event => {
        this.setState({
            chat: event.target.value
        });
    };

    onKeyUp = event => {
        const text = event.target.value.trim();
        if (event.keyCode === 13 && text !== '') {
            event.preventDefault();
            const dbCon = this.props.db.database().ref(FirebaseTable);
            dbCon.push({
                text, 
                guid: this.props.guid,
            });
            this.setState({
                chat: ''
            })
        }
    };

    render() {
        return (
            <form action="">
                <textarea name="" id="" cols="100" rows="" 
                    value={this.state.chat}
                    onChange={this.onChange}
                    onKeyUp={this.onKeyUp}
                >
                </textarea>
            </form>
        )
    }
}