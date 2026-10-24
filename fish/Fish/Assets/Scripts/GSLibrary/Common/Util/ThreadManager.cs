using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Threading;

public class ThreadManager
{
	private bool running = false;
	private bool inHasQueuedItems = false;
	private Queue<Hashtable> inThreadQueue = new Queue<Hashtable>();
	private object inQueueLocker = new object();
	private bool outHasQueuedItems = false;
	private Queue<Hashtable> outThreadQueue = new Queue<Hashtable>();
	private object outQueueLocker = new object();
	private Thread inThread;
	private Thread outThread;

	private static void Sleep(int ms)
	{
		Thread.Sleep(ms);
	}

	private void InThread()
	{
		while (this.running)
		{
			ThreadManager.Sleep(5);
			if (this.inHasQueuedItems)
			{
				lock (this.inQueueLocker)
				{
					while (this.inThreadQueue.Count > 0)
						this.ProcessItem(this.inThreadQueue.Dequeue());
					this.inHasQueuedItems = false;
				}
			}
		}
	}

	private void OutThread()
	{
		while (this.running)
		{
			ThreadManager.Sleep(5);
			if (this.outHasQueuedItems)
			{
				lock (this.outQueueLocker)
				{
					while (this.outThreadQueue.Count > 0)
						this.ProcessOutItem(this.outThreadQueue.Dequeue());
					this.outHasQueuedItems = false;
				}
			}
		}
	}

	private void ProcessOutItem(Hashtable item)
	{
		OnSocketDataDelegate onDataDelegate = item[(object)"callback"] as OnSocketDataDelegate;
		if (onDataDelegate == null)
			return;
		string data = item[(object)"data"] as string;
		onDataDelegate(data);
	}

	private void ProcessItem(Hashtable item)
	{
		object obj = item[(object)"callback"];
		OnSocketDataDelegate onDataDelegate = obj as OnSocketDataDelegate;
		if (onDataDelegate != null)
		{
			string msg = (string)item[(object)"data"];
			onDataDelegate(msg);
		}
		else
		{
			ParameterizedThreadStart parameterizedThreadStart = obj as ParameterizedThreadStart;
			if (parameterizedThreadStart == null)
				return;
			parameterizedThreadStart((object)item);
		}
	}

	public void Start()
	{
		if (this.running)
			return;
		this.running = true;
		if (this.inThread == null)
		{
			this.inThread = new Thread(new ThreadStart(this.InThread));
			this.inThread.IsBackground = true;
			this.inThread.Start();
		}
		if (this.outThread != null)
			return;
		this.outThread = new Thread(new ThreadStart(this.OutThread));
		this.outThread.IsBackground = true;
		this.outThread.Start();
	}

	public void Stop()
	{
		new Thread(new ThreadStart(this.StopThread)).Start();
	}

	private void StopThread()
	{
		this.running = false;
		if (this.inThread != null)
			this.inThread.Join();
		if (this.outThread != null)
			this.outThread.Join();
		this.inThread = (Thread)null;
		this.outThread = (Thread)null;
	}

	public void EnqueueDataCall(OnSocketDataDelegate callback, string data)
	{
		Hashtable hashtable = new Hashtable();
		hashtable[(object)"callback"] = (object)callback;
		hashtable[(object)"data"] = (object)data;
		lock (this.inQueueLocker)
		{
			this.inThreadQueue.Enqueue(hashtable);
			this.inHasQueuedItems = true;
		}
	}

	public void EnqueueSend(OnSocketDataDelegate callback, string data)
	{
		Hashtable hashtable = new Hashtable();
		hashtable[(object)"callback"] = (object)callback;
		hashtable[(object)"data"] = (object)data;

		lock (this.outQueueLocker)
		{
			this.outThreadQueue.Enqueue(hashtable);
			this.outHasQueuedItems = true;
		}
	}
}