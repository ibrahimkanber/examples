import React, { useEffect, useState } from "react";
import { FlexRowContainer } from "./components";
import axios from "axios";
import { DropDown } from "./components/form/DropDown";
import "./App.css";
import { Person } from "./components/icons/Person";

const ConsumeButton = ({ personCount = 1, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        backgroundColor: "white",
        color: "black",
        border: "1px solid gray",
        justifyContent: "space-between",
      }}
    >
      {[...Array(personCount).keys()].map((el) => (
        <Person />
      ))}
    </button>
  );
};

const SubmitButton = ({ label = "submiasdsat" }) => {
  return (
    <button style={{ flex: 1, width: "100%" }} type="submit">
      {label}
    </button>
  );
};

const FormSectionTitle = ({ label }) => {
  return <h2>{label}</h2>;
};
const EnergyForm = () => {
  const [formData, setFormData] = useState({
    supplierChange: "default",
    type: "private",
    country: "Germany",
    postalCode: "",
    city: "",
    street: "",
    streetNumber: "",
    networkOperator: "default",
    consumption: "",
    consumptionNT: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Here you would typically send the formData to a server
  };

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://gateway.eg-on.com/cities/07745",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ2WGZMQ05DRTJ5SEpaQUV5UiIsImFwcElkIjoia0ZNelk5WkRxb2s1NUVIYXciLCJzZXJ2aWNlTmFtZSI6IlVzZXJTZXJ2aWNlIiwiZWdvbkFwaUtleSI6IjgyYjk2MjMyYjQyMTA4ZjdmZGJiMjY3YTg5NjQxOWIyIiwiaWF0IjoxNTUwODQ5NTIxfQ.ht-LPAhxwTnbdUn3uBYwuayib-YRfZi8r3qNQWmTTl8",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <form onSubmit={handleSubmit} className="energy-form">
      <FormSectionTitle label="Berechnungsbasis" />
      <FlexRowContainer>
        {/* 1 */}
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </FlexRowContainer>

      {/* 2 */}
      <FlexRowContainer>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />

        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </FlexRowContainer>
      {/* 3 */}
      <FlexRowContainer>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </FlexRowContainer>
      {/* 4 */}
      <FlexRowContainer>
        <input placeholder="PLZ" style={{ fontSize: "18px" }} />

        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </FlexRowContainer>
      {/* 5 */}
      <FlexRowContainer>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
        <input placeholder="Nr" style={{ fontSize: "18px" }} />
      </FlexRowContainer>
      {/* 6 */}
      <FlexRowContainer>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </FlexRowContainer>
      <FormSectionTitle label="Verbrauch" />
      <FlexRowContainer>
        <ConsumeButton personCount={1} onClick={() => null} />
        <ConsumeButton personCount={2} onClick={() => null} />
        <ConsumeButton personCount={3} onClick={() => null} />
        <ConsumeButton personCount={4} onClick={() => null} />
      </FlexRowContainer>

      <FlexRowContainer>
        <input defaultValue={3400} style={{ fontSize: "18px" }} className="input-full" />
        <input placeholder="NT (kWh/Jahr)" style={{ fontSize: "18px" }} className="input-full" />
      </FlexRowContainer>
      <SubmitButton label="Calculate" />
    </form>
  );
};

export default EnergyForm;
