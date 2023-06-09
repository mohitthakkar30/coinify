import React from "react";
import { Checkbox as ChakraCheckbox } from "@chakra-ui/react";
//@ts-ignore
const Checkbox = ({ id, name, label, onChange, helper }) => {
  return (
    <div>
      <ChakraCheckbox
        id={id}
        name={name}
        colorScheme="green"
        onClick={onChange}
        borderColor="#605e8a"
        className="text-gray-700 dark:text-white"
      >
        <span>{label}</span>
      </ChakraCheckbox>
      <div className="text-sm mt-1 text-[#666666]">{helper}</div>
    </div>
  );
};

export default Checkbox;

Checkbox.defaultProps = {
  label: "",
  onchange: () => {},
  helper: "",
};
