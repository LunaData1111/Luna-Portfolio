import {
  ButtonGroup,
  Container,
  IconButton,
  Stack,
  Text,
  ChakraProvider,
} from "@chakra-ui/react";
import * as React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => (
  <ChakraProvider>
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
      <Stack spacing={{ base: "4", md: "5" }}>
        <Stack justify="space-between" direction="row">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.linkedin.com/in/morgan-woods-b57bb6240/"
              aria-label="LinkedIn"
              icon={<FaLinkedin fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://github.com/MorganWoods618"
              aria-label="GitHub"
              icon={<FaGithub fontSize="1.25rem" />}
            />
            <IconButton
              as="a"
              href="https://twitter.com/MorganWoods618"
              aria-label="Twitter"
              icon={<FaTwitter fontSize="1.25rem" />}
            />
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle">
          &copy; {new Date().getFullYear()} Morgan Woods
        </Text>
      </Stack>
    </Container>
  </ChakraProvider>
);

export default Footer;