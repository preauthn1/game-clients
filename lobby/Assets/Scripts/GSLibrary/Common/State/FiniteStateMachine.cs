using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Common.Fsm
{
	public class FiniteStateMachine
	{
		private List<FSMState> states = new List<FSMState>();
		private object locker = new object();
		private volatile int currentStateName;
		public OnStateChangeDelegate onStateChange;

		public void AddState(object st)
		{
			int newStateName = (int)st;
			FSMState fsmState = new FSMState();
			fsmState.SetStateName(newStateName);
			this.states.Add(fsmState);
		}

		public void AddAllStates(Type statesEnumType)
		{
			IEnumerator enumerator = Enum.GetValues(statesEnumType).GetEnumerator();
			try
			{
				while (enumerator.MoveNext())
					this.AddState(enumerator.Current);
			}
			finally
			{
				IDisposable disposable;
				if ((disposable = enumerator as IDisposable) != null)
					disposable.Dispose();
			}
		}

		public void AddStateTransition(object from, object to, object tr)
		{
			int num = (int)from;
			int outputState = (int)to;
			int transition = (int)tr;
			this.FindStateObjByName((object)num).AddTransition(transition, outputState);
		}

		public int ApplyTransition(object tr)
		{
			lock (this.locker)
			{
				int local_1 = (int)tr;
				int local_2 = this.currentStateName;
				this.currentStateName = this.FindStateObjByName((object)this.currentStateName).ApplyTransition(local_1);
				if (local_2 != this.currentStateName && this.onStateChange != null)
					this.onStateChange(local_2, this.currentStateName, local_1);
				
				return this.currentStateName;
			}
		}

		public int GetCurrentState()
		{
			lock (this.locker)
				return this.currentStateName;
		}

		public void SetCurrentState(object state)
		{
			int toStateName = (int)state;
			if (this.onStateChange != null)
				this.onStateChange(this.currentStateName, toStateName, -1);
			this.currentStateName = toStateName;
		}

		private FSMState FindStateObjByName(object st)
		{
			int num = (int)st;
			foreach (FSMState fsmState in this.states)
			{
				if (num.Equals(fsmState.GetStateName()))
					return fsmState;
			}
			return (FSMState)null;
		}

		public delegate void OnStateChangeDelegate(int fromStateName, int toStateName, int transition);
	}
}

