export const MAP_STYLE = [
  {
    featureType: "administrative",
    elementType: "geometry.fill",
    stylers: [{ color: "#eaeafe" }],
  },
  {
    featureType: "administrative.country",
    elementType: "geometry.stroke",
    stylers: [{ color: "#2121fc" }],
  },
  {
    featureType: "administrative.land_parcel",
    elementType: "geometry.fill",
    stylers: [{ color: "#bdbdd3" }],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry.fill",
    stylers: [
      { color: "#fcfbfc" },
      { saturation: "-26" },
      { lightness: "27" },
      { gamma: "1.00" },
    ],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry.fill",
    stylers: [{ color: "#e1e1eb" }],
  },
  {
    featureType: "landscape.natural.terrain",
    elementType: "geometry.fill",
    stylers: [{ color: "#859b7e" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi",
    elementType: "labels.icon",
    stylers: [{ color: "#ccc1ba" }],
  },
  {
    featureType: "poi.business",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.medical",
    elementType: "geometry.fill",
    stylers: [{ color: "#e1e1eb" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry.fill",
    stylers: [{ color: "#859b7e" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text",
    stylers: [{ color: "#859b7e" }, { visibility: "off" }],
  },
  {
    featureType: "poi.sports_complex",
    elementType: "geometry.fill",
    stylers: [{ color: "#859b7e" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.fill",
    stylers: [{ color: "#ccc1ba" }],
  },
  {
    featureType: "road",
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#eaeafe" }],
  },
  {
    featureType: "road.highway",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.highway.controlled_access",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels",
    stylers: [{ visibility: "on" }, { hue: "#ff0000" }],
  },
  {
    featureType: "road.arterial",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "geometry.fill",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road.local",
    elementType: "geometry.stroke",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.fill",
    stylers: [{ visibility: "on" }, { saturation: "-4" }, { lightness: "-1" }],
  },
  {
    featureType: "road.local",
    elementType: "labels.text.stroke",
    stylers: [{ visibility: "on" }],
  },
  {
    featureType: "transit.station.airport",
    elementType: "geometry.fill",
    stylers: [{ color: "#e1e1eb" }],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels.text.fill",
    stylers: [{ color: "#000000" }],
  },
  {
    featureType: "transit.station.airport",
    elementType: "labels.icon",
    stylers: [{ color: "#ccc1ba" }],
  },
  {
    featureType: "water",
    elementType: "geometry.fill",
    stylers: [{ color: "#7588ae" }],
  },
];

export const BASE_URL = "http://127.0.0.1:8000";//https://localhost:8000

export const COLOR = { BLUE: "#152AFC", PURPLE: "#DADBFE", RED: "#E53333" };
