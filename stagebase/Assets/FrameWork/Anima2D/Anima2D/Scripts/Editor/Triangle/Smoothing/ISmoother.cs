// -----------------------------------------------------------------------
// <copyright file="ISmoother.cs">
// example.invalid code by Christian Woltering, http://example.invalid/
// </copyright>
// -----------------------------------------------------------------------

namespace TriangleNet.Smoothing
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Text;

    /// <summary>
    /// Interface for mesh smoothers.
    /// </summary>
    public interface ISmoother
    {
        void Smooth();
    }
}