export const rateChangeType = {
  CHANGE: { value: "change", label: "Lieferantenwechsel" },
  NEW: { value: "new", label: "Neueinzug" },
  MODIFICATION: { value: "modification", label: "Tarifwechsel" },
};
export const orderType = {
  ELECTRIC: { value: "electric", label: "Strom" },
  GAS: { value: "gas", label: "Gas" },
};
export const customerType = {
  PRIVATE: { value: "private", label: "privat" },
  COMPANY: { value: "company", label: "gewerblich" },
  COMMUNITY: { value: "community", label: "WEG" },
};
export const countyIdType = {
  GERMANY: { value: "81", label: "Deutschland" },
  AUSTRIA: { value: "14", label: "Österreich" },
};

export const rateChangeTypeOptions = [
  rateChangeType.CHANGE,
  rateChangeType.NEW,
  rateChangeType.MODIFICATION,
];
export const orderTypeOptions = [orderType.ELECTRIC, orderType.GAS];
export const customerTypeOptions = [
  customerType.PRIVATE,
  customerType.COMPANY,
  customerType.COMMUNITY,
];
export const countyIdOptions = [countyIdType.GERMANY, countyIdType.AUSTRIA];
export const streetOptionType = [{ value: "", label: "Select" }];
export const netzProviderOptionType = [{ value: "", label: "Select" }];
