using System.Collections.Generic;

namespace Common.Fsm
{
	public class FSMState
	{
		private Dictionary<int, int> transitions = new Dictionary<int, int>();
		private int stateName;

		public void SetStateName(int newStateName)
		{
			this.stateName = newStateName;
		}

		public int GetStateName()
		{
			return this.stateName;
		}

		public void AddTransition(int transition, int outputState)
		{
			this.transitions[transition] = outputState;
		}

		public int ApplyTransition(int transition)
		{
			int num = this.stateName;
			if (this.transitions.ContainsKey(transition))
				num = this.transitions[transition];
			return num;
		}
	}
}