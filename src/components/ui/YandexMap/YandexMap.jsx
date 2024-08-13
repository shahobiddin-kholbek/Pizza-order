import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import { useState } from "react";
import axios from "axios";

export default function YandexMap() {
  const [coordinate, setCoordinate] = useState([
    38.58575886741487, 68.78782399999989,
  ]);
  const [address, setAddress] = useState("");
  const [places, setPlaces] = useState([]);
  const [zoom, setZoom] = useState(12);

  const handleSearchClick = async (e) => {
    e.preventDefault();
    if (address) {
      try {
        // Поиск улицы в Душанбе
        const searchQuery = `${address}, Душанбе`;

        const response = await axios.get(
          `https://geocode-maps.yandex.ru/1.x/?apikey=b5e4a7a8-d82e-4c3f-b9f2-6780d6229a2d&format=json&geocode=${encodeURIComponent(
            searchQuery
          )}`
        );

        const geoObjects =
          response.data.response.GeoObjectCollection.featureMember;

        if (geoObjects.length > 0) {
          const geoObject = geoObjects[0].GeoObject;
          const coords = geoObject.Point.pos.split(" ").map(Number).reverse();

          setCoordinate(coords);

          // Поиск объектов на улице
          const placesResponse = await axios.get(
            `https://search-maps.yandex.ru/v1/?apikey=b5e4a7a8-d82e-4c3f-b9f2-6780d6229a2d&text=${encodeURIComponent(
              address
            )}&type=biz&ll=${coords.join(",")}&spn=0.005,0.005&lang=ru_RU`
          );

          setPlaces(placesResponse.data.features);
          console.log(placesResponse.data.features);
          
          setZoom(15);
        } else {
          console.error("Не удалось найти адрес");
        }
      } catch (error) {
        console.error("Ошибка при поиске адреса", error);
      }
    }
  };

  return (
    <div className="fixed overflow-hidden top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="absolute border-2 rounded-[20px] z-20 bg-white flex justify-between max-h-[606px] max-w-[1056px] w-full h-full">
        <form
          onSubmit={handleSearchClick}
          action=""
          className="p-[24px] max-w-[450px] flex flex-col justify-between items-center w-full h-full"
        >
          <div className="flex flex-col w-full gap-4">
            <h1 className="text-[36px] mb-4 font-semibold leading-[40px] w-full">
              Новый адрес
            </h1>
            <label>
              <input
                type="text"
                className="border h-[56px] w-full rounded-xl caret-[#FF6900] font-semibold outline-none px-[15px]"
                placeholder="Улица в Душанбе"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="w-full mt-4 px-[48px] py-[12px] bg-[#FF6900] text-white rounded-[9999px] select-none"
            >
              Найти объекты
            </button>
          </div>
        </form>
        <YMaps query={{ apikey: "b5e4a7a8-d82e-4c3f-b9f2-6780d6229a2d" }}>
          <Map
            state={{
              center: coordinate,
              zoom: zoom,
            }}
            className="w-full max-w-[610px] h-full"
          >
            <Placemark geometry={coordinate} />
            {places.map((place) => (
              <Placemark
                key={place.id}
                geometry={place.geometry.coordinates.reverse()}
                properties={{
                  balloonContent: place.properties.CompanyMetaData.name,
                }}
              />
            ))}
          </Map>
        </YMaps>
      </div>
    </div>
  );
}
