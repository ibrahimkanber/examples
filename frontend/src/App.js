import React, { useEffect, useState } from "react";
import "./App.css";
import { FlexRowContainer } from "./components";
import axios from "axios";
const FlexRowChildContainer = ({ children }) => {
  return <div style={{ flex: 1 }}>{children}</div>;
};

const DropDown = ({ value, onChange, options }) => {
  return (
    <select
      name="supplierChange"
      value={value}
      onChange={onChange}
      style={{ fontSize: "18px" }}
    >
      {options.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </select>
  );
};

const ConsumeButton = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        backgroundColor: "white",
        color: "black",
        border: "1px solid gray",
      }}
    >
      {label}
    </button>
  );
};

const SubmitButton = ({ label = "submit" }) => {
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
         
      }
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
      <div>
        {/* 1 */}
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </div>

      {/* 2 */}
      <FlexRowContainer>
        <FlexRowChildContainer>
          <DropDown
            onChange={() => null}
            options={[
              { label: "Liefer bilmemmneyi", value: "liefer" },
              { label: "Ibrahim", value: "ibrahim" },
            ]}
          />
        </FlexRowChildContainer>
        <FlexRowChildContainer>
          <DropDown
            onChange={() => null}
            options={[
              { label: "Liefer bilmemmneyi", value: "liefer" },
              { label: "Ibrahim", value: "ibrahim" },
            ]}
          />
        </FlexRowChildContainer>
      </FlexRowContainer>
      {/* 3 */}
      <div>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </div>
      {/* 4 */}
      <FlexRowContainer>
        <FlexRowChildContainer>
          <input placeholder="PLZ" style={{ fontSize: "18px" }} />
        </FlexRowChildContainer>
        <FlexRowChildContainer>
          <DropDown
            onChange={() => null}
            options={[
              { label: "Liefer bilmemmneyi", value: "liefer" },
              { label: "Ibrahim", value: "ibrahim" },
            ]}
          />
        </FlexRowChildContainer>
      </FlexRowContainer>
      {/* 5 */}
      <FlexRowContainer>
        <FlexRowChildContainer>
          <DropDown
            onChange={() => null}
            options={[
              { label: "Liefer bilmemmneyi", value: "liefer" },
              { label: "Ibrahim", value: "ibrahim" },
            ]}
          />
        </FlexRowChildContainer>
        <FlexRowChildContainer>
          <input placeholder="Nr" style={{ fontSize: "18px" }} />
        </FlexRowChildContainer>
      </FlexRowContainer>
      {/* 6 */}
      <div>
        <DropDown
          onChange={() => null}
          options={[
            { label: "Liefer bilmemmneyi", value: "liefer" },
            { label: "Ibrahim", value: "ibrahim" },
          ]}
        />
      </div>
      <FormSectionTitle label="Verbrauch" />
      <FlexRowContainer>
        <ConsumeButton label="1x" onClick={() => null} />
        <ConsumeButton label="1x" onClick={() => null} />
        <ConsumeButton label="1x" onClick={() => null} />
        <ConsumeButton label="1x" onClick={() => null} />
      </FlexRowContainer>
      {/* 7 */}
      <FlexRowContainer>
        <FlexRowChildContainer>
          <input defaultValue={3400} style={{ fontSize: "18px" }} />
        </FlexRowChildContainer>
        <FlexRowChildContainer>
          <input placeholder="NT (kWh/Jahr)" style={{ fontSize: "18px" }} />
        </FlexRowChildContainer>
      </FlexRowContainer>
      <SubmitButton label="Calculate" />
    </form>
  );
};

export default EnergyForm;
