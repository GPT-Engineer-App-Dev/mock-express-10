import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, ListIcon, VStack, HStack, IconButton, useToast, Textarea } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  const handleInputChange = (e) => setInputValue(e.target.value);

  const addTodo = () => {
    if (inputValue.trim() === "") {
      toast({
        title: "No content",
        description: "Todo can't be empty",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    setTodos([...todos, inputValue]);
    setInputValue("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <VStack p={8}>
      <Heading mb="8">Todo App</Heading>
      <HStack>
        <Input value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} placeholder="Add a new task..." />
        <IconButton icon={<FaPlus />} onClick={addTodo} colorScheme="blue" aria-label="Add todo" />
      </HStack>
      <List spacing={3} my={5} w="100%">
        {todos.map((todo, index) => (
          <ListItem key={index} p={2} bg="gray.100" borderRadius="md">
            <HStack justify="space-between">
              <Box>{todo}</Box>
              <IconButton icon={<FaTrash />} onClick={() => deleteTodo(index)} colorScheme="red" aria-label="Delete todo" />
            </HStack>
          </ListItem>
        ))}
      </List>
      <Box w="100%" p={5} bg="gray.200" borderRadius="md" mt={10}>
        <Heading size="md" mb={3}>
          Motivational Quote
        </Heading>
        <Box fontStyle="italic">"Do not wait to strike till the iron is hot; but make it hot by striking." - William Butler Yeats</Box>
      </Box>
      <Box w="100%" p={5} bg="gray.300" borderRadius="md" mt={10}>
        <Heading size="md" mb={3}>
          Random Fact
        </Heading>
        <Box>Did you know? Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3000 years old and still perfectly edible.</Box>
      </Box>
      <Box w="100%" p={5} bg="gray.400" borderRadius="md" mt={10}>
        <Heading size="md" mb={3}>
          Your Thoughts
        </Heading>
        <Textarea placeholder="What's on your mind?" size="sm" />
      </Box>
    </VStack>
  );
};

export default Index;
