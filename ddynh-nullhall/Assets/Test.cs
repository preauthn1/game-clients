using UnityEngine;
using HotUpdate;
using System;
using System.ComponentModel;
using example.invalid;
using System.Collections;
using UnityEngine.UI;

public class Test : MonoBehaviour
{
     IEnumerator Start()
    {
        yield return new WaitForSeconds(0.1f);
        AppDefine.OpenHotUpdate = true;
    }

    void Update()
    {
        if(Input.GetKeyDown(KeyCode.A))
        {
            AppDefine.UpdateFileUrl = "";
            UnityEngine.Debug.Log("AppDefine.UpdateFileUrl = empty");
        }

    }
}
