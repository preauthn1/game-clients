using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(RawImage))]
[RequireComponent(typeof(Camera))]
[ExecuteInEditMode]
public class Anima2DLayer : MonoBehaviour
{
    private const int UICameraSize = 457;
    private const int CanvansHight = 750;

    private RawImage targetImage;
    private Camera LayerCamera;

    void Start()
    {
        targetImage = gameObject.GetComponent<RawImage>();
        LayerCamera = gameObject.GetComponent<Camera>();

        LayerCamera.clearFlags = CameraClearFlags.Color;
        LayerCamera.cullingMask = 1 << 8;
        LayerCamera.orthographic = true;

        LayerCamera.nearClipPlane = -10;
        LayerCamera.farClipPlane = 10;
        LayerCamera.depth = -100;

        RefreshRawImage();
    }

    public void RefreshRawImage()
    {
        RectTransform rectTran = gameObject.GetComponent<RectTransform>();
        LayerCamera.targetTexture = new RenderTexture((int)rectTran.rect.width, (int)rectTran.rect.height, 24);
        LayerCamera.rect = new Rect(0, 0, 1, (float)rectTran.rect.height / rectTran.rect.width);
        LayerCamera.orthographicSize = UICameraSize / (CanvansHight / rectTran.rect.height);
        targetImage.texture = LayerCamera.targetTexture;
        targetImage.SetNativeSize();
        targetImage.raycastTarget = false;
    }
}