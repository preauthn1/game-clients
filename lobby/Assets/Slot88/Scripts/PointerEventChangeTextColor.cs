using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
public class PointerEventChangeTextColor : MonoBehaviour, IPointerDownHandler, IPointerUpHandler,IPointerExitHandler,IPointerEnterHandler
{
    [SerializeField] Text[] text;
    [SerializeField] Color notClickedColor = new Color(113/255f, 108/255f, 154/255f);
    [SerializeField] Color clickedColor = new Color(1, 0, 1);
    private bool clicked = false;
    public void OnPointerDown(PointerEventData eventData)
    {
        if (text.Length == 0) return;
        SetTextColor(clickedColor);
        clicked = true;
    }

    public void OnPointerEnter(PointerEventData eventData)
    {
        if (text.Length == 0 || !clicked) return;
        SetTextColor(clickedColor);
    }

    public void OnPointerExit(PointerEventData eventData)
    {
        if (text.Length == 0 || !clicked) return;
        SetTextColor(notClickedColor);
    }

    public void OnPointerUp(PointerEventData eventData)
    {
        if (text.Length == 0) return;
        SetTextColor(notClickedColor);
        clicked = false;
    }

    private void SetTextColor(Color color)
    {
        foreach (Text t in text)
        {
            t.color = color;
        }
    }
}
