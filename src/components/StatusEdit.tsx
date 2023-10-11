import React from "react";
import { Cross2Icon, CheckIcon } from "@radix-ui/react-icons";
import { useState } from "react";

type StatusEditProps = {
  taskName: string;
  onUpdate: (updatedTaskName: string) => void;
  setMode: (arg: boolean) => void;
};

export default function StatusEdit({
  taskName,
  onUpdate,
  setMode,
}: StatusEditProps) {
  const [inputValue, setInputValue] = useState(taskName);

  return (
    <div className="flex items-center ">
      <input
        type="text"
        placeholder="editing"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <CheckIcon
        onClick={(e) => {
          console.log(inputValue);

          e.stopPropagation();
          setMode(false);
          onUpdate(inputValue);
        }}
        className="text-green-400 h-5 w-5 "
      />
      <button
        onClick={(e) => {
          e.stopPropagation();
          setMode(false);
          setInputValue(taskName);
        }}
      >
        <Cross2Icon className="text-red-400 h-5 w-5" />
      </button>
    </div>
  );
}
