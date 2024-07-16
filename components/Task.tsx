import React from "react";
import { Card, Flex, Text, Button } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

import { TaskProps } from "@types";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  return (
    <Card
      p="1.5rem"
      mb="1rem"
      borderWidth="1px"
      borderColor={individualTask.completed ? "blue.300" : "gray.300"}
      bg={individualTask.completed ? "blue.50" : "white"}
      borderRadius="md"
      boxShadow="lg"
      transition="0.2s"
      _hover={{ boxShadow: "xl", transform: "translateY(-2px)" }}
    >
      <Flex alignItems="center">
        <Text
          flexGrow="1"
          as={individualTask.completed ? "del" : "span"}
          color={individualTask.completed ? "blue.600" : "black"}
          fontWeight={individualTask.completed ? "bold" : "medium"}
          fontSize="lg"
        >
          {individualTask.task}
        </Text>
        <Flex>
          <Button
            ml="1rem"
            colorScheme="teal"
            onClick={() => handleCompleteTask(individualTask._id)}
            isDisabled={individualTask.completed}
            borderRadius="full"
            size="sm"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{
              bg: "teal.500",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <CheckIcon />
          </Button>
          <Button
            ml="1rem"
            colorScheme="red"
            onClick={() => handleDeleteTask(individualTask._id)}
            borderRadius="full"
            size="sm"
            boxShadow="md"
            transition="all 0.3s"
            _hover={{
              bg: "red.500",
              transform: "scale(1.05)",
              boxShadow: "lg",
            }}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Task;
