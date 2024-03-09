namespace SS13WebMap {
    public class Program {
        public static void Main(string[] args) {
            // Create builder
            WebApplicationBuilder builder = WebApplication.CreateBuilder(args);

            // Add controllers and razor runtime compilation
            builder.Services.AddControllersWithViews();
            builder.Services.AddRazorPages().AddRazorRuntimeCompilation();

            WebApplication app = builder.Build();

            // Configure some extra stuff
            if (!app.Environment.IsDevelopment()) {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthorization();

            // Map our controllers
            app.MapControllers();
            app.MapControllerRoute(
                name: "default",
                pattern: "{controller=Home}/{action=Index}");

            app.Run();
        }
    }
}