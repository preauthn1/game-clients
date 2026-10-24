using System.Timers;
using System.Collections.Generic;
using System;
using UnityEngine;
using Global.Model;

public class LagMonitor {

	private DateTime lastReqTime;
	private List<int> valueQueue;
	private int interval;
	private int queueSize;
	private Timer pollTimer;

	public PingDataDelegate pingDelegate;

	public bool IsRunning
	{
		get
		{
			return this.pollTimer.Enabled;
		}
	}

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

	public LagMonitor(PingDataDelegate pingDelegate, int interval, int queueSize)
	{
		this.pingDelegate += pingDelegate;

		if (interval < 1)
			interval = 1;
		this.valueQueue = new List<int>();
		this.interval = interval;
		this.queueSize = queueSize;
		this.pollTimer = new Timer();
		this.pollTimer.Enabled = false;
		this.pollTimer.AutoReset = true;
		this.pollTimer.Elapsed += new ElapsedEventHandler(this.OnPollEvent);
		this.pollTimer.Interval = (double)(interval * 1000);
	}

	public void Start()
	{
		if (this.IsRunning)
			return;
		this.pollTimer.Start();
	}

	public void Stop()
	{
		if (!this.IsRunning)
			return;
		
		valueQueue.Clear();
		this.pollTimer.Stop();
	}

	public void Destroy()
	{
		this.Stop();
		this.pollTimer.Dispose();
	}

	public void Execute()
	{
		throw new NotImplementedException();
	}

	public int OnPingPong()
	{
		int num = Convert.ToInt32((DateTime.Now - this.lastReqTime).TotalMilliseconds);
		if (this.valueQueue.Count >= this.queueSize)
			this.valueQueue.RemoveAt(0);
		this.valueQueue.Add(num);
		return this.AveragePingTime;
	}

	private void OnPollEvent(object source, ElapsedEventArgs e)
	{
		this.lastReqTime = DateTime.Now;

		if (pingDelegate != null)
			pingDelegate();
	}

	public delegate void PingDataDelegate();
}
