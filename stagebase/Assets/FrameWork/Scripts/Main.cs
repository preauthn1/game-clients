using System.Collections;
using UnityEngine;
using HotUpdate;
using UnityEngine.UI;
using DG.Tweening;
using System;
using FrameWork;

/// <summary>
/// 游戏Launch流程
/// 1.游戏解压
/// 2.连接Socket
/// 3.Lua中根据服务器获取的版本号判断是否需要更新大厅
///     .如果需要重新下载，调用整包下载逻辑
///     .如果资源需要更新，调用资源更新逻辑
///     .如果没有更新，则走启动游戏流程
/// 4.启动GameStart.Lua 
/// </summary>
public class Main : MonoBehaviour
{
    public GameObject DefalutUI;
    public GameObject DefalutBg;

    [SerializeField]
    GameObject UI_DecompressProgress = null;

    [SerializeField]
    Text m_FirstHandleProgressTips = null;

    [SerializeField]
    Slider m_FirstHandleProgress = null;

    [SerializeField]
    StackTraceLogType m_StackTraceLogType = StackTraceLogType.ScriptOnly;


    public static Main Instance { private set; get; }

    protected virtual void OnDestroy()
    {
        Instance = null;
        Destroy(DefalutUI);
    }

    void Awake()
    {
        Instance = gameObject.GetComponent<Main>();

        // 游戏帧率设置
        Application.targetFrameRate = 30;

        Application.SetStackTraceLogType(LogType.Log, m_StackTraceLogType);
        Application.SetStackTraceLogType(LogType.Warning, m_StackTraceLogType);
        Application.SetStackTraceLogType(LogType.Error, m_StackTraceLogType);
    }

    private void Start()
    {
        if (UI_DecompressProgress != null)
        {
            UI_DecompressProgress.gameObject.SetActive(false);
        }

        DefalutBg.gameObject.SetActive(true);

        // 编辑器和window测试环境下不开热更新
#if UNITY_EDITOR || UNITY_STANDALONE_WIN
        AppDefine.OpenHotUpdate = false;
#else
        AppDefine.OpenHotUpdate = true;
#endif
        StartCoroutine(StartUp());
    }

    private IEnumerator StartUp()
    {
        ManagerCenter.AddManager<AppManager>();
        ManagerCenter.AddManager<HotUpdateManager>();
        ManagerCenter.AddManager<ObjectPoolManager>();
        ManagerCenter.AddManager<SoundManager>();
        ManagerCenter.AddManager<GameManager>();
        ManagerCenter.AddManager<TimeManager>();
        ManagerCenter.AddManager<UISpriteManager>();
        ManagerCenter.AddManager<AssetBundleManager>();
        ManagerCenter.AddManager<LuaManager>();
        ManagerCenter.AddManager<NetworkManager>();
        ManagerCenter.AddManager<HeartBeatManager>();
        
        PrefsUtility.Init();

        WindowManager.InitManager();                                            // 初始化界面管理器之后才能打开各个UI

        yield return StartCoroutine(DecompressAssets());                        // 解压资源

        AssetBundleManager.Instance.Launch();

        // 注册资源管理器 
        while (!AssetBundleManager.Instance.IsReady)
            yield return 1;

        LuaManager.Instance.Launch();

        while (!LuaManager.Instance.IsReady)
            yield return 1;

        Debug.Log("StartUp");

        LuaManager.CallMethod("StartUp", "Main");
    }

    private IEnumerator DecompressAssets()
    {
        Action<UpdateProgressInfo> Decompress_ProgressChangedEvent = (e) =>
        {
            if (UI_DecompressProgress != null && !UI_DecompressProgress.gameObject.activeSelf)
                UI_DecompressProgress.gameObject.SetActive(true);

            if (m_FirstHandleProgressTips)
                m_FirstHandleProgressTips.text = e.TipsContent;

            if (m_FirstHandleProgress)
                m_FirstHandleProgress.DOValue(e.ProgressPercentage, 0.3f);
        };

        if (AppDefine.OpenHotUpdate)    // 开启热更新
        {
            HotUpdateManager.OnHotUpdateProgressChanged += Decompress_ProgressChangedEvent;
            yield return StartCoroutine(HotUpdateManager.Instance.TryUpdateAllAssetFromStreamingAssets());
            HotUpdateManager.OnHotUpdateProgressChanged -= Decompress_ProgressChangedEvent;

            if (UI_DecompressProgress != null)
                UI_DecompressProgress.gameObject.SetActive(false);
        }
    }

    /// <summary>
    /// 判断是否需要更新的逻辑由Lua中触发
    /// </summary>
    public void UpdateAssets()
    {
        StartCoroutine(UpdateAssetsYid());
    }

    private IEnumerator UpdateAssetsYid()
    {
        if (AppDefine.OpenHotUpdate)
        {
            HotUpdateManager.Instance.TryStartUpdateRemoteAssetsToLocal();

            while (HotUpdateManager.Instance.IsWorking)
                yield return 1;

            // 更新管理器完成了
            if (HotUpdateManager.Instance.UpdaterState == HotUpdate.HotUpdateState.Done)
            {
                if (!HotUpdateManager.Instance.IsValidatedAssets)
                {
                    Debug.LogError("HotUpdate error, the assets was not validated!");
                    Application.Quit();
                    yield break;
                }

                // 有更新资源,需要重新加载资源管理器
                if (HotUpdateManager.Instance.IsLoadedNewAsset)
                {
                    WindowManager.Instance.CloseWindow(UILoading.UIAssetName, false);
                    WindowManager.Instance.ClearWindowPool();
                    AssetBundleManager.Instance.ReLaunch();
                    while (!AssetBundleManager.Instance.IsReady)
                    {
                        yield return 1;
                    }
                }
            }
        }

        LuaManager.Instance.ReLaunch();
        AppManager.Instance.ReLaunch();
        NetworkManager.Instance.ReLaunch();

        while (!LuaManager.Instance.IsReady)
            yield return 1;

        yield return 1;

        LuaManager.CallMethod("StartUp", "Main");
    }
}