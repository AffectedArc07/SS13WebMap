using SS13WebMap.Models.Codebase;

namespace SS13WebMap {
    public class CodebaseData {
        /// <summary>
        /// The main data holder for all codebases.
        /// </summary>
        public static Dictionary<string, Codebase> Codebases = new Dictionary<string, Codebase>() {
            // AquilaStation
            { "aquila", new Codebase {
                CodebaseId = "aquila",
                CodebaseName = "AquilaStation",
                TextColour = "#f44336",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/aquila.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "atlantis", MapName = "Atlantis", Layers = new List<string[]> {
                            new string[] { "Upper Deck", "Atlantis2", "1" },
                            new string[] { "Lower Deck", "Atlantis", "1" },
                        }
                    },
                    new GameMap { MapId = "atlas", MapName = "Atlas", Layers = new List<string[]> {
                            new string[] { "Upper Deck", "atlas2", "1" },
                            new string[] { "Lower Deck", "atlas", "1" },
                        }
                    },
                    new GameMap { MapId = "serendipity", MapName = "Serendipity", Layers = new List<string[]> {
                            new string[] { "Upper Deck", "Serendipity1", "1" },
                            new string[] { "Lower Deck", "Serendipity2", "1" },
                        }
                    },
                    new GameMap { MapId = "snake", MapName = "Snake", Layers = new List<string[]> {
                            new string[] { "Upper Deck", "snake_upper", "1" },
                            new string[] { "Lower Deck", "snake_lower", "1" },
                        }
                    },
                }
            } },

            // Chaotic Onyx
            { "onyx", new Codebase {
                CodebaseId = "onyx",
                CodebaseName = "ChaoticOnyx",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "exodus", MapName = "Exodus", Layers = new List<string[]> {
                            new string[] { "Main Level", "exodus-2", "1" },
                            new string[] { "Ghetto Level", "exodus-1", "1" },
                            new string[] { "Station Satellite", "exodus-4", "1" },
                            new string[] { "Mining Outpost", "exodus-6", "1" },
                        }
                    },
                    new GameMap { MapId = "frontier", MapName = "Frontier", Layers = new List<string[]> {
                            new string[] { "Main Level", "frontier-1", "1" },
                            new string[] { "Other Level", "frontier-3", "1" },
                        }
                    },
                    new GameMap { MapId = "genesis", MapName = "Genesis", Layers = new List<string[]> {
                            new string[] { "Main Level", "genesis-2", "1" },
                            new string[] { "Ghetto Level", "genesis-1", "1" },
                            new string[] { "CC Level", "genesis-3", "1" },
                            new string[] { "Mining Outpost", "genesis-6", "1" },
                        }
                    },
                }
            } },

            // GoonStation
            { "goon", new Codebase {
                CodebaseId = "goon",
                CodebaseName = "GoonStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "atlas", MapName = "Atlas", Layers = new List<string[]> {
                            new string[] { "Base Map", "atlas", "1" },
                        }
                    },
                    new GameMap { MapId = "clarion", MapName = "Clarion", Layers = new List<string[]> {
                            new string[] { "Base Map", "clarion", "1" },
                        }
                    },
                    new GameMap { MapId = "cogmap", MapName = "Cogmap", Layers = new List<string[]> {
                            new string[] { "Base Map", "cogmap", "1" },
                        }
                    },
                    new GameMap { MapId = "cogmap2", MapName = "Cogmap2", Layers = new List<string[]> {
                            new string[] { "Base Map", "cogmap2", "1" },
                        }
                    },
                    new GameMap { MapId = "destiny", MapName = "Destiny", Layers = new List<string[]> {
                            new string[] { "Base Map", "destiny", "1" },
                        }
                    },
                    new GameMap { MapId = "donut", MapName = "Donut", Layers = new List<string[]> {
                            new string[] { "Base Map", "donut3", "1" },
                        }
                    },
                    new GameMap { MapId = "horizon", MapName = "Horizon", Layers = new List<string[]> {
                            new string[] { "Base Map", "horizon", "1" },
                        }
                    },
                    new GameMap { MapId = "manta", MapName = "Manta", Layers = new List<string[]> {
                            new string[] { "Base Map", "manta", "1" },
                        }
                    },
                    new GameMap { MapId = "oshan", MapName = "Oshan", Layers = new List<string[]> {
                            new string[] { "Base Map", "oshan", "1" },
                        }
                    },
                }
            } },

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
                            new string[] { "Base Map", "cyberiad", "1" },
                        }
                    },
                    new GameMap { MapId = "cerestation", MapName = "Cerestation (NSS Farragus)", Layers = new List<string[]> {
                            new string[] { "Base Map", "cerestation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation (NSS Kerberos)", Layers = new List<string[]> {
                            new string[] { "Base Map", "delta", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation (NSS Cerebron)", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                }
            } },
        };
    }
}
