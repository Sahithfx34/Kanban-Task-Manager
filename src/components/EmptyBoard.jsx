import AddEditBoardModal from "../modals/AddEditBoardModal";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function EmptyBoard({ type }) {
  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  return (
    
    <div className=" bg-white h-screen w-screen flex flex-col  items-center justify-center">
      <h3 className=" text-gray-500 font-bold">
        {type === "edit"
          ? "This board is empty. Create a new column to get started."
          : "There are no boards available. Create a new board to get started"}
      </h3>
      <button className="w-full items-center max-w-xs font-bold hover:opacity-70 mt-8 relative  text-white bg-[#635fc7] py-2 rounded-full" onClick={() => {
          setIsBoardModalOpen(true);
        }}
        >
        {type === "edit" ? "+ Add New Column" : "+ Add New Board"}
      </button>

      {isBoardModalOpen && (
        <AddEditBoardModal type={type} setIsBoardModalOpen={setIsBoardModalOpen} />
      )}
    </div>
  );
}

export default EmptyBoard;