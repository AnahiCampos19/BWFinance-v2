import React, { useEffect, useState } from "react";
import "../WeatherInfo.css";

const API_KEY = "6e7b2ad77f01007e930d721a0fa6c8d2";

function WeatherInfo() {
  const [weather, setWeather] = useState(null);
  const [localTime, setLocalTime] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("La geolocalización no está soportada.");
      setLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=es`
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.cod !== 200) {
              setError("No se pudo obtener el clima.");
              setLoading(false);
              return;
            }
            setWeather({
              temp: Math.round(data.main.temp),
              desc: data.weather[0].description,
              icon: data.weather[0].icon,
              city: data.name,
              country: data.sys.country,
              timezone: data.timezone,
            });

            // Calcular hora local
            const nowUTC = new Date();
            const localMillis =
              nowUTC.getTime() + nowUTC.getTimezoneOffset() * 60000 + data.timezone * 1000;
            const localDate = new Date(localMillis);
            setLocalTime(
              localDate
                .toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })
                .replace(":", "h ")
            );
            setLoading(false);
          })
          .catch(() => {
            setError("Error de conexión con el clima.");
            setLoading(false);
          });
      },
      () => {
        setError("No se pudo obtener la ubicación.");
        setLoading(false);
      }
    );
  }, []);

  if (loading)
    return (
      <div className="weather-info-widget" style={{ color: "blue" }}>
        WeatherInfo montado - Cargando clima...
      </div>
    );
  if (error)
    return (
      <div className="weather-info-widget" style={{ color: "red" }}>
        <span role="img" aria-label="error">
          ⚠️
        </span>{" "}
        {error}
      </div>
    );

  return (
    <div className="weather-info-widget">
      <div className="weather-location">
        {weather.city}, {weather.country}
      </div>
      <div className="weather-main">
        <img
          src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt={weather.desc}
          style={{ width: 38, height: 38, verticalAlign: "middle" }}
        />
        <span className="weather-temp">{weather.temp}°C</span>
      </div>
      <div className="weather-desc">{weather.desc}</div>
      <div className="weather-time">
        Hora local: <span>{localTime}</span>
      </div>
    </div>
  );
}

export default WeatherInfo;
