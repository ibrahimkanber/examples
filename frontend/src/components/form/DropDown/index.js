import "./index.css";
export const DropDown = ({ value, onChange, options, id }) => {
  return (
    <select
      id={id}
      className="dropdown"
      name="supplierChange"
      value={value}
      onChange={onChange}
    >
      {options.map((el,i) => (
        <option key={i} value={el.value}>{el.label}</option>
      ))}
    </select>
  );
};
