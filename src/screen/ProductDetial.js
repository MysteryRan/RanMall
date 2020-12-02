import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        SafeAreaView,
        ScrollView,
        TouchableOpacity,
        Dimensions,
        Platform,
        NativeModules,
        StatusBar,
        Image,
        DeviceInfo,
      } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// 轮播        
import Swiper from 'react-native-swiper'
import ProductAlert from './ProductAlert'

// import Spinner from 'react-native-spinkit'
const { StatusBarManager } = NativeModules;

const DATA = [
    {
      title: "Main dishes",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Sides",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Drinks",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Desserts",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  const DATA2 = [
    {
      title: "Main dishes",
      data: "Pizza"
    },
    {
      title: "Sides",
      data: "French Fries", 
    },
    {
      title: "Drinks",
      data: "Water",
    },
    {
      title: "Desserts",
      data: "Cheese Cake", 
    }
  ];

  const Item = ({ title }) => (
    <View>
      <Text>{title}</Text>
    </View>
  );

class ProduceDetail extends Component {
  static navigationOptions = {
    headerTitle: 'ssss',
  };

    constructor() {
        super();
        this.state = {
            dataSource: [],
            selectedArray: [],
            chooseAll: false,
            editAble: false,
            images: [1,2,3,4,5],
            he: {},
            isRefreshing: false,
            loadMore: true,
            statusHeight: 0,
        };
    }

    componentWillMount() {
      const he = Dimensions.get('window');
      this.setState({
          he: Dimensions.get('window'),
      })
      this._loadData()
      let statusBarHeight;
      if (Platform.OS === "ios") {
           StatusBarManager.getHeight(height => {
               statusBarHeight = height;
               this.setState({
                statusHeight: statusBarHeight,
              })
           });
       } else {
           statusBarHeight = StatusBar.currentHeight;
           this.setState({
            statusHeight: StatusBar.currentHeight,
          })
        } 
        // console.log(statusBarHeight.height)
      
  }

  componentDidMount() {
      const he = Dimensions.get('window');
      this._configNavigation()
  }

  _configNavigation = () => {
    const {navigation, route} = this.props;
    navigation.setOptions({
      // headerTitle:getHeaderTitle(route),
      headerTransparent: true,
      headerTitle: ' ',
      headerBackTitle: ' ',
      headerTintColor: 'transparent'
      
    });
  }

    _loadData() {

    }
    // 分割线
    _separator() {
        return (<View style={{height: 6}}></View>)
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
										<Text style={{color:'#999999',fontSize:14}}>正在加载更多数据...</Text>
							 </View>
					 );
			 }
    }

      // 图片数组
      _imagesArray() {
        let list = this.state.images;
        let totalImages = []
        for (let i = 0; i< list.length; i ++) {
            totalImages.push(<View style={{width: this.state.he.width, aspectRatio: 1}}>
              <Image source={require('../images/draw/festival1224.png')} style={{width: this.state.he.width, aspectRatio:1}}/>
            </View>)
        }
        return totalImages
    }

    _jewelStyle = function(options) {
      return {
        opacity: options,
        zIndex: 99,
        position: 'absolute',
        top: this.state.statusHeight.height,
        left: 0,
        width: '100%' ,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'white'
      }
    }
    _chooseType=() => {
      this.refs.RNAlert && this.refs.RNAlert.show('标题');
    }
    _scrollEndDrag=(e) => {
      console.log('000,',e.nativeEvent.contentOffset.y)
      if (e.nativeEvent.contentOffset.y > 0) {
          this.refs.topBar.setNativeProps({ opacity : 1 }); 
      } else {
        this.refs.topBar.setNativeProps({ opacity : 0 }); 
      }

      // console.log(this.refs.topBar.siblings()  ) 
      // this._jewelStyle(1);
    }
    
    render() {
        return (
            <SafeAreaView style={{backgroundColor: 'white'}}>
              <View ref="topBar" style={this._jewelStyle(0)}>
                  <Text style={{fontSize: 18}}>商品</Text>
                  <Text style={{fontSize: 18, marginLeft: 20,marginRight: 20}}>评价</Text>
                  <Text style={{fontSize: 18}}>详情</Text>
              </View>
              <TouchableOpacity style={{zIndex: 100000,width: 33,height: 33,left: 10,top: (this.state.statusHeight.height),position: 'absolute'}}>
                      <Image style={{width: 23,height: 23}} source={require('../images/draw/icon_back_black.png')}/>
                    </TouchableOpacity>
              <ScrollView scrollEventThrottle={16} style={{flexDirection: 'column',backgroundColor: 'rgba(242, 242, 242, 1)'}} onScroll={(e) => {this._scrollEndDrag(e)}} >
                {/* 商品图片轮播 */}
                <View>
                    <Swiper style={[styles.wrapper,{height: (this.state.he.width) / 1 }]} autoplay={true} showsPagination={false}>
                    {this._imagesArray()}
                    </Swiper>
                    <Text style={{width: 33,right: 0,bottom: 20,position: 'absolute',opacity: 0.7,backgroundColor: 'rgba(0, 0, 0, 0.4)', color: 'white'}} >1/5</Text>
                </View>
                {/* 商品信息展示 */}
                <ProductAlert ref = 'RNAlert' comformBtnTitle = {'确定'}  cancleBtnTitle = {'取消'} 
             alertTitle={'确定删除吗?'} alertContent={'content'}comformClik = {() => {this._sure()}} 
             dissmissClick = {() => {this._cancel()}}
            />
                <View style={{paddingLeft: 10, paddingRight: 10,backgroundColor: 'white'}}>
                  {/* 价格 */}
                  <View style={{marginTop: 12,flexDirection: 'row',justifyContent: "space-between"}}>
                    <View style={{flexDirection: 'row',}}>
                      <Text style={{alignSelf: 'center',color: 'rgba(255, 53, 111, 1)',fontSize: 26,fontFamily: 'PingFangSC-Semibold'}}>¥ 27999999</Text>
                      <Text style={{alignSelf: 'center',marginLeft: 20,fontSize: 13}}>¥ 99999</Text>
                    </View>

                    {/* 销量，地址 */}
                    <View style={{flexDirection: 'row'}}>
                      <Text style={{alignSelf: 'center',color: 'rgba(127, 127, 127, 1)',fontSize: 12,marginRight: 20}}>销量: 1000</Text>
                      <Text style={{alignSelf: 'center',color: 'rgba(127, 127, 127, 1)',fontSize: 12,}}>杭州</Text>
                    </View>
                  </View>
                   {/* 名称 分享按钮 */}
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Text style={{flex: 9,color: 'rgba(0, 0, 0, 1)',fontSize: 16}}>
                     美的（Midea）FB40Simple302电饭煲 4L大容量 智能家用钻石纹上盖 Midea
                     </Text>
                     <View style={{flex: 1,borderLeftWidth: 1, borderLeftColor: 'rgba(151, 151, 151, 1)'}}>
                       <TouchableOpacity style={{alignItems: 'flex-end'}}>
                         <Image style={{width: 20, height: 20}} source={require("../images/draw/icon_share_black.png")}/>
                         <Text style={{fontSize: 12,marginTop: 4}}>分享</Text>
                       </TouchableOpacity>
                      </View>
                   </View>
                </View>
                   <View style={{flexDirection: "row",
                                justifyContent: "space-between",paddingTop: 20, paddingBottom: 7, paddingLeft: 10, paddingRight: 10,backgroundColor: 'white',borderBottomLeftRadius: 8, borderBottomRightRadius: 8}}>
                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 12, height: 12, }}
                                source={require('../images/draw/everyCheap/shouhou.png')}/>
                            <Text style={{fontSize: 13, marginLeft: 4}}>省钱精选</Text>
                        </View> 

                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 12, height: 12, }}
                                source={require('../images/draw/everyCheap/baozhang.png')}/>
                            <Text style={{fontSize: 13, marginLeft: 4}}>品质保证</Text>
                        </View> 

                        <View style={{flexDirection: 'row'}}>
                            <Image style={{width: 12, height: 12, }}
                                source={require('../images/draw/everyCheap/jingfei.png')}/>
                            <Text style={{fontSize: 13, marginLeft: 4}}>售后无忧</Text>
                        </View> 
                    </View> 

                    <View style={{backgroundColor: 'white',width: this.state.he.width - 20, marginLeft: 10, marginRight: 10, height: 203, marginTop: 12, borderRadius: 8 }}>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
                                  onPress={() => {
                                      this._chooseType()
                                  }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                              <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>选择</Text>
                              <Text style={{maxWidth: 280, marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>颜色分类</Text>
                            </View>
                            <Image style={{width: 20, height: 20,alignSelf: 'center',marginRight: 10}}
                             source={require('../images/draw/icon_more_2.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>发货</Text>
                            <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>快递包邮</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>保障</Text>
                            <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>付款后24小时内发货·7天无理由</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
                                  onPress={() => {
                                      this.paramsDialog()
                                  }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                              <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>参数</Text>
                              <Text style={{maxWidth: 280, marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>型号</Text>
                            </View>
                            <Image style={{width: 20, height: 20,alignSelf: 'center',marginRight: 10}}
                             source={require('../images/draw/icon_more_2.png')}/>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
                                  onPress={() => {
                                  }}>
                        <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                            <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                              <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>品牌</Text>
                              <Text style={{maxWidth: 280, marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>美的</Text>
                            </View>
                            <Image style={{width: 20, height: 20,alignSelf: 'center',marginRight: 10}}
                             source={require('../images/draw/icon_more_2.png')}/>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* 评论 */}
                <View style={{backgroundColor: 'white',marginLeft: 10,marginRight: 10,marginTop: 10, borderRadius: 8}}>
                  <TouchableOpacity style={{flexDirection: 'row',justifyContent: 'space-between',height: 53, borderBottomColor: 'rgba(224, 224, 224, 1)', borderBottomWidth: 1}}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text style={{marginLeft: 12,fontSize: 16}}>评论  (2条)</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 12}}>
                        <Text style={{color: 'rgba(134, 134, 134, 1)', fontSize: 13}}>全部评论</Text>
                        <Image style={{width: 20, height: 20}}
                             source={require('../images/draw/icon_more_2.png')}/>
                    </View>
                  </TouchableOpacity>
                  <FlatList
                    data={DATA}
                    renderItem={(item)=>this._getItemView(item)}
                    keyExtractor={(item,index)=>index.toString()}
                    horizontal={false}
                    numColumns={1}
                    style={{width: '100%', backgroundColor: 'rgba(242, 242, 242, 1)'}}
                    extraData={this.state}
                  />
                </View>
                </ScrollView> 
                {this.bottomView()}
            </SafeAreaView>
          );
    }

    //评论
    _getItemView=() => {
      return(<View style={{backgroundColor: 'white'}}>
        <View style={{marginTop: 12,flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{marginLeft: 12,flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Image style={{width: 28, height: 28}} source={require('../images/draw/zhongkong_zhihui.png')}/>
            <Text style={{marginLeft: 6}}>dfr**ds</Text>
          </View>
          <View style={{flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
            {this.getStartView()}
          </View>

        </View>
        <Text style={{marginTop: 4,paddingLeft: 10, paddingRight: 10}}>
            手感很好，杯子材质很舒服有点磨砂的感觉。手感很好，杯子材质很舒服有点磨砂的感觉。就是接热水稍稍有点烫手，总体满意。
          </Text>
          <View style={{flexWrap: 'wrap',flexDirection: 'row', marginRight: 10, alignItems: 'center'}}>
            {this.getCommentImages()}
          </View>
      </View>)
    }

    //获取星数
    getStartView() {
      let num = [];
      for (let i = 0; i < 5; i++) {
          let view;
          if (i < 3) {
              view = (<Image key={i} style={{width: 10, height: 10,marginRight: 5}}
                              source={require("../images/draw/start_light.png")}/>);
          } else {
              view = (<Image key={i} style={{width: 10, height: 10,marginRight: 5}}
                              source={require("../images/draw/start_gray.png")}/>);
          }
          num.push(view);
      }
      return num;
  }

      //获取星数
      getCommentImages() {
        let num = [];
        for (let i = 0; i < 5; i++) {
            let view;
            if (i < 5) {
                view = (<Image key={i} style={{width: (this.state.he.width - 35 - 20) / 4, aspectRatio: 1,marginRight: 5}}
                                source={require("../images/draw/xinxiangyin.png")}/>);
            }
            num.push(view);
        }
        return num;
    }

    bottomView() {
      return (<View>
              <TouchableOpacity 
                                activeOpacity={1}
                                onPress={() => {
                                    this.goKeFu()
                                }}>
                  <Image style={{width: 17, height: 17, marginTop: 5}}
                         source={require('../images/draw/everyCheap/zixun.png')}/>
                  <Text style={{fontSize: 8, color: "#7f7f7f", marginTop: 3}}>客服</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                                activeOpacity={1}
                                onPress={() => {
                                    if (this.isLogin) {
                                        this.props.navigation.navigate("ShopCart",{"fromPage":"product"});
                                    } else {
                                        showToast('请先登录!','none');
                                    }
                                }}>
                  <Image style={{width: 17, height: 17, marginTop: 6}}
                         source={require('../images/draw/everyCheap/gouwuche.png')}/>
                  <Text style={{fontSize: 8, color: "#7f7f7f", marginTop: 1}}>购物车</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  
                  activeOpacity={1}
                  onPress={() => {
                      if (this.isLogin) {
                          this.addCollection(this.state.isCollection ? "cancel" : "collect");
                          this.setState({
                              isCollection: !this.state.isCollection,
                          })
                      } else {
                          showToast('请先登录!','none');
                      }
                  }}>
                  <Image style={{width: 15, height: 15}}
                         source={require('../images/draw/icon_star_color.png')}/>
                  <Text style={{fontSize: 8, color: "#7f7f7f", marginTop: 5}}>收藏</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                      textAlign: 'center',
                      backgroundColor: '#FFC135',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flex: 3,
                      borderTopLeftRadius: 25,
                      borderBottomLeftRadius: 25, 
                  }}
                  onPress={() => {
                      this.addShopCart(this.spec_id, this.buy_num);
                  }}>
                  <Text style={{
                      color: "white",
                      fontSize: 16,
                  }}>加入购物车</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={{
                      flex: 3,
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#FF356F',
                      borderTopRightRadius: 25,
                      borderBottomRightRadius: 25, 
                  }}
                  onPress={() => this.onBuyTap()}>
                  <Text style={{
                      color: "white",
                      fontSize: 16,
                  }}>立即购买</Text>
              </TouchableOpacity>
          </View>
      );
  }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent' ,
    },
    container: {
        flex: 1,
        backgroundColor: 'red',
      },
      inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around",
        backgroundColor: 'yellow'
      },
      header: {
        fontSize: 36,
        marginBottom: 48,
        backgroundColor: 'blue',
      },
      textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginTop: 336
      },
      btnContainer: {
        backgroundColor: "green",
        marginTop: 12
      }
})

export default ProduceDetail;