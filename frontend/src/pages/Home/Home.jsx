import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import { FaSearchLocation, FaPlus } from "react-icons/fa";
import {
  GetAllCities,
  GetDijkstraResult,
  GetDistance,
} from "../../services/cities.services";
import mapIcon from "../../utils/mapIcon";
import images from "../../utils/images.js";
import "./index.css";

let temporaryArray = [];

const Home = () => {
  const [cities, setCities] = useState();
  const [selectedCities, setSelectedCities] = useState({
    start: null,
    end: null,
  });
  const [dijkstra, setDijkstra] = useState();
  const [results, setResults] = useState([]);
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState(0);
  const [productWeight, setProductWeight] = useState(0);
  const [maxWeight, setMaxWeight] = useState(0);

  useEffect(() => {
    handleAllCities();
  }, []);

  const handleAllCities = async () => {
    const citiesTemp = (await GetAllCities()).data;
    setCities(citiesTemp);
  };

  const handleMaxWeight = (e) => {
    console.log(e);
    setMaxWeight(Number(e));
  };

  const handleProductName = (e) => {
    console.log(e);
    setProductName(e);
  };

  const handleProductWeight = (e) => {
    console.log(e);
    setProductWeight(Number(e));
  };

  const handleProductValue = (e) => {
    console.log(e);
    setProductValue(Number(e));
  };

  const handleProduct = () => {
    const aux = {
      name: productName,
      value: productValue,
      weight: productWeight,
    };
    !aux.name && alert("Insira o nome do produto");
    !aux.value && alert("Insira o valor do produto");
    !aux.weight && alert("Insira o peso do produto");
    aux.name && aux.value && aux.weight && setProducts([...products, aux]);
  };

  const handleSearchRoute = async () => {
    !(selectedCities.start || selectedCities.end) &&
      alert("Selecione o ponto de partida e o ponto de destino");

    products.length === 0 && alert("Registre um produto!");
    const payload = {
      start: selectedCities.start,
      end: selectedCities.end,
      products: products,
      maxWeight: maxWeight,
    };

    if (products.length >= 1 && payload.maxWeight > 0) {
      const dijkstraTemp = (
        await GetDijkstraResult(payload)
      ).data;
      console.log("dijkstraTemp RETURN", dijkstraTemp)
      handleDistance(dijkstraTemp);
      setDijkstra(dijkstraTemp);
    }
  };

  const handleDistance = async (dijkstraTemp) => {
    let defaultTemplate = {
      start: null,
      end: null,
      distance: 0,
    };
    let res = 0;
    temporaryArray = [];
    for (let index = 0; index <= dijkstraTemp.nodesInfo.length - 2; index++) {
      console.log(dijkstraTemp.nodesInfo[index]);
      res = (
        await GetDistance(
          dijkstraTemp.nodesInfo[index].zip,
          dijkstraTemp.nodesInfo[index + 1].zip
        )
      ).data;
      defaultTemplate.start =
        dijkstraTemp.nodesInfo[index].city +
        " - " +
        dijkstraTemp.nodesInfo[index].state;
      defaultTemplate.end =
        dijkstraTemp.nodesInfo[index + 1].city +
        " - " +
        dijkstraTemp.nodesInfo[index + 1].state;
      defaultTemplate.distance = res;
      temporaryArray.push(defaultTemplate);
      defaultTemplate = {};
    }

    setResults(temporaryArray);
  };

  return (
    <div className="home-container">
      <div className="home-sidebar">
        <div className="sidebar-title text-center">
          <h1>
            Entrega Rápida <img src={images.DeliveryTruck} />
          </h1>
        </div>
        <div className="sidebar-header">
          <div className="text-center" style={{ display: "block" }}>
            <label htmlFor="peso-maximo">Peso máximo</label>
            <input
              type="number"
              name=""
              id="peso-maximo"
              placeholder="Ex: 70"
              className="form-control p-2 mb-2"
              onChange={(e) => handleMaxWeight(e.target.value)}
            />

            <div className="row">
              <div className="col-6">
                <select
                  name="status"
                  id="status"
                  className="form-control p-2"
                  defaultValue="Selecione o ponto de partida"
                  onChange={(e) =>
                    setSelectedCities((prevState) => ({
                      ...prevState,
                      start: e.target.value,
                    }))
                  }
                >
                  <option value="start">Ponto de partida</option>
                  {cities &&
                    cities.map((citie, index) => (
                      <option value={citie.zipcode} key={index}>
                        {citie.name} - {citie.state}
                      </option>
                    ))}
                </select>
              </div>
              <div className="col-6">
                <select
                  name="status"
                  id="status"
                  className="form-control p-2"
                  defaultValue="Selecione o ponto de partida"
                  onChange={(e) =>
                    setSelectedCities((prevState) => ({
                      ...prevState,
                      end: e.target.value,
                    }))
                  }
                >
                  <option value="end">Ponto de destino</option>
                  {cities &&
                    cities.map((citie, index) => (
                      <option value={citie.zipcode} key={index}>
                        {citie.name} - {citie.state}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-6">
                <label htmlFor="peso-maximo">Nome do Produto</label>
                <input
                  type="text"
                  name={productName}
                  id="peso-maximo"
                  className="form-control p-2 mb-2"
                  placeholder="Ex: Iphone"
                  onChange={(e) => handleProductName(e.target.value)}
                  required
                />
              </div>
              <div className="col-6">
                {" "}
                <label htmlFor="peso-maximo">Peso do Produto</label>
                <input
                  type="number"
                  name={productWeight}
                  id="peso-maximo"
                  className="form-control p-2 mb-2"
                  placeholder="Ex: 50"
                  onChange={(e) => handleProductWeight(e.target.value)}
                  required
                />
              </div>
              <div className="col-12">
                {" "}
                <label htmlFor="peso-maximo">Valor do Produto</label>
                <input
                  type="number"
                  name={productValue}
                  id="peso-maximo"
                  placeholder="Ex: 15"
                  className="form-control p-2 mb-2"
                  onChange={(e) => handleProductValue(e.target.value)}
                  required
                />
              </div>
              <div className="col-7">
                <button onClick={() => handleProduct()}>
                  Adicionar Produto <FaPlus color="#fff" size={20} />
                </button>
              </div>
              <div className="col-5">
                <button onClick={() => handleSearchRoute()}>
                  Buscar rota{" "}
                  <FaSearchLocation
                    color="#fff"
                    size={20}
                    style={{ marginLeft: 5 }}
                  />{" "}
                </button>
              </div>
            </div>
            <div className="products-list mt-2">
              {products &&
                products.map((p, index) => (
                  <p className="p-0 m-0">
                    <span>Nome: </span> {p.name} - <span>Peso: </span>
                    {p.weight} - <span>Valor: </span> {p.value}
                  </p>
                ))}
            </div>
            <div className="results">
                
            </div>
            <div className="sidebar-results">
              {temporaryArray.length > 1 && (
                <div className="text-center header">
                  <p>Rota</p>
                </div>
              )}
              {temporaryArray.length > 1 &&
                temporaryArray.map((c, e) => (
                  <div key={e} className="routes">
                    <p id="start">
                      De: <span>{c.start}</span>{" "}
                    </p>
                    <p id="end">
                      Para: <span>{c.end}</span>{" "}
                    </p>
                    <p id="distance">
                      Distance: <span>{c.distance}km</span>
                    </p>
                  </div>
                ))}
              {temporaryArray.length > 1 && (
                <div className="text-center footer">
                  <p>
                    Distancia Final:{" "}
                    <span>{dijkstra && dijkstra.totalDistance}km</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <fildset>
          <MapContainer
            style={{ width: "100%", height: "100%" }}
            center={[40.3350942, -97.3138203]}
            zoom={5.3}
          >
            <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            {dijkstra &&
              dijkstra.nodesInfo &&
              dijkstra.nodesInfo.map((p, index) => (
                <Marker
                  key={index}
                  interactive={false}
                  icon={mapIcon}
                  position={[p.latitude, p.longitude]}
                />
              ))}
            {position.latitude !== 0 && (
              <Marker
                interactive={false}
                icon={mapIcon}
                position={[position.latitude, position.longitude]}
              />
            )}
          </MapContainer>
        </fildset>
      </div>
    </div>
  );
};

export default Home;
