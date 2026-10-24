using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace OneSDK.Slot{
    /// <summary>
    /// Some Public Function that a SlotGame is expected to have.
    /// </summary>
    public interface ISlotGame {

        void DoSpin();
        void DoStop();
        void DoAutoSpin(int count);
        void DoStopAutoSpin();
        void DoFreeSpin();
        void DoPreFreeSpin();
        void RequestFocus(SlotGameBehaviour slotGameBehaviour);
    }
}
