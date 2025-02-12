import React from "react";
import { Badge, Box, Button, Card, HStack, Image } from "@chakra-ui/react";

const ProjectCards = ({
  projlink,
  projtitle,
  projdescription,
  projimage,
  projtags,
}) => {
  return (
    <div className="cards pb-4 mt-3 mb-5 px-5 md:px-0">
      <a href={projlink}>
        <Card.Root
          flexDirection={{ base: "column", md: "row" }}
          overflow="hidden"
          maxW="xl"
          minH="200px"
          className=" border border-cyan-50"
        >
          <Image
            objectFit="cover"
            maxW={{ base: "400px", md: "240px" }}
            src={projimage}
            alt="Caffe Latte"
          />
          <Box>
            <Card.Body>
              <div className="flex justify-between items-baseline">
                <Card.Title mb="2">{projtitle}</Card.Title>
                <Button src={projlink}>
                  Visit Website{" "}
                  <svg
                    stroke="currentColor"
                    fill="none"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7 7h10v10"></path>
                    <path d="M7 17 17 7"></path>
                  </svg>
                </Button>
              </div>

              <Card.Description>{projdescription}</Card.Description>
              <HStack className="flex flex-wrap" mt="4">
                {projtags.map((tag, index) => {
                  return <Badge key={index}>{tag}</Badge>;
                })}
              </HStack>
            </Card.Body>
          </Box>
        </Card.Root>
      </a>
    </div>
  );
};

export default ProjectCards;
