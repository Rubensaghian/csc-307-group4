import {
  Box,
  Card,
  Center,
  Heading,
  HStack,
  Text,
  VStack,
  Icon,
  Avatar
} from "@chakra-ui/react";
import {
  FEATURE_CARDS,
  USER_TYPES,
  PAGE_CONTENT
} from "@/constants/homePageConstants.ts";
import React from "react";

type CardProps = {
  title: string;
  desc: string;
  icon: React.ElementType;
};

type StepItemProps = {
  color: string;
  desc: string;
  num: string;
};

function InfoCard({ title, desc, icon }: CardProps) {
  return (
    <Card.Root width="300px" size="lg" height="250px">
      <Card.Body gap="2">
        <Icon as={icon} color="blue" />
        <Card.Title mt="2">{title}</Card.Title>
        <Card.Description>{desc}</Card.Description>
      </Card.Body>
    </Card.Root>
  );
}

function StepItem({ color, desc, num }: StepItemProps) {
  return (
    <HStack>
      <Avatar.Root
        size="sm"
        colorPalette={color}
        bg={{ base: "colorPalette.300" }}>
        <Avatar.Fallback name={num} />
      </Avatar.Root>
      <Text fontSize="md">{desc}</Text>
    </HStack>
  );
}

export default function Home() {
  return (
    <Center>
      <VStack gap="8">
        <Box
          textAlign="center"
          fontSize="xl"
          pt="30vh"
          width="md">
          <VStack gap="8">
            <Heading size="2xl">{PAGE_CONTENT.heading}</Heading>
            <Text fontSize="lg" letterSpacing="tight">
              {PAGE_CONTENT.body}
            </Text>
          </VStack>
        </Box>

        <HStack gap="8">
          {FEATURE_CARDS.map((card) => (
            <InfoCard
              key={card.id}
              title={card.title}
              desc={card.desc}
              icon={card.icon}
            />
          ))}
        </HStack>

        <VStack gap="4">
          <Heading size="2xl">
            {PAGE_CONTENT.secondHeading}
          </Heading>
          <HStack gap="8">
            {USER_TYPES.map((type) => (
              <Card.Root
                key={type.id}
                size="lg"
                colorPalette={type.color}
                bg="colorPalette.50">
                <Card.Title>
                  <Icon as={type.icon} color={type.color} />
                  {type.title}
                </Card.Title>
                <Card.Description>
                  <VStack align="start">
                    {type.steps.map((step, index) => (
                      <StepItem
                        key={index}
                        color={type.color}
                        desc={step}
                        num={(index + 1).toString()}
                      />
                    ))}
                  </VStack>
                </Card.Description>
              </Card.Root>
            ))}
          </HStack>
        </VStack>
      </VStack>
    </Center>
  );
}
