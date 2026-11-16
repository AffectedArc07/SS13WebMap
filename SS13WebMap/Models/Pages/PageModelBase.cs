using SS13WebMap.Models.Backend;

namespace SS13WebMap.Models.Pages {
    public class PageModelBase {
        /// <summary>
        /// Type of parallax we are using on the page.
        /// </summary>
        public ParallaxType ParallaxType { get; set; } = ParallaxType.Fancy;

        /// <summary>
        /// The direction of the parallax effect.
        /// </summary>
        public ParallaxDirection ParallaxDirection { get; set; } = ParallaxDirection.East;

        /// <summary>
        /// The speed modifier of the parallax effect.
        /// </summary>
        public int ParallaxSpeedModifier { get; set; } = 0;

        /// <summary>
        /// Get the parallax direction in a format the JS wants.
        /// </summary>
        /// <returns>The parallax direction as just a letter.</returns>
        public string GetParallaxDirection() {
            return ParallaxDirection switch {
                ParallaxDirection.North => "N",
                ParallaxDirection.East => "E",
                ParallaxDirection.South => "S",
                ParallaxDirection.West => "W",
                _ => "E",// Safety
            };
        }

        /// <summary>
        /// Get the parallax type in a format the JS wants.
        /// </summary>
        /// <returns>The parallax type as either "norm" or "tg".</returns>
        public string GetParallaxType() {
            return ParallaxType switch {
                ParallaxType.Fancy => "tg",
                _ => "norm",
            };
        }
    }
}
