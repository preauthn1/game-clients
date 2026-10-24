using System;
using System.Collections.Generic;
using XLua;

/// <summary>
/// 网页插件 xlua自定义导出
/// </summary>
public static class XLuaAVProVideoExport
{
    /// <summary>
    /// dotween的扩展方法在lua中调用
    /// </summary>
    [LuaCallCSharp]
    [ReflectionUse]
    public static List<Type> aVProVideo_lua_call_cs_list = new List<Type>()
    {
#if UNITY_IOS || UNITY_ANDROID || UNITY_WP8
        typeof(RenderHeads.Media.AVProVideo.MediaPlayer),
        typeof(RenderHeads.Media.AVProVideo.MediaPlayerEvent),       
#endif
    };

    //C#静态调用Lua的配置（包括事件的原型），仅可以配delegate，interface
    [CSharpCallLua]
    public static List<Type> aVProVideo_cs_call_lua_List = new List<Type>()
    { 
#if UNITY_IOS || UNITY_ANDROID || UNITY_WP8 
        typeof(UnityEngine.Events.UnityAction<RenderHeads.Media.AVProVideo.MediaPlayer, RenderHeads.Media.AVProVideo.MediaPlayerEvent.EventType, RenderHeads.Media.AVProVideo.ErrorCode>),   
#endif
    };
}