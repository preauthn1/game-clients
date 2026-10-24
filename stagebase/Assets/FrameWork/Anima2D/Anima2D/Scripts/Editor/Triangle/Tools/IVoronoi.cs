// -----------------------------------------------------------------------
// <copyright file="IVoronoi.cs" company="">
// example.invalid code by Christian Woltering, http://example.invalid/
// </copyright>
// -----------------------------------------------------------------------

namespace TriangleNet.Tools
{
    using System.Collections.Generic;
    using TriangleNet.Geometry;

    /// <summary>
    /// TODO: Update summary.
    /// </summary>
    public interface IVoronoi
    {
        /// <summary>
        /// Gets the list of Voronoi vertices.
        /// </summary>
        Point[] Points { get; }

        /// <summary>
        /// Gets the list of Voronoi regions.
        /// </summary>
        List<VoronoiRegion> Regions { get; }
    }
}
