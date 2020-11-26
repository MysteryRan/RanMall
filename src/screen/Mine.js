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
        RefreshControl} from 'react-native';
// 轮播        
import Swiper from 'react-native-swiper'

// 网络请求工具
import {shopRequest} from '../tool/NetworkTool'

const screen = Dimensions.get('window')

class Mine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentWillMount() {
        
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

    _renderFooter(type){
		if (!this.state.loadMore) {
					 return (
							 <View style={{height:24,alignItems:'center',justifyContent:'center',marginTop: 5}}>
									 <Text style={{color:'#999999',fontSize:14}}>
											 没有更多数据了
									 </Text>
							 </View>
					 );
			 } else {
					 return (
							 <View>
										<Text style={{color:'#999999',fontSize:14}}>正在加载...</Text>
							 </View>
					 );
			 }
    }

    _getItemView(item){
        return (<TouchableOpacity onPress={()=>this._goProduce(item.item)} style={{backgroundColor: 'white', height: 106, borderRadius: 8, flexDirection: 'row',}}>
                    {/* 选择按钮 */}
                    <TouchableOpacity style={{width: 40,alignSelf: "center",}}>
                        <Image style={{width: 18,height: 18, marginLeft: 10}} source={require('../images/draw/everyCheap/checked.png')} />
                    </TouchableOpacity>
                    {/* 右侧部分 */}
                    <View style={{flexDirection: 'row',}}>
                        <Image defaultSource={require('../images/draw/everyCheap/dayCheap_placeholder.png')} style={{alignSelf: 'center', width: 82, height: 82, borderRadius: 4}} />
                        {/* 右侧部分 */}
                        <View style={{width: screen.width - 40 - 82, paddingLeft: 12,paddingRight: 10,justifyContent: 'space-between'}}>
                            <Text style={{marginTop: 12,fontSize: 13, color: 'rgba(37, 37, 37, 1)'}} numberOfLines={2}>的我还掉玩还复读得五分不的手多算多怒都烦我ue符合负荷为辅欧虎我饿哈佛 而服务猴儿否为辅</Text>
                            <View style={{width: 201, height: 18,backgroundColor: 'rgba(247, 247, 247, 1)', borderRadius: 4, paddingLeft: 2}}>
                                <Text style={{fontSize: 12, color: 'rgba(112, 112, 112, 1)'}}>黑色 12G</Text>
                            </View>
                            <View style={{marginBottom: 12, flexDirection: "row", justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 16, color: 'rgba(229, 53, 43, 1)'}} >¥2323.0</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity>
                                        <Image style={{width: 20, height: 20}} source={require('../images/draw/everyCheap/delete.png')}/>
                                    </TouchableOpacity>
                                    <Text style={{height: 20,lineHeight: 20,minWidth: 40,textAlign: 'center',fontSize: 12,backgroundColor: 'rgba(247, 247, 247, 1)'}}>3</Text>
                                    <TouchableOpacity>
                                        <Image style={{width: 20, height: 20}} source={require('../images/draw/everyCheap/add.png')}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>)
      }

    _getLikeItem=() => {
        return (<TouchableOpacity onPress={()=>this._goProduce(item.item)} style={{marginLeft: 10,backgroundColor: 'white', width: (screen.width - 28) / 2,borderRadius: 8}}>
                    {/*   */}
                    <Image style={{resizeMode: 'stretch',width: (screen.width - 20 - 8) / 2,aspectRatio: 1,borderTopRightRadius: 8, borderTopLeftRadius: 8}} />
                    <Text numberOfLines={2} style={{marginLeft: 8,marginRight: 8,marginTop: 8, color: 'rgba(94, 94, 94, 1)', fontSize: 14,}}>regergergerg</Text>
                    <Text style={{marginLeft: 8,marginTop: 12,fontFamily: 'PingFangSC-Semibold', fontSize: 16}}>¥234234</Text>
                    <View style={{justifyContent: 'space-between',flexDirection: 'row',marginLeft: 8, marginRight: 8,marginBottom: 12}}>
                        <Text style={{color: 'rgba(180, 40, 45, 1)', fontSize: 12}}>¥13</Text>
                        <Text style={{color: 'rgba(145, 145, 145, 1)', fontSize: 10}}>已售45</Text>
                    </View>
                </TouchableOpacity>)
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

                <View style={{width: screen.width - 94, height: 50,flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TouchableOpacity style={{fontSize: 13, color: 'white'}} activeOpacity={0.8} onPress={()=>this.goShoppingVoucher()}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}></Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>所获购物券</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{fontSize: 13, color: 'white'}} activeOpacity={0.8} onPress={() => this.goMyService(3)}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}></Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>我的收藏</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{}} activeOpacity={0.8} onPress={() => {
                        this.props.navigation.navigate("myFootHistory");
                    }}>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',textAlign:'center'}}></Text>
                        <Text style={{fontSize: 13, color: 'white',fontFamily: 'PingFangSC-Regular',}}>我的足迹</Text>
                    </TouchableOpacity>
                </View>

                <ImageBackground style={{width: screen.width - 30,height: 40,flexDirection: 'row',justifyContent: 'space-between',paddingTop: 7,paddingLeft: 10,paddingRight: 10}} resizeMode="cover" source={require('../images/draw/vip_content_bg.png')}>
                    <View style={{flexDirection: 'row', marginTop: 4}}>
                    <Image source={require('../images/draw/icon_vip.png')} style={{height: 16,width: 16}}/>
                    <Text style={{color: '#F0DA91',fontSize: 12,fontFamily: 'PingFangSC-Regular',marginLeft: 3}}>十八省VIP</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{color: '#F0DA91',fontSize: 11,fontFamily: 'PingFangSC-Regular'}}>再消费元可升级</Text>
                        <View style={{flexDirection: 'row',alignItems: 'center'}}>
                        <Text style={{fontSize: 16,color: '#D6A80F',marginRight: 8}}>V</Text>
                        
                        <Text style={{fontSize: 16,color: 'rgba(255,255,255,0.6)',marginLeft: 8}}>V</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={{flexDirection: 'row',marginTop: 4}} activeOpacity={0.8} onPress={()=>this.goMyWallet('vip6')}>
                        <Text style={{color: '#F0DA91',fontSize: 12,fontFamily: 'PingFangSC-Regular',marginRight: 3}}>查看特权</Text>
                        <Image source={require('../images/draw/icon_gold_right.png')} style={{height: 16,width: 16}}/>
                    </TouchableOpacity>
                </ImageBackground>
                </ImageBackground>
               </View>
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: 'rgba(240, 95, 89, 1)'}}>
                {this._setTitle()}
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