import React, { useState } from "react";
import { Input, IconButton, Box } from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";

function InputForm({ getTask, colorMode }) {
  const [task, setTask] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (task !== "") getTask(task);
    setTask("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          py={3}
          mb="3"
          borderRadius={"md"}
          bgColor={colorMode === "dark" ? "black" : "white"}
          boxShadow="md"
        >
          <Input
            py={3}
            focusBorderColor="transparent"
            type="text"
            placeholder="Enter your todo..."
            value={task}
            fontSize={18}
            onChange={(e) => setTask(e.target.value)}
          />
          <IconButton
            type="submit"
            aria-label="add to list"
            icon={<AiOutlineSend size={24} />}
            variant="unstyled"
          />
        </Box>
      </form>
    </>
  );
}

export default InputForm;
