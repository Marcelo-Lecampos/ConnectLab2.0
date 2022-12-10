import { useAutenticacao } from "@context/Autenticacao";
import axios from "axios";
import { useEffect } from "react";
import { TempoContainer } from "./Weather.styles";
import { useDevices } from "@context/DevicesContext";
import { SkeletonWeather } from "@components/";


// Import imgs 🖼:
import sunny from "@assets/sunny.jpg";
import cloudy from "@assets/cloudy.jpg";
import mist from "@assets/mist.jpg";
import rain from "@assets/rain.jpg";

export const Weather = (props) => {
  const { user } = useAutenticacao();
  const keyApi = "5940c7d6c6fa3a30c0b627f8d47278e9";
  const cidade = user.userAddress.city;
  const estado = user.userAddress.state;
  const { data, setData } = useDevices();

  const URL_TEMPO = `https://api.openweathermap.org/data/2.5/forecast?q=${cidade},br&appid=${keyApi}&units=metric`;
  useEffect(() => {
    // SetWeatherLoading(true);
    axios
      .get(URL_TEMPO)
      .then((response) => {
        setData(response.data.list[0]);
      })
      // .then((curr) => {  SetWeatherLoading(false)})
      .catch((err) => console.log(err))
      .finally((curr) => {
        // SetWeatherLoading(false);
      });
  }, [URL_TEMPO]); // eslint-disable-line react-hooks/exhaustive-deps

  if (!data) {
    return <SkeletonWeather />;
  }

  function weatherID(weatherID) {
    if (weatherID >= 200 && weatherID < 700) return rain;
    if (weatherID >= 700 && weatherID < 800) return mist;
    if (weatherID === 800) return sunny;
    if (weatherID > 800) return cloudy;
  }

  // 

  return (
    <>
    <TempoContainer bg={weatherID(data?.weather[0]?.id)}>
        <div>
          <img
            src={`https://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`}
            alt="imagem clima"
          />
          <h1>{Math.round(data?.main.temp)}°C</h1>
        </div>
        <div>
          <span>Mínimo: {Math.round(data?.main.temp_min)}°C</span>
          <span>Máximo: {Math.round(data?.main.temp_max)}°C</span>
        </div>

        <span>
          {cidade} | {estado}{" "}
        </span>

        <ul>
          <li>Sensação Térmica: {Math.round(data?.main.feels_like)}°C</li>
          <li>
            Precipitação: {`${data?.rain ? data?.rain["3h"] : 0}`}
            mm |
          </li>
          <li>Umidade: {data?.main.humidity}%</li>
          <li>Pressão: {data?.main.pressure} hPa</li>
          <li>Visibilidade: {data?.visibility} m</li>
          <li>Índice de Nuvens: {data?.clouds.all}%</li>
          <li>Índice de Umidade : {data?.main.humidity}%</li>
          <li>Chance de Chuva: {`${data?.pop ? data?.pop : 0 * 100}%`}</li>
          <li>Velocidade do Vento: {data?.wind.speed} m/s</li>
        </ul>
      </TempoContainer>
    </>
  );
};

