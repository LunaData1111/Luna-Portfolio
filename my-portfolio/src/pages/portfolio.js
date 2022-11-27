import {
  VStack,
  IconButton,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
  ButtonGroup,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaVideo, FaExternalLinkAlt } from "react-icons/fa";

function PortfolioPage() {
  return (
    <ChakraProvider>
      <VStack
        spacing={7}
        paddingTop={5}
        backgroundImage="https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      >
        <Card maxW="xl">
          <CardHeader>
            <Heading size="xl" color="white">
              Portfolio
            </Heading>
          </CardHeader>
          <Card maxW="xl">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  src="https://i.imgur.com/n7b3Xcu.png"
                  alt="A screenshot of the command line deployed"
                  borderRadius="lg"
                />
                <Heading size="md" color="white">
                  Stormtrooper-Tracker
                </Heading>
                <Text color="white">
                  My goal in this assignment was to build a command-line
                  application from scratch to manage a company's employee
                  database, using Node.js, Inquirer, and MySQL. I took a Star
                  Wars inpired Stormtrooper tacking system.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <IconButton
                  as="a"
                  href="https://github.com/LunaData1111/Stormtrooper-Tracker"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://drive.google.com/file/d/1Eh85jPlv2xWfCyXuZqlSzFms1dufAvry/view"
                  aria-label="Recording"
                  icon={<FaVideo fontSize="1.25rem" />}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/Jt8xVea.png"
                alt="A screenshot of the API working in Insomnia"
                borderRadius="lg"
              />
              <Heading size="md" color="white">
                Commonality
              </Heading>
              <Text color="white">
                This social network application is created with mongoose and
                express.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/LunaData1111/commonality"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1Vm9KXQjzvSztClnW6s072A546rRzy7ua/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/bZtmSo0.png"
                alt="A screenshot of the command line application"
                borderRadius="lg"
              />
              <Heading size="md" color="white">
                Dream-Team
              </Heading>
              <Text color="white">
                A command line application using Node.js and HTML webpage that
                displays summaries for each person.{" "}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/LunaData1111/Dream-Team"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/13_Sr40UDTh7B7CH2Xde8rSWCFSPAi7MB/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/ykJdOwP.png"
                alt="A screenshot of the web application"
                borderRadius="lg"
              />
              <Heading size="md" color="white">
                Take-a-Note
              </Heading>
              <Text color="white">
                Take a Note uses express.js back end and will save and retrieve
                note data from a JSON file.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/LunaData1111/Take-a-Note-2"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://polar-chamber-59913.herokuapp.com/"
                aria-label="Website"
                icon={<FaExternalLinkAlt fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card minW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/MH86xPD.png"
                alt="A screenshot of the weather application"
                borderRadius="lg"
              />
              <Heading size="md" color="white">
                Weather-waits-for-no-one
              </Heading>
              <Text color="white">
                A Weather application made using Javascript, HTML, and CSS.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/LunaData1111/Weather-waits-for-no-one"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://lunadata1111.github.io/Weather-waits-for-no-one/"
                aria-label="Website"
                icon={<FaExternalLinkAlt fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/8ui8h6E.png"
                alt="A screenshot of Readme Pro"
                borderRadius="lg"
              />
              <Heading size="md" color="white">
                ReadMe-Pro
              </Heading>
              <Text color="white">
                A command-line application that generates a professional
                README.md file from a user's input using the Inquirer package.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/LunaData1111/ReadMe-Pro"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1WpnkX1pLoJykVHB3i-pGu2aPIHT8CfiD/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>
      </VStack>
    </ChakraProvider>
  );
}

export default PortfolioPage;
