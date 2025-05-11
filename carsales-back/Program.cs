var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseAuthorization();

app.MapControllers();

app.UseCors(builder => builder
    .WithOrigins("http://localhost:4200").AllowAnyHeader().AllowAnyMethod()
);

app.Run(); 
