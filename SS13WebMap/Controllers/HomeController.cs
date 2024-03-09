using Microsoft.AspNetCore.Mvc;
using SS13WebMap.Models;
using SS13WebMap.Models.Pages;
using SS13WebMap.Models.Backend;
using System.Diagnostics;

namespace SS13WebMap.Controllers {
    public class HomeController : Controller {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger) {
            _logger = logger;
        }

        /// <summary>
        /// The homepage route
        /// </summary>
        public IActionResult Index() {
            PageModelBase base_page = new() {
                ParallaxType = ParallaxType.Fancy,
                ParallaxDirection = ParallaxDirection.East,
                ParallaxSpeedModifier = 0
            };
            return View("Index", base_page);
        }

        /// <summary>
        /// Handles error showing
        /// </summary>
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error() {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}