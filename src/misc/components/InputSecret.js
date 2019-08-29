import React, {Component} from 'react';
import Utils from '../Utils';
import { Item, Label, Input, Text, View } from 'native-base';

export default class InputSecret extends Component{
    render() {
        return (
            <View style={this.props.styles}>
                <Item floatingLabel error={this.props.required ? true : false} >
                    <Label>{this.props.label}</Label>
                    <Input value={this.props.value} secureTextEntry
                        onChangeText={this.props.onChangeText} maxLength={this.props.maxLength} />
                </Item>
                {
                    this.props.required && Utils.isEmpty(this.props.value) &&
                    <Text style={{ marginLeft: 5, color: '#dc3545' }}>Campo obrigatório</Text>
                }
            </View>
        );
    }
}