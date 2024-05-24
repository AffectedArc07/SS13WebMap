using SS13WebMap.Models.Backend;
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

            // AuStation
            { "austation", new Codebase {
                CodebaseId = "austation",
                CodebaseName = "AuStation",
                TextColour = "#ffc107",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/austation.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "austation", MapName = "Austation", Layers = new List<string[]> {
                            new string[] { "Base Map", "Austation", "1" },
                        }
                    },
                }
            } },

            // Baystation 12
            { "bay12", new Codebase {
                CodebaseId = "bay12",
                CodebaseName = "Baystation 12",
                TextColour = "#e65100",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/bay12.svg",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "torch", MapName = "SEV Torch", MapHeight = 200, MapWidth = 200, ParallaxDirection = ParallaxDirection.East, ParallaxSpeedModifier = -20,
                        Layers = new List<string[]> {
                            new string[] { "Bridge Deck", "torch6_bridge", "1" },
                            new string[] { "Deck 1 - Operations", "torch5_deck1", "1" },
                            new string[] { "Deck 2 - Maintenance", "torch4_deck2", "1" },
                            new string[] { "Deck 3 - Habitation", "torch3_deck3", "1" },
                            new string[] { "Deck 4 - Supply", "torch2_deck4", "1" },
                            new string[] { "Deck 5 - Hangar", "torch1_deck5", "1" },
                        }
                    },
                }
            } },

            // Beestation
            { "bee", new Codebase {
                CodebaseId = "bee",
                CodebaseName = "BeeStation",
                TextColour = "#ffc107",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/bee.webp",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "boxstation", MapName = "BoxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "BoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "corgstation", MapName = "CorgStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "CorgStation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2", "1" },
                        }
                    },
                    new GameMap { MapId = "echostation", MapName = "EchoStation", Layers = new List<string[]> {
                            new string[] { "Surface", "EchoStation", "4" },
                            new string[] { "Underground 1", "EchoStation", "3" },
                            new string[] { "Underground 2", "EchoStation", "2" },
                            new string[] { "Underground 3", "EchoStation", "1" },
                        }
                    },
                    new GameMap { MapId = "flandstation", MapName = "FlandStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "FlandStation", "1" },
                        }
                    },
                    new GameMap { MapId = "kilostation", MapName = "KiloStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "KiloStation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "radstation", MapName = "RadStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "RadStation", "1" },
                        }
                    },
                }
            } },
            
            // BlueMoon
            { "bluemoon", new Codebase {
                CodebaseId = "bluemoon",
                CodebaseName = "BlueMoon",
                FancySupport = false,
                IsAdult = true,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "armystation", MapName = "ArmyStation", MapHeight = 180, MapWidth = 255,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "ArmyStation", "1" },
                        }
                    },
                    new GameMap { MapId = "boxstation", MapName = "BoxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "BoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "cogstation", MapName = "CogStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "CogStation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2", "1" },
                        }
                    },
                    new GameMap { MapId = "kilostation", MapName = "KiloStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "KiloStation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "omegastation", MapName = "OmegaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "OmegaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "pubbystation", MapName = "PubbyStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "PubbyStation", "1" },
                        }
                    },
                    new GameMap { MapId = "syndicateboxstation", MapName = "SyndicateStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "SyndicateBoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "taustation", MapName = "TauStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "TauStation", "1" },
                        }
                    },
                }
            } },

            // BurgerStation
            { "burger", new Codebase {
                CodebaseId = "burger",
                CodebaseName = "BurgerStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "burgerstation", MapName = "BurgerStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "burgerstation", "1" },
                        }
                    },
                }
            } },

            // Eris
            { "eris", new Codebase {
                CodebaseId = "eris",
                CodebaseName = "CEV Eris",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "eris", MapName = "CEV Eris", Layers = new List<string[]> {
                            new string[] { "Z1", "_CEV_Eris", "1" },
                            new string[] { "Z2", "_CEV_Eris", "2" },
                            new string[] { "Z3", "_CEV_Eris", "3" },
                            new string[] { "Z4", "_CEV_Eris", "4" },
                            new string[] { "Z5", "_CEV_Eris", "5" },
                        }
                    },
                }
            } },
            
            // Citadel RP
            { "citrp", new Codebase {
                CodebaseId = "citrp",
                CodebaseName = "Citadel Station (RP)",
                TextColour = "#2196f3",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/cit.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "atlas", MapName = "NSB Atlas (Rift)", MapWidth = 192, MapHeight = 192,
                        Layers = new List<string[]> {
                            new string[] { "Surface 3 (Command Deck)", "rift-06-surface3", "1" },
                            new string[] { "Surface 2 (Operations Deck)", "rift-05-surface2", "1" },
                            new string[] { "Surface 1 (Logistics Deck)", "rift-04-surface1", "1" },
                            new string[] { "Underground -1 (Maintenance Deck)", "rift-03-underground1", "1" },
                            new string[] { "Underground -2 (Operations Deck)", "rift-02-underground2", "1" },
                            new string[] { "Underground -3 (Logistics Deck)", "rift-01-underground3", "1" },
                            new string[] { "Western Plains", "rift-10-west_plains", "1" },
                            new string[] { "Western Caves (Shallow)", "rift-09-west_caves", "1" },
                            new string[] { "Western Caves (Deep)", "rift-08-west_deep", "1" },
                            new string[] { "Western Canyons", "rift-07-west_base", "1" },
                        }
                    },
                    new GameMap { MapId = "tether", MapName = "NSB Adephagia (Tether)", MapWidth = 192, MapHeight = 192,
                        Layers = new List<string[]> {
                            new string[] { "Station 2 (Logistics Deck)", "station2", "1" },
                            new string[] { "Station 1 (Engineering Deck)", "station1", "1" },
                            new string[] { "Surface 3 (Service and Command)", "surface3", "1" },
                            new string[] { "Surface 2 (Research and Life Support)", "surface2", "1" },
                            new string[] { "Surface 1 (Lobby and External)", "surface1", "1" },
                        }
                    },
                    new GameMap { MapId = "triumph", MapName = "NSV Triumph", MapWidth = 192, MapHeight = 192,
                        Layers = new List<string[]> {
                            new string[] { "Deck 4 (Command Deck)", "deck4", "1" },
                            new string[] { "Deck 3 (Operations Deck)", "deck3", "1" },
                            new string[] { "Deck 2 (Service Deck)", "deck2", "1" },
                            new string[] { "Deck 1 (Engineering Deck)", "deck1", "1" },

                        }
                    },
                }
            } },

            // Citadel TG
            { "cit", new Codebase {
                CodebaseId = "cit",
                CodebaseName = "Citadel Station (TG)",
                TextColour = "#2196f3",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/cit.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "boxstation", MapName = "BoxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "BoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "cogstation", MapName = "CogStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "CogStation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2", "1" },
                        }
                    },
                    new GameMap { MapId = "lambdastation", MapName = "LambdaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "lambda", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "omegastation", MapName = "OmegaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "OmegaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "pubbystation", MapName = "PubbyStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "PubbyStation", "1" },
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

            // CM-SS13
            { "cm", new Codebase {
                CodebaseId = "cm",
                CodebaseName = "CM-SS13",
                TextColour = "#e91e63",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/cm.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "almayer", MapName = "USS Almayer", MapWidth = 300, MapHeight = 201,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "USS_Almayer", "1" },
                        }
                    },
                    new GameMap { MapId = "fiorina", MapName = "Fiorina Science Annex", MapWidth = 255, MapHeight = 210,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Fiorina_SciAnnex", "1" },
                        }
                    },
                    new GameMap { MapId = "kutjevo", MapName = "Kutjevo Refinery", MapWidth = 240, MapHeight = 165,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Kutjevo", "1" },
                        }
                    },
                    new GameMap { MapId = "lv522", MapName = "LV522", MapWidth = 193, MapHeight = 225,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "LV522_Chances_Claim", "1" },
                        }
                    },
                    new GameMap { MapId = "lv624", MapName = "LV624", MapWidth = 175, MapHeight = 226,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "LV624", "1" },
                        }
                    },
                    new GameMap { MapId = "newvaradero", MapName = "New Varadero", MapWidth = 220, MapHeight = 180,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "New_Varadero", "1" },
                        }
                    },
                    new GameMap { MapId = "shivas", MapName = "Shivas Snowball", MapWidth = 220, MapHeight = 160,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Shivas_Snowball", "1" },
                        }
                    },
                    new GameMap { MapId = "solaris", MapName = "Solaris Ridge", MapWidth = 225, MapHeight = 215,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "BigRed", "1" },
                        }
                    },
                    new GameMap { MapId = "sorokyne", MapName = "Sorokyne Strata", MapWidth = 256, MapHeight = 193,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Sorokyne_Strata", "1" },
                        }
                    },
                    new GameMap { MapId = "trijent", MapName = "Trijent Dam", MapWidth = 245, MapHeight = 232,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Desert_Dam", "1" },
                        }
                    },
                    new GameMap { MapId = "whiskey", MapName = "Whiskey Outpost", MapWidth = 130, MapHeight = 200,
                        Layers = new List<string[]> {
                            new string[] { "Main Level", "Whiskey_Outpost_v2", "1" },
                        }
                    },
                }
            } },

            // Daedalus
            { "daedalus", new Codebase {
                CodebaseId = "daedalus",
                CodebaseName = "Daedalus Dock",
                TextColour = "#008bcc",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/daedalus.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "theseus", MapName = "Theseus", Layers = new List<string[]> {
                            new string[] { "Base Map", "Theseus", "1" },
                        }
                    },
                }
            } },

            // Effigy
            { "effigy", new Codebase {
                CodebaseId = "effigy",
                CodebaseName = "Effigy",
                TextColour = "#69f0ae",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/effigy.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "foxholestation", MapName = "FoxHoleStation", Layers = new List<string[]> {
                            new string[] { "Lower Hole", "foxholestation", "1" },
                            new string[] { "Upper Hole", "foxholestation", "2" },
                        }
                    },
                    new GameMap { MapId = "icebox", MapName = "IceBoxStation", Layers = new List<string[]> {
                            new string[] { "Station", "IceBoxStation", "3" },
                            new string[] { "Lower 1", "IceBoxStation", "2" },
                            new string[] { "Lower 2", "IceBoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "rimpoint", MapName = "RimPoint", Layers = new List<string[]> {
                            new string[] { "Ground Level", "RimPoint", "1" },
                            new string[] { "Upper Level", "RimPoint", "2" },
                        }
                    },
                    new GameMap { MapId = "sigmaoctantis", MapName = "SigmaOctantis", Layers = new List<string[]> {
                            new string[] { "Lower Level", "SigmaOctantis", "1" },
                            new string[] { "Upper Level", "SigmaOctantis", "2" },
                        }
                    },
                    new GameMap { MapId = "tramstation", MapName = "TramStation", Layers = new List<string[]> {
                            new string[] { "Upper Level", "tramstation", "2" },
                            new string[] { "Lower Level", "tramstation", "1" },
                        }
                    },
                }
            } },

            // Foundation 19
            { "foundation19", new Codebase {
                CodebaseId = "foundation19",
                CodebaseName = "Foundation 19",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "site53", MapName = "Site 53", Layers = new List<string[]> {
                            new string[] { "Level 1", "site53-1", "1" },
                            new string[] { "Level 2", "site53-2", "1" },
                            new string[] { "Level 3", "site53-3", "1" },
                            new string[] { "Level 4", "site53-4", "1" },
                        }
                    },
                }
            } },

            // Fulp
            { "fulp", new Codebase {
                CodebaseId = "fulp",
                CodebaseName = "FulpStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "heliostation", MapName = "HelioStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "Heliostation", "1" },
                        }
                    },
                    new GameMap { MapId = "pubbystation", MapName = "PubbyStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "PubbyStation", "1" },
                        }
                    },
                    new GameMap { MapId = "selenestation", MapName = "SeleneStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "SeleneStation", "1" },
                        }
                    },
                }
            } },
            
            // GearStation
            { "gearstation", new Codebase {
                CodebaseId = "gearstation",
                CodebaseName = "GearStation",
                TextColour = "#b2ebf2",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/gearstation.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2", "1" },
                        }
                    },
                    new GameMap { MapId = "icebox", MapName = "IceBoxStation", Layers = new List<string[]> {
                            new string[] { "Station", "IceBoxStation", "3" },
                            new string[] { "Lower 1", "IceBoxStation", "2" },
                            new string[] { "Lower 2", "IceBoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "kilostation", MapName = "KiloStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "KiloStation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
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

            // Lumos
            { "lumos", new Codebase {
                CodebaseId = "lumos",
                CodebaseName = "Lumos",
                FancySupport = false,
                IsAdult = true,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "boxstation", MapName = "BoxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "BoxStation_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "fridgestation", MapName = "FridgeStation", Layers = new List<string[]> {
                            new string[] { "Top", "FridgeStation", "1" },
                            new string[] { "Middle", "IcemoonUnderground_Fridge_Above", "1" },
                            new string[] { "Bottom", "IcemoonUnderground_Fridge_Below", "1" },
                        }
                    },
                    new GameMap { MapId = "lavaland", MapName = "Lavaland", Layers = new List<string[]> {
                            new string[] { "Base Map", "Lavaland_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "omegastation", MapName = "OmegaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "OmegaStation_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "pubbystation", MapName = "PubbyStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "PubbyStation_Lumos", "1" },
                        }
                    },
                    new GameMap { MapId = "snaxi", MapName = "Snaxi", Layers = new List<string[]> {
                            new string[] { "Top", "Snaxi_Lumos", "1" },
                            new string[] { "Middle", "IcemoonUnderground_Above_Lumos", "1" },
                            new string[] { "Bottom", "IcemoonUnderground_Below_Lumos", "1" },
                        }
                    },
                }
            } },

            // NovaSector
            { "nova", new Codebase {
                CodebaseId = "nova",
                CodebaseName = "NovaSector",
                TextColour = "#205bff",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/novasector.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "blueshift", MapName = "Blueshift", Layers = new List<string[]> {
                            new string[] { "Bottom Deck", "Blueshift", "1" },
                            new string[] { "Top Deck", "Blueshift", "2" },
                        }
                    },
                    new GameMap { MapId = "ouroboros", MapName = "Ouroboros", Layers = new List<string[]> {
                            new string[] { "Bottom Deck", "Ouroboros", "1" },
                            new string[] { "Top Deck", "Ouroboros", "2" },
                        }
                    },
                    new GameMap { MapId = "voidraptor", MapName = "VoidRaptor", Layers = new List<string[]> {
                            new string[] { "Base Map", "VoidRaptor", "1" },
                        }
                    },
                }
            } },

            // NSV13
            { "nsv", new Codebase {
                CodebaseId = "nsv",
                CodebaseName = "NSV13",
                TextColour = "#b867c5",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/nsv.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "aetherwhisp", MapName = "Aetherwhisp", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Aetherwhisp2", "1" },
                            new string[] { "Bottom Deck", "Aetherwhisp1", "1" },
                        }
                    },
                    new GameMap { MapId = "atlas", MapName = "Atlas", Layers = new List<string[]> {
                            new string[] { "Top Deck", "atlas2", "1" },
                            new string[] { "Bottom Deck", "atlas", "1" },
                        }
                    },
                    new GameMap { MapId = "eclipse", MapName = "Eclipse", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Eclipse2", "1" },
                            new string[] { "Bottom Deck", "Eclipse1", "1" },
                        }
                    },
                    new GameMap { MapId = "galactica", MapName = "Galactica", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Galactica1", "1" },
                            new string[] { "Bottom Deck", "Galactica2", "1" },
                        }
                    },
                    new GameMap { MapId = "gladius", MapName = "Gladius", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Gladius2", "1" },
                            new string[] { "Bottom Deck", "Gladius1", "1" },
                        }
                    },
                    new GameMap { MapId = "hammerhead", MapName = "Hammerhead", Layers = new List<string[]> {
                            new string[] { "Base Map", "Hammerhead", "1" },
                        }
                    },
                    new GameMap { MapId = "serendipity", MapName = "Serendipity", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Serendipity1", "1" },
                            new string[] { "Bottom Deck", "Serendipity2", "1" },
                        }
                    },
                    new GameMap { MapId = "shrike", MapName = "Shrike", Layers = new List<string[]> {
                            new string[] { "Top Deck", "Shrike1", "1" },
                            new string[] { "Bottom Deck", "Shrike2", "1" },
                        }
                    },
                    new GameMap { MapId = "snake", MapName = "Snake", Layers = new List<string[]> {
                            new string[] { "Top Deck", "snake_upper", "1" },
                            new string[] { "Bottom Deck", "snake_lower", "1" },
                        }
                    },
                    new GameMap { MapId = "tycoon", MapName = "Tycoon", MapWidth = 300, MapHeight = 300,
                        Layers = new List<string[]> {
                            new string[] { "Top Deck", "Tycoon1", "1" },
                            new string[] { "Bottom Deck", "Tycoon2", "1" },
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
                            new string[] { "Base Map", "boxstation", "1" },
                        }
                    },
                    new GameMap { MapId = "cerestation", MapName = "Cerestation (NSS Farragus)", Layers = new List<string[]> {
                            new string[] { "Base Map", "cerestation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation (NSS Kerberos)", Layers = new List<string[]> {
                            new string[] { "Base Map", "deltastation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation (NSS Cerebron)", Layers = new List<string[]> {
                            new string[] { "Base Map", "metastation", "1" },
                        }
                    },
                }
            } },

            // SinguloStation
            { "singulo", new Codebase {
                CodebaseId = "singulo",
                CodebaseName = "SinguloStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "construction", MapName = "ConstructionStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "ConstructionStation", "1" },
                        }
                    },
                    new GameMap { MapId = "cryo", MapName = "CryoStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "CryoStation", "1" },
                        }
                    },
                }
            } },

            // Skyrat
            { "skyrat-tg", new Codebase {
                CodebaseId = "skyrat-tg",
                CodebaseName = "Skyrat",
                TextColour = "#2bbcd2",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/skyrat.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "blueshift", MapName = "BlueShift", Layers = new List<string[]> {
                            new string[] { "Top Deck", "BlueShift_upper", "1" },
                            new string[] { "Middle Deck", "BlueShift_middle", "1" },
                            new string[] { "Bottom Deck", "BlueShift_lower", "1" },
                        }
                    },
                    new GameMap { MapId = "voidraptor", MapName = "VoidRaptor", Layers = new List<string[]> {
                            new string[] { "Base Map", "VoidRaptor", "1" },
                        }
                    },
                }
            } },

            
            // SS1984 Paradise
            { "ss1984", new Codebase {
                CodebaseId = "ss1984",
                CodebaseName = "SS1984 Paradise",
                TextColour = "#9574ca",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/ss1984.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "cyberiad", MapName = "BoxStation (NSS Cyberiad) / Кибериада", Layers = new List<string[]> {
                            new string[] { "Base Map", "cyberiad", "1" },
                        }
                    },
                    new GameMap { MapId = "cerestation", MapName = "CereStation (NSS Farragus) / Фаррагус", Layers = new List<string[]> {
                            new string[] { "Base Map", "cerestation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "Delta Station (NSS Kerberos) / Керберос", Layers = new List<string[]> {
                            new string[] { "Base Map", "delta", "1" },
                        }
                    },
                }
            } },

            { "ss220", new Codebase {
                CodebaseId = "ss220",
                CodebaseName = "SS220",
                FancySupport = false,
                IsAdult = false,
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "boxstation", MapName = "BoxStation (NSS Cyberiad) / Кибериада", Layers = new List<string[]> {
                            new string[] { "Base Map", "boxstation", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "Delta Station (NSS Kerberos) / Керберос", Layers = new List<string[]> {
                            new string[] { "Base Map", "deltastation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation (NSS Cerebron) / Цереброн", Layers = new List<string[]> {
                            new string[] { "Base Map", "metastation", "1" },
                        }
                    },
                }
            } },
            
            // TaleStation
            { "talestation", new Codebase {
                CodebaseId = "talestation",
                CodebaseName = "TaleStation",
                TextColour = "#ef423b",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/talestation.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "kilo", MapName = "KiloStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "KiloStation", "1" },
                        }
                    },
                    new GameMap { MapId = "lima", MapName = "LimaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "LimaStation", "2" },
                            new string[] { "Sub Layer", "LimaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "pubby", MapName = "PubbyStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "PubbyStation", "1" },
                        }
                    },
                }
            } },

            // Tau Ceti Classic
            { "tcc", new Codebase {
                CodebaseId = "tcc",
                CodebaseName = "Tau Ceti Classic",
                TextColour = "#a0a8d8",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tauceti.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "asteroid", MapName = "Asteroid", Layers = new List<string[]> {
                            new string[] { "Base Map", "asteroid", "1" },
                        }
                    },
                    new GameMap { MapId = "box", MapName = "BoxStation (NSS Exodus)", Layers = new List<string[]> {
                            new string[] { "Base Map", "boxstation", "1" },
                        }
                    },
                    new GameMap { MapId = "falcon", MapName = "Falcon", Layers = new List<string[]> {
                            new string[] { "Base Map", "falcon", "1" },
                        }
                    },
                    new GameMap { MapId = "gamma", MapName = "Gamma (NSS Gamma)", Layers = new List<string[]> {
                            new string[] { "Base Map", "gamma", "1" },
                        }
                    },
                    new GameMap { MapId = "prometheus", MapName = "Prometheus", Layers = new List<string[]> {
                            new string[] { "Base Map", "prometheus", "1" },
                        }
                    },
                    new GameMap { MapId = "prometheus_asteroid", MapName = "Prometheus Asteroid", Layers = new List<string[]> {
                            new string[] { "Base Map", "prometheus_asteroid", "1" },
                        }
                    },
                }
            } },
            
            // /tg/station
            { "tgstation", new Codebase {
                CodebaseId = "tgstation",
                CodebaseName = "/tg/Station",
                TextColour = "#5bff8e",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tg.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "birdshot", MapName = "Birdshot", Layers = new List<string[]> {
                            new string[] { "Base Map", "birdshot", "1" },
                        }
                    },
                    new GameMap { MapId = "deltastation", MapName = "DeltaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "DeltaStation2", "1" },
                        }
                    },
                    new GameMap { MapId = "icebox", MapName = "IceBoxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "IceBoxStation", "3" },
                            new string[] { "Lower 1", "IceBoxStation", "2" },
                            new string[] { "Lower 2", "IceBoxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "kilostation", MapName = "KiloStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "KiloStation", "1" },
                        }
                    },
                    new GameMap { MapId = "metastation", MapName = "MetaStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "MetaStation", "1" },
                        }
                    },
                    new GameMap { MapId = "northstar", MapName = "NorthStar", Layers = new List<string[]> {
                            new string[] { "Engi + Cargo", "north_star", "1" },
                            new string[] { "Medsci", "north_star", "2" },
                            new string[] { "Service", "north_star", "3" },
                            new string[] { "Command + Sec", "north_star", "4" },
                        }
                    },
                    new GameMap { MapId = "tramstation", MapName = "TramStation", Layers = new List<string[]> {
                            new string[] { "Upper Level", "tramstation", "2" },
                            new string[] { "Lower Level", "tramstation", "1" },
                        }
                    },
                }
            } },
            
            // TGMC
            { "tgmc", new Codebase {
                CodebaseId = "tgmc",
                CodebaseName = "TerraGov Marine Corps",
                TextColour = "#2ebffc",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tgmc.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "arachne", MapName = "Arachne", MapWidth = 150, MapHeight = 100,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "TGS_Arachne", "1" },
                        }
                    },
                    new GameMap { MapId = "barrenquilla", MapName = "Barrenquilla Mining Facility", Layers = new List<string[]> {
                            new string[] { "Base Map", "Barrenquilla_Mining_Facility", "1" },
                        }
                    },
                    new GameMap { MapId = "bigred", MapName = "BigRed", MapWidth = 225, MapHeight = 215,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "BigRed_v2", "1" },
                        }
                    },
                    new GameMap { MapId = "chigusa", MapName = "Chigusa", MapWidth = 245, MapHeight = 232,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "desertdam", "1" },
                        }
                    },
                    new GameMap { MapId = "desert", MapName = "Desert Outpost", Layers = new List<string[]> {
                            new string[] { "Base Map", "desert", "1" },
                        }
                    },
                    new GameMap { MapId = "gelidaiv", MapName = "Gelida IV", MapWidth = 175, MapHeight = 220,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "gelida_iv", "1" },
                        }
                    },
                    new GameMap { MapId = "icecolony", MapName = "Ice Colony", MapWidth = 202, MapHeight = 210,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "Ice_Colony_v2", "1" },
                        }
                    },
                    new GameMap { MapId = "icycaves", MapName = "Icy Caves", MapWidth = 158, MapHeight = 154,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "icy_caves", "1" },
                        }
                    },
                    new GameMap { MapId = "lv624", MapName = "LV 624", MapWidth = 220, MapHeight = 180,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "LV624", "1" },
                        }
                    },
                    new GameMap { MapId = "lawankaoutpost", MapName = "Lawanka Outpost", MapWidth = 230, MapHeight = 215,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "LawankaOutpost", "1" },
                        }
                    },
                    new GameMap { MapId = "magmoordigsiteiv", MapName = "Magmoor Digsite IV", MapWidth = 200, MapHeight = 231,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "Magmoor_Digsite_IV", "1" },
                        }
                    },
                    new GameMap { MapId = "minerva", MapName = "Minerva", MapWidth = 145, MapHeight = 96,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "TGS_Minerva", "1" },
                        }
                    },
                    new GameMap { MapId = "orion", MapName = "Orion Military Outpost", MapWidth = 170, MapHeight = 130,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "orionoutpost", "1" },
                        }
                    },
                    new GameMap { MapId = "pillarofspring", MapName = "Pillar Of Spring", Layers = new List<string[]> {
                            new string[] { "Base Map", "TGS_Pillar_of_Spring", "1" },
                        }
                    },
                    new GameMap { MapId = "prisonstation", MapName = "Prison Station", Layers = new List<string[]> {
                            new string[] { "Base Map", "Prison_Station_FOP", "1" },
                        }
                    },
                    new GameMap { MapId = "researchoutpost", MapName = "Research Outpost", MapWidth = 165, MapHeight = 130,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "Research_Outpost", "1" },
                        }
                    },
                    new GameMap { MapId = "slumbridge", MapName = "Slumbridge", MapWidth = 200, MapHeight = 179,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "slumbridge", "1" },
                        }
                    },
                    new GameMap { MapId = "sulaco", MapName = "Sulaco", Layers = new List<string[]> {
                            new string[] { "Base Map", "Sulaco", "1" },
                        }
                    },
                    new GameMap { MapId = "theseus", MapName = "TGS Theseus", Layers = new List<string[]> {
                            new string[] { "Base Map", "TGS_Theseus", "1" },
                        }
                    },
                    new GameMap { MapId = "whiskey_outpost", MapName = "Whiskey Outpost", MapWidth = 121, MapHeight = 135,
                        Layers = new List<string[]> {
                            new string[] { "Base Map", "Whiskey_Outpost_v2", "1" },
                        }
                    },
                }
            } },
            
            // YogStation
            { "yog", new Codebase {
                CodebaseId = "yog",
                CodebaseName = "YogStation",
                TextColour = "#eb78a0",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/yog.png",
                GameMaps = new List<GameMap>() {
                    new GameMap { MapId = "asteroid", MapName = "AsteroidStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "AsteroidStation", "1" },
                        }
                    },
                    new GameMap { MapId = "gaxstation", MapName = "GaxStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "GaxStation", "1" },
                        }
                    },
                    new GameMap { MapId = "yogstation", MapName = "YogStation", Layers = new List<string[]> {
                            new string[] { "Base Map", "YogStation", "1" },
                        }
                    },
                    new GameMap { MapId = "yogsmeta", MapName = "YogsMeta", Layers = new List<string[]> {
                            new string[] { "Base Map", "Yogsmeta", "1" },
                        }
                    },
                }
            } },
        };

        /// <summary>
        /// Sum of all codebases. This is done here as a static to not cause runtime load.
        /// </summary>
        public static int TotalCodebases = Codebases.Count;

        /// <summary>
        /// Sum of all maps. This is done here as a static to not cause runtime load.
        /// </summary>
        public static int TotalMaps = Codebases.Sum(x => x.Value.GameMaps.Count);

        /// <summary>
        /// Sum of total normal layers. This is done here as a static to not cause runtime load.
        /// </summary>
        public static int TotalNormalLayers = Codebases.Sum(x => x.Value.GameMaps.Sum(x => x.Layers.Count));

        /// <summary>
        /// Sum of total pipe layers, which is the above but counting fancy codebases. This is done here as a static to not cause runtime load.
        /// </summary>
        private static int TotalPipeLayers = Codebases.Where(x => x.Value.FancySupport).Sum(x => x.Value.GameMaps.Sum(x => x.Layers.Count));

        /// <summary>
        /// Sum of total layers. This is done here as a static to not cause runtime load.
        /// </summary>
        public static int TotalLayers = TotalNormalLayers + TotalPipeLayers;
    }
}
