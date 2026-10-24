using System;
using UnityEngine;

namespace VMSoft.Lobby.Model
{
    [Serializable]
    public class JackpotData
    {
        //this is private attribute (sum internally)
        [SerializeField] public double totalJackpot;

        //these are the publics
        public long grand;
        public long major;
        public long minor;
        public long mini;
        public string id;
        public string name;


        public string Id
        {
            get
            {
                return id;
            }
        }

        public string Name
        {
            get
            {
                return name;
            }
        }

        public long Grand
        {
            get
            {
                return grand;
            }
        }

        public long Major
        {
            get
            {
                return major;
            }
        }

        public long Minor
        {
            get
            {
                return minor;
            }
        }

        public long Mini
        {
            get
            {
                return mini;
            }
        }

        public double TotalJackpot
        {
            get
            {
                totalJackpot = this.grand + this.major + this.minor + this.mini;
                return totalJackpot;
            }
        }

        public JackpotData()
        {
            //keep this empty.. constructor
        }

        public JackpotData(long grand, long major, long minor, long mini)
        {
            this.grand = grand;
            this.major = major;
            this.minor = minor;
            this.mini = mini;
        }
    }
}

