import React from "react";
import { AiFillHome } from "react-icons/ai";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { Flex } from "./Flex";

export default function Navigation({ title }) {
  const navigate = useNavigate();

  return (
    <Flex gap="40px">
      <IoArrowBackOutline
        onClick={() => navigate(-1)}
        style={{ fontSize: "24px", cursor: "pointer" }}
      />
      <h2>{title}</h2>
      <AiFillHome
        onClick={() => navigate("/")}
        style={{ fontSize: "24px", cursor: "pointer" }}
      />
    </Flex>
  );
}
