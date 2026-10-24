using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using DG.Tweening;
using System;
public class TestFishSpeed : MonoBehaviour
{



    public float speed = 1f;
    public float rotateSpd = 1.2f;
    public float rotateAngle = 30;
    public float rotateInterval = 2;
    public float rotateIntervalRndRange = 0.5f;

    Transform fish;
    private Vector3 fishPosition;
    private Quaternion fishRotation;
    private RatateData ratateDate = new RatateData();
    private bool isRatating = false;
    private float frameTime = 0.003f;
    Rect screenRect = new Rect(-5.68f, -3.20f, 11.36f, 6.40f);

    float elapse = 0f;
    float timeRotate = 0;
    float radius = 0;
    FrameWork.Random rd;
    Camera camera;
    // Use this for initialization
    void Start()
    {
        camera = GameObject.Find("Camera").GetComponent<Camera>();
        fish = this.transform;
        var fishRect = fish.Find("Body").GetComponent<SpriteRenderer>().sprite.rect;
        radius = Math.Max(fishRect.width, fishRect.height) / 200f;
        rd = new FrameWork.Random(Convert.ToInt32(fish.name.Split('_')[1]));
        this.InvokeRepeating("FrameUpdate", frameTime, frameTime);
    }

    // Update is called once per frame
    void FrameUpdate()
    {
        if (!IsInPool(fish.localPosition))
        {
            InitFish();
        }
        else
        {
            AIFrameUpdate();
            SwimFrameUpdate();
        }
    }
    void Update()
    {

        if (Input.GetMouseButton(0))
        {
            var hit = Physics2D.Raycast(camera.ScreenToWorldPoint(Input.mousePosition), Vector2.zero, 1000);
            if (hit.transform != null)
            {
                Debug.Log(hit.transform.name + "zero");
            }
            var hit1 = Physics2D.Raycast(camera.ScreenToWorldPoint(Input.mousePosition), Vector2.down, 1000);
            if (hit1.transform != null)
            {
                Debug.Log(hit1.transform.name + "down");
            }

            //Debug.Log(Input.mousePosition);
            //Debug.Log(camera.ScreenToWorldPoint(Input.mousePosition));
        }



    }
    void InitFish()
    {

        var bornPosition = RndBornPosition();
        var targetPosition = RndTargetPosition();

        fish.localPosition = bornPosition;
        fish.rotation = Quaternion.LookRotation(Vector3.forward, targetPosition - fish.localPosition);
        fish.Rotate(0, 0, 90);
        fishPosition = fish.localPosition;
        fishRotation = fish.rotation;
    }

    void AIFrameUpdate()
    {
        if (elapse > timeRotate)
        {
            elapse = 0;
            var rotateRange = rd.RangeFloat(-1 * rotateAngle, rotateAngle);
            Rotate(rotateRange);
            timeRotate = rotateInterval + rd.RangeFloat(-1 * rotateIntervalRndRange, rotateIntervalRndRange);
        }
        else
        {
            elapse = elapse + frameTime;
        }

    }

    void SwimFrameUpdate()
    {

        fishPosition = fishPosition + frameTime * (fishRotation * Vector3.right).normalized * speed;


        if (isRatating)
        {
            ratateDate.rotateDelta = 180 * rotateSpd * frameTime * (1 - ratateDate.rotatedAngle / ratateDate.angleAbs);
            fishRotation = fishRotation * Quaternion.Euler(0, 0, ratateDate.rotateDir * ratateDate.rotateDelta);

            ratateDate.rotatedAngle = ratateDate.rotatedAngle + ratateDate.rotateDelta;

            if (ratateDate.rotatedAngle > ratateDate.stopRotateRadian) { isRatating = false; }

        }
        //Debug.Log(Vector3.Distance(fish.localPosition, fishPosition));
        fish.localPosition = fishPosition;
        fish.localRotation = fishRotation;
    }

    void Rotate(float angle)
    {
        isRatating = true;
        ratateDate.rotateDir = Mathf.Sign(angle);
        ratateDate.angleAbs = Mathf.Abs(angle);
        ratateDate.stopRotateRadian = ratateDate.angleAbs * 0.95f;
        ratateDate.rotatedAngle = 0;
        ratateDate.rotateDelta = 0;

    }

    Vector3 RndBornPosition()
    {

        return new Vector3(screenRect.xMin + radius, rd.RangeFloat(screenRect.yMin, screenRect.yMax));
    }

    Vector3 RndTargetPosition()
    {
        return new Vector3(screenRect.xMax, rd.RangeFloat(screenRect.yMin, screenRect.yMax));
    }

    bool IsInPool(Vector3 pos)
    {
        return screenRect.Contains(pos);
    }

    class RatateData
    {
        public float rotateDir { get; set; }
        public float angleAbs { get; set; }
        public float stopRotateRadian { get; set; }

        public float rotatedAngle { get; set; }
        public float rotateDelta { get; set; }
    }

}
