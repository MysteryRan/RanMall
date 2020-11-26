import React, {Component} from 'react';
import {StyleSheet, 
        Text, 
        View, 
        SafeAreaView,
        ScrollView,
        TouchableOpacity,
        Dimensions,
      } from 'react-native';
// 轮播        
import Swiper from 'react-native-swiper'

// import Spinner from 'react-native-spinkit'

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
        };
    }

    componentWillMount() {
      const he = Dimensions.get('window');
      this.setState({
          he: Dimensions.get('window'),
      })
      this._loadData()
  }

  componentDidMount() {
      const he = Dimensions.get('window');
      this._configNavigation()
  }

  _configNavigation = () => {
    const {navigation, route} = this.props;
    navigation.setOptions({
      // headerTitle:getHeaderTitle(route),
      headerTransparent: false,
      headerTitle: '2223332',
      headerBackTitle: ' ',
      
    });
  }

    _loadData() {

    }

    // 全选
    _selectedAll() {
        
    }

    // 空状态时


    // 分割线
    _separator() {
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
        console.log('ppppp5')

        // this.setState({
        //     loadMore: true
        // });
        // setTimeout(() => {
        //     this.setState({
        //         loadMore: false,
        //         // data: list,
        //     });
        // }, 5000);
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
            totalImages.push(<View style={{width: this.state.he.width, aspectRatio: 1, backgroundColor: 'blue'}}><Text>{i}</Text></View>)
        }
        return totalImages
    }
    
    render() {
        return (
            <SafeAreaView>
              <ScrollView style={{flexDirection: 'column'}}>
                {/* 商品图片轮播 */}
                <View>
                    <Swiper style={[styles.wrapper,{height: (this.state.he.width) / 1 }]} autoplay={true} showsPagination={false}>
                    {this._imagesArray()}
                    </Swiper>
                </View>
                {/* 商品信息展示 */}
                <View style={{marginLeft: 10, marginRight: 10}}>
                  {/* 价格 */}
                  <View style={{flexDirection: 'row',justifyContent: "space-between"}}>
                    <View style={{flexDirection: 'row', backgroundColor: 'red'}}>
                      <Text>
                        ¥ 27999999
                      </Text>
                      <Text style={{marginLeft: 20}}>
                        ¥ 99999ubuhiu
                      </Text>
                    </View>

                    {/* 销量，地址 */}
                    <View style={{flexDirection: 'row', backgroundColor: 'yellow'}}>
                      <Text>
                        销量: 1000
                      </Text>
                      <Text>
                        杭州fewfwfeef
                      </Text>
                    </View>
                  </View>
                   {/* 名称 分享按钮 */}
                   <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                     <Text style={{flex: 5}}>
                     美的（Midea）FB40Simple302电饭煲 4L大容量 智能家用钻石纹上盖 Midea
                     </Text>
                     <View style={{flex: 1,width: 90, backgroundColor: 'red'}}>
                       <TouchableOpacity style={{width: 90}}>
                         <Text>
                           分享
                         </Text>
                       </TouchableOpacity>
                       
                      </View>
                   </View>
                </View>
                {/* <View style={{width: '100%', backgroundColor: "red", flexDirection: 'row'}}>
                        <Text style={{backgroundColor: 'blue',flex: 1}}>dsduhwuehdfweuifhgweufgweufigewufgweifgewifeuwfweiufewifuweifuewfi</Text>
                      <Text style={{backgroundColor: 'yellow'}}>000</Text>
                      <Text style={{flex: 1}}>dsduhwuehdfweuifhgweufgweufigewufgweifgewifeuwfweiufewifuweifuewfi</Text>
                </View> */}

                   {/* <Spinner isVisible={true} size={100} type={'Pulse'} color={"#FFFFFF"}/> */}

                  

                   <View style={{flexDirection: "row",
                                justifyContent: "space-between",marginTop: 20, marginBottom: 7, marginLeft: 10, marginRight: 10,}}>
                        <View style={{flexDirection: 'row'}}>
                            {/* <Image style={{width: 12, height: 12, }}
                                source={require('~/drawable/draw/everyCheap/shouhou.png')}/> */}
                            <Text style={{fontSize: 13, marginLeft: 4}}>省钱精选</Text>
                        </View> 

                        <View style={{flexDirection: 'row'}}>
                            {/* <Image style={{width: 12, height: 12, }}
                                source={require('~/drawable/draw/everyCheap/baozhang.png')}/> */}
                            <Text style={{fontSize: 13, marginLeft: 4}}>品质保证</Text>
                        </View> 

                        <View style={{flexDirection: 'row'}}>
                            {/* <Image style={{width: 12, height: 12, }}
                                source={require('~/drawable/draw/everyCheap/jingfei.png')}/> */}
                            <Text style={{fontSize: 13, marginLeft: 4}}>售后无忧</Text>
                        </View> 
                    </View> 

                    <View style={{backgroundColor: '#ffffff',width: this.state.he.width - 20, marginLeft: 10, marginRight: 10, height: 203, marginTop: 12, borderRadius: 8 }}>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
                                  onPress={() => {
                                      this.choiceDialog()
                                  }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>选择</Text>
                            <Text style={{maxWidth: 280, marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>{this.state.produce_info}</Text>
                            {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
                             source={require('~/drawable/draw/icon_more_2.png')}/> */}
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
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>参数</Text>
                            <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}></Text>
                            {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
                             source={require('~/drawable/draw/icon_more_2.png')}/> */}
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
                                  onPress={() => {
                                  }}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>品牌</Text>
                            <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}></Text>
                            {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
                             source={require('~/drawable/draw/icon_more_2.png')}/> */}
                        </View>
                    </TouchableOpacity>
                </View>
                
                </ScrollView> 

            </SafeAreaView>
          );
    }

    // render() {
    //     return (
    //         <SafeAreaView style={{flex: 1,backgroundColor: '#F2F2F2'}}>
    //             <ScrollView>
    //               <View style={{width: '100%', backgroundColor: "red", flexDirection: 'row'}}>
    //                     <Text style={{backgroundColor: 'blue',flex: 1}}>dsduhwuehdfweuifhgweufgweufigewufgweifgewifeuwfweiufewifuweifuewfi</Text>
    //                     <Text style={{backgroundColor: 'yellow'}}>000</Text>
    //                   <Text style={{flex: 1}}>dsduhwuehdfweuifhgweufgweufigewufgweifgewifeuwfweiufewifuweifuewfi</Text>
    //               </View>

    //               <Spinner isVisible={true} size={100} type={'Pulse'} color={"#FFFFFF"}/>

                  

    //               <View style={{flexDirection: "row",
    //                             justifyContent: "space-between",marginTop: 20, marginBottom: 7, marginLeft: 10, marginRight: 10,}}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         {/* <Image style={{width: 12, height: 12, }}
    //                             source={require('~/drawable/draw/everyCheap/shouhou.png')}/> */}
    //                         <Text style={{fontSize: 13, marginLeft: 4}}>省钱精选</Text>
    //                     </View> 

    //                     <View style={{flexDirection: 'row'}}>
    //                         {/* <Image style={{width: 12, height: 12, }}
    //                             source={require('~/drawable/draw/everyCheap/baozhang.png')}/> */}
    //                         <Text style={{fontSize: 13, marginLeft: 4}}>品质保证</Text>
    //                     </View> 

    //                     <View style={{flexDirection: 'row'}}>
    //                         {/* <Image style={{width: 12, height: 12, }}
    //                             source={require('~/drawable/draw/everyCheap/jingfei.png')}/> */}
    //                         <Text style={{fontSize: 13, marginLeft: 4}}>售后无忧</Text>
    //                     </View> 
    //                 </View> 

    //                 <View style={{backgroundColor: '#ffffff',width: 100, marginLeft: 10, height: 203, marginTop: 12, borderRadius: 8 }}>
    //                 <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
    //                               onPress={() => {
    //                                   this.choiceDialog()
    //                               }}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>选择</Text>
    //                         <Text style={{maxWidth: 280, marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>{this.state.produce_info}</Text>
    //                         {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
    //                          source={require('~/drawable/draw/icon_more_2.png')}/> */}
    //                     </View>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>发货</Text>
    //                         <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>快递包邮</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity activeOpacity={1} focusedOpacity={1}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>保障</Text>
    //                         <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}>付款后24小时内发货·7天无理由</Text>
    //                     </View>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
    //                               onPress={() => {
    //                                   this.paramsDialog()
    //                               }}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>参数</Text>
    //                         <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}></Text>
    //                         {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
    //                          source={require('~/drawable/draw/icon_more_2.png')}/> */}
    //                     </View>
    //                 </TouchableOpacity>
    //                 <TouchableOpacity activeOpacity={1} focusedOpacity={1} activeOpacity={1}
    //                               onPress={() => {
    //                               }}>
    //                     <View style={{flexDirection: 'row'}}>
    //                         <Text style={{marginLeft: 10,fontSize: 14,color: 'rgba(37,37,37,0.4)', height: 203 / 5, lineHeight: 203 / 5}}>品牌</Text>
    //                         <Text style={{marginLeft: 16,fontSize: 14,color: 'rgba(37,37,37,1)', height: 203 / 5, lineHeight: 203 / 5}}></Text>
    //                         {/* <Image style={{width: 20, height: 20, position: "absolute", right: 10, top: 10}}
    //                          source={require('~/drawable/draw/icon_more_2.png')}/> */}
    //                     </View>
    //                 </TouchableOpacity>
    //             </View>
                
    //             </ScrollView> 
    //         </SafeAreaView>
    //     );
    // }

    // 取消
    _cancel(){

    }

    

    // 确定
    _sure() {
        
    }

    //编辑
    _editFootHistory() {
        
    }

    //多选
    _chooseProduct(item) {
        
    }

    

    //跳转商品详情界面

}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'transparent' ,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 10,
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