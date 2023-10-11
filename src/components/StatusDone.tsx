import React from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";

type StatusDoneProps = {
  onDone: () => void;
  taskName: string;
};

export default function StatusDone({ onDone, taskName }: StatusDoneProps) {
  return (
    <div className="flex ">
      <CheckCircledIcon onClick={onDone} className="text-green-500 h-8 w-8 " />
      <div className="text-blue-400 bg-white  flex items-center px-2 line-through">
        {taskName}
      </div>
    </div>
  );
}
