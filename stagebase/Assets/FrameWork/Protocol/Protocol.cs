using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System;


public static class Protocol
{
    public static bool showProtocolName = true;

    // 封包類型，封包值
    public static Dictionary<string, Array> s_ProtocolEnum = null;

    private static void Init()
    {
        if (s_ProtocolEnum != null)
            return;

        s_ProtocolEnum = new Dictionary<string, Array>();

        s_ProtocolEnum.Add(((int)MessageBClassID.Common).ToString(),        Enum.GetValues(typeof(PlatformCommonClassID)));
        s_ProtocolEnum.Add(((int)MessageBClassID.Hall).ToString(),          Enum.GetValues(typeof(HallMsgClassID)));
        s_ProtocolEnum.Add(((int)MessageBClassID.ServerMgm).ToString(),     null);
        s_ProtocolEnum.Add(((int)MessageBClassID.DBServer).ToString(),      Enum.GetValues(typeof(DBServerClassID)));
        s_ProtocolEnum.Add(((int)MessageBClassID.GameRoom).ToString(),      Enum.GetValues(typeof(GameRoomClassID)));
        s_ProtocolEnum.Add(((int)MessageBClassID.Game).ToString(),          Enum.GetValues(typeof(GameMessageClassID)));
        s_ProtocolEnum.Add(((int)MessageBClassID.NotifyServer).ToString(),  Enum.GetValues(typeof(NotifyServerClassID)));


        // Type 10001
        // 各個小遊戲
        s_ProtocolEnum.Add("dfdc", Enum.GetValues(typeof(DFDC_GameMessageClassID)));
    }


    public static string GetTypeString(int Type)
    {
        if (showProtocolName == false)
            return "";

        foreach (MessageBClassID val in Enum.GetValues(typeof(MessageBClassID)))
            if (Type == (int)val)
                return val.ToString();

        return "";
    }

    public static string GetProtocolString(int Type, int Protocol)
    {
        if (showProtocolName == false)
            return "";

        Init();

        // 如果是遊戲封包，先找各遊戲中的封包名稱
        if (Type == (int)MessageBClassID.Game)
        {
            string _GameValue = GetByString(GameManager.Instance.GetCurrentEnterGameName(), Protocol);

            // 有找到封包
            if (string.IsNullOrEmpty(_GameValue) == false)
                return _GameValue;
        }
       
        string _Value = GetByString(Type.ToString(), Protocol);

        return _Value;
    }

    private static string GetByString(string Type, int Protocol)
    {
        if (s_ProtocolEnum.ContainsKey(Type) == false)
            return "";

        Array _List = s_ProtocolEnum[Type];
        if (_List == null ||
            _List.Length == 0)
        {
            return "";
        }

        foreach (var val in _List)
        {
            if (Protocol == (int)val)
                return val.ToString();
        }
        return "";
    }
}
