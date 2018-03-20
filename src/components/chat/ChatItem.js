import React from 'react';
import styles from './ChatItem.css';
import {ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import Face from 'material-ui/svg-icons/action/face';
import Manyfaces from 'material-ui/svg-icons/action/supervisor-account';

export default function (props) {
    return (
        <div>
            <ListItem
                className={[styles.chatItem, props.mine ? styles.hasTextRight: ""].join(' ')}
                leftAvatar={props.mine ? "":<Avatar icon={<Manyfaces />} />}
                rightAvatar={props.mine ? <Avatar icon={<Face />} />:""}
                primaryText={props.chat}
            />
        </div>
    );
}