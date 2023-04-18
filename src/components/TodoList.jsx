import {
  Box,
  Button,
  List,
  ListIcon,
  ListItem,
  border,
} from "@chakra-ui/react";
import { BsCircle } from "react-icons/bs";
import { MdCheckCircle } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

function TodoList({
  tasks,
  handleTaskRemove,
  handleTaskDelete,
  filter,
  colorMode,
}) {
  return (
    <List
      bgColor={colorMode === "dark" ? "blackAlpha.800" : "white"}
      borderRadius={"md"}
    >
      {tasks
        .filter((task) => {
          if (filter === "completed") {
            return task.isCompleted;
          } else if (filter === "active") {
            return !task.isCompleted;
          } else {
            return true;
          }
        })
        .map((task, index) => (
          <Box
            boxShadow={"sm"}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              justifyItems: "center",
              py: 2,
              px: 5,
            }}
          >
            <ListItem
              fontSize={18}
              key={index}
              onClick={() => handleTaskRemove(task.id)}
              cursor="pointer"
              textDecoration={task.isCompleted ? "line-through" : "none"}
            >
              {task.isCompleted && (
                <ListIcon as={MdCheckCircle} color="teal.300" boxSize={5} />
              )}
              {!task.isCompleted && (
                <ListIcon as={BsCircle} color="teal.300" boxSize={4} />
              )}
              {task.name}
            </ListItem>
            <Box>
              <Button
                display={"flex"}
                key={index + 2}
                onClick={() => handleTaskDelete(task.id)}
                variant="unstyled"
              >
                <RxCross1 />
              </Button>
            </Box>{" "}
          </Box>
        ))}
    </List>
  );
}

export default TodoList;
