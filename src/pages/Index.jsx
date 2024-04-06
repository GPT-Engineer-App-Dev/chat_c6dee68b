import React from "react";
import { ChakraProvider, Box, Flex, Input, InputGroup, InputLeftElement, Stack, Avatar, Text, Divider, IconButton, VStack, Heading, Container, extendTheme } from "@chakra-ui/react";
import { FaSearch, FaEllipsisV, FaSmile, FaPaperPlane } from "react-icons/fa";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "gray.100",
      },
    },
  },
});

const contacts = [
  { id: 1, name: "John Doe", message: "Hey! How are you?", avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEyMzgzNjU1fDA&ixlib=rb-4.0.3&q=80&w=1080' },
  { id: 2, name: "Jane Smith", message: "What's up?", avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTIzODM2NTZ8MA&ixlib=rb-4.0.3&q=80&w=1080' },
  // Add more contacts as needed
];

const ChatMessage = ({ name, message, avatar }) => {
  return (
    <Flex align="center" p={3}>
      <Avatar size="md" src={avatar} mr={3} />
      <Box flex="1">
        <Text fontWeight="bold">{name}</Text>
        <Text fontSize="sm" color="gray.500">
          {message}
        </Text>
      </Box>
    </Flex>
  );
};

const Index = () => {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.xl" p={0}>
        <Flex h="100vh" bg="white">
          <VStack w="300px" borderRight="1px" borderColor="gray.200" p={3} spacing={4}>
            <InputGroup>
              <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.400" />} />
              <Input variant="filled" placeholder="Search" />
            </InputGroup>
            <IconButton icon={<FaEllipsisV />} variant="ghost" aria-label="Options" />
            <Divider />
            <VStack flex="1" overflowY="auto" w="full">
              {contacts.map((contact) => (
                <ChatMessage key={contact.id} name={contact.name} message={contact.message} avatar={contact.avatar} />
              ))}
            </VStack>
          </VStack>
          <Stack flex="1" spacing={0} p={6}>
            <Heading size="lg" mb={6}>
              Messages
            </Heading>
            <Divider />
            <VStack flex="1" overflowY="auto" spacing={4} p={3}>
              {/* Messages will go here */}
              <Text fontSize="sm" color="gray.500" textAlign="center">
                Select a chat to start messaging
              </Text>
            </VStack>
            <Flex align="center" borderTop="1px" borderColor="gray.200" p={3}>
              <InputGroup>
                <InputLeftElement pointerEvents="none" children={<FaSmile color="gray.400" />} />
                <Input variant="filled" placeholder="Type a message" />
                <IconButton colorScheme="blue" icon={<FaPaperPlane />} variant="solid" aria-label="Send Message" ml={2} />
              </InputGroup>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default Index;
