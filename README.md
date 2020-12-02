# RanMall
![主页和购物车](https://github.com/MysteryRan/RanMall/blob/master/home.png "界面")
![主页和购物车](https://github.com/MysteryRan/RanMall/blob/master/android_home.png "界面")

利用TopTabNavigator、StackNavigator、BottomTabNavigator实现路由功能。

![详情](https://github.com/MysteryRan/RanMall/blob/master/detial.png "界面")
![规格选择](https://github.com/MysteryRan/RanMall/blob/master/alert.png "界面")
![评论](https://github.com/MysteryRan/RanMall/blob/master/comment.png "界面")

react-native 常用命令
react-native init xxx
Npm install
React-native run-ios --simulator 'iPhone 12'
React-native start

React-native run android
React-native start

// 要先添加assets文件夹
ios: react-native bundle --entry-file index.js --platform ios --dev false --bundle-output  ./ios/main.jsbundle
android:react-native bundle --entry-file index.js --platform android --dev false --bundle-output  ./android/app/src/main/assets/index.android.bundle


原有iOS项目加载RN界面  ios rn 相互调用。 
