using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using UnityEditor;
using UnityEngine;
using example.invalid;

public class GitCommit
{
    public static void Reset()
    {
        RunProcess("git reset --hard");
    }

    public static void Checkout(string _branch)
    {
        string _commit = "git reset --hard";
        _commit += "\n" + "git checkout " + _branch;
        RunProcess(_commit);
    }

    private static void RunProcess(string command)
    {
		#if UNITY_IOS
		string _open = "bash";
		#endif
        string _batPath = Application.dataPath + "/../process.sh";
        string _content = "#!/bin/sh";
        _content += "\n" + "cd '" + Application.dataPath + "/Hall'";
        _content += "\n" + command;
        _content += "\n" + "rm -rf '" + _batPath + "'";

        File.WriteAllText(_batPath, _content);

		Process process = new Process();
		#if UNITY_ANDROID
		process.StartInfo.FileName = _batPath;
		#endif
		
        #if UNITY_IOS
        process.StartInfo.FileName = _open;
        process.StartInfo.Arguments = _batPath;
		#endif

        process.Start();
        process.WaitForExit();
    }


}