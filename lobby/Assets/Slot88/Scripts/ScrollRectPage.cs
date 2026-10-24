using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

[RequireComponent(typeof(ScrollRect))]
public class ScrollRectPage : MonoBehaviour {
    [SerializeField] Toggle togglePrefab;
    [SerializeField] ToggleGroup toggleGroup;
    [SerializeField] GameObject[] arrow = new GameObject[2];
    [SerializeField] int swipeSpeed = 15;

    private ScrollRect scrollRect;
    private int currentPage = 0;
    private int totalPages = 0;
    private bool scrolling = false;
    void Start()
    {
        arrow[0].SetActive(false);
        arrow[1].SetActive(false);
        togglePrefab.gameObject.SetActive(false);
        scrollRect = GetComponent<ScrollRect>();
        scrollRect.onValueChanged.AddListener((position) => UpdateCurrentPage());
        toggleGroup.GetComponent<GridLayoutGroup>().startCorner = scrollRect.horizontal ? GridLayoutGroup.Corner.UpperLeft : GridLayoutGroup.Corner.LowerLeft;
    }
    public IEnumerator RefreshToggleCount()
    {
        yield return new WaitForEndOfFrame();
        int pages = 0;
        if (scrollRect.horizontal && scrollRect.content.rect.width > 0)
            pages =  Mathf.CeilToInt(scrollRect.content.rect.width / scrollRect.viewport.rect.width);
        else if (scrollRect.vertical && scrollRect.content.rect.height > 0)
            pages = Mathf.CeilToInt(scrollRect.content.rect.height / scrollRect.viewport.rect.height);
     
        for (int i = 0; i < pages; i++)
        {
            Toggle toggle;
            if (toggleGroup.transform.childCount > i)
                toggle = toggleGroup.transform.GetChild(i).GetComponent<Toggle>();
            else
            {
                toggle = Instantiate(togglePrefab, toggleGroup.transform);
                toggle.transform.localScale = Vector3.one;
                toggle.group = toggleGroup;
            }
            toggle.isOn = false;
            toggle.gameObject.SetActive(true);
        }
        if (toggleGroup.transform.childCount > pages)
        {
            for (int i = pages; i < toggleGroup.transform.childCount; i++)
                toggleGroup.transform.GetChild(i).gameObject.SetActive(false);
        }
        UpdateTotalPages();
        UpdateCurrentPage();
    }

    private void UpdateTotalPages()
    {
        int count = 0;
        foreach (Transform child in toggleGroup.transform)
            if (child.gameObject.activeSelf) count++;
        totalPages = count;
    }

    public void UpdateCurrentPage()
    {
        if (totalPages > 0)
        {
            int childIndex;
            if (scrollRect.horizontal)
                childIndex = Mathf.FloorToInt(totalPages * scrollRect.horizontalNormalizedPosition);
            else
                childIndex = Mathf.FloorToInt(totalPages * scrollRect.verticalNormalizedPosition);

            if (childIndex > totalPages - 1) childIndex = totalPages - 1;
            if (childIndex < 0) childIndex = 0;
            toggleGroup.transform.GetChild(childIndex).GetComponent<Toggle>().isOn = true;
            currentPage = childIndex + 1;
        }
 
        UpdateArrow();
    }
  
    public void UpdateArrow()
    {

        float min = 0.02f;
        float max = 0.98f;
        if (totalPages <= 1)
        {
            arrow[0].SetActive(false);
            arrow[1].SetActive(false);
            return;
        }
        if (scrollRect.horizontal)
        {
            arrow[1].SetActive(scrollRect.horizontalNormalizedPosition > min);
            arrow[0].SetActive(scrollRect.horizontalNormalizedPosition < max);
        }
        else
        {
            arrow[1].SetActive(scrollRect.verticalNormalizedPosition > min);
            arrow[0].SetActive(scrollRect.verticalNormalizedPosition < max);
        }
    }

    public void SwipeUp()
    {
        if (scrolling) return;
        StartCoroutine(Swipe(Direction.Up));
    }

    public void SwipeDown()
    {
        if (scrolling) return;
        StartCoroutine(Swipe(Direction.Down));
    }

    enum Direction { Up, Down }


    private IEnumerator Swipe(Direction direction)
    {
        scrolling = true;
        float eachPageNormalized = 1f / (totalPages - 1);
        float destination = 0;
        if (scrollRect.horizontal)
        {
            if (direction == Direction.Up)
                destination = Mathf.Clamp(scrollRect.horizontalNormalizedPosition + eachPageNormalized, 0, 1);
            else if (direction == Direction.Down)
                destination = Mathf.Clamp(scrollRect.horizontalNormalizedPosition - eachPageNormalized, 0, 1);

            while (true)
            {
                if (direction == Direction.Up && destination - scrollRect.horizontalNormalizedPosition <= 0.001f) break;
                if (direction == Direction.Down && destination - scrollRect.horizontalNormalizedPosition >= -0.001f) break;
                scrollRect.horizontalNormalizedPosition = Mathf.Lerp(scrollRect.horizontalNormalizedPosition, destination, Time.deltaTime * swipeSpeed);
                yield return null;
            }
        }
        else
        {
            if (direction == Direction.Up)
                destination = Mathf.Clamp(scrollRect.verticalNormalizedPosition + eachPageNormalized, 0, 1);
            else if (direction == Direction.Down)
                destination = Mathf.Clamp(scrollRect.verticalNormalizedPosition - eachPageNormalized, 0, 1);

            while (true)
            {
                if (direction == Direction.Up && destination - scrollRect.verticalNormalizedPosition <= 0.001f) break;
                if (direction == Direction.Down && destination - scrollRect.verticalNormalizedPosition >= -0.001f) break;
                scrollRect.verticalNormalizedPosition = Mathf.Lerp(scrollRect.verticalNormalizedPosition, destination, Time.deltaTime * swipeSpeed);
                yield return null;
            }
        }
        
        scrolling = false ;
    }

}
