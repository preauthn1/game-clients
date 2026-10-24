#import "JPUSHService.h"
#import "JPushEventCache.h"
#import <UserNotifications/UserNotifications.h>
#import "UnityAppController.h"

@interface CustomAppController : UnityAppController
{
    UIApplication *superApplication;
}

- (id)init;
- (void)startUnity:(UIApplication*)application;
- (void)StartSDK;
@end

IMPL_APP_CONTROLLER_SUBCLASS (CustomAppController)
static CustomAppController* CustomAppDelegate;


@implementation CustomAppController

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

  [[JPushEventCache sharedInstance] handFinishLaunchOption:launchOptions];
    
  [JPUSHService setupWithOption:launchOptions appKey:@"88414aabebbbb19b16b0c2a3"
                        channel:@"" apsForProduction:NO];

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:[REDACTED] *)deviceToken {
  // Required.
  [JPUSHService registerDeviceToken:[REDACTED];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo {
  // Required.
  [[JPushEventCache sharedInstance] sendEvent:userInfo withKey:@"JPushPluginReceiveNotification"];
  [JPUSHService handleRemoteNotification:userInfo];
}

- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo     fetchCompletionHandler:(void (^)(UIBackgroundFetchResult result))handler {
  [[JPushEventCache sharedInstance] sendEvent:userInfo withKey:@"JPushPluginReceiveNotification"];
}

- (id)init
{
    self = [super init];
    CustomAppDelegate = self; // --- we assign this instance to the static delegateObject.
    return self;
}

- (void)startUnity:(UIApplication*)application
{
    superApplication = application;
    [super startUnity:application];
}

- (void)StartSDK
{
    NSNumber *value = [NSNumber numberWithInt:UIDeviceOrientationPortrait];
    [[UIDevice currentDevice]setValue:value forKey:@"orientation"];
    [super applicationWillResignActive:superApplication];
    UIViewController *viewcontroll = [[UINavigationController alloc] initWithRootViewController:[NSClassFromString(@"FMMainViewController") new]];
    _window.backgroundColor = [UIColor darkGrayColor];
    [_window.rootViewController presentViewController:viewcontroll animated:NO completion:nil];
    
}
@end

extern "C" void startMySDK()
{
    [CustomAppDelegate StartSDK];
}














