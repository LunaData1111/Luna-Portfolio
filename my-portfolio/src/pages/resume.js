import {
    VStack,
    Link,
    ChakraProvider,
    Image,
    Heading,
  } from "@chakra-ui/react";
  import { ExternalLinkIcon } from '@chakra-ui/icons'
  
  function ResumePage() {
    return (
      <ChakraProvider>
  <VStack spacing={7} paddingTop={5}>
  <Heading size='xl' >Morgan's Resume</Heading>
  <Image
              src="https://lh3.googleusercontent.com/pw/AL9nZEVQ1QssrfUm1i4l27MLxGmdJply9kBJzsnlM2o1FdYQfF-zqNq6mzOk1LVBVXdlyuaDVYeDyhidpgZO9q-epgeonH12EPPzGm7qhCe-sga-ZQmOsuaR9L_XBOokK-XdgorYqSKdkiH03o_cuz_JeurNKcoG7ivO9TLNY-ISdpUv67nqQRGBZxxs73K07aSBq_ucCNEkIRX6sfdrYJQ5GRLRjjbAWVjoC2HfKbtqJ4nhpyIWpnckD-faeD5kTgmRvLeippK7GycWiGRNRRhcJUUoqSN9S4Sf5CyfVMm-cXIks2_H1g2uTT2mXSPyNBgYITbHR7uHIK7wlRIK8Kjd7r3VzEaSqG79k3t4-2VJCJQoLaMsznnJQCZWRUBXrY8AmeviwP-DoJOjINLsKd6N67jjnoR1CWB3xasGpN7tJD-JGOrMr7Q8kemI7Dgq0tb_DgjE4BIT6h17Vn_HwrgMjYPmG5dzGvM9T7PoOLKRT5NCkKJKA19lJ3vjSIh3eNe8fORdUwTGZ97yyo5lubDZeDInrcYV_cgrbhvv5AtlT-tq2Tf-JRL7KIM9X_cte-OY5V0PRwarGRSeLACNQd_uxoePyngnIbSn8rflpHfIRXE18oI-GcSN9kyPTw8L8B4FFUO3A6-OHy2R3BA1ZC_Thygq-N4Iut82W86X-J_mepqnnurRE4Rc_4lb-lZ8slUGy0lV48Ak4nbqofLf0CWCdZ8JX3C-TdY1j-_NzB0BvHT4U9ZOdtarjtZJrA_avkyhzrFS0G0nIeGgmH7MNq50QgaEmfQLoqLnDH2FVVopqDBLpKv9whS3JYLP4XLXRfeNC3fcYLj9G8mTps_pZIC4zH30OPKk7UW94PSpk1eskXk42mF8gm8bCIOIsr2fvNvHm2DX-GYBw7bcE1LMHQ1LpaDiISttH9rUYEQbFrlj2LApWFu-IFa5otzo9Zal5sCMnb3J11T_wjiel9wrrPlx13wHTEqjuHvd6LPZbTOzytDtoymsE15rXzqxatcsW5-6UAhGdLVVas1FhprymrSNdILVZ4cgjOE-jXvMpQ4ZnDQ266QyLix-FB2dSgjDRwgw4go5lGvk=w1213-h1611-no?authuser=0"
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
  <Link href='https://docs.google.com/document/d/1cekdX0KYNistluzVeWg_OGJcO9HYIBJuwJYUW8oXByI/edit?usp=sharing' isExternal>
    Link <ExternalLinkIcon mx='2px' />
  </Link>
  </VStack>
  </ChakraProvider>
    );
  }
  export default ResumePage