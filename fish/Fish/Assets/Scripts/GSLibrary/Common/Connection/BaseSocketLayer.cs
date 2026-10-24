using Common.Fsm;

public class BaseSocketLayer {

	protected FiniteStateMachine fsm;

	protected BaseSocketLayer.States State
	{
		get
		{
			return (BaseSocketLayer.States)this.fsm.GetCurrentState();
		}
	}

	protected void InitStates()
	{
		this.fsm = new FiniteStateMachine();
		this.fsm.AddAllStates(typeof(BaseSocketLayer.States));
		this.fsm.AddStateTransition((object)BaseSocketLayer.States.Disconnected, (object)BaseSocketLayer.States.Connecting, (object)BaseSocketLayer.Transitions.StartConnect);
		this.fsm.AddStateTransition((object)BaseSocketLayer.States.Connecting, (object)BaseSocketLayer.States.Connected, (object)BaseSocketLayer.Transitions.ConnectionSuccess);
		this.fsm.AddStateTransition((object)BaseSocketLayer.States.Connecting, (object)BaseSocketLayer.States.Disconnected, (object)BaseSocketLayer.Transitions.ConnectionFailure);
		this.fsm.AddStateTransition((object)BaseSocketLayer.States.Connected, (object)BaseSocketLayer.States.Disconnected, (object)BaseSocketLayer.Transitions.Disconnect);
		this.fsm.SetCurrentState((object)BaseSocketLayer.States.Disconnected);
	}

	protected enum States
	{
		Disconnected,
		Connecting,
		Connected,
	}

	protected enum Transitions
	{
		StartConnect,
		ConnectionSuccess,
		ConnectionFailure,
		Disconnect,
	}
}
