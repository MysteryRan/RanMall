import React, {Component, useState} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        Image, 
        TouchableOpacity, 
        ScrollView, 
        FlatList,
        Dimensions,
        ImageBackground,
        SafeAreaView,
        CachedImage,
        UIActivityIndicator,
        Platform,
        NativeModules,
        StatusBar,
        RefreshControl} from 'react-native';
// 轮播        
import Swiper from 'react-native-swiper'

// 网络请求工具
import {shopRequest} from '../tool/NetworkTool'

const screen = Dimensions.get('window')
const { StatusBarManager } = NativeModules;


const DATA = [
    {
      title: "Main dishes trte fwe",
      description: '黑色 xl',
      price: 9089,
      count: 1,
      selected: false,
    },
    {
        title: "石佛寺佛教哦我我IQ无定河U盾和我的护卫队还得你就开始发你了手机打开",
        description: '黑色 大 xl',
        price: 38344,
        count: 2,
        selected: false,
    },
    {
        title: "省得麻烦季度付哦说道富欧式的烦恼地缚少年大佛",
        description: '大幅二维费 份额  份额 xl',
        price: 123434,
        count: 3,
        selected: false,
    },
    {
        title: "说服力为辅交给我我见佛问服务呢佛问分为非问佛我文件否",
        description: '色方法 份儿饭 份额',
        price: 34434,
        count: 4,
        selected: false,
    }
  ];

let statusBarHeight;
	if (Platform.OS === "ios") {
	     StatusBarManager.getHeight(height => {
	         statusBarHeight = height;
	     });
	 } else {
	     statusBarHeight = StatusBar.currentHeight;
}

class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
        // console.log(statusBarHeight.height)
        
    }

    _configNavigation = () => {
        const {navigation, route} = this.props;
        navigation.setOptions({
          // headerTitle:getHeaderTitle(route),
          headerTransparent: true,
          headerTitle: '2223332',
          headerBackTitle: ' ',
          
        });
      }

    componentDidMount() {
        this._configNavigation()
    }

    _loadData() {
        
    }

    // 全选
    _selectedAll() {
        
    }

  

    // 分割线
    _separator() {
        return (<View style={{height: 1}}></View>)
    }

    _likeSeparator() {
        return (<View style={{height: 6}}></View>)
    }

    //删除
    _deleteFootHistory() {
        
    }

    // 刷新控件
    _refreshData = () => {
        this.setState({
            isRefreshing: true
        });
        setTimeout(() => {
            this.setState({
                isRefreshing: false,
                // data: list,
            });
        }, 5000);
    };

    // 加载更多控件
    _loadMoreData() {
        // this.setState({
        //     loadMore: true
        // });
        setTimeout(() => {
            this.setState({
                loadMore: false,
                // data: list,
            });
        }, 5000);
    }
    
    _setTitle=() => {
        return <View style={{width: '100%', flexDirection: 'row'}}>
            <ImageBackground resizeMode="cover" style={{width: '100%',}} source={require('../images/draw/vip_head_bg.png')}>
                <View style={{flexDirection: 'row',width: '100%',alignItems: 'center',marginTop: 15}}>
                    <TouchableOpacity style={{marginLeft: 15,alignItems: 'center'}}>
                        <Image source={require('../images/draw/img_avatar.png')} resizeMode="contain" style={{height: 46,width: 46,marginBottom: -7,zIndex: 10}}/>
                    </TouchableOpacity>
                    <View style={{marginLeft: 10,height: 46,justifyContent: 'space-between'}}>
                        <Text style={{color: '#fff', fontSize: 16,fontFamily:'PingFangSC-Medium' }}>用户名</Text>
                        <View style={{backgroundColor: 'white', paddingLeft: 12, paddingRight: 12, borderRadius: 7, paddingTop: 5, paddingBottom: 5}}>
                            <Text style={{fontSize: 9}} >普通会员</Text>
                        </View>   
                    </View>
                </View>

                <TouchableOpacity activeOpacity={0.8} style={{width: 44,height: 44,position: 'absolute',right: 16,top:0,paddingTop: 8,alignItems: 'flex-end'}} onPress={()=>this.goSetting()}>
                    <Image source={require('../images/draw/setting.png')} style={{width: 24,height: 24}}/>
                </TouchableOpacity>

                <View style={{marginTop: 10,marginLeft: 47,width: screen.width - 94, height: 50,flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{fontSize: 13, color: 'white'}} activeOpacity={0.8} onPress={()=>this.goShoppingVoucher()}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}>0</Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>所获购物券</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{fontSize: 13, color: 'white'}} activeOpacity={0.8} onPress={() => this.goMyService(3)}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}>0</Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>我的收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} activeOpacity={0.8} onPress={() => {
                        this.props.navigation.navigate("myFootHistory");
                    }}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}>0</Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>我的足迹</Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground style={{marginLeft: 15,width: screen.width - 30,height: 40,flexDirection: 'row',justifyContent: 'space-between'}} resizeMode="cover" source={require('../images/draw/vip_content_bg.png')}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('../images/draw/icon_vip.png')} style={{height: 16,width: 16}}/>
                        <Text style={{color: '#F0DA91',fontSize: 12,fontFamily: 'PingFangSC-Regular',marginLeft: 3}}>VIP</Text>
                    </View>
                    <View style={{alignItems: 'center',height: 40}}>
                        <Text style={{color: '#F0DA91',fontSize: 11,fontFamily: 'PingFangSC-Regular',lineHeight: 40}}>可升级</Text>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row',alignItems: 'center'}} activeOpacity={0.8} onPress={()=>this.goMyWallet('vip6')}>
                        <Text style={{color: '#F0DA91',fontSize: 12,fontFamily: 'PingFangSC-Regular',marginRight: 3}}>查看特权</Text>
                        <Image source={require('../images/draw/icon_gold_right.png')} style={{height: 16,width: 16}}/>
                    </TouchableOpacity>
                </ImageBackground>
                </ImageBackground>
               </View>
    }

    _setOrder=() => {
        return (<View style={{backgroundColor: 'rgba(242, 242, 242, 1)'}}>
            <View style={{marginTop: 8,marginBottom: 8,marginLeft: 10,marginRight: 10,backgroundColor: 'white', borderRadius: 8}}>
                <TouchableOpacity style={{borderTopLeftRadius: 8, borderTopRightRadius: 8,backgroundColor: 'white'}} onPress={() => this.goMyOrder(1)}>
                    <View style={{height: 38,borderBottomWidth:1,borderBottomColor:'#E6E6E6', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={{lineHeight: 38, fontSize: 14,marginLeft: 10}}>我的订单</Text>
                        <View style={{marginRight: 10,flexDirection: 'row', justifyContent: 'space-between'}}>
                            <Text style={{lineHeight: 38,color: 'rgba(0,0,0,0.4)'}}>查看全部订单</Text>
                            <Image style={{width: 16, height: 16, alignSelf: 'center'}} source={require("../images/draw/everyCheap/right_row.png")}/>
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{paddingTop: 10, width: (screen.width - 20) / 4.0}} onPress={() => this.goMyOrder(1)}>
                        <Image style={{alignSelf: 'center',height: 34, width: 34,marginBottom: 3}}
                            source={require("../images/draw/icon_dfk.jpg")}/>
                        <Text style={{alignSelf: 'center', fontSize: 12,marginBottom: 9, lineHeight: 16}} >待付款</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingTop: 10, width: (screen.width - 60) / 4.0}} onPress={() => this.goMyOrder(3)}>
                        <Image style={{alignSelf: 'center',height: 34, width: 34,marginBottom: 3}}
                            source={require("../images/draw/icon_dsh.jpg")}/>
                        <Text style={{alignSelf: 'center',fontSize: 12,marginBottom: 9,lineHeight: 16}}>待收货</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={{paddingTop: 10, width: (screen.width - 60) / 4.0}} onPress={() => this.goMyOrder(4)}>
                        <Image style={{alignSelf: 'center',height: 34, width: 34,marginBottom: 3}}
                            source={require("../images/draw/icon_dfh.jpg")}/>
                        <Text style={{alignSelf: 'center',fontSize: 12,marginBottom: 9,lineHeight: 16}}>待评价</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{paddingTop: 10, width: (screen.width - 60) / 4.0}} onPress={() => this.goMyOrder(5)}>
                        <Image style={{alignSelf: 'center',height: 34, width: 34,marginBottom: 3}}
                            source={require("../images/draw/icon_sh.jpg")}/>
                        <Text style={{alignSelf: 'center',fontSize: 12,marginBottom: 9,lineHeight: 16}}>退款/售后</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>)
    }

    _setMoney=() => {
        return <View style={{backgroundColor: 'rgba(242, 242, 242, 1)'}}>
        <TouchableOpacity dateType={"wallet"}
                          onPress={() => this.goMyWallet('wallet')}
                          style={{backgroundColor: 'white',marginLeft: 10, marginRight: 10,
                          borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
            <View style={{
                height: 38,
                color: 'rgba(0, 0, 0, 0.8)',
                fontSize: 14,
                borderBottomWidth:1,
                borderBottomColor:'#E6E6E6',
            }}>
                <Text style={{marginLeft: 10,lineHeight: 38}}>我的钱包</Text>
            </View>
        </TouchableOpacity>
        <View style={{borderBottomLeftRadius: 8, borderBottomRightRadius: 8,flexDirection: 'row',backgroundColor: 'white',marginLeft: 10,marginRight: 10,justifyContent: 'space-between'}}>
            <TouchableOpacity  style={{width: (screen.width) / 3}} onPress={() => this.goMyWallet('balance')}>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'rgba(255, 53, 111, 1)',marginTop: 10}}>¥123232</Text>
                <Text style={{alignSelf: 'center',marginTop: 8,marginBottom: 10}}>余额</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{width: (screen.width) / 3}} onPress={() => this.goMyWallet('gift')}>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'rgba(255, 53, 111, 1)',marginTop: 10}}>2323</Text>
                <Text style={{alignSelf: 'center',marginTop: 8,marginBottom: 10}}>礼品券</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: (screen.width) / 3}} onPress={() => this.goMyWallet('coup')}>
                <Text style={{alignSelf: 'center', fontSize: 14, color: 'rgba(255, 53, 111, 1)',marginTop: 10}}> 0</Text>
                <Text style={{alignSelf: 'center',marginTop: 8,marginBottom: 10}}>购物券</Text>
            </TouchableOpacity>
        </View>
    </View>                    
    }

    _setService = () => {
        {/* 我的服务 */}
        return <View >
        <View style={{flexDirection: 'row',justifyContent: 'space-between',backgroundColor: 'white', marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 8}}>
            <TouchableOpacity style={{width: (screen.width) / 3}} onPress={() => this.goMyService(5)}>
                <Image style={{marginTop: 10,alignSelf: 'center', width: 24, height: 24}}
                       source={require("../images/draw/icon_dianhua.png")}/>
                <Text style={{color: 'rgba(102, 102, 102, 1)',fontSize: 12,alignSelf: 'center',marginTop: 5,marginBottom: 10}}>电话咨询</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: (screen.width) / 3}} onPress={() => this.goMyService(6)}>
                  <Image style={{marginTop: 10,alignSelf: 'center', width: 24, height: 24}}
                         source={require("../images/draw/icon_help.png")}/>
                  <Text style={{color: 'rgba(102, 102, 102, 1)',fontSize: 12,alignSelf: 'center',marginTop: 5,marginBottom: 10}}>在线咨询</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{width: (screen.width) / 3}} sonPress={() => this.goMyService(4)}>
                <Image style={{marginTop: 10,alignSelf: 'center', width: 24, height: 24}}
                       source={require("../images/draw/icon_address.png")}/>
                <Text style={{color: 'rgba(102, 102, 102, 1)',fontSize: 12,alignSelf: 'center',marginTop: 5,marginBottom: 10}} >地址管理</Text>
            </TouchableOpacity>
        </View>

    </View>
    }

    _getLikeItem=() => {
        return (<TouchableOpacity onPress={()=>this._goProduce(item.item)} style={{marginLeft: 10,backgroundColor: 'white', width: (screen.width - 28) / 2,borderRadius: 8}}>
                    {/*   */}
                    <Image source={require('../images/draw/everyCheap/dayCheap_placeholder.png')} style={{width: (screen.width - 20 - 8) / 2,height: (screen.width - 20 - 8) / 2,borderTopRightRadius: 8, borderTopLeftRadius: 8}} />
                    <Text numberOfLines={2} style={{marginLeft: 8,marginRight: 8,marginTop: 8, color: 'rgba(94, 94, 94, 1)', fontSize: 14,}}>regergergerg</Text>
                    <Text style={{marginLeft: 8,marginTop: 12,fontFamily: 'PingFangSC-Semibold', fontSize: 16}}>¥234234</Text>
                    <View style={{justifyContent: 'space-between',flexDirection: 'row',marginLeft: 8, marginRight: 8,marginBottom: 12}}>
                        <Text style={{color: 'rgba(180, 40, 45, 1)', fontSize: 12}}>¥13</Text>
                        <Text style={{color: 'rgba(145, 145, 145, 1)', fontSize: 10}}>已售45</Text>
                    </View>
                </TouchableOpacity>)
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: 'rgba(240, 95, 89, 1)'}}>
                <ScrollView style={{backgroundColor: 'rgba(242, 242, 242, 1)'}}>
                    {this._setTitle()}
                    {this._setOrder()}
                    {this._setMoney()}
                    {this._setService()}
                    <View style={{height: 48, flexDirection: "row", justifyContent: 'space-around', alignItems: 'center'}}>
                            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',height: 1,width: (screen.width - 120) / 2}}></View>
                            <Text style={{}}>猜你喜欢</Text>
                            <View style={{backgroundColor: 'rgba(0, 0, 0, 0.1)',height: 1,width: (screen.width - 120) / 2}}></View>
                    </View>
                    <FlatList
                            data={DATA}
                            renderItem={(item)=>this._getLikeItem(item)}
                            keyExtractor={(item,index)=>index.toString()}
                            horizontal={false}
                            numColumns={2}
                            style={{width: '100%', backgroundColor: 'rgba(242, 242, 242, 1)'}}
                            extraData={this.state}
                            // columnWrapperStyle={}
                            ItemSeparatorComponent={this._likeSeparator}
                        />
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent' ,
        borderRadius: 4,
        marginLeft: 10,
        // marginRight: 10,
    },
})

export default Mine;