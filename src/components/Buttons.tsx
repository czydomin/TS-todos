import React from "react";

type ButtonsProps = {
  status: string;
  setStatus: (status: "ALL" | "DONE" | "TODO") => void;
};

export default function Buttons({ status, setStatus }: ButtonsProps) {
  return (
    <div className="flex gap-2 px-2 ">
      <button
        onClick={() => {
          setStatus("TODO");
        }}
        className={
          status === "TODO"
            ? "text-white bg-blue-300 m-2 px-2"
            : "text-blue-500 bg-white m-2 px-2"
        }
      >
        TODO
      </button>
      <button
        onClick={() => {
          setStatus("DONE");
        }}
        className={
          status === "DONE"
            ? "text-white bg-blue-300 m-2 px-2"
            : "text-blue-500 bg-white m-2 px-2"
        }
      >
        DONE
      </button>
      <button
        onClick={() => {
          setStatus("ALL");
        }}
        className={
          status === "ALL"
            ? "text-white bg-blue-300 m-2 px-2"
            : "text-blue-500 bg-white m-2 px-2"
        }
      >
        ALL
      </button>
    </div>
  );
}
