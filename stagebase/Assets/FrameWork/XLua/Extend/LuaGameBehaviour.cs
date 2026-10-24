
using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using XLua;
using System;
using UnityEngine.SceneManagement;
using DG.Tweening;

[LuaCallCSharp]
public class LuaGameBehaviour : LuaCoroutine
{
    private Action luaStart;
    private Action luaUpdate;
    private Action luaOnDestroy;

    private Action luaEventStart;
    private Action luaEventDestory;


    private LuaTable scriptEnv;
    private LuaTable eventEnv;

    public string GameName;
    public LuaTable LuaScript
    {
        get { return scriptEnv; }
    }

    bool isLoadedLuaScript = false;

    void Awake()
    {
        
    }
    void Start()
    {
    }

    public void StartGame()
    {
        BindingLuaScript();
        luaEventStart();
        CallLuaStart();
    }

    void CallLuaStart()
    {
        if (luaStart != null)
        {
            luaStart();
        }
    }
    public void BindingLuaScript()
    {
        if (!isLoadedLuaScript)
        {
            byte[] gameEventLuaContent = LuaManager.Instance.LoadCustomLuaFile("GameEvent", AppDefine.HallNumber);
            byte[] luaContent = LuaManager.Instance.LoadCustomLuaFile("GameStart", GameName);
            LuaEnv luaEnv = LuaManager.LuaEnv;
            scriptEnv = luaEnv.NewTable();
            eventEnv = luaEnv.NewTable();

            LuaTable meta = luaEnv.NewTable();
            meta.Set("__index", luaEnv.Global);
            scriptEnv.SetMetaTable(meta);
            eventEnv.SetMetaTable(meta);
            meta.Dispose();

            scriptEnv.Set("this", this);

            luaEnv.DoString(Utility.BytesToUTF8String(gameEventLuaContent), "GameEvent", eventEnv);
            luaEnv.DoString(Utility.BytesToUTF8String(luaContent), "GameStart", scriptEnv);

            isLoadedLuaScript = true;
        }

        eventEnv.Get("Start", out luaEventStart);
        eventEnv.Get("Destory", out luaEventDestory);

        Action luaAwake = scriptEnv.Get<Action>("Awake");
        scriptEnv.Get("Start", out luaStart);
        scriptEnv.Get("Update", out luaUpdate);
        scriptEnv.Get("OnDestroy", out luaOnDestroy);

        if (luaAwake != null)
        {
            luaAwake();
        }
    }

    // Update is called once per frame
    new void Update()
    {
        base.Update();

        if (luaUpdate != null)
        {
            luaUpdate();
        }
    }

    void OnDestroy()
    {
        if (luaEventDestory != null)
        {
            luaEventDestory();
        }
        if (luaOnDestroy != null)
        {
            luaOnDestroy();
        }
        luaOnDestroy = null;
        luaUpdate = null;
        luaEventStart = null;

        luaEventStart = null;
        luaEventDestory = null;

        if (eventEnv != null)
        {
            eventEnv.Dispose();
        }
        eventEnv = null;

        if (scriptEnv != null)
        {
            scriptEnv.Dispose();
        }
        scriptEnv = null;
    }
}
