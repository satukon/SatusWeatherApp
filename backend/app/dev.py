import weather

forecast = weather.fetch_forecast(
    latitude=62.60118,
    longitude=29.76316,
)

print(forecast)