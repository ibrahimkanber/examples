import "./index.css";
export const DropDown = ({ value, onChange, options }) => {
  return (
    <select
      className="dropdown"
      name="supplierChange"
      value={value}
      onChange={onChange}
    >
      {options.map((el) => (
        <option value={el.value}>{el.label}</option>
      ))}
    </select>
  );
};
