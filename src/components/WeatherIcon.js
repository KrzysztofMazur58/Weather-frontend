import { FaCloudSun, FaCloudRain, FaSun, FaSnowflake, FaSmog } from 'react-icons/fa';

const getIcon = (code) => {
  if (code >= 0 && code <= 3) return <FaSun />;
  if (code >= 45 && code <= 48) return <FaSmog />;
  if (code >= 51 && code <= 67) return <FaCloudRain />;
  if (code >= 71 && code <= 77) return <FaSnowflake />;
  if (code >= 80 && code <= 99) return <FaCloudRain />;
  return <FaCloudSun />;
};

function WeatherIcon({ code }) {
  return <div style={{ fontSize: '2em' }}>{getIcon(code)}</div>;
}

export default WeatherIcon;
