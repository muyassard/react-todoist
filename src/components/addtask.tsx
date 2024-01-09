import { useState } from "react";
import { Button } from "antd";

function AddTask() { 

  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <div onClick={toggleModal} className="cursor-pointer flex item-center gap-2 hover:bg-[#fee6e3] rounded-lg p-1">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0,0,256,256">
          <g fill="#ca0505" fillRule="nonzero" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10">
            <g transform="scale(5.12,5.12)">
              <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
            </g>
          </g>
        </svg>
        <div className="text-red-600 text-base font-semibold">Добавить задачу</div>
      </div>
      {modal && (
        <div className="fixed w-[100vw] h-[100vw] top-0 right-0 bottom-0 left-0">
          <div className="fixed w-[100vw] h-[100vw] top-0 right-0 bottom-0 left-0 bg-[rgba(49,49,49,0.8)]">
            <div className="absolute top-[15%] right-[50%] translate-x-1/2	 rounded-lg	 bg-[#f1f1f1] px-6 py-3.5 ">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, qui dolore. Accusantium dolorum quibusdam fugiat optio numquam
                perspiciatis nisi temporibus dolores? Officiis nemo illo id ea, quod odit hic quidem, fugit libero quae quam corporis amet architecto,
                ex provident error vero unde fugiat sunt quas iusto. Facilis nisi adipisci laudantium?
              </p>
              <Button onClick={toggleModal} danger>
                add task
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AddTask;
