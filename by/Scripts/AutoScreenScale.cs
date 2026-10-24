using UnityEngine;

[ExecuteInEditMode]
[RequireComponent(typeof(Camera))]
public class AutoScreenScale : MonoBehaviour
{
    public Vector2 standardResolutions = new Vector2(1136, 640);

    void Start()
    {
        gameObject.GetComponent<Camera>().aspect = standardResolutions.x * 1f / standardResolutions.y;
    }
}