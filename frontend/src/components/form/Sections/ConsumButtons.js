import { ConsumeButton } from "../ConsumeButton";
import { FlexRowContainer } from "../FlexRowContainer";

export const ConsumButtons = ({ setFormData }) => {
  const consumButtons = [
    {
      personCount: 1,
      onClick: () => setFormData((prev) => ({ ...prev, consum: 1400 })),
    },
    {
      personCount: 2,
      onClick: () => setFormData((prev) => ({ ...prev, consum: 2400 })),
    },
    {
      personCount: 3,
      onClick: () => setFormData((prev) => ({ ...prev, consum: 3400 })),
    },
    {
      personCount: 4,
      onClick: () => setFormData((prev) => ({ ...prev, consum: 4400 })),
    },
  ];

  return (
    <FlexRowContainer>
      {consumButtons.map((button, index) => (
        <ConsumeButton
          key={index}
          personCount={button.personCount}
          onClick={button.onClick}
        />
      ))}
    </FlexRowContainer>
  );
};
