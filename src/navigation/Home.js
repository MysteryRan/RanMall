import React, {Component} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default class TestMarkCheck extends Component {
    static defaultProps = {
        multiList: [
            {
                "id": "0",
                "name": "音乐",
                select: false
            },
            {
                "id": "1",
                "name": "美术",
                select: false
            },
            {
                "id": "2",
                "name": "舞蹈",
                select: false
            },
        ]
    };

    constructor(props) {
        super(props);
        this.state = {
            multiData: this.props.multiList,
            selectMultiItem: [],
        }
    }

    _selectMultiItemPress(item) {
        if (item.select) {
            this.state.selectMultiItem.splice(this.state.selectMultiItem.findIndex(function (x) {
                return x === item.id;
            }), 1);
        } else {
            this.state.selectMultiItem.push(item.id);
        }
        this.state.multiData[item.id].select = !item.select;
        this.setState({multiData: this.state.multiData});
    }

    _submitMultiPress() {
        alert(`选中了${JSON.stringify(this.state.selectMultiItem)}`)
    }

    _renderMultiMark() {
        let multiData = this.state.multiData;
        let len = multiData.length;
        let menuArr = [];
        for (let i = 0; i < len; i++) {
            let item = multiData[i];
                menuArr.push(
                    <TouchableOpacity
                        onPress={() => this._selectMultiItemPress(item)} style={[styles.markRow, styles.markChecked]}>
                        <Text style={item.select ? styles.markCheckedText : styles.markUnCheck }>{item.name}</Text>
                    </TouchableOpacity>
                )
        }
        return (
            <View style={styles.multiBox}>
                {menuArr}
            </View>
        );
    }

    render() {

        return (
            <View style={styles.container}>
                {this._renderMultiMark()}

                <Button title={"确定"} onPress={() => this._submitMultiPress()}/>

            </View>
        );

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    multiBox: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: 20,
        paddingRight: 20,
    },
    markRow: {
        width: 90,
        height: 40,
        lineHeight: 40,
        padding: 10,
        marginBottom: 16,
        marginRight: 16,
        borderRadius: 24,
        borderWidth: 0.5,
    },
    markChecked: {
        backgroundColor: "#aaa",
        borderColor: "white",
    },
    markUnCheck: {
        backgroundColor: "white",
        borderColor: "#111",
    },
    markCheckedText: {
        fontSize: 15,
        color: "white",
        textAlign: "center",
    },
    markUnCheckText: {
        fontSize: 15,
        color: "#000",
        textAlign: "center",
    },
});