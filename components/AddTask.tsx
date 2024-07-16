import { Flex, Input, Button } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

import { AddTaskProps } from "@types";

const AddTask = ({ task, setTask, handleCreateTask }: AddTaskProps) => {
  return (
    <Flex pt="2rem" pl="2rem" pr="2rem" pb="1rem" justifyContent="space-between">
      <Input
        placeholder="Nouvelle tâche..."
        size="lg"
        onChange={(e) => setTask(e.target.value)}
        value={task}
        borderColor="teal.300"
        bg="white"
        _placeholder={{ color: "gray.500" }}
        borderRadius="md"
        boxShadow="md"
        transition="border 0.2s"
        _focus={{
          borderColor: "teal.500",
          boxShadow: "0 0 0 1px teal.500",
        }}
      />
      <Button
        colorScheme="teal"
        size="lg"
        onClick={() => handleCreateTask()}
        ml="1rem"
        borderRadius="md"
        boxShadow="lg"
        transition="all 0.2s"
        _hover={{
          bg: "teal.600",
          transform: "scale(1.05)",
        }}
      >
        <SmallAddIcon />
      </Button>
    </Flex>
  );
};

export default AddTask;
