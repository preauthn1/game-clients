
using System.Collections;

public class SocketBaseEvent
{

	public SocketEvent eventType { private set; get;}
	private Hashtable data;

	public SocketBaseEvent(SocketEvent eventType, Hashtable data)
	{
		this.eventType = eventType;
		this.data = data;
	}

	public IDictionary Params
	{
		get
		{
			return (IDictionary)this.data;
		}
		set
		{
			this.data = value as Hashtable;
		}
	}
}

public enum SocketEvent
{
	ON_CONNECT, ON_MESSAGE, ON_ERROR, ON_DISCONNECT
}

public delegate void OnSocketEventDelegate(SocketBaseEvent evt);
public delegate void OnSocketDataDelegate(string msg);