using System;
using System.Collections;
using example.invalid;
using example.invalid.Sockets;
using System.Text;
using System.Threading;
using GSLibrary.Common.Security;
using UnityEngine;

public class TCPSocketLayer:BaseSocketLayer {

	private static readonly int READ_BUFFER_SIZE = 4096;
	private byte[] byteBuffer = new byte[TCPSocketLayer.READ_BUFFER_SIZE];
	private TcpClient connection;
	private NetworkStream networkStream;
	private StreamWriter streamWriter;
	private Thread thrSocketReader;
	private Thread thrConnect;
	private SocketClient socketClient;

	private string host;
	private int socketNumber;
	private string remainderMessage = "";


	public OnSocketEventDelegate onEvent;

	public TCPSocketLayer(SocketClient socketClient)
	{
		this.socketClient = socketClient;
		InitStates();
	}

	public void Connect(string host, int port)
	{
		this.fsm.ApplyTransition((object)BaseSocketLayer.Transitions.StartConnect);
		this.host = host;
		this.socketNumber = port;
		this.thrConnect = new Thread(new ThreadStart(this.ConnectThread));
		this.thrConnect.Start();
	}

	private void ConnectThread()
	{
		try
		{
			this.connection = new TcpClient();
			this.connection.Client.Connect(this.host, this.socketNumber);
			Debug.Log("TCP Socket Connect Success");

			ConnectSuccess();

			this.networkStream = this.connection.GetStream();
			this.streamWriter = new StreamWriter(this.networkStream);

			this.thrSocketReader = new Thread(new ThreadStart(this.Read));
			this.thrSocketReader.Start();
		}
		catch (SocketException ex)
		{
			Debug.Log ("TCP - Socket Exe Line 61 " + ex.ErrorCode + " - " + ex.Message + " - " + ex.StackTrace);
			ErrorHandler("Connection Error - " + ex.Message + " " + ex.StackTrace, ex.SocketErrorCode);
		}
		catch (Exception ex)
		{
			Debug.Log ("TCP - Exe  line 66" + ex.Message + " - " + ex.StackTrace);
			ErrorHandler("General Error - " + ex.Message + " " + ex.StackTrace);
		}
	}

	void Read()
	{
		try
		{
			while (this.State == States.Connected)
			{
				Sleep();

				int size = this.networkStream.Read(this.byteBuffer, 0, TCPSocketLayer.READ_BUFFER_SIZE);
				if (size < 1)
				{
					break;
				}
				this.HandleBinaryData(this.byteBuffer, size);
			}
		}
		catch (Exception ex)
		{
			Debug.Log ("TCP - Socket Exe 89 : " + this.State + " - " + ex.Message + " - " + ex.StackTrace);
			if(this.State == States.Connected)
				ErrorHandler("General error reading data from socket: " + ex.Message + " " + ex.StackTrace);
			
		}
	}

	private void HandleBinaryData(byte[] buf, int size)
	{
		byte[] data = new byte[size];
		Buffer.BlockCopy((Array)buf, 0, (Array)data, 0, size);
		string strMessage = Encoding.ASCII.GetString(data, 0, size);

		socketClient.threadManager.EnqueueDataCall(new OnSocketDataDelegate(DeserializeMsg), strMessage);
	}

	void DeserializeMsg(string data)
	{
		ValidateMessage(data);
	}

	void ConnectSuccess()
	{
		fsm.ApplyTransition((object)Transitions.ConnectionSuccess);

		Hashtable hash = new Hashtable();
		hash[(object)"message"] = (object)"success";

		ProcessEvent(SocketEvent.ON_CONNECT, hash);
	}

	void ProcessResponse(string msg)
	{
		Hashtable hash = new Hashtable();
		hash[(object)"message"] = (object) msg;

		ProcessEvent(SocketEvent.ON_MESSAGE, hash);
	}

	void ErrorHandler(string errorMsg, SocketError se = SocketError.NotSocket, bool disconnectedError = true)
	{
		if(this.State == States.Connecting)
			fsm.ApplyTransition((object)BaseSocketLayer.Transitions.ConnectionFailure);

		Hashtable hash = new Hashtable();
		hash[(object)"errorMessage"] = (object)errorMsg;
		hash[(object)"socketError"] = (object)se;

		ProcessEvent(SocketEvent.ON_ERROR, hash);

		if (disconnectedError)
			DisconnectionHandler("");
	}

	void DisconnectionHandler(string reason)
	{
		fsm.ApplyTransition((object)BaseSocketLayer.Transitions.Disconnect);

		Hashtable hash = new Hashtable();
		hash[(object)"message"] = (object)reason;

		ProcessEvent(SocketEvent.ON_DISCONNECT, hash);
	}

	void ProcessEvent(SocketEvent eventType, Hashtable data)
	{
		if (onEvent != null)
			onEvent(new SocketBaseEvent(eventType, data));
	}

	private void ValidateMessage(string strMessage)
	{
		try
		{
			int tail = strMessage.IndexOf("\0", StringComparison.Ordinal);
			if (tail >= 0)
			{

				string completeMessage = remainderMessage + strMessage.Substring(0, tail);
				remainderMessage = "";
				ProcessResponse(completeMessage);

				if (strMessage.Length > tail + 1)
				{
					string r = strMessage.Substring(tail + 1, strMessage.Length - (tail + 1));
					ValidateMessage(r);
				}
			}
			else
			{
				remainderMessage = remainderMessage + strMessage;
			}

		}

		catch (Exception ex)
		{
			Debug.Log ("TCP - Socket Exe 186 " + ex.Message + " - " + ex.StackTrace);
			ErrorHandler("General Error - " + ex.Message + " " + ex.StackTrace, disconnectedError:false);
		}
	}

	public void SendData(string data)
	{
		if (this.State == States.Connected)
		{
			try
			{
				streamWriter.Write(data + '\0');
				streamWriter.Flush();
			}
			catch (Exception ex)
			{
				Debug.Log ("TCP - Socket Exe 203 : " + this.State + " - " + ex.Message + " - " + ex.StackTrace);

				if (this.State == States.Connected)
					ErrorHandler("General error writing to socket: " + ex.Message + " " + ex.StackTrace);
			}	
		}
	}

	public void DisconnectFromServer()
	{
		Debug.Log ("************** TCP Disconnect Called *************");

		if (this.State == States.Connected)
		{
			DisconnectionHandler("");
			connection.Close();
		}
		
	}

	private static void Sleep()
	{
		Thread.Sleep(10);
	}
}



