import React, {Component, useState} from 'react';
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
        RefreshControl} from 'react-native';
// 轮播        
import Swiper from 'react-native-swiper'

// 网络请求工具
import {shopRequest} from '../tool/NetworkTool'

class TopChosen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // 种类分类
            categorys: [],
            // 特卖展示图
            specialAds: [],
            // 天天双11展示图
            everydayCheapAds: [],
            // 品牌
            brands: [],
            // 特卖
            cheaps: [],
            //banner
            banners: [],
        };
        shopURL = 'http://18sheng.71baomu.com/'
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
    }

    _loadData() {
        // 种类
        shopRequest('post', 'http://18sheng.71baomu.com/app/home/icon?key=', {shop_id: 42})
        .then(res => {
            this.setState({
                categorys: res.data
            })
        })
        // 特卖
        fetch('http://18sheng.71baomu.com/app/special_sale_img/get', {
            method: 'get'
          }).then((response) =>
            // response.text(),
            response.json(),
          ).then((responseData) => {
              this.setState({
                  specialAds: responseData
              });
              console.log(responseData.length,'t')
          }).catch((err) => {
          if(err.message.indexOf("Unexpected")>=0){

          }else{

          }
        });
        //品牌
        shopRequest('post', 'http://18sheng.71baomu.com/app/brand/list?key=', {})
        .then(res => {
            this.setState({
                brands: res
            })
        })
        //特卖
        shopRequest('post',shopURL+'/app/product/recommend?key=',{type:'cheap'})
        .then(res => {
            this.setState({
                cheaps: res
            })
        })
        // banner
        shopRequest('post', shopURL + "app/shop/get_banner?key=", {shop_id: 42})
        .then(res => {
            this.setState({
                banners: res[0]
            })
            // console.log('banner ', res)
        })
        
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

    render() {
        return (
            <SafeAreaView style={{flex: 1,backgroundColor: '#F2F2F2'}}>
                <View style={{backgroundColor: '#FF5E87', height: 40, width: '100%'}}></View>
               
                <FlatList
                    data={this.state.cheaps}
                    ListHeaderComponent={this._getHeader()}
                    renderItem={(item)=>this._getItemView(item)}
                    keyExtractor={(item,index)=>index.toString()}
                    horizontal={false}
                    numColumns={2}
                    style={{position: 'absolute', top: 10, height: '100%', width: '100%'}}
                    extraData={this.state}
                    // columnWrapperStyle={}
                    ItemSeparatorComponent={this._separator}
                    refreshControl={
                        <RefreshControl
                            // tintColor="#ff0000"
                            title="Loading..."
                            // titleColor="#00ff00"
                            // colors={['#ff0000', '#00ff00', '#0000ff']}
                            // progressBackgroundColor="#ffff00"
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._refreshData}/>
                    }
                    onEndReachedThreshold={0.1}
                    onEndReached={()=>this._loadMoreData()}
                    ListFooterComponent={this._renderFooter(this.state.loadMore)}
                />
            </SafeAreaView>
        );
    }

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

    // 图片数组
    _imagesArray() {
        let list = this.state.banners;
        let totalImages = []
        for (let i = 0; i< list.length; i ++) {
            totalImages.push(<Image source={{uri: shopURL + list[i].banner_url}} style={{width: this.state.he.width - 20, aspectRatio: 2.56,borderRadius: 4}}/>)
        }
        return totalImages
    }

    _categoryArrayButtons() {
        let totalButtons = []
        
            for (let i = 0; i< 10; i ++) {
                totalButtons.push(
                <TouchableOpacity style={{width: ((this.state.he.width - 36) / 5)}}>
                <Image source={{uri: this.state.categorys.length > 0 ? this.state.categorys[i].url : ""}} style={{marginTop: i < 5 ? 21 : 15, marginLeft: 18,width: 41,height: 41}}/>
                <Text style={{marginTop: 5,fontSize: 11,color: '#5E5E5E',textAlign: 'center', marginBottom: i > 5 ? 14 : 0}}>{this.state.categorys.length > 0 ? this.state.categorys[i].name : ""}</Text>
            </TouchableOpacity>)
            
        }
        
        return totalButtons
    }

    // 种类选项
    _categoryArray() {
        return <View style={{marginLeft: 10,width: this.state.he.width - 20,flexDirection: 'row',backgroundColor: 'white', borderRadius: 4, marginTop: 12, flexWrap: 'wrap', justifyContent: 'space-between'}}>
                    {this._categoryArrayButtons()}
               </View>

    }

    // 特殊活动
    _specialSell() {
        return <View style={{marginLeft: 10,marginTop: 12, flexDirection: 'row', marginBottom: 12}}>
                    <View style={{width: (this.state.he.width - 28) / 2, aspectRatio: 0.6,}}>
                        <ImageBackground style={{width: (this.state.he.width - 28) / 2, aspectRatio: 0.6,justifyContent: 'space-between'}} resizeMode="cover" source={require('../images/draw/everyCheap/home_cheap_bg.png')}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={{fontWeight: 'normal',fontSize: 14, color: '#FFFFFF', marginTop: 10, marginLeft: 10}}>天天双十一</Text>
                                <View style={{borderRadius: 9, backgroundColor: '#7068FF',marginTop: 10}}>
                                    <Text style={{fontSize: 10, color: '#FFFFFF', height: 15, lineHeight: 15, paddingLeft: 10, paddingRight: 10}}>钜惠直降</Text>
                                </View>
                            </View>
                            <ImageBackground defaultSource={require('../images/draw/everyCheap/dayCheap_placeholder.png')}  style={{alignItems: 'stretch', aspectRatio: 1, marginLeft: 10,marginRight: 10, justifyContent: 'flex-end'}}>
                                <Text style={{fontSize: 10, color: '#FFFFFF',backgroundColor: '#FF5E87', textAlign:'center'}}>钜惠直降 24小时限时优惠</Text>
                            </ImageBackground>
                            <View style={{flexDirection: 'row', alignContent:"center", justifyContent: 'space-evenly',marginBottom: 10}}>
                                <View>
                                    <ImageBackground defaultSource={require('../images/draw/everyCheap/dayCheap_placeholder.png')}  style={{width: ((this.state.he.width - 28) / 2 - 26) / 2,aspectRatio: 1,justifyContent: 'flex-end'}} >
                                        <Text style={{fontSize: 10, color: '#FFFFFF',backgroundColor: '#FF5E87', textAlign:'center'}}>限时优惠</Text>
                                    </ImageBackground>
                                </View>

                                <View>
                                    <ImageBackground defaultSource={require('../images/draw/everyCheap/dayCheap_placeholder.png')} style={{width: ((this.state.he.width - 28) / 2 - 26) / 2,aspectRatio: 1,justifyContent: 'flex-end'}} >
                                        <Text style={{fontSize: 10, color: '#FFFFFF',backgroundColor: '#FF5E87', textAlign:'center',}}>限时优惠</Text>
                                    </ImageBackground>
                                </View>
                            </View>
                        </ImageBackground>  
                    </View>

                    <View style={{justifyContent: 'space-between',marginLeft: 8, width: (this.state.he.width - 28) / 2, aspectRatio: 0.6,}}>
                        <View style={{justifyContent: 'flex-end',backgroundColor: 'white',borderRadius: 4,width: (this.state.he.width - 28) / 2, flex: 1}}>
                            <View style={{flexDirection: 'row',marginLeft: 10,marginTop: 10}}>
                                <Text style={{fontFamily:'PingFangSC-Semibold', fontSize: 14,}}>限时抢购</Text>
                                <View style={{flexDirection: 'row',marginLeft: 10}}>
                                    <Text style={{fontSize: 12}}>显示</Text><Text style={{fontSize: 12}}>:</Text><Text style={{fontSize: 12}}>显示</Text><Text style={{fontSize: 12}}>:</Text><Text style={{fontSize: 12}}>显示</Text>
                                    {/* {this.countDown()} */}
                                </View>
                            </View>
                            <Text style={{marginTop: 3,marginLeft: 10, fontFamily:'PingFangSC-Semibold', color: '#FF356F', fontSize: 11}}>每天十点开抢</Text>
                            <View style={{flex: 1, flexDirection: 'row',marginTop: 5}}>
                            
                                <ImageBackground defaultSource={require('../images/draw/everyCheap/time_catch_placeholder.png')} style={{flex:0.5, aspectRatio: 1, marginLeft: 10, }} />
                                <ImageBackground  defaultSource={require('../images/draw/everyCheap/time_catch_placeholder.png')} style={{flex:0.5, aspectRatio: 1, marginLeft: 10, marginRight: 10, }} />
                            </View>
                        </View>
                        <View style={{justifyContent: 'flex-end',backgroundColor: 'white',borderRadius: 4,width: (this.state.he.width - 28) / 2, flex: 1, marginTop: 8}}>
                            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
                                <Text style={{fontFamily:'PingFangSC-Semibold', fontSize: 14}}>甄选好物</Text>
                                <View style={{backgroundColor: '#FE484F',marginTop: 2, marginLeft: 5, paddingLeft: 7, paddingRight: 7, borderRadius: 9}}>
                                    <Text style={{fontSize: 12,color: 'white', marginTop: 2}}>超值抢购</Text>
                                </View>
                            </View>
                            <Text style={{marginTop: 3,marginLeft: 10, fontFamily:'PingFangSC-Semibold', color: '#FF356F', fontSize: 11}}>精选每日品质好货</Text>
                            <View style={{flex: 1, flexDirection: 'row', marginTop: 10,}}>
                                <ImageBackground source={require('../images/draw/everyCheap/home_tip_two.png')}  style={{flex:0.5, marginLeft: 10, aspectRatio: 1,}} />
                                <ImageBackground source={require('../images/draw/everyCheap/home_tip_one.png')} style={{flex:0.5, marginLeft: 10, marginRight: 10,aspectRatio: 1,}} />
                            </View>
                        </View>

                    </View>
               </View>

    }

    _brandArrayButtons() {
        let totalButtons = []
        
            for (let i = 0; i< 10; i ++) {
                totalButtons.push(
                <TouchableOpacity style={{width: ((this.state.he.width - 36) / 5),marginBottom: i > 5 ? 14 : 3}}>
                    <Image style={{borderWidth: 1,borderColor:'rgba(238, 239, 239, 1)',resizeMode:'contain',width: ((this.state.he.width - 36) / 5),aspectRatio: 1}} source={{uri: this.state.brands.length > 0 ? this.state.brands[1].image_url : ""}}/>
            </TouchableOpacity>)
            
        }
        
        return totalButtons
    }

    // 品牌
    _brandList() {
        return <View style={{backgroundColor: 'white', borderRadius: 4,width: this.state.he.width - 20 ,marginLeft: 10, marginBottom: 12}}>
                    <Text style={{fontFamily: 'PingFangSC-Semibold', fontSize: 16, textAlign: 'center',marginTop: 17}}>热门品牌，正品直供</Text>
                    <Text style={{color: 'rgba(145, 145, 145, 1)', fontSize: 12, textAlign: 'center'}}>超过80个热门品牌</Text>
                    <View style={{width: this.state.he.width - 20,flexDirection: 'row',backgroundColor: 'white', borderRadius: 4, marginTop: 12, flexWrap: 'wrap', justifyContent: 'space-between',paddingLeft: 3, paddingRight: 3}}>
                        {this._brandArrayButtons()}
                    </View>
                    
               </View>

    }

    _getHeader() {
                /* 无限轮播 */
        return  <View>
                    <Swiper style={[{marginLeft: 10,height: (this.state.he.width - 20) / 2.56 }]} autoplay={true} showsPagination={false} loop={true}>
                        {this._imagesArray()}
                    </Swiper>
                    {this._categoryArray()}
                    {this._specialSell()}
                    {this._brandList()}
                </View>
                
    }

    _getItemView(item){
        return (<TouchableOpacity onPress={()=>this._goProduce(item.item)} style={{marginLeft: 10,backgroundColor: 'white', width: (this.state.he.width - 28) / 2,borderRadius: 8}}>
                    {/*   */}
                    <Image source={{uri: shopURL + item.item.image_url}} style={{resizeMode: 'stretch',width: (this.state.he.width - 20 - 8) / 2,aspectRatio: 1,borderTopRightRadius: 8, borderTopLeftRadius: 8}} />
                    <Text numberOfLines={2} style={{marginLeft: 8,marginRight: 8,marginTop: 8, color: 'rgba(94, 94, 94, 1)', fontSize: 14,}}>{item.item.product_name}</Text>
                    <Text style={{marginLeft: 8,marginTop: 12,fontFamily: 'PingFangSC-Semibold', fontSize: 16}}>¥{item.item.spec_price_yuan}</Text>
                    <View style={{justifyContent: 'space-between',flexDirection: 'row',marginLeft: 8, marginRight: 8,marginBottom: 12}}>
                        <Text style={{color: 'rgba(180, 40, 45, 1)', fontSize: 12}}>¥{item.item.vip_price_yuan}</Text>
                        <Text style={{color: 'rgba(145, 145, 145, 1)', fontSize: 10}}>已售{item.item.sales_volume}</Text>
                    </View>
                </TouchableOpacity>)
      }

    //跳转商品详情界面
    _goProduce(info){
        this.props.navigation.navigate("Detils");
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

export default TopChosen;