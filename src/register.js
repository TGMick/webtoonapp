import React, { Component } from 'react';
import axios from 'axios';
import { StyleSheet, StatusBar } from "react-native";
import { Text, Button, Content, Input, Item, Container } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from '@react-native-vector-icons/FontAwesome';


export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            icon: "eye-lash",
            pass: true,
            password: true,
            isDisabled: true,
            invalidPass: false,
            username: "",
            name: "",
            token: "",
            id: null,
        }
    }
}



