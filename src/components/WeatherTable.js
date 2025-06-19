import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureLow, faTemperatureHigh, faBolt } from '@fortawesome/free-solid-svg-icons';

function WeatherTable({ data }) {
  return (
    <div className="weather-table">
      <table>
        <thead>
          <tr>
            {data.map((day, idx) => (
              <th key={idx}>{day.date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {data.map((day, idx) => (
              <td key={idx}>
                <FontAwesomeIcon icon={faTemperatureLow} /> {day.minTemp}°C /{' '}
                <FontAwesomeIcon icon={faTemperatureHigh} /> {day.maxTemp}°C
              </td>
            ))}
          </tr>
          <tr>
            {data.map((day, idx) => (
              <td key={idx}>
                <FontAwesomeIcon icon={faBolt} /> {day.energyKWh} kWh
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default WeatherTable;
