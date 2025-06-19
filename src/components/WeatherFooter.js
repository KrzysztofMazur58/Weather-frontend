import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThermometerHalf, faChartLine, faSun, faFileAlt } from '@fortawesome/free-solid-svg-icons';

function WeatherFooter({ summary }) {
  return (
    <div className="weather-footer">
      <h3>Podsumowanie tygodnia</h3>
      <p>
        <FontAwesomeIcon icon={faThermometerHalf} /> Temperatury: {summary.minTemperature}°C – {summary.maxTemperature}°C
      </p>
      <p>
        <FontAwesomeIcon icon={faChartLine} /> Średnie ciśnienie: {summary.avgPressure} hPa
      </p>
      <p>
        <FontAwesomeIcon icon={faSun} /> Średni czas nasłonecznienia: {summary.avgSunshine} h
      </p>
      <p>
        <FontAwesomeIcon icon={faFileAlt} /> Komentarz: {summary.summary}
      </p>
    </div>
  );
}

export default WeatherFooter;


