import { VStack, Link, ChakraProvider, Image, Heading } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

function ResumePage() {
  return (
    <ChakraProvider>
      <VStack spacing={7} paddingTop={5}>
        <Heading size="xl">Christian Luna's Resume</Heading>
        <Image
          src="https://i.imgur.com/OqDNxuP.png"
          alt="Christian Luna's resume"
          borderRadius="lg"
        />
        <Link
          href="https://docs.google.com/document/d/1p6QnqGnkuqSr_Zbsxnh-T8nTdSmQsK65-0vE6CauKX4/edit?usp=sharing"
          isExternal
        >
          Link <ExternalLinkIcon mx="2px" />
        </Link>
      </VStack>
    </ChakraProvider>
  );
}
export default ResumePage;
