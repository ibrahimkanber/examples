import {
  customerTypeOptions,
  orderTypeOptions,
} from "../../../config/formEnums";
import { DropDown } from "../DropDown";
import { FlexRowContainer } from "../FlexRowContainer";

export const OrderAndCustomerType = ({ formData, handleInputChange }) => (
  <FlexRowContainer>
    <DropDown
      id="order_type"
      value={formData.order_type}
      onChange={handleInputChange}
      options={orderTypeOptions}
    />
    <DropDown
      id="customer_type"
      value={formData.customer_type}
      onChange={handleInputChange}
      options={customerTypeOptions}
    />
  </FlexRowContainer>
);
