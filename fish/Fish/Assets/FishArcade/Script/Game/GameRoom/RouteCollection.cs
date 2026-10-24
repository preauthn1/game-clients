using UnityEngine;
using System.Collections;
using System.Collections.Generic;

namespace P8Games.Fish
{
    public class RouteCollection : MonoBehaviour
    {
        [System.Serializable]
        public class Path
        {
            public Vector3 start;
            public Vector3 end;

            public Path(Vector3 start, Vector3 end)
            {
                this.start = start;
                this.end = end;
            }
        }

        [Space(15)] [SerializeField] public Transform topPoint = null;
        [SerializeField] public Transform btmPoint = null;
        [SerializeField] public Transform leftPoint = null;
        [SerializeField] public Transform rightPoint = null;

        [Space(15)]
        [SerializeField] public Transform longTopPoint = null;
        [SerializeField] public Transform longBtmPoint = null;
        [SerializeField] public Transform longLeftPoint = null;
        [SerializeField] public Transform longRightPoint = null;

        private List<Path> linearPathList;

        private List<Path> specialPathList;
        private float pointSpacing = 2.0f;
        private int h_Expend = 5;
        private int v_Expend = 3;
        private int cornerCount = 2;

//        private int v_CornerCount;
//        private int v_MiddleCount;
//
//        private int h_CornerCount;
//        private int h_MiddleCount;

//        private int centerCount;

        void Awake()
        {
//            v_CornerCount = cornerCount*(v_Expend*2 + h_Expend + 2 - cornerCount);
//            v_MiddleCount = (v_Expend - cornerCount)*(v_Expend*2 + h_Expend + 2);
//
//            h_CornerCount = cornerCount*(h_Expend*2 + v_Expend + 2 - cornerCount);
//            h_MiddleCount = (h_Expend - cornerCount)*(h_Expend*2 + v_Expend + 2);

//            centerCount = (v_Expend + h_Expend)*2 + 2;

            GeneratePath();

			Debug.Log (linearPathList.Count);
        }

        public Path GetPath(string pathId)
        {
            string prefix = pathId.Substring(0, 1);
            int pathNumber = int.Parse(pathId.Substring(1));

            switch (prefix)
            {
                case "L":
                    return linearPathList[pathNumber];

                case "S":
                    return specialPathList[pathNumber];

                default:
                    return null;
            }
        }


        private void GeneratePath()
        {
            linearPathList = new List<Path>();
            specialPathList = new List<Path>();

            linearPathList.Add(new Path(leftPoint.localPosition, rightPoint.localPosition));
            linearPathList.Add(new Path(rightPoint.localPosition, leftPoint.localPosition));
            linearPathList.Add(new Path(topPoint.localPosition, btmPoint.localPosition));
            linearPathList.Add(new Path(btmPoint.localPosition, topPoint.localPosition));

            specialPathList.Add(new Path(leftPoint.localPosition, longRightPoint.localPosition));
            specialPathList.Add(new Path(rightPoint.localPosition, longLeftPoint.localPosition));
            specialPathList.Add(new Path(topPoint.localPosition, longBtmPoint.localPosition));
            specialPathList.Add(new Path(btmPoint.localPosition, longTopPoint.localPosition));

            for (int v = 0; v <= v_Expend; v++)
            {
                Vector3 v_offset = new Vector3(0, v*pointSpacing, 0);

                if (v == 0)
                {
                    for (int h = 0; h <= h_Expend; h++)
                    {
                        Vector3 h_offset = new Vector3(h*pointSpacing, 0, 0);

                        linearPathList.Add(new Path(leftPoint.localPosition, topPoint.localPosition + h_offset));
                        linearPathList.Add(new Path(leftPoint.localPosition, btmPoint.localPosition + h_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition, topPoint.localPosition - h_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition, btmPoint.localPosition - h_offset));
                    }

                    for (int v2 = 1; v2 <= v_Expend; v2++)
                    {
                        Vector3 v2_offset = new Vector3(0, v2*pointSpacing, 0);

                        linearPathList.Add(new Path(leftPoint.localPosition, rightPoint.localPosition + v2_offset));
                        linearPathList.Add(new Path(leftPoint.localPosition, rightPoint.localPosition - v2_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition, leftPoint.localPosition + v2_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition, leftPoint.localPosition - v2_offset));
                    }
                }
                else
                {
                    for (int h = 0; h <= h_Expend; h++)
                    {
                        Vector3 h_offset = new Vector3(h*pointSpacing, 0, 0);

                        linearPathList.Add(new Path(leftPoint.localPosition + v_offset, btmPoint.localPosition + h_offset));
                        linearPathList.Add(new Path(leftPoint.localPosition - v_offset, topPoint.localPosition + h_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition + v_offset, btmPoint.localPosition - h_offset));
                        linearPathList.Add(new Path(rightPoint.localPosition - v_offset, topPoint.localPosition - h_offset));
                    }

                    for (int v2 = -v_Expend; v2 <= v_Expend; v2++)
                    {
                        if (v <= v_Expend - cornerCount || v2 >= cornerCount - v_Expend)
                        {
                            Vector3 v2_offset = new Vector3(0, v2*pointSpacing, 0);

                            linearPathList.Add(new Path(leftPoint.localPosition + v_offset, rightPoint.localPosition + v2_offset));
                            linearPathList.Add(new Path(leftPoint.localPosition - v_offset, rightPoint.localPosition + v2_offset));
                            linearPathList.Add(new Path(rightPoint.localPosition + v_offset, leftPoint.localPosition + v2_offset));
                            linearPathList.Add(new Path(rightPoint.localPosition - v_offset, leftPoint.localPosition + v2_offset));
                        }
                    }
                }
            }

            for (int h = 0; h <= h_Expend; h++)
            {
                Vector3 h_offset = new Vector3(h*pointSpacing, 0, 0);

                if (h == 0)
                {
                    for (int v = 0; v <= v_Expend; v++)
                    {
//                        Vector3 v_offset = new Vector3(0, v*pointSpacing, 0);

                        linearPathList.Add(new Path(topPoint.localPosition, leftPoint.localPosition - h_offset));
                        linearPathList.Add(new Path(topPoint.localPosition, rightPoint.localPosition - h_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition, leftPoint.localPosition + h_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition, rightPoint.localPosition + h_offset));
                    }

                    for (int h2 = 1; h2 <= h_Expend; h2++)
                    {
                        Vector3 h2_offset = new Vector3(h2*pointSpacing, 0, 0);

                        linearPathList.Add(new Path(topPoint.localPosition, btmPoint.localPosition + h2_offset));
                        linearPathList.Add(new Path(topPoint.localPosition, btmPoint.localPosition - h2_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition, topPoint.localPosition + h2_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition, topPoint.localPosition - h2_offset));
                    }
                }
                else
                {
                    for (int v = 0; v <= v_Expend; v++)
                    {
                        Vector3 v_offset = new Vector3(0, v*pointSpacing, 0);

                        linearPathList.Add(new Path(topPoint.localPosition + h_offset, leftPoint.localPosition - v_offset));
                        linearPathList.Add(new Path(topPoint.localPosition - h_offset, rightPoint.localPosition - v_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition + h_offset, leftPoint.localPosition + v_offset));
                        linearPathList.Add(new Path(btmPoint.localPosition - h_offset, rightPoint.localPosition + v_offset));
                    }

                    for (int h2 = -h_Expend; h2 <= h_Expend; h2++)
                    {
                        if (h <= h_Expend - cornerCount || h2 >= cornerCount - h_Expend)
                        {
                            Vector3 h2_offset = new Vector3(h2*pointSpacing, 0, 0);

                            linearPathList.Add(new Path(topPoint.localPosition + h_offset, btmPoint.localPosition + h2_offset));
                            linearPathList.Add(new Path(topPoint.localPosition - h_offset, btmPoint.localPosition + h2_offset));
                            linearPathList.Add(new Path(btmPoint.localPosition + h_offset, topPoint.localPosition + h2_offset));
                            linearPathList.Add(new Path(btmPoint.localPosition - h_offset, topPoint.localPosition + h2_offset));
                        }
                    }
                }
            }
        }
    }
}