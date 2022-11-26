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
        backgroundImage="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2374&q=80"
      >
        <Card maxW="xl">
          <CardHeader>
            <Heading size="xl">Portfolio</Heading>
          </CardHeader>
          <Card maxW="xl">
            <CardBody>
              <Stack mt="6" spacing="3">
                <Image
                  src="https://lh3.googleusercontent.com/pw/AL9nZEWYHYFi7HpC144ora2yG4F-5ET1V6Wy3-x_0NxU19XgI2Qb2BZoZfyWJSMeo2jR7dRAetiPsaH9dEG3mDU0EBzjXFePcepoJVLzVVaDk4U2gaF_H-lOQjBb-B2GGw0EWrWYYddckcxfX9h2tdCBb8CiJvDLIxty273gcL5wYWfZokGcI2zK2ciil4r1IQbYU5ptRjMipJ3uMIhkk063-1gylJLDwMnf3m30qSl9YhxfeOCyp7L2rbIyT5zBipJh8kZ7ElLqrY2vn3CpQUj5b0HZGXLh__Vg67DZNpXUfDq8wMot8fp71ziVJzYP9JJhY2YlXx7SEJ61av3EDUmF5E9JGS_7P0pUAb9NJetWvab7c8ypsbIuAiAItSi51l2ya_EgiiQCYS1X4jdpJJdn4ACbU26vIsKkzuM9_drinml_4m_Udhw7wJQraLMljJYYv0GP72d2AVub6i0ho_yUrL0_fOfy2d_mBmUpspII2h55LsW1DCjJS4qDIEhktx4kzMTh1FqGNiZyLJuYlKnZVWEfLSrrzZ6C9ryqhBwgpgWysOPZsytyH_pgZcYoKQ9fLumOEiNBfnKXnlobaFBgWW1f6_GLPDB7XWPah6I11rMo_7Wwq8wFA3k-L_WXodRuKlYecT-8jfJtC3CHGNE_g1mw-sHHQo9AUe-2si_8To_1q9nvkm-tlMbidxNShRW2zXk37dsYoI_fp-3ZzgEoXLIEbtm6jDu9HJJT2Jh37BKJX_TY3DOmr_zWYfNAp3jlbraJDG08SqL63ajig8tPV1g04HFmhyEYw0EOPcN_XZY3Xn79GCYBVyFnvGdocwR4978WYaY2tgfdtKtgvE8TtTBOxxqricLxc9qSxOPZgCas4Rj7D-vT8N5vujBT5CqUvJMwQ_pDT9uPPbaRAUxJQ0WJUrvDDndY-osDFYUdTu032wdlY4ZisblTGTA0dwG0zBqhf0J-TJG6Z46NzBMaNEXFNzFQNvDK4ONHmakbX7XXBg-gjhSoXVT3V4aqaT-yqGGsCZHrq17eWXJ-ITMqwYiCc089yd1suTvHgqpGS8SCnNaAjulZgtmo2NgQil8Ih05d2YLx=w1913-h947-no?authuser=0"
                  alt="A screenshot of the web app deployed"
                  borderRadius="lg"
                />
                <Heading size="md">Group Me Web App</Heading>
                <Text>
                  A group project build using MERN stack with a React front end,
                  MongoDB database, and Node.js/Express.js server and API.
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <IconButton
                  as="a"
                  href="https://github.com/MorganWoods618/employee-tracker-hm"
                  aria-label="GitHub"
                  icon={<FaGithub fontSize="1.25rem" />}
                />
                <IconButton
                  as="a"
                  href="https://drive.google.com/file/d/18JXUIhhOaa7eJcp590GuRv8g5-Vr1S5i/view"
                  aria-label="Recording"
                  icon={<FaExternalLinkAlt fontSize="1.25rem" />}
                />
              </ButtonGroup>
            </CardFooter>
          </Card>
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://lh3.googleusercontent.com/pw/AL9nZEWYHYFi7HpC144ora2yG4F-5ET1V6Wy3-x_0NxU19XgI2Qb2BZoZfyWJSMeo2jR7dRAetiPsaH9dEG3mDU0EBzjXFePcepoJVLzVVaDk4U2gaF_H-lOQjBb-B2GGw0EWrWYYddckcxfX9h2tdCBb8CiJvDLIxty273gcL5wYWfZokGcI2zK2ciil4r1IQbYU5ptRjMipJ3uMIhkk063-1gylJLDwMnf3m30qSl9YhxfeOCyp7L2rbIyT5zBipJh8kZ7ElLqrY2vn3CpQUj5b0HZGXLh__Vg67DZNpXUfDq8wMot8fp71ziVJzYP9JJhY2YlXx7SEJ61av3EDUmF5E9JGS_7P0pUAb9NJetWvab7c8ypsbIuAiAItSi51l2ya_EgiiQCYS1X4jdpJJdn4ACbU26vIsKkzuM9_drinml_4m_Udhw7wJQraLMljJYYv0GP72d2AVub6i0ho_yUrL0_fOfy2d_mBmUpspII2h55LsW1DCjJS4qDIEhktx4kzMTh1FqGNiZyLJuYlKnZVWEfLSrrzZ6C9ryqhBwgpgWysOPZsytyH_pgZcYoKQ9fLumOEiNBfnKXnlobaFBgWW1f6_GLPDB7XWPah6I11rMo_7Wwq8wFA3k-L_WXodRuKlYecT-8jfJtC3CHGNE_g1mw-sHHQo9AUe-2si_8To_1q9nvkm-tlMbidxNShRW2zXk37dsYoI_fp-3ZzgEoXLIEbtm6jDu9HJJT2Jh37BKJX_TY3DOmr_zWYfNAp3jlbraJDG08SqL63ajig8tPV1g04HFmhyEYw0EOPcN_XZY3Xn79GCYBVyFnvGdocwR4978WYaY2tgfdtKtgvE8TtTBOxxqricLxc9qSxOPZgCas4Rj7D-vT8N5vujBT5CqUvJMwQ_pDT9uPPbaRAUxJQ0WJUrvDDndY-osDFYUdTu032wdlY4ZisblTGTA0dwG0zBqhf0J-TJG6Z46NzBMaNEXFNzFQNvDK4ONHmakbX7XXBg-gjhSoXVT3V4aqaT-yqGGsCZHrq17eWXJ-ITMqwYiCc089yd1suTvHgqpGS8SCnNaAjulZgtmo2NgQil8Ih05d2YLx=w1913-h947-no?authuser=0"
                alt="A screenshot of the API working in Insomnia"
                borderRadius="lg"
              />
              <Heading size="md">Social Network API with NoSQL</Heading>
              <Text>
                This is an API for a social network web application where users
                can share their thoughts.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/homeworkwk18"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1jt61tg9LatqMh83DRk1afFLhNBakEJVX/view"
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
                src="https://lh3.googleusercontent.com/pw/AL9nZEXgXZM7K8yTT3vh41HEYuB61v_J8GUdYov7rVDfhgIqyNpZayi_2DBxxEnKZBvqRP5GfreAXMocgcFNaZFzL71JMkn_vOjEtubF5Kfy1FHmRgI9Yv1Tk9nfzkk4hfaFgvhNymNOnRPwtmseyD9A3PKwgiX1OIVzgmrabvu9QL5HFEwGocbCpQ6xZydOVszsUhiHlB4uUpv-QR9nQz8To9KoNjNNT91oqdirLIsKYWDruRkgPk_oECtJQgv1a3R7PwTjVxS2H1TFQKKaDMPXC1wcKrwsG87JCJ9wqAEEikwMQK_VWpk2VIRnU32qvu25MX9JYK9pS5CPyHRm47S53dZ1AY1f8iTOD8VyLfemcZxBOrBNQYF69eOL2M_0Lv_s-xGZ3lDtGRCjyjX7lQmWYlY9qX1MU0h0bM-dYjbFWzysHA5GKhQB42k4gYLrKfspZxyyGDb5sofGUmiI11p-jErFxPyiJ6LKnAj2J1AGu8MKWjQtdv97B4FDUN2hSQQ3ZCB0nAyn0CEtO0LGzcEYkXfsVqME2w7VoKOEb3M4o7vguQNGxUnyOfDE_enIyCU_wo1kmMhqB88dM8RMNqkRu6HXHQRbMMKG4M-0cf0Bz8641PlXczd8Tl9iHb3CiZKpVTvxs3RkV2CAB1nFPKAmrGlvsqyoZkCD6b50o1WGx-DQNzmgfgtWmjOcV4bWJJOXovnvtSpaqEHkHROTC0Yr6DSc8mDTnqhMtZTZRq4w_c7EI2_sClZSx5mIQnOsBxXVM6CxBusdO0CaPX2mvZFcUBF_vqB6_i4mjZgMVZ475Yks0JCdZeyRET83ve13JYPn20aOji0ebBfq4hEGp_JafweO5EHi5l8_oArbhqfW93-l2zFg8o0afkEDpqqffZRVNFA6AUTb1nM8aNw2jP0cZIwQLFWzuKtEIDHfri4QIxpSnNqPZAKxw_TRcb_tGFXO3H9FD-npnBmTH7KEBjh3xDP2xGlLa4Wy_kLej5njk2YHOekLyM2jY0ZF9qCTYLSU3VpP6Ugl0DCYXhRliulhcqAaEJAjfTH9sd6rE3LIXW74mZZbBYsT5oKmD2nN4SPlbL-smRk7=w3479-h1848-no?authuser=0"
                alt="A screenshot of the tracker working in Insomnia"
                borderRadius="lg"
              />
              <Heading size="md">Employee Tracker with MySQL</Heading>
              <Text>
                A command-line application from scratch to manage a company's
                employee database, using Node.js, Inquirer, and MySQL.{" "}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/employee-tracker-hm"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/18JXUIhhOaa7eJcp590GuRv8g5-Vr1S5i/view"
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
                src="https://lh3.googleusercontent.com/pw/AL9nZEXxd-_Bu6meSZ6U3uLC4nUYFQuRS9I-uGYP7bE9963aBl0aB-od3UTdaKaSC6tz5jO7yPx3zOuIPs98KlY3KDo-cexaTaqB67NCZo-tFt8RHoDCesK-xgCZTLJyO6D1i1Kj1Fvk7jiHpAXFL2BNmWX0LutFx8JnNOIGoLnhcvUsv4KWfV8sfurwmyi9IWy-BO3-bidmg3Ozje5GbmVilfBw-oSqeJdbALnfcqSyoobOH3tetPRbbdIps7DP2i6sRInkqoaZ6HPe22DohjFswlC8l8d2oRjTdEx33grbPd8tpcUz1UOWWgxJwN6UKb7UkE1FZXTjHVssT4Mts9uJ_djTTaM8Bdsz0zWPCLh8Dw_cUY6SjIFNxTghPEKt7gNdAf_gXesm8jqslaE-iDmp4msoz6bfaB7Bm7SQMj9soNhcyNeE5S0rejNXk19SvxmdjnTUy6Z9e_JxNohphrGL15px2oosKr8vU-EijmkJZDkJgcTkyYOro_bQz_uKkTixw8MvRBlrJk6oYbigb71ZiYaz5paKKgPcfXPLUjcxjjfIJ2VYpx59PXne9_-70Rz2aeJMjgMFdTyqQbCk39GzhDuAQ3SCxUJosWjePQXyD8VjsHboOmVbvcrmI_n1CWel1bAUdc0Tg7aaC0EPyPPULSrzMGxJRW_jcSY5mwy67wL23sLzQYjH8QZ0D7S5gtNvWvilTs7yFN9Uue9iEXHm4s_r_vrGVZX9sLhht3G-byRU_jAwh7sNlX3_8W5LCf5mi3RK_w5M4dihf0b0cJufoPssnLmvHvxMPwWa8pcSpyOICW8jB0g56r2dQyKL6QsF_0-x-zHh1T1O35QrQ_cUacQs-PGdqb0jBC6nIUWzsQl2_54OGmPhhLG7EUxWo10lyFmjIQMTI5by7qaTZ_nNLA0o9FFwd-R_TNqnzhBe9eDTLR4vnjBvFIp5OnRNxkcQ8t7PGMInttWTTDvbgeKt1vcEfG0-2pa0Hp5SKLLxIWv9ju-QHDIb_3dXjDiXuxBMTsXjYUXFKsMk6RDZ4M-cyGkfAYbOvIJNbiKaWA-aQhLTdJAi82QNnaYj1HnDX2006Km_E7HR=w439-h220-no?authuser=0"
                alt="A screenshot of the generator"
                borderRadius="lg"
              />
              <Heading size="md">Team Profile Generator</Heading>
              <Text>
                a Node.js command-line application that takes in information
                about employees on a software engineering team, then generates
                an HTML webpage that displays summaries for each person.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/fictional-octo-spoon"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1N_8LP-qJyxd5deuj991_5ij4idzEWPAP/view"
                aria-label="Recording"
                icon={<FaVideo fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card minW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://lh3.googleusercontent.com/pw/AL9nZEXign_P0TSqJ-mvXDFX68mpG-8pmJEMIjlJm1oRpfg6GqJTgf9ygFEKP1ZVrnv0Gc9MnJOktxKOOL6M0yqr_Zgjo7oJ4x1cQtu0QBf58-d1Jv4Kvq28cfl5sWHfHY2aecN2uf28boPjBD4vCrSmoNVr4LZmbGXT85UFEvUjdSzqOE83m26VkML7Dt6IDwoGv6K7PyX46c_h8wIzuIRGcKKbhNlS_Lo2_MN2n_jESaD01r2IEuDnJ1Ahqk9LTqDkWKGzWfVz_z8lSspK_89bMjjk7WkYY20D5xGeUY5kmR7surIdoVPfED51hTgFqibNatVvabcYvsodsojqF5fbNPjDIobi2kVUrDeS5n815Mshq35Cpjv7OLaymL9Bc6E9WrWen6orlOLvlrubTaUa-uj31Y7NAp1L-ucmCq23PWJMoJMg041i4bVeZYxS5YCpiQ-KKmoJWmHTiznreDW5r8ZiKCcmFs1fmTlcKc0VwGj-K6Hqx1MctJqx58WwRIhhkc3l-TdCMmtH7CNxxcl2dvErQ-xtHWtsvi_07tnXI92IzuGQDZ9xBCf6nor4CqsdMxbP4yc7WJ98U_EpSjIve6Af1jAbM9XD9IueSdnVqrdy6zZZgMNULr5BHyIS4lAus9erD3yW8PT9PnvgyWBSo2n6tJYz7e5b6bpJWH5ExOr2wYfGd0TRyDIXDu74j3xVbR1TLF7uaTQ-jQYepGnwg5jUpe5Nw7gqZ1fYKb_7R3djj-OIMbWfMYxTY2psps-9OjP8r_dsCOd-Xk5ToX3iYyde7mplCMNlXcvr0D9nBNpsZJUOudRjUBDGtRRhM0eWLmmejqjkOg_o0EsZ2c7dnqB_SIi5Nkv3PJ2AcNRkF31Y0y1jIpppJjMhyHYXeASyK1DF9w9MMTRY8pEq46_nt5fCWHKw7Gnb8T-LVC2scdAAHd76D6FUVowiTxug5Ac7yjeDB5MLwPAbggDuBw2mx9kTCTXBNCaMeNvQzVgvOwSFyqaxE5b1gsM1YC5qTax4UudHXgELdOfFFoTwIn5djPDmaWWsrwHLbAOlHT0Db-KurlNydCk5NSOEOxBkGQrzfGXi4cdX=w391-h209-no?authuser=0"
                alt="A screenshot of the planner"
                borderRadius="lg"
              />
              <Heading size="md">Daily Planner</Heading>
              <Text>
                A daily planner made using Javascript, JQuery, and CSS.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/AwesomePlannerHomework"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://morganwoods618.github.io/AwesomePlannerHomework/"
                aria-label="Recording"
                icon={<FaExternalLinkAlt fontSize="1.25rem" />}
              />
            </ButtonGroup>
          </CardFooter>
        </Card>

        <Card maxW="xl">
          <CardBody>
            <Stack mt="6" spacing="3">
              <Image
                src="https://lh3.googleusercontent.com/pw/AL9nZEV0mRrU0LbSj5DXG3-zUDEFW-xKrEfqPr5AsNM1qT_71WNEHL7lEq77HlID-k1ynQ2_3CwRj-pDlbx8FhzhHTB6u4pYku0drrBViOyci8E17JbqZhPj5Wb_hoqvuVf4xwRCoKgKEVkeQPiyqrLUkJS7G_EM2KNPemgrDoGSavkTMhRqRwy7_qz-HZ_OSAXUNF5dO4Tu5c3yczADsbZMYoukVukkMvMY6tCErbV3lpy2wLiMKt7ZZKnNhfm1lYOJoN0S-rmV5kuOrM5J7DXA-uLnbVnFVmh7X742qI0Stld8cfyQtIAmo4vXOAmOPSkb2cRDdozaZ0e4xKlAqLBAdH4XU0ZIlMMCRs8062JvuxVG-W05Q8c2EbavoYZ6eQdcxcr2O8Cl5l76hJmz_MimW1v3QHnuMeZqwHMujMHOq-OcbyofpK_CAwnMFYycb_9NY5DLVuadldrAkpuomj-NG8zjdoAcexz9sddNvXMyoqHh0gqrmCUZbADmLU3AxTuFfugDPc2qCHqVUc9Q1CsxP_6hernTnA7UP9H09m_OhaRGIgmFmBs_Jzd8zuJr7JHOVIFIKVhM9Ols081JsIZzXjAbl7iLhpCdCWAQbEOQFulqfnp8xq7l519GzNOx8i-93omA4K5F-IfQYPL0EM2mSTn8YLOQ3vYUtCT_mAAxOmeKwMxYHXVivFpjyVfA4CehS1ViuNoDoDi_j3bJl_aj2zYX8VlhTVb1UQgytuhPRSTtJhsZq2Kw2bSEH8duHz4LGN4kmCUvwPgsLYYIVf5dwVuwTNza9uOrUvpKibhFUV1XYJT6J5En1zZFvELV4Cd4i2EsBAXtb5qbn_A-LkDEUihOnUSNNL12HIJtqHuOHQn4cq6-IuiR8JdVTNcYe7xHd5PVxWJkQnGlR4hwvEA1sTrtsverxEI2T4IPTxopKT8lpa-uFctyBB8WjUTfBMY9eMH-UHESfoGBjXEf7cOc_7J9utUNF8CXffIf36GSkrbZ-5CyWqrDtPHm6EJojk2y6UVi_Ew0IHrlW7Qi_-pki26hfXGWSgBa2d5E1qFB58iBJiG7xXfh8fel8a4XotOAf0-b2RYX=w467-h249-no?authuser=0"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Heading size="md">README Generator</Heading>
              <Text>
                A command-line application that dynamically generates a
                professional README.md file from a user's input using the
                Inquirer package.
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">
              <IconButton
                as="a"
                href="https://github.com/MorganWoods618/scaling-doodle"
                aria-label="GitHub"
                icon={<FaGithub fontSize="1.25rem" />}
              />
              <IconButton
                as="a"
                href="https://drive.google.com/file/d/1ohsBxHvJxYDkB33HApoKaQ-IWacu1PO4/view"
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
