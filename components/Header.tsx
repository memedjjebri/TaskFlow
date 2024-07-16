import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      p="4rem"
      direction="column"
      alignItems="center"
      bgImage="url('https://cdn.pixabay.com/photo/2018/07/13/09/30/network-3535305_640.jpg')"
      bgSize="cover"
      bgPosition="center"
      borderRadius="md"
      boxShadow="xl"
      color="white"
      backdropFilter="blur(5px)"
    >
      <Heading
        as="h1"
        size="4xl"
        noOfLines={1}
        color="orange.300" // Couleur plus prononcée
        fontFamily="'Poppins', sans-serif"
        textShadow="2px 2px 4px rgba(0, 0, 0, 0.7)"
      >
        TaskFlow
      </Heading>
      <Text
        mt="5rem"
        fontSize="lg"
        color="white"
        textAlign="center"
        maxWidth="350px"
        fontFamily="'Roboto', sans-serif"
        fontWeight="bold"
        textShadow="1px 1px 2px rgba(0, 0, 0, 0.5)"
      >
        TaskFlow simplifie la gestion de vos tâches quotidiennes, rendant chaque
        étape plus claire et efficace.
      </Text>
    </Flex>
  );
};

export default Header;
