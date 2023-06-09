import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { AiOutlineSend } from "react-icons/ai";
import { MdBrightness2 } from "react-icons/md";
import { BsFillBrightnessHighFill } from "react-icons/bs";

import TodoList from "./components/TodoList";
import InputForm from "./components/InputForm";
import bgDesktopdark from "./assets/bg-desktop-dark.jpg";
import bgDesktoplight from "./assets/bg-desktop-light.jpg";
function App() {
  const [filter, setFilter] = useState("all");

  const [tasks, setTasks] = useState([
    { id: 1, name: "🛒 Buy groceries for the week", isCompleted: false },
    { id: 2, name: "🧹 Clean the house", isCompleted: false },
    { id: 3, name: "📚 Study for upcoming exams", isCompleted: false },
    { id: 4, name: "💪 Exercise for 30 minutes", isCompleted: false },
  ]);

  const { colorMode, toggleColorMode } = useColorMode();

  const [completedTask, setCompletedTask] = useState([]);

  useEffect(() => {
    setCompletedTask(tasks.filter((t) => t.isCompleted === true));
  }, [tasks]);

  const getTask = (task) => {
    setTasks([
      ...tasks,
      { id: tasks.length + 1, name: task, isCompleted: false },
    ]);
  };

  const handleTaskRemove = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: true } : task
      )
    );
  };

  const handleTaskDelete = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <Flex flexDirection={"column"}>
      <Image
        src={colorMode === "dark" ? bgDesktopdark : bgDesktoplight}
        alt="Dan Abramov"
        objectFit={"cover"}
        height={"40vh"}
        width={"100vw"}
      />
      <Box
        fontSize={{
          base: "14px",
        }}
        paddingX={{
          base: "5",
        }}
        width={{
          base: "100%",
          md: "32rem",
          lg: "40rem",
        }}
        margin={"0 auto"}
        position={"relative"}
        top={-250}
      >
        <Flex justifyContent="space-between" mb={6} mt={4}>
          <Text
            variant="h1"
            fontSize="4xl"
            letterSpacing={5}
            fontWeight={800}
            color={"white"}
          >
            TODO
          </Text>
          <IconButton
            variant={"unstyled"}
            icon={
              colorMode === "dark" ? (
                <BsFillBrightnessHighFill size={24} color="white" />
              ) : (
                <MdBrightness2 size={24} color="white" />
              )
            }
            onClick={toggleColorMode}
          />
        </Flex>
        <InputForm getTask={getTask} colorMode={colorMode} />
        <hr />
        <TodoList
          colorMode={colorMode}
          tasks={tasks}
          handleTaskRemove={handleTaskRemove}
          handleTaskDelete={handleTaskDelete}
          filter={filter}
        />
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          borderBottomLeftRadius={"md"}
          borderBottomRightRadius={"md"}
          py={"4"}
          bgColor={colorMode === "dark" ? "black" : "white"}
          px={3}
        >
          <span>
            {tasks.length === completedTask.length
              ? "No todo items left!"
              : `${tasks.length - completedTask.length} item left.`}
          </span>
          <span>
            {completedTask.length === 0
              ? `No task is completed`
              : `${completedTask.length} task is completed🔥`}
          </span>
        </Box>

        <Box
          className="footer"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          boxShadow="md"
          py={"2"}
          px={3}
          mt={1}
          borderRadius={"md"}
          bgColor={colorMode === "dark" ? "black" : "white"}
        >
          {/* <Button onClick={() => setTasks([])} variant="ghost">
            Reset
          </Button> */}
          <Button onClick={() => setFilter("all")} variant="ghost">
            All
          </Button>
          <Button onClick={() => setFilter("completed")} variant="ghost">
            Completed
          </Button>
          <Button onClick={() => setFilter("active")} variant="ghost">
            Active
          </Button>
        </Box>
      </Box>
    </Flex>
  );
}

export default App;
