using SS13WebMap.Models.Backend;

namespace SS13WebMap.Models.Codebase {
    public class GameMap {
        /// <summary>
        /// ID of the map, stored in the lookup dictionary on a <see cref="Codebase"/>.
        /// </summary>
        public string MapId { get; set; }

        /// <summary>
        /// The name of the map.
        /// </summary>
        public string MapName { get; set; }

        /// <summary>
        /// The direction of the parallax effect.
        /// </summary>
        public ParallaxDirection ParallaxDirection { get; set; } = ParallaxDirection.East;

        /// <summary>
        /// The speed modifier of the parallax effect.
        /// </summary>
        public int ParallaxSpeedModifier { get; set; } = 0;

        /// <summary>
        /// The width of the map.
        /// </summary>
        public int MapWidth { get; set; } = 255;

        /// <summary>
        /// The width of the map.
        /// </summary>
        public int MapHeight { get; set; } = 255;

        /// <summary>
        /// Layers of the map. Each piece of the list is a 3-cell array, first key being the name of the layer, second being the image path, third being the Z suffix on the end.
        /// </summary>
        public List<string[]> Layers { get; set; } = new List<string[]>();

        /// <summary>
        /// Gets the image path of a layer
        /// </summary>
        /// <param name="mapdata">The <see cref="string"/> array that has the map array data</param>
        /// <param name="pipe">A <see cref="bool"/> dictating if we want a pipenet image or not</param>
        /// <returns>A parsed layer name such as cyberiad-1-pipe.png</returns>
        public string GetLayerPath(string[] mapdata, bool pipe) {
            return $"{mapdata[1]}-{mapdata[2]}{(pipe ? "-pipe" : "")}.png";
        }
    }
}
