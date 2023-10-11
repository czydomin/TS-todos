import { Cross1Icon } from "@radix-ui/react-icons";
import React from "react";
import StatusDone from "./StatusDone";
import StatusEditOpen from "./StatusEditOpen";

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
  return (
    <div className="bg-white border-t-[1px] w-full flex items-center justify-between">
      <div className="flex  w-full ">
        {isDone === true ? (
          <StatusDone onDone={onDone} taskName={taskName} />
        ) : (<StatusEditOpen
            taskName={taskName}
            onDone={onDone}
            onUpdate={onUpdate}
          />
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
