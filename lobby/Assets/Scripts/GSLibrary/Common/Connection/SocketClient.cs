using System.Collections.Generic;
using System.Timers;

public class SocketClient
{
	Queue<SocketBaseEvent> msgQueue = new Queue<SocketBaseEvent>();
	private TCPSocketLayer tcpSocket;
	private ThreadManager _threadManager = new ThreadManager();
	private Timer disconnectTimer = (Timer)null;

	private Dictionary<SocketEvent, OnSocketEventDelegate> eventDict;

	public ThreadManager threadManager
	{
		get
		{
			return _threadManager;
		}
	}

	public SocketClient()
	{
		tcpSocket = new TCPSocketLayer(this);
		tcpSocket.onEvent += OnEventAdd;
		eventDict = new Dictionary<SocketEvent, OnSocketEventDelegate>();
	}

	public void ProcessEvent()
	{
		while (msgQueue.Count > 0)
		{
			SocketBaseEvent tempEvt = msgQueue.Dequeue();

			if (eventDict.ContainsKey(tempEvt.eventType))
				eventDict[tempEvt.eventType](tempEvt);
		}
	}

	public void AddEventDelegate(SocketEvent eventType, OnSocketEventDelegate callBack)
	{
		eventDict.Add(eventType, callBack);
	}

	public void ConnectSocket(string ip, int port)
	{
		threadManager.Start();
		tcpSocket.Connect(ip, port);
	}

	public void Send(string data)
	{
		threadManager.EnqueueSend(new OnSocketDataDelegate(SendData), data);
	}

	public void SendData(string data)
	{
		tcpSocket.SendData(data);
	}

	private void OnEventAdd(SocketBaseEvent evt)
	{
		msgQueue.Enqueue(evt);
	}

	public void CleanUp()
	{
		DisconnectConnection(200);
	}

	private void DisconnectConnection(int interval)
	{
		if (this.disconnectTimer == null)
			this.disconnectTimer = new Timer((double)interval);
		this.disconnectTimer.AutoReset = false;
		this.disconnectTimer.Elapsed += new ElapsedEventHandler(this.OnDisconnectConnectionEvent);
		this.disconnectTimer.Enabled = true;
	}

	private void OnDisconnectConnectionEvent(object source, ElapsedEventArgs e)
	{
		if (this.disconnectTimer != null)
			this.disconnectTimer.Enabled = false;
		tcpSocket.DisconnectFromServer();
		threadManager.Stop();
		//msgQueue.Clear();
	}


}