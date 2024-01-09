import { Checkbox } from "antd";

const Inbox = () => {
  return (
    <div className="px-[20%] py-28">
      <div className="cursor-pointer flex flex-col hover:border-solid hover:border-b hover: border-indigo-600">
        <div className="flex items-center gap-5">
          <Checkbox />
          <div className="">todo</div>
        </div>
        <div className="text-sm">calendar</div>
      </div>
    </div>
  );
};

export default Inbox;
