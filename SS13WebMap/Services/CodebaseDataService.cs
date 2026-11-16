using SS13WebMap.Models.Backend;
using SS13WebMap.Models.Codebase;
using System.Collections.ObjectModel;

namespace SS13WebMap.Services {
    public class CodebaseDataService : ICodebaseDataService {
        private static readonly Dictionary<string, Codebase> CodebaseData = [];
        private readonly int TotalCodebases;
        private readonly int TotalMaps;
        private readonly int TotalNormalLayers;
        private readonly int TotalPipeLayers;
        private readonly int TotalLayers;

        public CodebaseDataService() {
            InitCodebases();
            TotalCodebases = CodebaseData.Count;
            TotalMaps = CodebaseData.Sum(x => x.Value.GameMaps.Count);
            TotalNormalLayers = CodebaseData.Sum(x => x.Value.GameMaps.Sum(x => x.Layers.Count));
            TotalPipeLayers = CodebaseData.Where(x => x.Value.FancySupport).Sum(x => x.Value.GameMaps.Sum(x => x.Layers.Count));
            TotalLayers = TotalNormalLayers + TotalPipeLayers;
        }

        public Dictionary<string, Codebase> GetCodebases() {
            return CodebaseData;
        }

        public int GetTotalCodebases() {
            return TotalCodebases;
        }

        public int GetTotalLayers() {
            return TotalLayers;
        }

        public int GetTotalMaps() {
            return TotalMaps;
        }

        public int GetTotalNormalLayers() {
            return TotalNormalLayers;
        }

        public int GetTotalPipeLayers() {
            return TotalPipeLayers;
        }

        // Internal Methods
        private static void InitCodebases() {
            // AquilaStation
            CodebaseData.Add("aquila", new() {
                CodebaseId = "aquila",
                CodebaseName = "AquilaStation",
                TextColour = "#f44336",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/aquila.png",
                GameMaps = [
                    new() { MapId = "atlantis", MapName = "Atlantis", Layers = [
                            [ "Upper Deck", "Atlantis2", "1" ],
                            [ "Lower Deck", "Atlantis", "1" ],
                        ]
                    },
                    new() { MapId = "atlas", MapName = "Atlas", Layers = [
                            [ "Upper Deck", "atlas2", "1" ],
                            [ "Lower Deck", "atlas", "1" ],
                        ]
                    },
                    new() { MapId = "serendipity", MapName = "Serendipity", Layers = [
                            [ "Upper Deck", "Serendipity1", "1" ],
                            [ "Lower Deck", "Serendipity2", "1" ],
                        ]
                    },
                    new() { MapId = "snake", MapName = "Snake", Layers = [
                            [ "Upper Deck", "snake_upper", "1" ],
                            [ "Lower Deck", "snake_lower", "1" ],
                        ]
                    },
                ]
            });

            // ArkStation
            CodebaseData.Add("arkstation", new() {
                CodebaseId = "arkstation",
                CodebaseName = "Ark Station 13",
                TextColour = "#2bbcd2",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/arkstation.png",
                GameMaps = [
                    new()  { MapId = "blueshift", MapName = "Blueshift", Layers = [
                            [ "Upper Deck", "Blueshift", "2" ],
                            [ "Lower Deck", "Blueshift", "1" ],
                        ]
                    },
                    new()  { MapId = "delta", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new()  { MapId = "icebox", MapName = "Ice Box", Layers = [
                            [ "Ground", "IceBoxStation", "3" ],
                            [ "Underground", "IceBoxStation", "2" ],
                            [ "Caves", "IceBoxStation", "1" ],
                        ]
                    },
                    new()  { MapId = "journey", MapName = "NSS Journey", Layers = [
                            [ "Base Map", "NSSJourney", "1" ],
                        ]
                    },
                    new()  { MapId = "kilo", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation2", "1" ],
                        ]
                    },
                    new()  { MapId = "meta", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new()  { MapId = "northstar", MapName = "North Star", Layers = [
                            [ "Upper Deck", "north_star", "4" ],
                            [ "Second Deck", "north_star", "3" ],
                            [ "Third Deck", "north_star", "2" ],
                            [ "Lower Deck", "north_star", "1" ],
                        ]
                    },
                    new()  { MapId = "omega", MapName = "OmegaStation", Layers = [
                            [ "Ground", "OmegaStation", "3" ],
                            [ "Underground", "OmegaStation", "2" ],
                            [ "Caves", "OmegaStation", "1" ],
                        ]
                    },
                    new()  { MapId = "ouroboros", MapName = "Ouroboros", Layers = [
                            [ "Upper Deck", "Ouroboros", "2" ],
                            [ "Lower Deck", "Ouroboros", "1" ],
                        ]
                    },
                    new()  { MapId = "pubby", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                    new()  { MapId = "serenity", MapName = "Serenity", Layers = [
                            [ "Space Dock", "SerenityStation", "3" ],
                            [ "Ground", "SerenityStation", "2" ],
                            [ "Mushroom Caves", "SerenityStation", "1" ],
                        ]
                    },
                    new()  { MapId = "snowglobe", MapName = "Snowglobe", Layers = [
                            [ "Ground", "snowglobe", "3" ],
                            [ "Underground", "snowglobe", "2" ],
                            [ "Caves", "snowglobe", "1" ],
                        ]
                    },
                    new()  { MapId = "tram", MapName = "TramStation", Layers = [
                            [ "Upper Deck", "tramstation", "2" ],
                            [ "Lower Deck", "tramstation", "1" ],
                        ]
                    },
                    new()  { MapId = "voidraptor", MapName = "VoidRaptor", Layers = [
                            [ "Base Map", "VoidRaptor", "1" ],
                        ]
                    },
                    new()  { MapId = "wawa", MapName = "WawaStation", Layers = [
                            [ "Upper Deck", "wawastation", "2" ],
                            [ "Lower Deck", "wawastation", "1" ],
                        ]
                    },
                ]
            });

            // AuStation
            CodebaseData.Add("austation", new() {
                CodebaseId = "austation",
                CodebaseName = "AuStation",
                TextColour = "#ffc107",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/austation.png",
                GameMaps = [
                    new() { MapId = "austation", MapName = "Austation", Layers = [
                            [ "Base Map", "Austation", "1" ],
                        ]
                    },
                ]
            });

            // BayStation 12
            CodebaseData.Add("bay12", new() {
                CodebaseId = "bay12",
                CodebaseName = "Baystation 12",
                TextColour = "#e65100",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/bay12.svg",
                GameMaps = [
                    new() { MapId = "torch", MapName = "SEV Torch", MapHeight = 200, MapWidth = 200, ParallaxDirection = ParallaxDirection.West, ParallaxSpeedModifier = -20,
                        Layers = [
                            [ "Bridge Deck", "torch6_bridge", "1" ],
                            [ "Deck 1 - Operations", "torch5_deck1", "1" ],
                            [ "Deck 2 - Maintenance", "torch4_deck2", "1" ],
                            [ "Deck 3 - Habitation", "torch3_deck3", "1" ],
                            [ "Deck 4 - Supply", "torch2_deck4", "1" ],
                            [ "Deck 5 - Hangar", "torch1_deck5", "1" ],
                        ]
                    },
                ]
            });

            // BeeStation
            CodebaseData.Add("bee", new() {
                CodebaseId = "bee",
                CodebaseName = "BeeStation",
                TextColour = "#ffc107",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/bee.webp",
                GameMaps = [
                    new() { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "cardinalstation", MapName = "CardinalStation", Layers = [
                            [ "Base Map", "CardinalStation", "1" ],
                        ]
                    },
                    new() { MapId = "corgstation", MapName = "CorgStation", Layers = [
                            [ "Base Map", "CorgStation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "echostation", MapName = "EchoStation", Layers = [
                            [ "Surface", "EchoStation", "4" ],
                            [ "Underground 1", "EchoStation", "3" ],
                            [ "Underground 2", "EchoStation", "2" ],
                            [ "Underground 3", "EchoStation", "1" ],
                        ]
                    },
                    new() { MapId = "flandstation", MapName = "FlandStation", Layers = [
                            [ "Base Map", "FlandStation", "1" ],
                        ]
                    },
                    new() { MapId = "kilostation", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "radstation", MapName = "RadStation", Layers = [
                            [ "Base Map", "RadStation", "1" ],
                        ]
                    },
                ]
            });

            // BlueMoon
            CodebaseData.Add("bluemoon", new() {
                CodebaseId = "bluemoon",
                CodebaseName = "BlueMoon",
                FancySupport = false,
                IsAdult = true,
                GameMaps = [
                    new() { MapId = "armystation", MapName = "ArmyStation", MapHeight = 180, MapWidth = 255,
                        Layers = [
                            [ "Base Map", "ArmyStation", "1" ],
                        ]
                    },
                    new() { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "cogstation", MapName = "CogStation", Layers = [
                            [ "Base Map", "CogStation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "kilostation", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "omegastation", MapName = "OmegaStation", Layers = [
                            [ "Base Map", "OmegaStation", "1" ],
                        ]
                    },
                    new() { MapId = "pubbystation", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                    new() { MapId = "syndicateboxstation", MapName = "SyndicateStation", Layers = [
                            [ "Base Map", "SyndicateBoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "taustation", MapName = "TauStation", Layers = [
                            [ "Base Map", "TauStation", "1" ],
                        ]
                    },
                ]
            });

            // BubberStation
            CodebaseData.Add("bubber", new() {
                CodebaseId = "bubber",
                CodebaseName = "BubberStation",
                FancySupport = false,
                IsAdult = true,
                GameMaps = [
                    new GameMap { MapId = "biodome", MapName = "Biodome", Layers = [
                            [ "Main Layer", "biodome", "2" ],
                            [ "Sublayer", "biodome", "1" ],
                        ]
                    },
                    new GameMap { MapId = "blueshift", MapName = "Blueshift", Layers = [
                            [ "Main Layer", "Blueshift", "2" ],
                            [ "Sublayer", "Blueshift", "1" ],
                        ]
                    },
                    new GameMap { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new GameMap { MapId = "kilostation", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new GameMap { MapId = "moonstation", MapName = "MoonStation", Layers = [
                            [ "Main Layer", "moonstation", "3" ],
                            [ "Sublayer", "moonstation", "2" ],
                            [ "Lavaland", "moonstation", "1" ],
                        ]
                    },
                    new GameMap { MapId = "persistencestation", MapName = "Persistence Station", MapHeight = 67, MapWidth = 56, Layers = [
                            [ "Main Layer", "lavaland_persistence", "1" ],
                        ]
                    },
                    new GameMap { MapId = "voidraptor", MapName = "Void Raptor", Layers = [
                            [ "Main Layer", "VoidRaptor", "1" ],
                        ]
                    },
                ]
            });

            // BurgerStation
            CodebaseData.Add("burger", new() {
                CodebaseId = "burger",
                CodebaseName = "BurgerStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "burgerstation", MapName = "BurgerStation", Layers = [
                            [ "Base Map", "burgerstation", "1" ],
                        ]
                    },
                ]
            });

            // CEV Eris
            CodebaseData.Add("eris", new() {
                CodebaseId = "eris",
                CodebaseName = "CEV Eris",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "eris", MapName = "CEV Eris", Layers = [
                            [ "Z1", "_CEV_Eris", "1" ],
                            [ "Z2", "_CEV_Eris", "2" ],
                            [ "Z3", "_CEV_Eris", "3" ],
                            [ "Z4", "_CEV_Eris", "4" ],
                            [ "Z5", "_CEV_Eris", "5" ],
                        ]
                    },
                ]
            });

            // Citadel RP
            CodebaseData.Add("citrp", new() {
                CodebaseId = "citrp",
                CodebaseName = "Citadel Station (RP)",
                TextColour = "#2196f3",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/cit.png",
                GameMaps = [
                    new() { MapId = "atlas", MapName = "NSB Atlas (Rift)", MapWidth = 192, MapHeight = 192,
                        Layers = [
                            [ "Surface 3 (Command Deck)", "rift-06-surface3", "1" ],
                            [ "Surface 2 (Operations Deck)", "rift-05-surface2", "1" ],
                            [ "Surface 1 (Logistics Deck)", "rift-04-surface1", "1" ],
                            [ "Underground -1 (Maintenance Deck)", "rift-03-underground1", "1" ],
                            [ "Underground -2 (Operations Deck)", "rift-02-underground2", "1" ],
                            [ "Underground -3 (Logistics Deck)", "rift-01-underground3", "1" ],
                            [ "Western Plains", "rift-10-west_plains", "1" ],
                            [ "Western Caves (Shallow)", "rift-09-west_caves", "1" ],
                            [ "Western Caves (Deep)", "rift-08-west_deep", "1" ],
                            [ "Western Canyons", "rift-07-west_base", "1" ],
                        ]
                    },
                    new() { MapId = "tether", MapName = "NSB Adephagia (Tether)", MapWidth = 192, MapHeight = 192,
                        Layers = [
                            [ "Station 2 (Logistics Deck)", "station2", "1" ],
                            [ "Station 1 (Engineering Deck)", "station1", "1" ],
                            [ "Surface 3 (Service and Command)", "surface3", "1" ],
                            [ "Surface 2 (Research and Life Support)", "surface2", "1" ],
                            [ "Surface 1 (Lobby and External)", "surface1", "1" ],
                        ]
                    },
                    new() { MapId = "endeavour", MapName = "NSV Endeavour", MapWidth = 192, MapHeight = 192,
                        Layers = [
                            [ "Deck 1", "deck4", "1" ],
                            [ "Deck 2", "deck3", "1" ],
                            [ "Deck 3", "deck2", "1" ],
                            [ "Deck 4", "deck1", "1" ],
                        ]
                    },
                    new() { MapId = "triumph", MapName = "NSV Triumph", MapWidth = 192, MapHeight = 192,
                        Layers = [
                            [ "Deck 4 (Command Deck)", "deck4", "1" ],
                            [ "Deck 3 (Operations Deck)", "deck3", "1" ],
                            [ "Deck 2 (Service Deck)", "deck2", "1" ],
                            [ "Deck 1 (Engineering Deck)", "deck1", "1" ],

                        ]
                    },
                ]
            });

            // Citadel TG
            CodebaseData.Add("cit", new() {
                CodebaseId = "cit",
                CodebaseName = "Citadel Station (TG)",
                TextColour = "#2196f3",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/cit.png",
                GameMaps = [
                    new() { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "cogstation", MapName = "CogStation", Layers = [
                            [ "Base Map", "CogStation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "lambdastation", MapName = "LambdaStation", Layers = [
                            [ "Base Map", "lambda", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "omegastation", MapName = "OmegaStation", Layers = [
                            [ "Base Map", "OmegaStation", "1" ],
                        ]
                    },
                    new() { MapId = "pubbystation", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                ]
            });

            // ChaoticOnyx
            CodebaseData.Add("onyx", new() {
                CodebaseId = "onyx",
                CodebaseName = "ChaoticOnyx",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "exodus", MapName = "Exodus", Layers = [
                            [ "Main Level", "exodus-2", "1" ],
                            [ "Ghetto Level", "exodus-1", "1" ],
                            [ "Station Satellite", "exodus-4", "1" ],
                            [ "Mining Outpost", "exodus-6", "1" ],
                        ]
                    },
                    new() { MapId = "frontier", MapName = "Frontier", Layers = [
                            [ "Main Level", "frontier-1", "1" ],
                            [ "Other Level", "frontier-3", "1" ],
                        ]
                    },
                    new() { MapId = "genesis", MapName = "Genesis", Layers = [
                            [ "Main Level", "genesis-2", "1" ],
                            [ "Ghetto Level", "genesis-1", "1" ],
                            [ "CC Level", "genesis-3", "1" ],
                            [ "Mining Outpost", "genesis-6", "1" ],
                        ]
                    },
                ]
            });

            // CM-SS13
            CodebaseData.Add("cm", new() {
                CodebaseId = "cm",
                CodebaseName = "CM-SS13",
                TextColour = "#e91e63",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/cm.png",
                GameMaps = [
                    new() { MapId = "almayer", MapName = "USS Almayer", MapWidth = 300, MapHeight = 101,
                        Layers = [
                            [ "Upper Deck", "USS_Almayer", "4" ],
                            [ "Middle Deck", "USS_Almayer", "3" ],
                            [ "Lower Deck", "USS_Almayer", "2" ],
                            [ "Under Deck", "USS_Almayer", "1" ],
                        ]
                    },
                    new() { MapId = "fiorina", MapName = "Fiorina Science Annex", MapWidth = 255, MapHeight = 210,
                        Layers = [
                            [ "Main Level", "Fiorina_SciAnnex", "1" ],
                        ]
                    },
                    new() { MapId = "kutjevo", MapName = "Kutjevo Refinery", MapWidth = 240, MapHeight = 165,
                        Layers = [
                            [ "Main Level", "Kutjevo", "1" ],
                            [ "Sky", "Kutjevo", "2" ],
                        ]
                    },
                    new() { MapId = "lv522", MapName = "LV522", MapWidth = 193, MapHeight = 204,
                        Layers = [
                            [ "Main Level", "LV522_Chances_Claim", "1" ],
                            [ "Sky", "LV522_Chances_Claim", "2" ],
                        ]
                    },
                    new() { MapId = "lv624", MapName = "LV624", MapWidth = 175, MapHeight = 222,
                        Layers = [
                            [ "Main Level", "LV624", "1" ],
                            [ "Sky", "LV624", "2" ],
                        ]
                    },
                    new() { MapId = "lv759", MapName = "LV759", MapWidth = 225, MapHeight = 250,
                        Layers = [
                            [ "Main Level", "LV759_Hybrisa_Prospera", "1" ],
                            [ "Sky", "LV759_Hybrisa_Prospera", "2" ],
                        ]
                    },
                    new() { MapId = "newvaradero", MapName = "New Varadero", MapWidth = 220, MapHeight = 180,
                        Layers = [
                            [ "Main Level", "New_Varadero", "1" ],
                            [ "Sky", "New_Varadero", "2" ],
                        ]
                    },
                    new() { MapId = "shivas", MapName = "Shivas Snowball", MapWidth = 222, MapHeight = 162,
                        Layers = [
                            [ "Main Level", "Shivas_Snowball", "1" ],
                            [ "Sky", "Shivas_Snowball", "2" ],
                        ]
                    },
                    new() { MapId = "solaris", MapName = "Solaris Ridge", MapWidth = 223, MapHeight = 211,
                        Layers = [
                            [ "Main Level", "BigRed", "1" ],
                            [ "Sky", "BigRed", "2" ],
                        ]
                    },
                    new() { MapId = "sorokyne", MapName = "Sorokyne Strata", MapWidth = 256, MapHeight = 173,
                        Layers = [
                            [ "Main Level", "Sorokyne_Strata", "1" ],
                            [ "Sky", "Sorokyne_Strata", "2" ],
                        ]
                    },
                    new() { MapId = "trijent", MapName = "Trijent Dam", MapWidth = 245, MapHeight = 232,
                        Layers = [
                            [ "Underground", "Desert_Dam", "1" ],
                            [ "Main Level", "Desert_Dam", "2" ],
                            [ "Lower Sky", "Desert_Dam", "3" ],
                            [ "Sky", "Desert_Dam", "4" ],

                        ]
                    },
                    new() { MapId = "tyragorift", MapName = "Tyrargo Rift", MapWidth = 241, MapHeight = 182,
                        Layers = [
                            [ "Underground", "Tyrargo_Rift", "1" ],
                            [ "Main Level", "Tyrargo_Rift", "2" ],
                            [ "Sky", "Tyrargo_Rift", "3" ],

                        ]
                    },
                    new() { MapId = "whiskey", MapName = "Whiskey Outpost", MapWidth = 130, MapHeight = 200,
                        Layers = [
                            [ "Main Level", "Whiskey_Outpost_v2", "1" ],
                        ]
                    },
                ]
            });

            // Daedalus Dock
            CodebaseData.Add("daedalus", new() {
                CodebaseId = "daedalus",
                CodebaseName = "Daedalus Dock",
                TextColour = "#008bcc",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/daedalus.png",
                GameMaps = [
                    new() { MapId = "atlas", MapName = "Atlas", Layers = [
                            [ "Base Map", "atlas", "1" ],
                        ]
                    },
                    new() { MapId = "theseus", MapName = "Theseus", Layers = [
                            [ "Base Map", "Theseus", "1" ],
                        ]
                    },
                ]
            });

            // Effigy
            CodebaseData.Add("effigy", new() {
                CodebaseId = "effigy",
                CodebaseName = "Effigy",
                TextColour = "#69f0ae",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/effigy.png",
                GameMaps = [
                    new() { MapId = "foxholestation", MapName = "FoxHoleStation", Layers = [
                            [ "Lower Hole", "foxholestation", "1" ],
                            [ "Upper Hole", "foxholestation", "2" ],
                        ]
                    },
                    new() { MapId = "icebox", MapName = "IceBoxStation", Layers = [
                            [ "Station", "IceBoxStation", "3" ],
                            [ "Lower 1", "IceBoxStation", "2" ],
                            [ "Lower 2", "IceBoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "rimpoint", MapName = "RimPoint", Layers = [
                            [ "Ground Level", "RimPoint", "1" ],
                            [ "Upper Level", "RimPoint", "2" ],
                        ]
                    },
                    new() { MapId = "sigmaoctantis", MapName = "SigmaOctantis", Layers = [
                            [ "Lower Level", "SigmaOctantis", "1" ],
                            [ "Upper Level", "SigmaOctantis", "2" ],
                        ]
                    },
                    new() { MapId = "tramstation", MapName = "TramStation", Layers = [
                            [ "Upper Level", "tramstation", "2" ],
                            [ "Lower Level", "tramstation", "1" ],
                        ]
                    },
                ]
            });

            // Foundation 19
            CodebaseData.Add("foundation19", new() {
                CodebaseId = "foundation19",
                CodebaseName = "Foundation 19",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "site53", MapName = "Site 53", Layers = [
                            [ "Level 1", "site53-1", "1" ],
                            [ "Level 2", "site53-2", "1" ],
                            [ "Level 3", "site53-3", "1" ],
                            [ "Level 4", "site53-4", "1" ],
                        ]
                    },
                ]
            });

            // FulpStation
            CodebaseData.Add("fulp", new() {
                CodebaseId = "fulp",
                CodebaseName = "FulpStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "heliostation", MapName = "HelioStation", Layers = [
                            [ "Base Map", "Heliostation", "1" ],
                        ]
                    },
                    new() { MapId = "pubbystation", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                    new() { MapId = "selenestation", MapName = "SeleneStation", Layers = [
                            [ "Base Map", "SeleneStation", "1" ],
                        ]
                    },
                ]
            });

            // GearStation
            CodebaseData.Add("gearstation", new() {
                CodebaseId = "gearstation",
                CodebaseName = "GearStation",
                TextColour = "#b2ebf2",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/gearstation.png",
                GameMaps = [
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "icebox", MapName = "IceBoxStation", Layers = [
                            [ "Station", "IceBoxStation", "3" ],
                            [ "Lower 1", "IceBoxStation", "2" ],
                            [ "Lower 2", "IceBoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "kilostation", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                ]
            });

            // GoonStation
            CodebaseData.Add("goon", new() {
                CodebaseId = "goon",
                CodebaseName = "GoonStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "atlas", MapName = "Atlas", Layers = [
                            [ "Base Map", "atlas", "1" ],
                        ]
                    },
                    new() { MapId = "clarion", MapName = "Clarion", Layers = [
                            [ "Base Map", "clarion", "1" ],
                        ]
                    },
                    new() { MapId = "cogmap", MapName = "Cogmap", Layers = [
                            [ "Base Map", "cogmap", "1" ],
                        ]
                    },
                    new() { MapId = "cogmap2", MapName = "Cogmap2", Layers = [
                            [ "Base Map", "cogmap2", "1" ],
                        ]
                    },
                    new() { MapId = "destiny", MapName = "Destiny", Layers = [
                            [ "Base Map", "destiny", "1" ],
                        ]
                    },
                    new() { MapId = "donut", MapName = "Donut", Layers = [
                            [ "Base Map", "donut3", "1" ],
                        ]
                    },
                    new() { MapId = "horizon", MapName = "Horizon", Layers = [
                            [ "Base Map", "horizon", "1" ],
                        ]
                    },
                    new() { MapId = "manta", MapName = "Manta", Layers = [
                            [ "Base Map", "manta", "1" ],
                        ]
                    },
                    new() { MapId = "oshan", MapName = "Oshan", Layers = [
                            [ "Base Map", "oshan", "1" ],
                        ]
                    },
                ]
            });

            // HippieStation
            CodebaseData.Add("hippie", new() {
                CodebaseId = "hippie",
                CodebaseName = "HippieStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "hippiestation", MapName = "HippieStation", Layers = [
                            [ "Base Map", "hippiestation", "1" ],
                        ]
                    },
                    new() { MapId = "ministation", MapName = "MiniStation", Layers = [
                            [ "Base Map", "ministation", "1" ],
                        ]
                    },
                ]
            });

            // Lumos
            CodebaseData.Add("lumos", new() {
                CodebaseId = "lumos",
                CodebaseName = "Lumos",
                FancySupport = false,
                IsAdult = true,
                GameMaps = [
                    new() { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "fridgestation", MapName = "FridgeStation", Layers = [
                            [ "Top", "FridgeStation", "1" ],
                            [ "Middle", "IcemoonUnderground_Fridge_Above", "1" ],
                            [ "Bottom", "IcemoonUnderground_Fridge_Below", "1" ],
                        ]
                    },
                    new() { MapId = "lavaland", MapName = "Lavaland", Layers = [
                            [ "Base Map", "Lavaland_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "omegastation", MapName = "OmegaStation", Layers = [
                            [ "Base Map", "OmegaStation_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "pubbystation", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation_Lumos", "1" ],
                        ]
                    },
                    new() { MapId = "snaxi", MapName = "Snaxi", Layers = [
                            [ "Top", "Snaxi_Lumos", "1" ],
                            [ "Middle", "IcemoonUnderground_Above_Lumos", "1" ],
                            [ "Bottom", "IcemoonUnderground_Below_Lumos", "1" ],
                        ]
                    },
                ]
            });

            // MonkeStation
            CodebaseData.Add("monkestation", new() {
                CodebaseId = "monkestation",
                CodebaseName = "Monkestation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "boxstation", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "icebox", MapName = "IceBoxStation", Layers = [
                            [ "Base Map", "IceBoxStation", "3" ],
                            [ "Lower 1", "IceBoxStation", "2" ],
                            [ "Lower 2", "IceBoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "tramstation", MapName = "TramStation", Layers = [
                            [ "Upper Level", "tramstation", "2" ],
                            [ "Lower Level", "tramstation", "1" ],
                        ]
                    },
                ]
            });

            // NovaSector
            CodebaseData.Add("nova", new() {
                CodebaseId = "nova",
                CodebaseName = "NovaSector",
                TextColour = "#205bff",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/novasector.png",
                GameMaps = [
                    new() { MapId = "blueshift", MapName = "Blueshift", Layers = [
                            [ "Bottom Deck", "Blueshift", "1" ],
                            [ "Top Deck", "Blueshift", "2" ],
                        ]
                    },
                    new() { MapId = "ouroboros", MapName = "Ouroboros", Layers = [
                            [ "Bottom Deck", "Ouroboros", "1" ],
                            [ "Top Deck", "Ouroboros", "2" ],
                        ]
                    },
                    new() { MapId = "voidraptor", MapName = "VoidRaptor", Layers = [
                            [ "Base Map", "VoidRaptor", "1" ],
                        ]
                    },
                ]
            });

            // NSV13
            CodebaseData.Add("nsv", new() {
                CodebaseId = "nsv",
                CodebaseName = "NSV13",
                TextColour = "#b867c5",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/nsv.png",
                GameMaps = [
                    new() { MapId = "aetherwhisp", MapName = "Aetherwhisp", Layers = [
                            [ "Top Deck", "Aetherwhisp2", "1" ],
                            [ "Bottom Deck", "Aetherwhisp1", "1" ],
                        ]
                    },
                    new() { MapId = "atlas", MapName = "Atlas", Layers = [
                            [ "Top Deck", "atlas2", "1" ],
                            [ "Bottom Deck", "atlas", "1" ],
                        ]
                    },
                    new() { MapId = "eclipse", MapName = "Eclipse", Layers = [
                            [ "Top Deck", "Eclipse2", "1" ],
                            [ "Bottom Deck", "Eclipse1", "1" ],
                        ]
                    },
                    new() { MapId = "galactica", MapName = "Galactica", Layers = [
                            [ "Top Deck", "Galactica1", "1" ],
                            [ "Bottom Deck", "Galactica2", "1" ],
                        ]
                    },
                    new() { MapId = "gladius", MapName = "Gladius", Layers = [
                            [ "Top Deck", "Gladius2", "1" ],
                            [ "Bottom Deck", "Gladius1", "1" ],
                        ]
                    },
                    new() { MapId = "hammerhead", MapName = "Hammerhead", Layers = [
                            [ "Base Map", "Hammerhead", "1" ],
                        ]
                    },
                    new() { MapId = "serendipity", MapName = "Serendipity", Layers = [
                            [ "Top Deck", "Serendipity1", "1" ],
                            [ "Bottom Deck", "Serendipity2", "1" ],
                        ]
                    },
                    new() { MapId = "shrike", MapName = "Shrike", Layers = [
                            [ "Top Deck", "Shrike1", "1" ],
                            [ "Bottom Deck", "Shrike2", "1" ],
                        ]
                    },
                    new() { MapId = "snake", MapName = "Snake", Layers = [
                            [ "Top Deck", "snake_upper", "1" ],
                            [ "Bottom Deck", "snake_lower", "1" ],
                        ]
                    },
                    new() { MapId = "tycoon", MapName = "Tycoon", MapWidth = 300, MapHeight = 300,
                        Layers = [
                            [ "Top Deck", "Tycoon1", "1" ],
                            [ "Bottom Deck", "Tycoon2", "1" ],
                        ]
                    },
                ]
            });

            // Paradise Station
            CodebaseData.Add("paradise", new() {
                CodebaseId = "paradise",
                CodebaseName = "Paradise Station",
                TextColour = "#ff9800",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/paradisess13.png",
                GameMaps = [
                    new() { MapId = "cyberiad", MapName = "BoxStation (NSS Cyberiad)", Layers = [
                            [ "Base Map", "boxstation", "1" ],
                        ]
                    },
                    new() { MapId = "cerestation", MapName = "Cerestation (NSS Farragus)", Layers = [
                            [ "Base Map", "cerestation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation (NSS Kerberos)", Layers = [
                            [ "Base Map", "deltastation", "1" ],
                        ]
                    },
                    new() { MapId = "emeraldstation", MapName = "EmeraldStation (NSS Diagoras)", Layers = [
                            [ "Base Map", "emeraldstation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation (NSS Cerebron)", Layers = [
                            [ "Base Map", "metastation", "1" ],
                        ]
                    },
                    new() { MapId = "omegastation", MapName = "OmegaStation (NSS Legaria)", Layers = [
                            [ "Base Map", "omegastation", "1" ],
                        ]
                    },
                ]
            });

            // RU SCP 13
            CodebaseData.Add("ruscp", new() {
                CodebaseId = "ruscp",
                CodebaseName = "RU SCP 13",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "site53", MapName = "Site 53", Layers = [
                            [ "Ground Floor", "site53", "1" ],
                            [ "Second Floor", "site53", "2" ],
                            [ "Third Floor", "site53", "3" ],
                            [ "Surface", "site53", "4" ],
                        ]
                    }
                ]
            });

            // SinguloStation
            CodebaseData.Add("singulo", new() {
                CodebaseId = "singulo",
                CodebaseName = "SinguloStation",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "construction", MapName = "ConstructionStation", Layers = [
                            [ "Base Map", "ConstructionStation", "1" ],
                        ]
                    },
                    new() { MapId = "cryo", MapName = "CryoStation", Layers = [
                            [ "Base Map", "CryoStation", "1" ],
                        ]
                    },
                ]
            });

            // Skyrat
            CodebaseData.Add("skyrat-tg", new() {
                CodebaseId = "skyrat-tg",
                CodebaseName = "Skyrat",
                TextColour = "#2bbcd2",
                FancySupport = true,
                IsAdult = true,
                LogoPath = "img/logos/skyrat.png",
                GameMaps = [
                    new() { MapId = "blueshift", MapName = "BlueShift", Layers = [
                            [ "Top Deck", "BlueShift_upper", "1" ],
                            [ "Middle Deck", "BlueShift_middle", "1" ],
                            [ "Bottom Deck", "BlueShift_lower", "1" ],
                        ]
                    },
                    new() { MapId = "voidraptor", MapName = "VoidRaptor", Layers = [
                            [ "Base Map", "VoidRaptor", "1" ],
                        ]
                    },
                ]
            });

            // SS1984 Paradise
            CodebaseData.Add("ss1984", new() {
                CodebaseId = "ss1984",
                CodebaseName = "SS1984 Paradise",
                TextColour = "#9574ca",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/ss1984.png",
                GameMaps = [
                    new() { MapId = "celestation", MapName = "NSS Celestation / Селестия", Layers = [
                            [ "Basement", "celestation", "1" ],
                            [ "Main Floor", "celestation", "2" ],
                            [ "Second Floor", "celestation", "3" ],
                        ]
                    },
                    new() { MapId = "cyberiad", MapName = "BoxStation (NSS Cyberiad) / Кибериада", Layers = [
                            [ "Base Map", "cyberiad", "1" ],
                        ]
                    },
                    new() { MapId = "cerestation", MapName = "CereStation (NSS Farragus) / Фаррагус", Layers = [
                            [ "Base Map", "cerestation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "Delta Station (NSS Kerberos) / Керберос", Layers = [
                            [ "Base Map", "delta", "1" ],
                        ]
                    },
                    new() { MapId = "nova", MapName = "Nova Station (NSS Nova) / Нова", Layers = [
                            [ "First Floor", "nova", "1" ],
                            [ "Second Floor", "nova", "2" ],
                        ]
                    },
                ]
            });

            // SS220 BandaStation
            CodebaseData.Add("bandastation", new() {
                CodebaseId = "bandastation",
                CodebaseName = "SS220 (BandaStation)",
                TextColour = "#209fdf",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/ss220.webp",
                GameMaps = [
                    new() { MapId = "cyberiad", MapName = "BoxStation (NSS Cyberiad) / Кибериада", Layers = [
                            [ "Main Level", "Cyberiad", "2" ],
                            [ "Ghetto", "Cyberiad", "1" ],
                        ]
                    },
                ]
            });

            // SS220 Paradise
            CodebaseData.Add("ss220", new() {
                CodebaseId = "ss220",
                CodebaseName = "SS220 (Paradise)",
                TextColour = "#209fdf",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/ss220.webp",
                GameMaps = [
                    new() { MapId = "boxstation", MapName = "BoxStation (NSS Cyberiad) / Кибериада", Layers = [
                            [ "Base Map", "boxstation", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "Delta Station (NSS Kerberos) / Керберос", Layers = [
                            [ "Base Map", "deltastation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation (NSS Cerebron) / Цереброн", Layers = [
                            [ "Base Map", "metastation", "1" ],
                        ]
                    },
                ]
            });

            // SurfShack13
            CodebaseData.Add("surfshack", new() {
                CodebaseId = "surfshack",
                CodebaseName = "SurfShack13",
                FancySupport = false,
                IsAdult = false,
                GameMaps = [
                    new() { MapId = "box", MapName = "BoxStation", Layers = [
                            [ "Base Map", "BoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "minisurf", MapName = "MiniSurf", Layers = [
                            [ "Base Map", "MiniSurf", "1" ],
                        ]
                    },
                    new() { MapId = "pubby", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                ]
            });

            // TaleStation
            CodebaseData.Add("talestation", new() {
                CodebaseId = "talestation",
                CodebaseName = "TaleStation",
                TextColour = "#ef423b",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/talestation.png",
                GameMaps = [
                    new() { MapId = "kilo", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new() { MapId = "lima", MapName = "LimaStation", Layers = [
                            [ "Base Map", "LimaStation", "2" ],
                            [ "Sub Layer", "LimaStation", "1" ],
                        ]
                    },
                    new() { MapId = "pubby", MapName = "PubbyStation", Layers = [
                            [ "Base Map", "PubbyStation", "1" ],
                        ]
                    },
                ]
            });

            // Tau Ceti Classic
            CodebaseData.Add("tcc", new() {
                CodebaseId = "tcc",
                CodebaseName = "Tau Ceti Classic",
                TextColour = "#a0a8d8",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tauceti.png",
                GameMaps = [
                    new() { MapId = "asteroid", MapName = "Asteroid", Layers = [
                            [ "Base Map", "asteroid", "1" ],
                        ]
                    },
                    new() { MapId = "box", MapName = "BoxStation (NSS Exodus)", Layers = [
                            [ "Base Map", "boxstation", "1" ],
                        ]
                    },
                    new() { MapId = "falcon", MapName = "Falcon", Layers = [
                            [ "Base Map", "falcon", "1" ],
                        ]
                    },
                    new() { MapId = "gamma", MapName = "Gamma (NSS Gamma)", Layers = [
                            [ "Base Map", "gamma", "1" ],
                        ]
                    },
                    new() { MapId = "prometheus", MapName = "Prometheus", Layers = [
                            [ "Base Map", "prometheus", "1" ],
                        ]
                    },
                    new() { MapId = "prometheus_asteroid", MapName = "Prometheus Asteroid", Layers = [
                            [ "Base Map", "prometheus_asteroid", "1" ],
                        ]
                    },
                ]
            });

            // /tg/station
            CodebaseData.Add("tgstation", new() {
                CodebaseId = "tgstation",
                CodebaseName = "/tg/Station",
                TextColour = "#5bff8e",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tg.png",
                GameMaps = [
                    new() { MapId = "birdshot", MapName = "Birdshot", Layers = [
                            [ "Base Map", "birdshot", "1" ],
                        ]
                    },
                    new() { MapId = "deltastation", MapName = "DeltaStation", Layers = [
                            [ "Base Map", "DeltaStation2", "1" ],
                        ]
                    },
                    new() { MapId = "icebox", MapName = "IceBoxStation", Layers = [
                            [ "Base Map", "IceBoxStation", "3" ],
                            [ "Lower 1", "IceBoxStation", "2" ],
                            [ "Lower 2", "IceBoxStation", "1" ],
                        ]
                    },
                    new() { MapId = "kilostation", MapName = "KiloStation", Layers = [
                            [ "Base Map", "KiloStation", "1" ],
                        ]
                    },
                    new() { MapId = "metastation", MapName = "MetaStation", Layers = [
                            [ "Base Map", "MetaStation", "1" ],
                        ]
                    },
                    new() { MapId = "northstar", MapName = "NorthStar", Layers = [
                            [ "Engi + Cargo", "north_star", "1" ],
                            [ "Medsci", "north_star", "2" ],
                            [ "Service", "north_star", "3" ],
                            [ "Command + Sec", "north_star", "4" ],
                        ]
                    },
                    new() { MapId = "tramstation", MapName = "TramStation", Layers = [
                            [ "Upper Level", "tramstation", "2" ],
                            [ "Lower Level", "tramstation", "1" ],
                        ]
                    },
                    new() { MapId = "wawastation", MapName = "WawaStation", Layers = [
                            [ "Base Map", "wawastation", "1" ],
                        ]
                    },
                ]
            });

            // TGMC
            CodebaseData.Add("tgmc", new() {
                CodebaseId = "tgmc",
                CodebaseName = "TerraGov Marine Corps",
                TextColour = "#2ebffc",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/tgmc.png",
                GameMaps = [
                    new() { MapId = "arachne", MapName = "Arachne", MapWidth = 150, MapHeight = 100,
                        Layers = [
                            [ "Base Map", "TGS_Arachne", "1" ],
                        ]
                    },
                    new() { MapId = "barrenquilla", MapName = "Barrenquilla Mining Facility", Layers = [
                            [ "Base Map", "Barrenquilla_Mining_Facility", "1" ],
                        ]
                    },
                    new() { MapId = "bigred", MapName = "BigRed", MapWidth = 225, MapHeight = 215,
                        Layers = [
                            [ "Base Map", "BigRed_v2", "1" ],
                        ]
                    },
                    new() { MapId = "chigusa", MapName = "Chigusa", MapWidth = 245, MapHeight = 232,
                        Layers = [
                            [ "Base Map", "desertdam", "1" ],
                        ]
                    },
                    new() { MapId = "desert", MapName = "Desert Outpost", Layers = [
                            [ "Base Map", "desert", "1" ],
                        ]
                    },
                    new() { MapId = "gelidaiv", MapName = "Gelida IV", MapWidth = 175, MapHeight = 220,
                        Layers = [
                            [ "Base Map", "gelida_iv", "1" ],
                        ]
                    },
                    new() { MapId = "icecolony", MapName = "Ice Colony", MapWidth = 202, MapHeight = 210,
                        Layers = [
                            [ "Base Map", "Ice_Colony_v2", "1" ],
                        ]
                    },
                    new() { MapId = "icycaves", MapName = "Icy Caves", MapWidth = 158, MapHeight = 154,
                        Layers = [
                            [ "Base Map", "icy_caves", "1" ],
                        ]
                    },
                    new() { MapId = "lv624", MapName = "LV 624", MapWidth = 220, MapHeight = 180,
                        Layers = [
                            [ "Base Map", "LV624", "1" ],
                        ]
                    },
                    new() { MapId = "lawankaoutpost", MapName = "Lawanka Outpost", MapWidth = 230, MapHeight = 215,
                        Layers = [
                            [ "Base Map", "LawankaOutpost", "1" ],
                        ]
                    },
                    new() { MapId = "magmoordigsiteiv", MapName = "Magmoor Digsite IV", MapWidth = 200, MapHeight = 231,
                        Layers = [
                            [ "Base Map", "Magmoor_Digsite_IV", "1" ],
                        ]
                    },
                    new() { MapId = "minerva", MapName = "Minerva", MapWidth = 145, MapHeight = 96,
                        Layers = [
                            [ "Base Map", "TGS_Minerva", "1" ],
                        ]
                    },
                    new() { MapId = "orion", MapName = "Orion Military Outpost", MapWidth = 170, MapHeight = 130,
                        Layers = [
                            [ "Base Map", "orionoutpost", "1" ],
                        ]
                    },
                    new() { MapId = "pillarofspring", MapName = "Pillar Of Spring", Layers = [
                            [ "Base Map", "TGS_Pillar_of_Spring", "1" ],
                        ]
                    },
                    new() { MapId = "prisonstation", MapName = "Prison Station", Layers = [
                            [ "Base Map", "Prison_Station_FOP", "1" ],
                        ]
                    },
                    new() { MapId = "researchoutpost", MapName = "Research Outpost", MapWidth = 165, MapHeight = 130,
                        Layers = [
                            [ "Base Map", "Research_Outpost", "1" ],
                        ]
                    },
                    new() { MapId = "slumbridge", MapName = "Slumbridge", MapWidth = 200, MapHeight = 179,
                        Layers = [
                            [ "Base Map", "slumbridge", "1" ],
                        ]
                    },
                    new() { MapId = "sulaco", MapName = "Sulaco", Layers = [
                            [ "Base Map", "Sulaco", "1" ],
                        ]
                    },
                    new() { MapId = "theseus", MapName = "TGS Theseus", Layers = [
                            [ "Base Map", "TGS_Theseus", "1" ],
                        ]
                    },
                    new() { MapId = "whiskey_outpost", MapName = "Whiskey Outpost", MapWidth = 121, MapHeight = 135,
                        Layers = [
                            [ "Base Map", "Whiskey_Outpost_v2", "1" ],
                        ]
                    },
                ]
            });

            // WoD13
            CodebaseData.Add("wod13", new() {
                CodebaseId = "wod13",
                CodebaseName = "World of Darkness 13",
                FancySupport = false,
                IsAdult = true,
                GameMaps = [
                    new() { MapId = "sanfran", MapName = "San Francisco", Layers = [
                            [ "Z1", "SanFrancisco", "1" ],
                            [ "Z2", "SanFrancisco", "2" ],
                            [ "Z3", "SanFrancisco", "3" ],
                            [ "Z4", "SanFrancisco", "4" ],
                        ]
                    },
                ]
            });

            // YogStation
            CodebaseData.Add("yog", new() {
                CodebaseId = "yog",
                CodebaseName = "YogStation",
                TextColour = "#eb78a0",
                FancySupport = true,
                IsAdult = false,
                LogoPath = "img/logos/yog.png",
                GameMaps = [
                    new() { MapId = "donutstation", MapName = "DonutStation", Layers = [
                            [ "Base Map", "DonutStation", "1" ],
                        ]
                    },
                    new() { MapId = "icemeta", MapName = "IceMeta", Layers = [
                            [ "Surface", "IceMeta", "3" ],
                            [ "Underground", "IceMeta", "2" ],
                            [ "Caves", "IceMeta", "1" ],
                        ]
                    },
                    new() { MapId = "manatee", MapName = "ManaeteeStation", Layers = [
                            [ "Base Map", "ManateeStation", "1" ],
                        ]
                    },
                    new() { MapId = "mini", MapName = "MiniStation", Layers = [
                            [ "Upper Deck", "MiniStation", "2" ],
                            [ "Lower Deck", "MiniStation", "1" ],
                        ]
                    },
                    new() { MapId = "gaxstation", MapName = "NVS Gax", Layers = [
                            [ "Base Map", "GaxStation", "1" ],
                        ]
                    },
                    new() { MapId = "yogstation", MapName = "YogStation", Layers = [
                            [ "Base Map", "YogStation", "1" ],
                        ]
                    },
                ]
            });
        }
    }
}
