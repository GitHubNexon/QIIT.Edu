import React from "react";
import BoardMemberCard from "../components/BoardMemberCard";
import boardMembersData from "../data/boardMembersData";
import "../components/styles/Hero.css"

const BoardMembers = () => {
  return (
    <div className="mx-auto px-4 py-8 custom-bg-4">
      <h2 className="text-gray-900 text-center py-5 font-bold text-5xl">OFFICIAL BOARD MEMBERS</h2>
      <div className="grid gap-4  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
        {boardMembersData.map((member, index) => (
          <BoardMemberCard
            key={index}
            name={member.name}
            position={member.position}
            description={member.description}
            imgSrc={member.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default BoardMembers;
