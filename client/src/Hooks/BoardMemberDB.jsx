import React, { useState, useEffect } from "react";

const BoardMemberDB = () => {
  const [inputValue, setInputValue] = useState("");
  const [boardMembers, setBoardMembers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load board members from local storage on component mount
  useEffect(() => {
    const savedBoardMembers = JSON.parse(localStorage.getItem("boardMembers")) || [];
    setBoardMembers(savedBoardMembers);
  }, []);

  // Save board members to local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem("boardMembers", JSON.stringify(boardMembers));
  }, [boardMembers]);

  // Handler for updating the inputValue state as the user types
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Handler for adding or updating a board member
  const handleAdd = () => {
    if (inputValue.trim() === "") return; // Do nothing if input is empty

    if (editIndex !== null) {
      // Edit existing member
      const updatedMembers = boardMembers.map((member, index) =>
        index === editIndex ? inputValue : member
      );
      setBoardMembers(updatedMembers);
      setEditIndex(null);
    } else {
      // Add new member
      setBoardMembers([...boardMembers, inputValue]);
    }

    setInputValue(""); // Clear input after adding or editing
  };

  // Handler for editing a board member
  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(boardMembers[index]);
  };

  // Handler for deleting a board member
  const handleDelete = (index) => {
    const updatedMembers = boardMembers.filter((_, i) => i !== index);
    setBoardMembers(updatedMembers);
    if (editIndex === index) {
      setEditIndex(null);
      setInputValue(""); // Clear input if the deleted item was being edited
    }
  };

  // Handler for saving changes with additional logic
  const handleSave = () => {
    // Example additional logic: Validate if there are board members
    if (boardMembers.length === 0) {
      alert("No board members to save.");
      return;
    }

    // Example: Confirm that changes have been saved
    alert("Board members have been saved successfully!");
  };

  return (
    <>
      <div className="flex flex-col items-center space-y-4">
        <img src="https://via.placeholder.com/250" alt="Board Member" />
        <h3>Board Members:</h3>
        <ul>
          {boardMembers.map((member, index) => (
            <li key={index} className="flex items-center space-x-4">
              <span>{member}</span>
              <button
                className="bg-slate-700 text-white px-2 py-1 rounded"
                onClick={() => handleEdit(index)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="bg-slate-400 text-white p-2 rounded"
          placeholder="Enter name"
        />
        <div className="flex flex-row items-center space-x-4">
          <button
            className="bg-slate-900 text-white w-[100px] h-[60px] rounded-2xl"
            onClick={handleAdd}
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
          <button
            className="bg-slate-900 text-white w-[100px] h-[60px] rounded-2xl"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default BoardMemberDB;
