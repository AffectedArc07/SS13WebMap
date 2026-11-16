using SS13WebMap.Models.Codebase;

namespace SS13WebMap.Services {
    public interface ICodebaseDataService {
        public Dictionary<string, Codebase> GetCodebases();
        public int GetTotalCodebases();
        public int GetTotalMaps();
        public int GetTotalNormalLayers();
        public int GetTotalPipeLayers();
        public int GetTotalLayers();
    }
}
