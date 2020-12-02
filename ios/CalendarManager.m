//
//  CalendarManager.m
//  hybridTwoiOS
//
//  Created by zouran on 2020/11/30.
//

#import "CalendarManager.h"
#import <React/RCTLog.h>

@implementation CalendarManager

RCT_EXPORT_MODULE();

// 传值进来
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  
  NSLog(@"----->");
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
  
}

// 回调函数
RCT_EXPORT_METHOD(findEvents:(RCTResponseSenderBlock)callback)
{
  NSArray *events = @[@"push",@"pop"];
  callback(@[[NSNull null], events]);
}

- (NSDictionary *)constantsToExport
{
  return @{ @"firstDayOfTheWeek": @"Monday" };
}


@end
