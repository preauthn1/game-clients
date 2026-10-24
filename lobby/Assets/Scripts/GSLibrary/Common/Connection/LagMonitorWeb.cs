using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System;

public class LagMonitorWeb:MonoBehaviour {

	private Coroutine pingPongCo;
	private DateTime lastReqTime;
	private List<int> valueQueue;
	private int interval;
	private int queueSize;

	public PingDataDelegate pingDelegate;

	public bool IsRunning { private set; get; }

	private int AveragePingTime
	{
		get
		{
			if (this.valueQueue.Count == 0)
				return 0;
			int num1 = 0;
			foreach (int num2 in this.valueQueue)
				num1 += num2;
			return num1 / this.valueQueue.Count;
		}
	}

	public void Init(PingDataDelegate pingDelegate, int interval, int queueSize)
	{
		this.pingDelegate += pingDelegate;
		this.interval = interval;
		this.queueSize = queueSize;
		valueQueue = new List<int>();
	}

	public void Start()
	{
		if (this.IsRunning)
			return;
		
		if (pingPongCo != null)
			StopCoroutine(pingPongCo);

		IsRunning = true;
		pingPongCo = StartCoroutine(WebSocketPingPong());
	}

	public void Stop()
	{
		if (!this.IsRunning)
			return;

		IsRunning = false;
		valueQueue.Clear();
		if (pingPongCo != null)
			StopCoroutine(pingPongCo);
		pingPongCo = null;

	}

	public int OnPingPong()
	{
		int num = Convert.ToInt32((DateTime.Now - this.lastReqTime).TotalMilliseconds);
		if (this.valueQueue.Count >= this.queueSize)
			this.valueQueue.RemoveAt(0);
		this.valueQueue.Add(num);
		return this.AveragePingTime;
	}

	IEnumerator WebSocketPingPong()
	{
		while (IsRunning)
		{
			if (pingDelegate != null)
			{
				this.lastReqTime = DateTime.Now;
				pingDelegate();
			}
			yield return new WaitForSeconds(interval);
		}

	}

	public delegate void PingDataDelegate();
}
