namespace SS13WebMap.Models.Codebase {
    public class Codebase {
        /// <summary>
        /// Internal ID of the codebase, set to the same as its lookup value in the <see cref="CodebaseData"/> dictionary.
        /// </summary>
        public string CodebaseId { get; set; }

        /// <summary>
        /// The friendly name of the codebase
        /// </summary>
        public string CodebaseName { get; set; }

        /// <summary>
        /// The colour of the text on the front screen, if any.
        /// </summary>
        public string TextColour { get; set; }

        /// <summary>
        /// The path of the logo, if any.
        /// </summary>
        public string LogoPath { get; set; }

        /// <summary>
        /// Does this codebase declare itself adult?
        /// </summary>
        public bool IsAdult { get; set; }

        /// <summary>
        /// Does this codebase use fancy support?
        /// </summary>
        public bool FancySupport { get; set; }

        /// <summary>
        /// Maps this codebase has, if any.
        /// </summary>
        public List<GameMap> GameMaps { get; set; }
    }
}
