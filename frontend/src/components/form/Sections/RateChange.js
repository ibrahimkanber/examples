import { rateChangeTypeOptions } from "../../../config/formEnums";
import { DropDown } from "../DropDown";
import { FlexRowContainer } from "../FlexRowContainer";

export const RateChange = ({ formData, handleInputChange }) => (
  <FlexRowContainer>
    <DropDown
      id="rate_change_type"
      value={formData.rate_change_type}
      onChange={handleInputChange}
      options={rateChangeTypeOptions}
    />
  </FlexRowContainer>
);
