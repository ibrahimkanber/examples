import axios from "axios";
import { api_config } from "../config/axiosConfig";

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
const getProviderList = async (
  formData,selectedHouseNumber
) => {
  return await axios.request({
    ...api_config,
    url: `netzProvider/?zip=${formData.postal_code}&city=${formData.city}&street=${formData.street}&houseNumber=${selectedHouseNumber}&branch=${formData.order_type}&country=${formData.country_id}`,
  });
};

export const tarifServices = {
  getStreets,
  getCities,
  getProviderList
};
