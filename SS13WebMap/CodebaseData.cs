using SS13WebMap.Models.Codebase;

namespace SS13WebMap {
    public class CodebaseData {
        /// <summary>
        /// The main data holder for all codebases.
        /// </summary>
        public static Dictionary<string, Codebase> Codebases = new Dictionary<string, Codebase>() {
            // Paradise
            { "paradise", new Codebase {
                CodebaseId = "paradise",
                CodebaseName = "Paradise Station",
                TextColour = "#ff9800",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/paradisess13.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "cyberiad", MapName = "BoxStation (NSS Cyberiad)", Layers = new List<string[]> {
                            new string[] { "Base Map", "cyberiad", "1" }
                        }
                    },
                    new GameMap { MapId = "cerestation", MapName = "Cerestation (NSS Farragus)", Layers = new List<string[]> {
                            new string[] { "Base Map", "cerestation", "1" }
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation (NSS Kerberos)", Layers = new List<string[]> {
                            new string[] { "Base Map", "delta", "1" }
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation (NSS Cerebron)", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" }
                        }
                    }
                }
            } }

            // Next codebase
        };
    }
}
