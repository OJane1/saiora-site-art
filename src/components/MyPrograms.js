import React from "react";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import './Program.css';

export const MyPrograms = ({ text, updatingInInput, deleteClass }) => {
  return (
    <div>
    
      <p>{text}</p>
      <MdEdit onClick={updatingInInput} />
      <MdDelete onClick={deleteClass} />
    
    </div>
  );
}


  

