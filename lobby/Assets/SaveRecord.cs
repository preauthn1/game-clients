using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.Serialization.Formatters.Binary;
using example.invalid;

public class SaveRecord : MonoBehaviour {

	public void SaveFile()
	{
		//C:/Users/user/AppData/LocalLow/Lucky8 Technology Inc/FishLocalTest/save.txt
		string destination = Application.persistentDataPath + "/save.txt";
		FileStream file;

		if(File.Exists(destination)) file = File.OpenWrite(destination);
		else file = File.Create(destination);

		GameData1 data = new GameData1(1, "123", 3f);
		BinaryFormatter bf = new BinaryFormatter();
		bf.Serialize(file, data);
		file.Close();
	}

	public void LoadFile()
	{
		string destination = Application.persistentDataPath + "/save.txt";
		FileStream file;

		if(File.Exists(destination)) file = File.OpenRead(destination);
		else
		{
			Debug.LogError("File not found");
			return;
		}

		BinaryFormatter bf = new BinaryFormatter();
		GameData1 data = (GameData1) bf.Deserialize(file);
		gameData = data;
		file.Close();

		//		currentScore = data.score;
		//		currentName = data.name;
		//		currentTimePlayed = data.timePlayed;

		//		Debug.Log(data.name);
		//		Debug.Log(data.score);
		//		Debug.Log(data.timePlayed);
	}

	void Start(){
		SaveFile ();
		LoadFile ();
	}

	[SerializeField]
	public static GameData1 gameData;
}


[System.Serializable]
public class GameData1
{
	//public List<GameRound> gameRound = new List<GameRound> ();
	public int score;
	public string name;
	public float timePlayed;

	public GameData1(int scoreInt, string nameStr, float timePlayedF)
	{
		score = scoreInt;
		name = nameStr;
		timePlayed = timePlayedF;
	}
}

public class GameRound
{
	public int totalBet;
	public int totalWin;
	public int mapId;
	public List<int> fishType = new List<int>();
	public List<int> winAmt = new List<int>();
	public List<int> betAmt = new List<int>();

	public GameRound(int _totalBet,int _totalWin,int _mapId,List<int> _fishType,List<int> _winAmt,List<int> _betAmt){
		totalBet = _totalBet;
		totalWin = _totalWin;
		mapId = _mapId;
		fishType = _fishType;
		winAmt = _winAmt;
		betAmt = _betAmt;
	}
}
