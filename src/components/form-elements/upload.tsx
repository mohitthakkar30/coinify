import React from "react";
import { FormLabel, Icon, Button } from "@chakra-ui/react";
import { FiFile } from "react-icons/fi";
//@ts-ignore
const Upload = ({ id, name, label, type, accept, onChange }) => {
  return (
    <div className="flex flex-col">
      <FormLabel htmlFor={id} className="text-gray-700 dark:text-white">
        {label}
      </FormLabel>
      <Button
        leftIcon={<Icon as={FiFile} />}
        className="max-w-full text-[#8b00ff] border-2 border-[#8b00ff] mb-5 md:mb-0"
      >
        Upload
        <input
          id={id}
          name={name}
          type={type || "file"}
          className="opacity-0 absolute left-0 right-0 max-w-full"
          accept={accept || "image/*"}
          onChange={onChange}
        />
      </Button>
    </div>
  );
};

Upload.defaultProps = {
  label: "",
  placeholder: "",
  type: "file",
  accept: "image/*",
  onchange: () => {},
};

export default Upload;