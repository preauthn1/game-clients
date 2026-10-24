using System;
using UnityEngine;
using System.Collections;

namespace GSLibrary.Game.Bundle
{
    public enum GameRoomState
    {
        Playable,
        NeedUpdate,
        NeedDownload,
        Downloading,
        PendingDownload
    }



    public class BundleRoomModel
    {
        public GameRoomState state = GameRoomState.Playable;
        protected GameRoomState previousState = GameRoomState.Playable;

        public string id = "-1";
		public string code = "-1";
        //public string title = "unknown"; //the title for the game
        public string url = ""; // name
        public int version = -1;
        public string scene = "unknown";
    }
}