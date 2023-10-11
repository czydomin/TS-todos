import {
  CheckCircledIcon,
  CheckIcon,
  Cross1Icon,
  Cross2Icon,
  Pencil1Icon,
} from "@radix-ui/react-icons";
import React from "react";
import { useState } from "react";

type ItemProps = {
  taskName: string;
  onDelete: () => void;
  onDone: () => void;
  isDone: boolean;
  onUpdate: (updatedTaskName: string) => void;
};

export default function Item({
  taskName,
  onDelete,
  onDone,
  isDone,
  onUpdate,
}: ItemProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  const [inputValue, setInputValue] = useState(taskName);

  return (
    <div className="bg-white border-t-[1px] w-full flex items-center justify-between">
      <div className="flex  w-full ">
        {isDone === true ? (
          <div className="flex ">
            <CheckCircledIcon
              onClick={onDone}
              className="text-green-500 h-8 w-8 "
            />
            <div className="text-blue-400 bg-white  flex items-center px-2 line-through">
              {taskName}
            </div>
          </div>
        ) : (
          <div className="flex ">
            {isEditMode === true ? (
              <Pencil1Icon className="text-blue-500 h-8 w-8" />
            ) : (
              <CheckIcon onClick={onDone} className="text-blue-500 h-8 w-8  " />
            )}
            <div
              onClick={() => setIsEditMode(true)}
              className="text-blue-400 bg-white px-2 flex items-center  "
            >
              {isEditMode === true ? (
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
                      setIsEditMode(false);
                      onUpdate(inputValue);
                    }}
                    className="text-green-400 h-5 w-5 "
                  />
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsEditMode(false);
                      setInputValue(taskName);
                    }}
                  >
                    <Cross2Icon className="text-red-400 h-5 w-5" />
                  </button>
                </div>
              ) : (
                taskName
              )}
            </div>
          </div>
        )}
      </div>

      <div>
        <Cross1Icon
          onClick={onDelete}
          className="text-red-400 px-2 h-10 w-10"
        />
      </div>
    </div>
  );
}
