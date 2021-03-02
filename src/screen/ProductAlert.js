import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Modal,
    TouchableOpacity,
    Image,
} from 'react-native';

const DATA = [
    [{'name':"规格"},[{'name':'ef','selected': true},
                     {'name':'ewrwe','selected': false},
                     {'name':'okoj','selected': false},
                     {'name':'gfg','selected': false},
                     {'name':'re2rg','selected': false},
                     {'name':'erg','selected': false},
                     {'name':'nju','selected': false},
                     {'name':'fv','selected': false},
                     {'name':'uy','selected': false},
                     {'name':'ynn','selected': false}]],
    [{'name':"内容"},[{'name':'11','selected': true},
                     {'name':'234','selected': false},
                     {'name':'77','selected': false},
                     {'name':'456','selected': false}]]
                     
                     
]
 
export default class ProductAlert extends Component {
 
  //定义静态的属性,可通过传参数的方式直接传送,那在本组件中就需要使用this.props.alertTitle等写法
  static propTypes = {
      alertTitle: "文本标题",  //自定义文本标题
      alertContent: "文本内容",  //自定义文本内容
      cancleBtnTitle: "取消",  //自定义取消按钮文本
      comformBtnTitle: "确定",  //自定义取消确定文本
  }
 
  constructor(props){
    super(props);
 
    this.state = ({
        isShow:false,
        dataSource: DATA,
    })
  }
 
  render() {
 
      if (!this.state.isShow) {
          return null;
      }else {
          return (
                <Modal
                    visible={this.state.isShow}
                    //显示是的动画默认none
                    //从下面向上滑动slide
                    //慢慢显示fade
                    animationType={'fade'}
                    //是否透明默认是不透明 false
                    transparent={true}
                    //关闭时调用
                    onRequestClose={() => {}}
                >
                    <View style = {styles.container}>
                        <View style = {styles.AlertView}>
                            <View style={{marginBottom: 100}}>
                                <View style={{position: 'absolute', width: 87, height: 87,backgroundColor: 'white',
                            borderRadius:4, left: 10,top: -25}}>
                                    <Image style={{width: 82,height: 82}} source={require('../images/draw/3C_pic_3.png')}/>
                                </View>
                                <TouchableOpacity onPress={() => {this._closeAlert()}}  style={{right: 0, top: 0,position: 'absolute'}}>
                                    <Image style={{width: 40, height: 40}} source={require('../images/draw/icon_close.png')}/>
                                </TouchableOpacity>
                                <View style={{marginLeft: 115, marginTop: 20}}>
                                    <Text>¥ 1836.5</Text>
                                    <Text>已选择: 本色; 1000ml</Text>
                                </View>
                                {this._kindShow()}
                            </View>
                            <TouchableOpacity onPress={() => {this._closeAlert()}} 
                                            style={{height: 70,backgroundColor: 'rgba(226, 35, 26, 1)'}}>
                                <Text style={{lineHeight: 70,textAlign: 'center',color: 'white'}}>确定</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
          )
      };
 
 
  }

  _closeAlert=() => {
      this.setState({
          isShow: false,
      })
  }

  _kindShow=() => {
        let num = [];
        for (let i = 0; i < this.state.dataSource.length; i++) {
            let view;
            view = (<View key={i} >
                        <Text style={{marginLeft: 10}}>
                            {this.state.dataSource[i][0].name}
                        </Text>
                        <View style={{marginTop: 8,flexDirection: 'row',marginBottom: 8, flexWrap: 'wrap'}}>
                            {this._differentKind(i)}
                        </View>
                    </View>);
            num.push(view);
        }
        return num;
  }
  
  // 1.第几个规格 
  _differentKind=(kindNum)=> {
    let num = [];
    for (let i = 0; i < this.state.dataSource[kindNum][1].length; i++) {
        let view;
        view = (<TouchableOpacity onPress={() => {this._chooseKind(kindNum, i)}} 
        style={{marginTop: 10,borderRadius: 2,marginLeft: 10,borderWidth: 1, borderColor: this.state.dataSource[kindNum][1][i].selected ? 'rgba(226, 35, 26, 1)' : 'rgba(190, 190, 190, 1)',paddingLeft: 20, paddingRight: 20, paddingTop: 4, paddingBottom: 4}}>
            <Text style={{color: this.state.dataSource[kindNum][1][i].selected ? 'rgba(226, 35, 26, 1)' : 'rgba(190, 190, 190, 1)'}}>{this.state.dataSource[kindNum][1][i].name}</Text>
            </TouchableOpacity>);
        num.push(view);
    }
    return num;
  }

  // 1. 第几个规格  2.规格里面第几个样式
  _chooseKind=(kindNum,styleNum) => {
      for(let i=0; i<this.state.dataSource[kindNum][1].length; i++){
        this.state.dataSource[kindNum][1][i].selected = false
      }
      this.state.dataSource[kindNum][1][styleNum].selected = true;
      console.log(this.state.dataSource)
      this.setState({
          dataSource: this.state.dataSource
      })

    //   item.selected = true
    //    resource.forEach((v, i) => {
    //     v.selected = true
    //    });
    //   console.log(item,resource)
  }
 
  //显示
  show(title,content){
    this.setState({
        isShow:true,  //显示弹窗
        alertTitle:title,
        alertContent:content,
    })
  }
 
  //消失弹窗
    dissmiss = (delay) => {
    // 延时0.5,据说体验比较好
        let duration = 0;
 
        if (delay == null || delay <= 0){
            duration = 3;
        }else {
            duration = delay;
        }
 
        this.timer = setTimeout(() => {
            this.setState({
                isShow:false,
            });
            this.timer && clearTimeout(this.timer);
        },duration*1000);
    }
 
}
 
const styles = StyleSheet.create({
 
    container:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.4)',
      justifyContent: 'flex-end'
    },
 
    AlertView:{
      backgroundColor:'white',
      borderRadius:8,
      marginLeft:0,
      marginRight:0,
    }
})