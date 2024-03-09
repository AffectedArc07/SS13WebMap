using Microsoft.AspNetCore.Mvc;
using SS13WebMap.Models;
using SS13WebMap.Models.Backend;
using SS13WebMap.Models.Codebase;
using SS13WebMap.Models.Pages;

namespace SS13WebMap.Controllers {
    [Route("maps")]
    public class MapController : Controller {
        [HttpGet("{codebaseid}/{mapid}/")]
        public IActionResult Index(string codebaseid, string mapid, [FromQuery (Name = "d")] string getdata) {
            if (string.IsNullOrWhiteSpace(codebaseid) || string.IsNullOrWhiteSpace(mapid)) {
                return NotFound();
            }

            if (!CodebaseData.Codebases.ContainsKey(codebaseid)) {
                return NotFound($"Codebase '{codebaseid}' not found");
            }

            // Lets get our stuff
            Codebase the_codebase = CodebaseData.Codebases[codebaseid];

            IEnumerable<GameMap> linq_sequence = the_codebase.GameMaps.Where(x => x.MapId == mapid);

            if (linq_sequence.Count() < 1) {
                return NotFound($"Map '{mapid}' not found in codebase '{codebaseid}'");
            }

            // Get the map now
            GameMap map_data = linq_sequence.First();


            if (!string.IsNullOrWhiteSpace(getdata) && getdata == "y") {
                MapApiData api_model = new() {
                    FancyCoords = the_codebase.FancySupport,
                    Bounds = new int[] { (0 - map_data.MapHeight), map_data.MapWidth }
                };

                // Setup our map layers
                foreach(string[] map_layer in map_data.Layers) {
                    api_model.MapLayers.Add(new MapApiData.LeafletLayer() {
                        LayerName = map_layer[0],
                        LayerImagePath = $"https://mocha.affectedarc07.co.uk/webmap/{the_codebase.CodebaseId}/{mapid}/{map_data.GetLayerPath(map_layer, false)}"
                    });
                }

                // Setup our pipe layers
                if (the_codebase.FancySupport) {
                    foreach (string[] map_layer in map_data.Layers) {
                        api_model.PipeLayers.Add(new MapApiData.LeafletLayer() {
                            LayerName = map_layer[0],
                            LayerImagePath = $"https://mocha.affectedarc07.co.uk/webmap/{the_codebase.CodebaseId}/{mapid}/{map_data.GetLayerPath(map_layer, true)}"
                        });
                    }
                }
                

                // Return just the API data
                return Ok(api_model);
            }

            // If we are here we want the page
            MapPage out_model = new() {
                CodebaseId = the_codebase.CodebaseId,
                CodebaseName = the_codebase.CodebaseName,
                MapId = map_data.MapId,
                MapName = map_data.MapName,
                ParallaxDirection = map_data.ParallaxDirection,
                ParallaxSpeedModifier = map_data.ParallaxSpeedModifier,
                ParallaxType = (the_codebase.FancySupport ? ParallaxType.Fancy : ParallaxType.Standard)
            };

            return View("Index", out_model);
        }
    }
}
