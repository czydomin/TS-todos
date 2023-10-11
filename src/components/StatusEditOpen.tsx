import React from "react";
import { useState } from "react";
import StatusEdit from "./StatusEdit";
import { Pencil1Icon, CheckIcon } from "@radix-ui/react-icons";

type StatusEditOpenProps = {
  taskName: string;
  onDone: () => void;
  onUpdate: (updatedTaskName: string) => void;
};

export default function StatusEditOpen({
  taskName,
  onDone,
  onUpdate,
}: StatusEditOpenProps) {
  const [isEditMode, setIsEditMode] = useState(false);

  return (
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
          <StatusEdit
            taskName={taskName}
            onUpdate={(updatedTaskName) => onUpdate(updatedTaskName)}
            setMode={setIsEditMode}
          />
        ) : (
          taskName
        )}
      </div>
    </div>
  );
}
