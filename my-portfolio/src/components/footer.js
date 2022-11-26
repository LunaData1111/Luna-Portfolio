import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const Footer = () => (
  <ChakraProvider>
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/christian-luna-9263b4240/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/LunaData1111"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://stackoverflow.com/users/19222238/lunadata1111"
              aria-label="StackOverflow"
              icon={<FaStackOverflow fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Christian LunaDuenas
        </Text>
      </Stack>
    </Container>
  </ChakraProvider>
);

export default Footer;
