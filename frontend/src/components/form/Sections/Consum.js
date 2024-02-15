import { FlexRowContainer } from "../FlexRowContainer";

export const Consum = ({ formData, handleInputChange }) => (
  <FlexRowContainer>
    <input
      value={formData.consum}
      id="consum"
      onChange={handleInputChange}
      className="input-full"
      type="number"
      min={0}
    />
    <input
      placeholder="NT (kWh/Jahr)"
      value={formData.consum_nt}
      id="consum_nt"
      onChange={handleInputChange}
      className="input-full"
      type="number"
      min={0}
    />
  </FlexRowContainer>
);
