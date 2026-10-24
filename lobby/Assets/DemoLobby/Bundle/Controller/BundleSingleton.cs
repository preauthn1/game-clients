using System;
using UnityEngine;
using System.Collections;

namespace GSLibrary.Game.Bundle
{
    public abstract class BundleSingleton<T> : MonoBehaviour where T : MonoBehaviour
    {

        private static T _instance = null;
        public static bool IsAwake { get { return (_instance != null); } }


        private static string GetObjectNameStripNamespace(string goName)
        {
            return goName.Substring(goName.LastIndexOf(".") + 1);
        }

        /// <summary>
        /// gets the instance of this Singleton
        /// use this for all instance calls:
        /// MyClass.Instance.MyMethod();
        /// or make your public methods static
        /// and have them use Instance internally
        /// for a nice clean interface
        /// </summary>
        public static T Instance
        {
            get
            {
                Type mytype = typeof(T);
                if (_instance == null)
                {
                    _instance = (T)FindObjectOfType(mytype);
                    //Debug.Log("instance: " + _instance);
                    if (_instance == null)
                    {
                        //Debug.Log("initializing instance of: " + mytype.Name);
                        string goName = mytype.ToString();
                        LoadGameObject(goName);
                    }
                    else
                    {
                        CleanUp(mytype);
                    }
                }
                return _instance;
            }
        }


        public static T InstanceUsingGO(string goName)
        {
            Type mytype = typeof(T);
            if (_instance == null)
            {
                _instance = (T)FindObjectOfType(mytype);
                //Debug.Log("instance: " + _instance);
                if (_instance == null)
                {
                    //Debug.Log("initializing instance of: " + mytype.Name);
                    //Load the GameObject using custom version..
                    LoadGameObject(goName);
                }
                else
                {
                    CleanUp(mytype);
                }
            }
            return _instance;
        }


        private static void CleanUp(Type mytype)
        {
            //Debug.Log(mytype.Name + " had to be searched for but was found"); 
            int count = FindObjectsOfType(mytype).Length;
            if (count > 1)
            {
                Debug.LogError("Singleton: there are " + count.ToString() + " of " + mytype.Name);
                throw new Exception("Too many (" + count.ToString() + ") prefab singletons of type: " + mytype.Name);
            }
        }


        private static void LoadGameObject(string goName)
        {

            goName = GetObjectNameStripNamespace(goName);
            GameObject go = GameObject.Find(goName);

            if (go == null) // try again searching for a cloned object
            {
                go = GameObject.Find(goName + "(Clone)");
                if (go != null)
                {
                    //Debug.Log("found clone of object using it!"); 
                }
            }

            if (go == null) //if still not found try prefab or create
            {
                go = (GameObject)Instantiate(Resources.Load(goName, typeof(GameObject)));

                if (go == null)
                {
                    //Debug.LogWarning(goName + " not found creating...");
                    go = new GameObject();
                    go.name = goName;
                }
            }
            _instance = go.GetComponent<T>();
            if (_instance == null)
            {
                _instance = go.AddComponent<T>();
            }
        }
    }
}
