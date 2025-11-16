const data = [
  {
    location: "Dhaka",
    latitude: 23.777176,
    longitude: 90.399452,
  },
  {
    location: "New york",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
  {
    location: "Sylhet",
    latitude: 24.894802,
    longitude: 91.869034,
  },
  {
    location: "Comilla",
    latitude: 23.450001,
    longitude: 91.199997,
  },
  {
    location: "Feni",
    latitude: 23.015913,
    longitude: 91.397583,
  },
  {
    location: "India",
    latitude: 20.5937,
    longitude: 78.9629,
  },
  {
    location: "Pakistan",
    latitude: 30.3753,
    longitude: 69.3451,
  },
];
function getLocation() {
  return data;
}
function getLocationByName(location) {

  if (!location) return null;
  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );
  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}
export { getLocation, getLocationByName };
