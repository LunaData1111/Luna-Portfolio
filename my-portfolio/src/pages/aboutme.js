import {
  VStack,
  Card,
  CardHeader,
  CardBody,
  ChakraProvider,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

function AboutMePage() {
  return (
    <ChakraProvider>
      <VStack
        spacing={7}
        paddingTop={5}
        backgroundImage="https://images.unsplash.com/photo-1574027542183-77efe00ca49f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1998&q=80"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
      >
        <Card maxW="sm" backgroundColor="white">
          <CardHeader>
            <Heading size="xl">About Me</Heading>
          </CardHeader>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://i.imgur.com/pnNoPjG.jpg"
                alt="Photo of Christian LunaDuenas"
                borderRadius="3xl"
              />
              <Heading size="md">Christian LunaDuenas Portfolio</Heading>
              <Text>
                I am a graduate student from the University of Utah Full Stack
                Web Development Bootcamp. I'm always learning and willing to
                adapt under pressure. I'am looking forward to a fast work
                enivorment. Solving puzzles and seeing them come to life is
                exciting. I would like to work in back end development. I have
                intrest to further my edcation in softerware development and
                quantum software. Over all I am thrilled to work in the tech
                world. Striving to improve software developing skills is my
                number one goal, so I may make a difference one day.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
        </Card>
      </VStack>
    </ChakraProvider>
  );
}
export default AboutMePage;
