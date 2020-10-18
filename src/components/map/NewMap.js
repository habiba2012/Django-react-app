import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from "@react-google-maps/api";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import { SearchIcon } from '../img/search.svg'
import searchInput from '../../hooks/searchInputIcon'
import CustomInfoWindow from "./CustomInfoWindow";
import Api from "../../RestApi";

import "@reach/combobox/styles.css";
import './NewMap.css'
import { BASE_URL, MAP_STYLE } from "../../constants";

const libraries = ["places"];
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
const options = {
    styles: MAP_STYLE,
    disableDefaultUI: true,
    zoomControl: true,
};
const center = {
    lat: 55.692107,
    lng: 12.55565,
};


export default function Map() {
    const history = useHistory();

    const handleClick = () => {
        history.push('/add');
    };
    const handleHelp = () => {
        history.push('/help');
    };

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: "AIzaSyB5S8ostoO0xtwOupbjZSj8aHtVo7LkghM",
        libraries,
    });
    const [markers, setMarkers] = React.useState([]);
    const [selectedShop, setSelectedShop] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(true);
    const fetchMarkers = async () => {
        const data = await Api.getMarkers();
        setMarkers(data);
        setIsLoading(false);
    };

    React.useEffect(() => {
        fetchMarkers();
    }, []);

    const onMapClick = React.useCallback((e) => {
        setMarkers((current) => [
            ...current,
            {
                lat: e.latLng.lat(),
                lng: e.latLng.lng(),
                time: new Date(),
            },
        ]);
    }, []);

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Loading...";


    return (
        <div>


            {/* <Locate panTo={panTo} /> */}
            <Search panTo={panTo} />

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={12}
                npm run center={center}
                options={options}
                onClick={() => {
                    selectedShop && setSelectedShop(null);
                }}
                onLoad={onMapLoad}
            >
                {!isLoading &&
                    markers.map((shop) => (
                        <Marker
                            key={shop.id}
                            position={{ lat: shop.lat, lng: shop.lng }}
                            onClick={() => {
                                setSelectedShop(shop);
                            }}
                            icon={{
                                url: BASE_URL + shop.marker_img[0],
                                scaledSize: new window.google.maps.Size(40, 40),
                            }}
                        />
                    ))}

                {selectedShop ? (
                    <InfoWindow
                        position={{ lat: selectedShop.lat, lng: selectedShop.lng }}
                        onCloseClick={() => {
                            setSelectedShop(null);
                        }}
                    >
                        <CustomInfoWindow shop={selectedShop} />

                    </InfoWindow>
                ) : null}
            </GoogleMap>
            <Button onClick={handleClick}>+</Button>
            <Button style={{ top: "80px" }} onClick={handleHelp}>?</Button>




        </div>
    );
}

/* function Locate({ panTo }) {
    return (
        <button
            className="locate"
            onClick={() => {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        panTo({
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        });
                    },
                    () => null
                );
            }}
        >
            <img src="/compass.svg" alt="compass" />
        </button>
    );
} */

function Search({ panTo }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 43.6532, lng: () => -79.3832 },
            radius: 100 * 1000,
        },
    });

    // https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

    const handleInput = (e) => {
        setValue(e.target.value);
    };

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        try {
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            panTo({ lat, lng });
        } catch (error) {
            console.log("😱 Error: ", error);
        }
    };
    const [toggleSearch] = searchInput();
    return (
        <div className="search">
            <Combobox onSelect={handleSelect}>
                <ComboboxInput
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                    placeholder="where"
                    type={toggleSearch}
                />
                <span className="search-img">{SearchIcon}</span>
                <ComboboxPopover>
                    <ComboboxList style={{ textTransform: "none" }}>
                        {status === "OK" &&
                            data.map(({ id, description }) => (
                                <ComboboxOption key={id} value={description} />
                            ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>

        </div>
    );
}

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border-radius: 30px;
  background-color: #152afc;
  color: white;
  font-weight: bold;
  transition: 200ms;
  text-decoration: none;
  position: absolute;
  bottom: 36px;
  right: 26px;
  /* z-index: 11; */
  border: none;
  font-size: 25px;
  outline: none;

  :hover {
    background-color: #dadbfe;
    color: #666;
    cursor: pointer;
  }
`;