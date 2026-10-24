using System;
using UnityEngine;
using UnityEditor;
using UnityEngine.Events;
using System.Collections;
using System.Collections.Generic;

namespace PSDUIImporter
{
    public class ToggleLayerImport : ILayerImport
    {
        PSDImportCtrl ctrl;
        public ToggleLayerImport(PSDImportCtrl ctrl)
        {
            this.ctrl = ctrl;
        }
        public void DrawLayer(Layer layer, GameObject parent)
        {
            UnityEngine.UI.Toggle toggle = PSDImportUtility.LoadAndInstant<UnityEngine.UI.Toggle>(PSDImporterConst.ASSET_PATH_TOGGLE, layer.name, parent);// GameObject.Instantiate(temp) as UnityEngine.UI.Toggle;

            for (int i = 0; i < layer.layers.Length; i++)
            {
                PSImage image = layer.layers[i].image;

                if (i == 0)     // 第一张作为背景
                {
                    if (image.imageSource == ImageSource.Common || image.imageSource == ImageSource.Custom)
                    {
                        string assetPath = PSDImportUtility.baseDirectory + image.name + PSDImporterConst.PNG_SUFFIX;
                        Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;
                        toggle.image.sprite = sprite;

                        RectTransform rectTransform = toggle.GetComponent<RectTransform>();
                        rectTransform.sizeDelta = new Vector2(image.size.width, image.size.height);
                        rectTransform.anchoredPosition = new Vector2(image.position.x, image.position.y);
                    }
                }
                else if (i == 1)    // 倒数第二张作为遮罩图
                {
                    if (image.imageSource == ImageSource.Common || image.imageSource == ImageSource.Custom)
                    {
                        string assetPath = PSDImportUtility.baseDirectory + image.name + PSDImporterConst.PNG_SUFFIX;
                        Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;
                        toggle.graphic.GetComponent<UnityEngine.UI.Image>().sprite = sprite;
                    }
                }
                else
                { 
                    ctrl.DrawImage(image, toggle.gameObject);
                }
            }
        }
    }
}