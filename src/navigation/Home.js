import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Image, 
        TouchableOpacity, 
        SectionList, 
        FlatList,
        ImageBackground,
        SafeAreaView,
        Dimensions,
        UIActivityIndicator,
        RefreshControl,
    TextInput} from 'react-native';


export default class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = {
           ata: [],
           loaded: false,
           count: 0,
        };
    }

    componentDidMount() {

    }

    fetchData=()=> {
        fetch(url)
    }


    _onSelectVaule(isOk){
        this.setState({
            count: this.state.count + 100,
        })
        this.props.navigation.navigate("Category");
    }
    
    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: '#F2F2F2'}}>
            {/* #FF5E87 */}
                <View style={{backgroundColor: '#FF5E87', height: 40, width: '100%'}}>
                    <Text>
                        {this.state.count}
                    </Text>
                </View>
                <TextInput style={{backgroundColor: 'red', width: 280, height: 80}}
                    onChangeText={
                        text=>{
                            console.log(text)
                        }
                    }
                />
                <TouchableOpacity onPress={()=>this._onSelectVaule(false)} style={{backgroundColor: 'blue', width: 80, height: 80}}/>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
   
})
