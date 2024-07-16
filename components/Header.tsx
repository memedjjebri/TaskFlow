import { Flex, Heading, Text, Input, Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <>
      <Flex
        p="2rem"
        direction="column"
        alignItems="center"
        bg="linear-gradient(135deg, rgba(255, 200, 200, 1) 0%, rgba(255, 255, 255, 1) 100%)"
        borderRadius="md"
        boxShadow="xl"
      >
        <Heading
          as="h1"
          size="4xl"
          noOfLines={1}
          bgGradient="linear(to-r, #34ebba, #0093e9)"
          bgClip="text"
        >
          TaskFlow
        </Heading>
        <Text
          mt="1rem"
          fontSize="lg"
          color="#333333"
          textAlign="center"
          maxWidth="600px"
        >
          TaskFlow est une application qui transforme la gestion de vos
          tâches quotidiennes en une expérience simple et efficace.
        </Text>
      </Flex>
    </>
  );
};

export default Header;
