using System.Text.Json.Serialization;

namespace SS13WebMap.Models {
    public class MapApiData {
        /// <summary>
        /// The bounds of the map
        /// </summary>
        [JsonPropertyName("bounds")]
        public int[] Bounds { get; set; }

        /// <summary>
        /// Do we want to attach the coords listener
        /// </summary>
        [JsonPropertyName("fancy")]
        public bool FancyCoords { get; set; }

        /// <summary>
        /// Layers for the main map layers
        /// </summary>
        [JsonPropertyName("maplayers")]
        public List<LeafletLayer> MapLayers { get; set; } = new List<LeafletLayer>();

        /// <summary>
        /// Layers for the pipe map layers
        /// </summary>
        [JsonPropertyName("pipelayers")]
        public List<LeafletLayer> PipeLayers { get; set; } = new List<LeafletLayer>();


        public class LeafletLayer {
            /// <summary>
            /// The name of this layer on the leaflet popup
            /// </summary>
            [JsonPropertyName("name")]
            public string LayerName { get; set; }

            /// <summary>
            /// The path of this image on the layers
            /// </summary>
            [JsonPropertyName("path")]
            public string LayerImagePath { get; set; }
        }
    }
}
