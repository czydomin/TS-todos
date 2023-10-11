"use client";
import Image from "next/image";
import Item from "@/components/Item";
import TopBar from "@/components/TopBar";
import { useState } from "react";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { v4 as uuidv4 } from "uuid";

type Task = {
  taskName: string;
  isDone: boolean;
  id: string;
};

export default function Home() {
  const [filter, setFilter] = useState<"ALL" | "DONE" | "TODO">("ALL");
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState<Task[]>([]);

  return (
    <main className="flex items-center flex-col min-h-screen		 bg-blue-500">
      <h1 className="text-5xl mt-10 tracking-widest">TODO LIST</h1>
      <TopBar
        value={taskName}
        onChange={(event) => {
          setTaskName(event.target.value);
        }}
        onAdd={() => {
          const newTask = {
            taskName: taskName,
            isDone: false,
            id: uuidv4(),
          };
          if (newTask.taskName === "") {
            alert("You cannot add empty task");
            return;
          }
          const found = taskList.some((el) => el.taskName === newTask.taskName);
          if (found) {
            alert("You already have the same task on your list");
            return;
          }
          setTaskList([...taskList, newTask]);
          setTaskName("");
        }}
      />

      <div className=" bg-white flex w-1/3 justify-between ">
        <ListBulletIcon className="text-blue-500 bg-white h-10 w-10 px-2" />
        <div className="flex gap-2 px-2 ">
          <button
            onClick={() => {
              setFilter("TODO");
            }}
            className={
              filter === "TODO"
                ? "text-white bg-blue-300 m-2 px-2"
                : "text-blue-500 bg-white m-2 px-2"
            }
          >
            TODO
          </button>
          <button
            onClick={() => {
              setFilter("DONE");
            }}
            className={
              filter === "DONE"
                ? "text-white bg-blue-300 m-2 px-2"
                : "text-blue-500 bg-white m-2 px-2"
            }
          >
            DONE
          </button>
          <button
            onClick={() => {
              setFilter("ALL");
            }}
            className={
              filter === "ALL"
                ? "text-white bg-blue-300 m-2 px-2"
                : "text-blue-500 bg-white m-2 px-2"
            }
          >
            ALL
          </button>
        </div>
      </div>
      <ul className="flex flex-col w-1/3">
        {taskList
          .filter((task) => {
            if (filter === "TODO" && task.isDone === false) {
              return true;
            }

            if (filter === "DONE" && task.isDone === true) {
              return true;
            }

            if (filter === "ALL") {
              return true;
            }

            return false;
          })
          .map((task) => {
            return (
              <Item
                onUpdate={(updatedTaskName) => {
                  const updatedList = taskList.map((x) => {
                    if (x.id === task.id) {
                      return {
                        ...x,
                        taskName: updatedTaskName,
                      };
                    }
                    return x;
                  });

                  setTaskList(updatedList);
                }}
                isDone={task.isDone}
                onDone={() => {
                  const updateList = taskList.map((x) => {
                    if (x.id !== task.id) {
                      return x;
                    }

                    return {
                      ...x,
                      isDone: !x.isDone,
                    };
                  });

                  setTaskList(updateList);
                }}
                onDelete={() => {
                  const newList = taskList.filter((x) => {
                    return x.id !== task.id;
                  });
                  setTaskList(newList);
                }}
                taskName={task.taskName}
                key={task.taskName}
              />
            );
          })}
      </ul>
    </main>
  );
}
