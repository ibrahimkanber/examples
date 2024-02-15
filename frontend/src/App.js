import React, { useState } from "react";
import {
  DropDown,
  FlexRowContainer,
  FormSectionHeader,
  SubmitButton,
} from "./components";
import "./App.css";
import {
  countyIdType,
  customerType,
  netzProviderOptionType,
  orderType,
  rateChangeType,
  streetOptionType,
} from "./config/formEnums";
import { RateChange } from "./components/form/Sections/RateChange";
import { OrderAndCustomerType } from "./components/form/Sections/OrderAndCustomerType";
import { Consum } from "./components/form/Sections/Consum";
import { tarifServices } from "./services";
import { ConsumButtons } from "./components/form/Sections/ConsumButtons";

const EnergyForm = () => {
  const [formData, setFormData] = useState({
    rate_change_type: rateChangeType.CHANGE.value,
    order_type: orderType.ELECTRIC.value,
    customer_type: customerType.PRIVATE.value,
    country_id: countyIdType.GERMANY.value,
    postal_code: "",
    city: "",
    street: "",
    street_number: "",
    network_operator: "default",
    consum: 0,
    consum_nt: "",
    streets: streetOptionType,
    netz_providers: netzProviderOptionType,
  });

  const handleInputChange = (e) => {
    if (e.target.id === "postal_code") {
      console.log("jasdjas");
      getCity(e.target.value);
    }
    if (e.target.id === "street_number") {
      getOrderProviderNetzList(e.target.value);
    }
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the formData to a server
  };

  const getCity = async (postal_code) => {
    const isCityFetchRequire =
      (formData.country_id == countyIdType.GERMANY.value &&
        postal_code.length == 5) ||
      (formData.country_id == countyIdType.AUSTRIA.value &&
        postal_code.length == 4);
    if (!isCityFetchRequire) {
      return;
    }

    try {
      const cityResponse = await tarifServices.getCities(
        postal_code,
        formData.country_id
      );
      const city = cityResponse?.data?.result[0]?.city ?? "";
      const streetsResponse = await tarifServices.getStreets(
        postal_code,
        city,
        formData.country_id
      );
      const formattedStreets = streetsResponse.data.result.map((el) => ({
        value: el.street,
        label: el.street,
      }));
      setFormData((prev) => ({ ...prev, city, streets: formattedStreets }));
    } catch (error) {}
  };
  const getOrderProviderNetzList = async (house_number) => {
    try {
      const netztProviderResponse = await tarifServices.getProviderList(
        formData,
        124
      );
      const formattedProviders = netztProviderResponse?.data?.result.map(
        (n) => ({
          value: n.netzId,
          label: n.netzName,
        })
      );
      setFormData((prev) => ({ ...prev, netz_providers: formattedProviders }));
    } catch (error) {}
  };

  return (
    <form onSubmit={handleSubmit} className="energy-form">
      <FormSectionHeader label="Berechnungsbasis" />
      <RateChange formData={formData} handleInputChange={handleInputChange} />
      <OrderAndCustomerType
        formData={formData}
        handleInputChange={handleInputChange}
      />

      <FlexRowContainer>
        <input
          placeholder="PLZ"
          value={formData.postal_code}
          type="number"
          min={0}
          id="postal_code"
          onChange={handleInputChange}
        />

        <DropDown
          id="city"
          onChange={handleInputChange}
          options={[{ label: formData.city, value: formData.city }]}
        />
      </FlexRowContainer>

      <FlexRowContainer>
        <DropDown
          id="street"
          value={formData.street}
          onChange={handleInputChange}
          options={formData.streets}
        />
        <input
          placeholder="Nr"
          value={formData.street_number}
          type="number"
          min={0}
          id="street_number"
          onChange={handleInputChange}
        />
      </FlexRowContainer>
      <FlexRowContainer>
        <DropDown
          value={formData.network_operator}
          id="network_operator"
          onChange={handleInputChange}
          options={formData.netz_providers}
        />
      </FlexRowContainer>
      <FormSectionHeader label="Verbrauch" />
      <ConsumButtons setFormData={setFormData} />
      <Consum formData={formData} handleInputChange={handleInputChange} />
      <SubmitButton label="Calculate" />
    </form>
  );
};

export default EnergyForm;
