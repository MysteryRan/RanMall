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
        UIActivityIndicator,
        PanResponder,
        RefreshControl} from 'react-native';
// 轮播        
import Swiper from 'react-native-swiper'

// 网络请求工具
import {shopRequest} from '../tool/NetworkTool'

const screen = Dimensions.get('window')

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

class ShopCar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCars: [],
            selecteds: [],
            selectedAll: false,
            allMoney: 0,
        };
    }

    static navigationOptions = ({ navigation }) => ({
        tabBarOnPress: (tab) => {
          navigation.state.params.navigatePress()
          tab.jumpToIndex(tab.scene.index)
        }
      })
    
    // tab 切换调用方法
    clickTabCallback = () => {
    this.init() // 这里处理你的逻辑
    console.log('-------')
    }
    
    componentDidMount() {
        // 使用这个来调用this
    }

    componentWillMount() {
        this._panResponse = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
                onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
                onMoveShouldSetPanResponder: (evt, gestureState) => false,
                onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
                    if (Math.abs(gestureState.dx) < this.thresholdMin && Math.abs(gestureState.dy) < this.thresholdMin) {
                        return false;
                    } else {
                        if ((this.show && gestureState.dy < 0) || (!this.show && gestureState.dy > 0)) {
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
    
                onPanResponderGrant: (evt, gestureState) => {
                    // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
                    console.log('onPanResponderGrant');
                    // gestureState.{x,y} 现在会被设置为0
                },
                onPanResponderMove: (evt, gestureState) => {
                    // 最近一次的移动距离为gestureState.move{X,Y}
                    console.log('onPanResponderMove');
                    console.log('滑动参数：dx='+gestureState.dx +'，dy='+gestureState.dy + '可见吗='+this.show);
                    
                },
                //是否可以释放响应者角色让给其他组件
                onPanResponderTerminationRequest: (evt, gestureState) => true,
                onPanResponderRelease: (evt, gestureState) => {
                    // 用户放开了所有的触摸点，且此时视图已经成为了响应者。
                    console.log('onPanResponderRelease');
                    // 一般来说这意味着一个手势操作已经成功完成。
                    
                },
                onPanResponderTerminate: (evt, gestureState) => {
                    // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
                    console.log('onPanResponderTerminate');
                },
                onShouldBlockNativeResponder: (evt, gestureState) => {
                    // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
                    // 默认返回true。目前暂时只支持android。
                    return true;
                },
        })
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

        this.setState({
            shopCars: DATA,
        })

        console.log('here here')
        this.props.navigation.setParams({ navigatePress: this.clickTabCallback }) 
    }

    _loadData() {
        
    }

    // 全选
    _selectedAll = () => {
        this.state.selectedAll = !this.state.selectedAll
        if (this.state.selectedAll) {
            this.state.selecteds = []
            this.state.shopCars.forEach((v, i) => {
                v.selected = true
                this.state.selecteds.push(v)
            });
        } else {
            this.state.shopCars.forEach((v, i) => {
                v.selected = false
            });
            this.state.selecteds = []
        }

        this.setState({
            shopCars : this.state.shopCars,
            selecteds: this.state.selecteds,
        })

        this._allMoney()
    }

    // 空状态时
    _emptySet() {
        return <Text>10099999</Text>
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

    // 购物车选择
    _selectedToPay = (item) => {
        item.selected = !item.selected
        if (item.selected) {
            this.state.selecteds.push(item)
        } else {
            this.state.selecteds.pop(item)
        }
        var chooseAll = false;
        if (this.state.selecteds.length == 0) {
            chooseAll = false;
        }
        
        this.setState({
            shopCars: this.state.shopCars,
            selecteds: this.state.selecteds,
            selectedAll: chooseAll
        })

        this._allMoney()
    }

    _subCount = (item) => {
        if (item.count == 0) {
            return;
        }
        item.count = item.count - 1
        this.setState({
            shopCars: this.state.shopCars
        })
    }

    _addCount = (item) => {
        item.count = item.count + 1
        this.setState({
            shopCars: this.state.shopCars
        })
    }

    _allMoney() {
        var money = 0
        if (this.state.selecteds.length > 0) {
            this.state.selecteds.forEach((v, i) => {
                let tempMoney = v.price * v.count
                money = money + tempMoney
            });
        } 
        this.setState({
            allMoney: money,
        })
    }
    //onPress={()=>this._goProduce(item.item)} 
    _getItemView(item){
        return (<TouchableOpacity {...this._panResponse.panHandlers} style={{backgroundColor: 'white', height: 106, borderRadius: 8, flexDirection: 'row',}}>
                    {/* 选择按钮 */}
                    <TouchableOpacity onPress={()=>this._selectedToPay(item.item)} style={{width: 40,alignSelf: "center",}}>
                        <Image style={{width: 18,height: 18, marginLeft: 10}} source={item.item.selected ? require('../images/draw/everyCheap/checked.png') : require('../images/draw/everyCheap/check.png')} />
                    </TouchableOpacity>
                    {/* 右侧部分 */}
                    <View style={{flexDirection: 'row',}}>
                        <Image source={require('../images/draw/everyCheap/dayCheap_placeholder.png')} style={{alignSelf: 'center', width: 82, height: 82, borderRadius: 4}} />
                        {/* 右侧部分 */}
                        <View style={{width: screen.width - 40 - 82, paddingLeft: 12,paddingRight: 10,justifyContent: 'space-between'}}>
                        <Text style={{marginTop: 12,fontSize: 13, color: 'rgba(37, 37, 37, 1)'}} numberOfLines={2}>{item.item.title}</Text>
                            <View style={{width: 201, height: 18,backgroundColor: 'rgba(247, 247, 247, 1)', borderRadius: 4, paddingLeft: 2}}>
                                <Text style={{fontSize: 12, color: 'rgba(112, 112, 112, 1)'}}>{item.item.description}</Text>
                            </View>
                            <View style={{marginBottom: 12, flexDirection: "row", justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 16, color: 'rgba(229, 53, 43, 1)'}} >¥{item.item.price}</Text>
                                <View style={{flexDirection: 'row'}}>
                                    <TouchableOpacity onPress={()=>this._subCount(item.item)}>
                                        <Image style={{width: 20, height: 20}} source={require('../images/draw/everyCheap/delete.png')}/>
                                    </TouchableOpacity>
                                    <Text style={{height: 20,lineHeight: 20,minWidth: 40,textAlign: 'center',fontSize: 12,backgroundColor: 'rgba(247, 247, 247, 1)'}}>{item.item.count}</Text>
                                    <TouchableOpacity onPress={()=>this._addCount(item.item)}>
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
                    <Image source={require('../images/draw/everyCheap/dayCheap_placeholder.png')} style={{width: (screen.width - 20 - 8) / 2,height: (screen.width - 20 - 8) / 2,borderTopRightRadius: 8, borderTopLeftRadius: 8}} />
                    <Text numberOfLines={2} style={{marginLeft: 8,marginRight: 8,marginTop: 8, color: 'rgba(94, 94, 94, 1)', fontSize: 14,}}>regergergerg</Text>
                    <Text style={{marginLeft: 8,marginTop: 12,fontFamily: 'PingFangSC-Semibold', fontSize: 16}}>¥234234</Text>
                    <View style={{justifyContent: 'space-between',flexDirection: 'row',marginLeft: 8, marginRight: 8,marginBottom: 12}}>
                        <Text style={{color: 'rgba(180, 40, 45, 1)', fontSize: 12}}>¥13</Text>
                        <Text style={{color: 'rgba(145, 145, 145, 1)', fontSize: 10}}>已售45</Text>
                    </View>
                </TouchableOpacity>)
    }
    
    _setTitle=() => {
        return <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(217, 217, 217, 1)',justifyContent: 'space-between',backgroundColor: 'white', height: 44, width: '100%', flexDirection: 'row',paddingLeft: 10, paddingRight: 10}}>
                    <Text style={{alignSelf: 'flex-end', marginBottom: 13, fontSize: 18}}>购物车</Text>
                    <TouchableOpacity style={{alignSelf: 'flex-end', marginBottom: 13}}>
                        <Text style={{fontSize: 15}} >编辑</Text>
                    </TouchableOpacity>
               </View>
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: 'white'}}>
                {this._setTitle()}
                <View style={{backgroundColor: 'rgba(242, 242, 242, 1)',width: '100%', height: 12}}></View>
                <ScrollView style={{backgroundColor: 'rgba(242, 242, 242, 1)',width: '100%'}} showsVerticalScrollIndicator={false}>
                        <FlatList
                            data={this.state.shopCars}
                            renderItem={(item)=>this._getItemView(item)}
                            keyExtractor={(item,index)=>index.toString()}
                            horizontal={false}
                            numColumns={1}
                            style={{width: '100%', backgroundColor: 'rgba(242, 242, 242, 1)'}}
                            extraData={this.state}
                            ListEmptyComponent={this._emptySet()}
                            // columnWrapperStyle={}
                        />
                    
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
                            ListEmptyComponent={this._emptySet()}
                            // columnWrapperStyle={}
                            ItemSeparatorComponent={this._likeSeparator}
                        />
                </ScrollView>
                <View style={{flexDirection: 'row',justifyContent: 'space-between',backgroundColor: 'white', width: '100%', height: 50, borderTopColor: 'rgba(0, 0, 0, 0.2)', borderBottomColor: 'rgba(0, 0, 0, 0.2)', borderTopWidth: 1, borderBottomWidth: 1}}>
                    <TouchableOpacity onPress={()=>this._selectedAll()} style={{alignItems: 'center',flexDirection: 'row'}}>
                        <Image style={{width: 18,height: 18, marginLeft: 10}} source={this.state.selecteds.length == this.state.shopCars.length ? require('../images/draw/everyCheap/checked.png') : require('../images/draw/everyCheap/check.png')} />
                        <Text style={{fontSize: 13,marginLeft: 6}} >已选({this.state.selecteds.length})</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center',flexDirection: 'row'}}>
                        <Text style={{marginRight: 20,fontSize: 15}} >合计:</Text>
                        <Text style={{marginRight: 20,fontSize: 15, color: 'rgba(255, 53, 111, 1)'}} >¥{this.state.allMoney}</Text>
                        <TouchableOpacity style={{backgroundColor: 'rgba(255, 53, 111, 1)',height: 50, width: 100}}>
                            <Text style={{fontSize: 14,color: 'white', lineHeight: 50, textAlign: 'center'}}>结账</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default ShopCar;