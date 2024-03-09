namespace SS13WebMap.Models.Pages {
    public class ErrorViewModel : PageModelBase {
        public string? RequestId { get; set; }

        public bool ShowRequestId => !string.IsNullOrEmpty(RequestId);
    }
}