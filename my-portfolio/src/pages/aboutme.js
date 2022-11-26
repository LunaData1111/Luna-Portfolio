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
        backgroundImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"
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
                src="https://lh3.googleusercontent.com/pw/AL9nZEWWEGUXOgRZnC5ao0lHIPbnWrsA82JSSCo_reewkrU2_lBMMFU2ohv7lQKD5AEvv_qZYmwvQRMnoKwaOJQekkxjWU8dTVLcSnBHzuZG2XebHCkQ10OPMN50mu5mWPTIuyZFRywB_DT5kbnb8GezpOBz-bP_xd98-5xWUgpNupKgQEszZk9v6x8RoVXlidez0bmp2Ec0UujzKkZjOU-oxZkpnagUpUpneUdgrM-8hyLTWWsvX3WFhRRpfShLKiOWJ6lV8qPQstklgt9lSoX7OwgG-wAnF1kbq2IOKCJ40y63alPKMYK7rQbQ9s5SaMatm3yd7d7A8gv3seIDi-TtoI_sAI1UzmDQyYL0ubFKebE5nwe4YdMkE63IAxClWCq30-_dzoZk-vAMQcFcScnK5NGKQvqnLsizFzTUAy5Ac0pNnTU4tCa8GONdTazFe9ANJWsCew98JrmA-zQKoW0fy_0AO0wXWcI3UoRe861PcxsAAYMWbt8dC9F6eas5Y1LhCPbcT2QStT0jnlU27uxrKFVEhLweo8i7-tk8Dx0FcvxhzCP4h1eYY27NY5ipmZCKO1xMjVGXT8a_rKPqgqQpbqj9Q09HuL3IRHP1kOIGS5m8e-IO03SQOl-TbwsjEqIxlfeDx_16kosGkWFOYptxtSjPZ87ivR7sLUBwqzE2u7G02ruSz42kqLaVNVT-_0x4np78sN7Ypva4iVclVPWXQpCIulHzlZkMk9fvOkpdnw9HcnnjU_XodtNV5tbHKw4nGbv5F8mJ2V9psHSyWkhsZOaUSFpCzWevdn6qPjI6dP5nM33jn2bxkKHoPhtL67e8oMRhLA5zbc8Hpblb1WIyQlpeg1fSaK6znN5zkZFQlmrfQ_wJMPYcOn-Z-sHX52aSrhLCY7lBmFLTar2V8BlNalPys4FGd40ue3f5aXPjERPEOHBgjDHsHIk0QpyLIKgxaHqCrqqEbU1TPQzJh-WiO5-cirv6RCYi5i47rNtUHRx4zLb56q9tSU0sjkgzXgbh5c2elVPVKK3LPW8v-DqNmZg8N4zLlQvWQqnL_Nz6EbAkPJu4Xz_VLr3rZfm9m3Q_HMRn8QsE=w1007-h1162-no?authuser=0"
                alt="Photo of Christian LunaDuenas"
                borderRadius="3xl"
              />
              <Heading size="md">Christian LunaDuenas Portfolio</Heading>
              <Text>
                I am a graduate student from the University of Utah Full Stack
                Web Development Bootcamp. I'm always learning and willing to adapt under pressure. 
                I'am looking forward to a fast work enivorment. Solving puzzles and seeing them come to life is exciting.
                I would like to work in back end development. I have intrest to further my edcation in softerware development and quantum software.
                Over all I am thrilled to work in the tech world. Striving to improve software developing skills is my number one goal, so I may make a difference one day. 
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
