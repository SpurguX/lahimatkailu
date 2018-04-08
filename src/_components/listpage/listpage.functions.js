import { getDistance } from 'geolib';
import { precisionRound } from '../../_helpers';

export function targetIcon(type) {
  if (type === 'Ruoka') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png';
  } else if (type === 'Nähtävyys') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png';
  } else if (type === 'Palvelu') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/realestate.png';
  }
}

export function filter(data, location, filters, checkboxes) {
  const { filterSlider, filterText } = filters;
  let filteredData = [];
  for (var _id in data) {
    if (
      sliderFilter(data[_id], location.location, filterSlider) &&
      checkboxFilter(data[_id], checkboxes) &&
      textFilter(data[_id], filterText)
    ) {
      filteredData.push(data[_id]);
    }
  }
  return filteredData;
}

function checkboxFilter(item, checkboxes) {
  const { food, service, sight } = checkboxes.values;
  return (
    (food && item.type == 'Ruoka') ||
    (sight && item.type == 'Nähtävyys') ||
    (service && item.type == 'Palvelu')
  );
}

function sliderFilter(item, location, slider) {
  // user's location
  const { Latitude, Longitude } = location;
  let range = precisionRound(
    getDistance(
      { latitude: Latitude, longitude: Longitude },
      { latitude: item.location.latitude, longitude: item.location.longitude }
    ) / 1000,
    1
  );
  console.log(range)
  return range >= slider[0] && range <= slider[1];
}

function textFilter(item, text) {
  if (text !== '') {
    return (
      item.name.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
      item.type.toUpperCase().indexOf(text.toUpperCase()) > -1 ||
      item.address.city.toUpperCase().indexOf(text.toUpperCase()) > -1
    );
  } else {
    return true;
  }
}
