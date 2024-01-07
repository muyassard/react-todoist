function AddTask() {
  return (
    <div className="flex item-center gap-2 hover:bg-[#fee6e3] rounded-lg p-1">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0,0,256,256"
      >
        <g
          fill="#ca0505"
          fillRule="nonzero"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
        >
          <g transform="scale(5.12,5.12)">
            <path d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
          </g>
        </g>
      </svg>
      <div className="text-red-600 text-base font-semibold">Добавить задачу</div>
    </div>
  );
}

export default AddTask;
