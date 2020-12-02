//
//  RNTMapManager.m
//  RanMall
//
//  Created by zouran on 2020/11/30.
//

// RNTMapManager.m
#import <MapKit/MapKit.h>

#import <React/RCTViewManager.h>

@interface RNTMapManager : RCTViewManager
@end

@implementation RNTMapManager

RCT_EXPORT_MODULE()

RCT_EXPORT_VIEW_PROPERTY(pitchEnabled, BOOL)

- (UIView *)view
{
  return [[MKMapView alloc] init];
}

@end
