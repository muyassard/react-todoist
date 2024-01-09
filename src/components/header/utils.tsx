import { useFaker } from "react-fakers";
import { faker } from "@faker-js/faker";
import React from "react";
import { Checkbox } from "antd";

export namespace TodoT {
  export interface TodoMain {
    id: string;
    task: string;
    day: number;
    completed: boolean;
  }
  export interface TodoMini extends Pick<TodoMain, "day" | "task"> {}
}
export const todoMemory: TodoT.TodoMain[] | TodoT.TodoMini[] = [
  {
    id: faker.string.uuid(),
    task: "",
    completed: false,
    day: new Date().getDate()
  }
];

const Todo: React.FC<TodoT.TodoMini> = ({ task, day }) => {
  return (
    <div className="">
      <div className="cursor-pointer flex flex-col hover:border-solid hover:border-b hover: border-indigo-600">
        <div className="flex items-center gap-5">
          <Checkbox />
          <div className="">{task}</div>
        </div>
        <div className="text-sm">day:{day}</div>
      </div>
    </div>
  );
};

export default Todo;
