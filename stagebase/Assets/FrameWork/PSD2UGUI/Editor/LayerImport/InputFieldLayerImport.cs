using System;
using UnityEngine;
using UnityEditor;

namespace PSDUIImporter
{
    internal class InputFieldLayerImport : ILayerImport
    {
        private PSDImportCtrl pSDImportCtrl;

        public InputFieldLayerImport(PSDImportCtrl pSDImportCtrl)
        {
            this.pSDImportCtrl = pSDImportCtrl;
        }

        public void DrawLayer(Layer layer, GameObject parent)
        {
            UnityEngine.UI.InputField inputfield = PSDImportUtility.LoadAndInstant<UnityEngine.UI.InputField>(PSDImporterConst.ASSET_PATH_INPUTFIELD, layer.name, parent);

            for (int imageIndex = 0; imageIndex < layer.layers.Length; imageIndex++)
            {
                PSImage image = layer.layers[imageIndex].image;

                if (imageIndex == 0 && (image.imageSource == ImageSource.Common || image.imageSource == ImageSource.Custom))    // 第一张图片为输入框背景图
                {
                    string assetPath = PSDImportUtility.baseDirectory + image.name + PSDImporterConst.PNG_SUFFIX;
                    Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;
                    inputfield.image.sprite = sprite;

                    RectTransform rectTransform = inputfield.GetComponent<RectTransform>();
                    rectTransform.sizeDelta = new Vector2(image.size.width, image.size.height);
                    rectTransform.anchoredPosition = new Vector2(image.position.x, image.position.y);
                }

                if (image.imageType == ImageType.Label)
                {
                    UnityEngine.UI.Text text = null;

                    if (imageIndex == 1)
                    {
                        text = (UnityEngine.UI.Text)inputfield.textComponent;
                        inputfield.text = image.arguments[3];
                    }
                    else if (imageIndex == 2)
                    {
                        text = (UnityEngine.UI.Text)inputfield.placeholder;
                        text.text = image.arguments[3];
                    }

                    if (text == null)
                        continue;

                    Color color;
                    if (UnityEngine.ColorUtility.TryParseHtmlString(("#" + image.arguments[0]), out color))
                    {
                        text.color = color;
                    }

                    int size;
                    if (int.TryParse(image.arguments[2], out size))
                    {
                        text.fontSize = size;
                    }

                    string fontFolder;

                    if (image.arguments[1].ToLower().Contains("static"))
                    {
                        fontFolder = PSDImporterConst.FONT_STATIC_FOLDER;
                    }
                    else
                    {
                        fontFolder = fontFolder = PSDImporterConst.FONT_FOLDER;
                    }

                    string fontFullName = fontFolder + image.arguments[1] + PSDImporterConst.FONT_SUFIX;
                    Debug.Log("font name ; " + fontFullName);
                    var font = AssetDatabase.LoadAssetAtPath(fontFullName, typeof(Font)) as Font;
                    if (font == null)
                    {
                        Debug.LogWarning("Load font failed : " + fontFullName);
                    }
                    else
                    {
                        text.font = font;
                    }
                    //ps的size在unity里面太小，文本会显示不出来,暂时选择溢出
                    text.verticalOverflow = VerticalWrapMode.Overflow;
                    text.horizontalOverflow = HorizontalWrapMode.Overflow;
                }
            }
        }
    }
}