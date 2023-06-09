import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import {
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

const Support = () => {
  return (
    <Layout>
      <Head>
        <title>Support</title>
        <meta name="description" content="coinify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-violet-700 to-blue-600 rounded-[30px] overflow-hidden shadow-lg">
          <div className="hidden md:flex mx-auto justify-center">
            <Image src="/support.png" width="100" height="100" alt="Icon" />
          </div>
          <div className="px-10 py-8 text-white text-right">
            <div className="font-bold text-xl mb-2">SUPPORT</div>
            <div className="font-bold text-md mb-2">
              We are here to help you
            </div>
            <div className="text-sm">
              <p>
                Our support team is available 24/7 to help you with any
                questions you may have.
              </p>
            </div>
          </div>
        </div>
        <Box
          className="w-[90%] md:w-full bg-gradient-to-b from-white to-violet-500 rounded-xl"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading color={"gray.700"}>Contact</Heading>
                  <Text mt={{ sm: 1, md: 1, lg: 2 }} color="gray.600">
                    Fill up the form below to contact
                  </Text>
                  <Box
                    py={{ base: 5, sm: 5, md: 8, lg: 12 }}
                    alignItems="flex-start"
                  >
                    <VStack pl={0} spacing={1} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.700"
                        leftIcon={<MdPhone color="#363636" size="30px" />}
                      >
                        +91-9004590045
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.700"
                        leftIcon={<MdEmail color="#363636" size="30px" />}
                      >
                        support@coinify.in
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="gray.700"
                        leftIcon={<MdLocationOn color="#363636" size="30px" />}
                      >
                        Gujarat, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "blue" }}
                      icon={<MdFacebook color="white" size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "black" }}
                      icon={<BsGithub color="white" size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord color="white" size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box className="bg-white rounded-lg drop-shadow-xl">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <BsPerson color="gray.800" />
                            </InputLeftElement>
                          <Input type="text" size="md" placeholder="John Doe" />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>E-Mail</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement pointerEvents="none">
                            <MdOutlineEmail color="gray.400" />
                          </InputLeftElement>
                          <Input
                            type="text"
                            size="md"
                            placeholder="john@gmail.com"
                          />
                        </InputGroup>
                      </FormControl>
                      <FormControl id="name">
                        <FormLabel>Description</FormLabel>
                        <Textarea
                          borderColor="gray.300"
                          _hover={{
                            borderRadius: "gray.300",
                          }}
                          placeholder="Type your message here..."
                        />
                      </FormControl>
                      <FormControl id="name" float="right">
                        <Button
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{}}
                        >
                          Get in touch
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </div>
    </Layout>
  );
};

export default Support;
