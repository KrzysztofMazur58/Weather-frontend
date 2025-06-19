import React, { useEffect, useState } from 'react';
import WeatherTable from './components/WeatherTable';
import WeatherFooter from './components/WeatherFooter';
import { getForecast, getSummary } from './services/weatherService';
import './App.css';
import 'leaflet/dist/leaflet.css';
import LocationPickerMap from './components/LocationPickerMap';

function App() {
  const [forecast, setForecast] = useState([]);
  const [summary, setSummary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-bg' : '';
  }, [darkMode]);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (location) {
      (async () => {
        try {
          const daily = await getForecast(location.lat, location.lng);
          const sum = await getSummary(location.lat, location.lng);
          setForecast(daily.forecasts);
          setSummary(sum);
        } catch (err) {
          console.error("Błąd podczas pobierania danych pogodowych:", err);
          setError("Nie udało się pobrać prognozy.");
          setForecast([]);
          setSummary(null);
        } finally {
          setLoading(false);
        }
      })();
    } else {

      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          const { latitude, longitude } = pos.coords;

          try {
            const daily = await getForecast(latitude, longitude);
            const sum = await getSummary(latitude, longitude);
            setForecast(daily.forecasts);
            setSummary(sum);
          } catch (err) {
            console.error("Błąd podczas pobierania danych pogodowych:", err);
            setError("Nie udało się pobrać prognozy.");
          } finally {
            setLoading(false);
          }
        },
        (err) => {
          console.error("Nie można uzyskać lokalizacji:", err);
          setError("Nie udało się uzyskać lokalizacji.");
          setLoading(false);
        }
      );
    }
  }, [location]);

  return (
    <div className="App">
      <h1>Prognoza pogody na 7 dni</h1>

      <button onClick={() => setDarkMode(!darkMode)} style={{ marginBottom: '1rem' }}>
        {darkMode ? 'Jasny motyw' : 'Ciemny motyw'}
      </button>

      <LocationPickerMap onLocationSelect={setLocation} />

      {loading && <p>Ładowanie danych pogodowych...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          <WeatherTable data={forecast} />
          <WeatherFooter summary={summary} />
        </>
      )}
    </div>
  );
}

export default App;




