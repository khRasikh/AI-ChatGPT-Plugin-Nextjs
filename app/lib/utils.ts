export async function getWeatherData(location: string) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${encodeURIComponent(location)}&aqi=no`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error(`Weather API request failed with status ${response.status}`);
  }
  return response.json();
}
