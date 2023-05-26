using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using AutoMapper;
namespace back;
public class Startup
{
    private readonly string myCors = "";
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy(name: myCors, builder =>
            {
                builder.SetIsOriginAllowed(origin => new Uri(origin).Host == "localhost").AllowAnyHeader().AllowAnyMethod();
            });
        });

        services.AddControllers();
        services.AddAutoMapper(typeof(Startup));

        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo { Title = "P16API", Version = "v1" });
        });
        services.AddDbContext<AppDbContext>(options => options.UseSqlServer(
                 Configuration.GetConnectionString("connectionString")));

        services.AddScoped<Services.UserService>();
        services.AddScoped<Services.CategoryService>();
        services.AddScoped<Services.ComentService>();
        services.AddScoped<Services.EventService>();
       
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
            app.UseSwagger();
            app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "P16API v1"));
        }

        app.UseRouting();
        app.UseCors(myCors);

        app.UseAuthorization();

        app.UseEndpoints(endpoints =>
        {
            endpoints.MapControllers();
        });
    }
}
