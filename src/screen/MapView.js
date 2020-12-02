// MapView.js
import React, { Component } from 'react';
import { requireNativeComponent } from 'react-native';

var RNTMap = requireNativeComponent('RNTMap', MapView);
import PropTypes from 'prop-types';
export default class MapView extends Component {
  static propTypes = {
    /**
     * 当这个属性被设置为true，并且地图上绑定了一个有效的可视区域的情况下，
     * 可以通过捏放操作来改变摄像头的偏转角度。
     * 当这个属性被设置成false时，摄像头的角度会被忽略，地图会一直显示为俯视状态。
     */
    pitchEnabled: PropTypes.bool
  };
  render() {
    return <RNTMap {...this.props} />;
  }
}