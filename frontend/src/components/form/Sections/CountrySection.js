import { countyIdOptions } from "../../../config/formEnums";
import { DropDown } from "../DropDown";
import { FlexRowContainer } from "../FlexRowContainer";

export const CountrySection = ({ formData, handleInputChange }) => (
  <FlexRowContainer>
    <DropDown
      id="country_id"
      value={formData.country_id}
      onChange={handleInputChange}
      options={countyIdOptions}
    />
  </FlexRowContainer>
);
