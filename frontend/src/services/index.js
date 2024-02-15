import axios from "axios";

const getCities = async (postal_code, country_id) => {
  return await axios.request({
    ...api_config,
    url: `cities/${postal_code}?country=${country_id}`,
  });
};
const getStreets = async (postal_code, city, country_id) => {
  return await axios.request({
    ...api_config,
    url: `streets/${postal_code}/${city}?country=${country_id}`,
  });
};

export const tarifServices = {
  getStreets,
  getCities,
};
