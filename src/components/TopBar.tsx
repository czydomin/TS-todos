import React from "react";
import { useState } from "react";
import { PlusCircledIcon, ReaderIcon } from "@radix-ui/react-icons";

type TopBarProps = {
  value: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd: () => void;
};

export default function TopBar({ value, onChange, onAdd }: TopBarProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
    <div className="flex py-5 justify-center w-1/3">
      <ReaderIcon className="text-blue-500 bg-white h-10 w-10 px-2" />

      <input
        value={value}
        onChange={onChange}
        onFocus={() => {
          setIsEditMode(true);
        }}
        type="text"
        placeholder="Enter your next task"
        className="px-5 w-full text-blue-400"
      />
      {isEditMode === true ? (
        <PlusCircledIcon
          onClick={() => {
            onAdd();
            setIsEditMode(false);
          }}
          className="text-blue-500 bg-white h-10 w-10"
        />
      ) : null}
    </div>
  );
}
