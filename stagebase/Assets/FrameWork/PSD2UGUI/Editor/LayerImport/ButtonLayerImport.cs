using System;
using UnityEngine;
using UnityEditor;
using UnityEngine.Events;
using System.Collections;
using System.Collections.Generic;
using System.Linq;

namespace PSDUIImporter
{
    public class ButtonLayerImport : ILayerImport
    {
        PSDImportCtrl ctrl;
        public ButtonLayerImport(PSDImportCtrl ctrl)
        {
            this.ctrl = ctrl;
        }

        public void DrawLayer(Layer layer, GameObject parent)
        {
            UnityEngine.UI.Button button = PSDImportUtility.LoadAndInstant<UnityEngine.UI.Button>(PSDImporterConst.ASSET_PATH_BUTTON, layer.name, parent);

            if (layer.layers != null)
            {
                PSImage image_0 = layer.layers[0].image;

                // 只有一条图片记录，表示直接用图片作为按钮
                if (layer.layers.Length == 1 && image_0.imageType != ImageType.Label && image_0.imageType != ImageType.Texture)
                {
                    string assetPath = PSDImportUtility.baseDirectory + image_0.name + PSDImporterConst.PNG_SUFFIX;
                    Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;

                    button.image.sprite = sprite;
                    RectTransform rectTransform = button.GetComponent<RectTransform>();
                    rectTransform.sizeDelta = new Vector2(image_0.size.width, image_0.size.height);
                    rectTransform.anchoredPosition = new Vector2(image_0.position.x, image_0.position.y);

                    adjustButtonBG(image_0.imageType, button);

                    return;
                }

                for (int imageIndex = 0; imageIndex < layer.layers.Length; imageIndex++)
                {
                    PSImage image = layer.layers[imageIndex].image;
                    string lowerName = image.name.ToLower();
                    if (image.imageType != ImageType.Label && image.imageType != ImageType.Texture)
                    {
                        if (image.imageSource == ImageSource.Custom || image.imageSource == ImageSource.Common)
                        {
                            string assetPath = PSDImportUtility.baseDirectory + image.name + PSDImporterConst.PNG_SUFFIX;
                            Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;

                            if (imageIndex == 0)        // 第一张图作为按钮图片
                            {
                                button.image.sprite = sprite;
                                RectTransform rectTransform = button.GetComponent<RectTransform>();
                                rectTransform.sizeDelta = new Vector2(image.size.width, image.size.height);
                                rectTransform.anchoredPosition = new Vector2(image.position.x, image.position.y);

                                adjustButtonBG(image.imageType, button);
                            }
                            else
                            {
                                ctrl.DrawLayer(layer.layers[imageIndex], button.gameObject);
                            }
                        }
                    }
                    else
                    {
                        //ctrl.DrawImage(image, button.gameObject);
                        ctrl.DrawLayer(layer.layers[imageIndex], button.gameObject);
                    }
                }


                //for (int imageIndex = 0; imageIndex < layer.layers.Length; imageIndex++)
                //{
                //    PSImage image = layer.layers[imageIndex].image;
                //    string lowerName = image.name.ToLower();
                //    if (image.imageType != ImageType.Label && image.imageType != ImageType.Texture)
                //    {
                //        if (image.imageSource == ImageSource.Custom || image.imageSource == ImageSource.Common)
                //        {
                //            string assetPath = PSDImportUtility.baseDirectory + image.name + PSDImporterConst.PNG_SUFFIX;
                //            Sprite sprite = AssetDatabase.LoadAssetAtPath(assetPath, typeof(Sprite)) as Sprite;

                //            if (image.name.ToLower().Contains("normal"))
                //            {
                //                button.image.sprite = sprite;
                //                RectTransform rectTransform = button.GetComponent<RectTransform>();
                //                rectTransform.sizeDelta = new Vector2(image.size.width, image.size.height);
                //                rectTransform.anchoredPosition = new Vector2(image.position.x, image.position.y);

                //                adjustButtonBG(image.imageType, button);
                //            }
                //            else if (image.name.ToLower().Contains("pressed"))
                //            {
                //                button.transition = UnityEngine.UI.Selectable.Transition.SpriteSwap;
                //                UnityEngine.UI.SpriteState state = button.spriteState;
                //                state.pressedSprite = sprite;
                //                button.spriteState = state;
                //            }
                //            else if (image.name.ToLower().Contains("disabled"))
                //            {
                //                button.transition = UnityEngine.UI.Selectable.Transition.SpriteSwap;
                //                UnityEngine.UI.SpriteState state = button.spriteState;
                //                state.disabledSprite = sprite;
                //                button.spriteState = state;
                //            }
                //            else if (image.name.ToLower().Contains("highlighted"))
                //            {
                //                button.transition = UnityEngine.UI.Selectable.Transition.SpriteSwap;
                //                UnityEngine.UI.SpriteState state = button.spriteState;
                //                state.highlightedSprite = sprite;
                //                button.spriteState = state;
                //            }
                //            else
                //            { 
                //                ctrl.DrawLayer(layer.layers[imageIndex], button.gameObject);
                //            }
                //        }
                //    }
                //    else
                //    {
                //        //ctrl.DrawImage(image, button.gameObject);
                //        ctrl.DrawLayer(layer.layers[imageIndex], button.gameObject);
                //    }
                //}
            }

        }

        //调整按钮背景
        private void adjustButtonBG(ImageType imageType, UnityEngine.UI.Button button)
        {
            if (imageType == ImageType.SliceImage)
            {
                button.image.type = UnityEngine.UI.Image.Type.Sliced;
            }
            else if (imageType == ImageType.LeftHalfImage)
            {
                var mirror = button.gameObject.AddComponent<UGUI.Effects.Mirror>();
                mirror.mirrorType = UGUI.Effects.Mirror.MirrorType.Horizontal;
                mirror.SetNativeSize();
            }
            else if (imageType == ImageType.BottomHalfImage)
            {
                var mirror = button.gameObject.AddComponent<UGUI.Effects.Mirror>();
                mirror.mirrorType = UGUI.Effects.Mirror.MirrorType.Vertical;
                mirror.SetNativeSize();
            }
            else if (imageType == ImageType.QuarterImage)
            {
                var mirror = button.gameObject.AddComponent<UGUI.Effects.Mirror>();
                mirror.mirrorType = UGUI.Effects.Mirror.MirrorType.Quarter;
                mirror.SetNativeSize();
            }
        }
    }


    [ExecuteInEditMode]
    public class PosLoader : MonoBehaviour
    {
        public Vector2 worldPos;
        void Start()
        {
            transform.position = worldPos;
            DestroyImmediate(this);
        }
    }
}