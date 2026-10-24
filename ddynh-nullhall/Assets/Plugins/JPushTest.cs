using UnityEngine;
using JPush;

#if UNITY_IPHONE
using LitJson;
#endif

public class JPushTest : MonoBehaviour
{
    // Use this for initialization
    void Start()
    {
#if !UNITY_EDITOR
        JPushBinding.Init(gameObject.name);
        JPushBinding.SetDebug(false);
#endif
    }
}