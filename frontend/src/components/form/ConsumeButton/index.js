import { Person } from "../../icons/Person";
import "./index.css";
export const ConsumeButton = ({ personCount = 1, onClick }) => {
  return (
    <button onClick={onClick} className="consume-button">
      {[...Array(personCount).keys()].map((el) => (
        <Person key={el} />
      ))}
    </button>
  );
};
