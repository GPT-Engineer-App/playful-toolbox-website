import React from "react";
import { Box, Heading, Text, Button, Image, Grid, GridItem, Stack, Icon, Divider, Link, VStack, HStack, Textarea, Input, useColorModeValue } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation */}
      <Box bg="green.500" py={4}>
        <HStack justify="space-between" maxW="container.lg" mx="auto" px={4}>
          <Image src="https://images.unsplash.com/photo-1646343251574-a7b03ee3dbaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbGF5Z3JvdW5kJTIwbG9nb3xlbnwwfHx8fDE3MTI2Njc3MzV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" boxSize="50px" />
          <HStack spacing={8}>
            <Link href="#home" color="white" fontWeight="bold">
              Home
            </Link>
            <Link href="#services" color="white" fontWeight="bold">
              Services
            </Link>
            <Link href="#portfolio" color="white" fontWeight="bold">
              Portfolio
            </Link>
            <Link href="#about" color="white" fontWeight="bold">
              About Us
            </Link>
            <Link href="#contact" color="white" fontWeight="bold">
              Contact
            </Link>
            <Button colorScheme="orange">Get a Quote</Button>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box id="home" bg={useColorModeValue("gray.100", "gray.700")} py={20}>
        <Grid templateColumns="repeat(2, 1fr)" gap={8} maxW="container.lg" mx="auto" px={4}>
          <GridItem>
            <Heading as="h1" size="2xl" mb={4}>
              Transforming Spaces, One Playground at a Time
            </Heading>
            <Text fontSize="xl" mb={8}>
              Kal-Serwis specializes in playground installations, customized furniture, and minor renovation work. Let us create a safe and fun environment for your community.
            </Text>
            <Button colorScheme="green" size="lg">
              Learn More
            </Button>
          </GridItem>
          <GridItem>
            <Image src="https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjBvbiUyMHBsYXlncm91bmR8ZW58MHx8fHwxNzEyNjcxMjg0fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Hero Image" borderRadius="md" />
          </GridItem>
        </Grid>
      </Box>

      {/* Services Section */}
      <Box id="services" py={20}>
        <Stack spacing={12} maxW="container.lg" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center">
            Our Services
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <VStack spacing={4} align="center" textAlign="center">
                <Icon as={FaMapMarkerAlt} boxSize={12} color="green.500" />
                <Heading as="h3" size="lg">
                  Playground Installation
                </Heading>
                <Text>We handle the entire process from site assessment to equipment selection and installation, ensuring safety and customization.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="center" textAlign="center">
                <Icon as={FaPhone} boxSize={12} color="blue.500" />
                <Heading as="h3" size="lg">
                  Customized Furniture
                </Heading>
                <Text>Our skilled craftsmen create unique furniture pieces tailored to your specific needs and preferences.</Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4} align="center" textAlign="center">
                <Icon as={FaEnvelope} boxSize={12} color="orange.500" />
                <Heading as="h3" size="lg">
                  Minor Renovation Work
                </Heading>
                <Text>We offer a range of renovation services, including painting, repairs, and upgrades, to refresh your space.</Text>
              </VStack>
            </GridItem>
          </Grid>
          <Box bg="gray.100" p={8} borderRadius="md">
            <Heading as="h3" size="lg" mb={4}>
              Pricing Calculator
            </Heading>
            <Text mb={4}>Get an estimated price for your project by providing some details:</Text>
            <Stack spacing={4}>
              <Input placeholder="Distance" />
              <Input placeholder="Equipment Type" />
              <Input placeholder="Assembly Complexity" />
              <Button colorScheme="green">Calculate Price</Button>
            </Stack>
          </Box>
        </Stack>
      </Box>

      {/* Testimonials Section */}
      <Box bg="gray.100" py={20}>
        <Stack spacing={12} maxW="container.lg" mx="auto" px={4}>
          <Heading as="h2" size="xl" textAlign="center">
            What Our Customers Say
          </Heading>
          <Grid templateColumns="repeat(3, 1fr)" gap={8}>
            <GridItem>
              <Box bg="white" p={6} borderRadius="md" boxShadow="md">
                <Text fontSize="lg" mb={4}>
                  "Kal-Serwis transformed our playground into a safe and exciting space for children. Highly recommended!"
                </Text>
                <HStack>
                  <Image src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjY2NzczNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer" boxSize="50px" borderRadius="full" />
                  <Text fontWeight="bold">John Doe</Text>
                </HStack>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" p={6} borderRadius="md" boxShadow="md">
                <Text fontSize="lg" mb={4}>
                  "The customized furniture created by Kal-Serwis exceeded our expectations. Beautiful craftsmanship!"
                </Text>
                <HStack>
                  <Image src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxjdXN0b21lciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjY2NzczNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer" boxSize="50px" borderRadius="full" />
                  <Text fontWeight="bold">Jane Smith</Text>
                </HStack>
              </Box>
            </GridItem>
            <GridItem>
              <Box bg="white" p={6} borderRadius="md" boxShadow="md">
                <Text fontSize="lg" mb={4}>
                  "Kal-Serwis's renovation work breathed new life into our old space. They are professional and efficient."
                </Text>
                <HStack>
                  <Image src="https://images.unsplash.com/photo-1499651681375-8afc5a4db253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxjdXN0b21lciUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMjY2NzczNnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Customer" boxSize="50px" borderRadius="full" />
                  <Text fontWeight="bold">Mike Johnson</Text>
                </HStack>
              </Box>
            </GridItem>
          </Grid>
        </Stack>
      </Box>

      {/* Footer */}
      <Box bg="gray.900" color="white" py={12}>
        <Grid templateColumns="repeat(3, 1fr)" gap={8} maxW="container.lg" mx="auto" px={4}>
          <GridItem>
            <Heading as="h4" size="md" mb={4}>
              Contact Us
            </Heading>
            <VStack align="start" spacing={2}>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>123 Main St, City, Country</Text>
              </HStack>
              <HStack>
                <Icon as={FaPhone} />
                <Text>+1 234 567 890</Text>
              </HStack>
              <HStack>
                <Icon as={FaEnvelope} />
                <Text>info@kal-serwis.com</Text>
              </HStack>
            </VStack>
          </GridItem>
          <GridItem>
            <Heading as="h4" size="md" mb={4}>
              Follow Us
            </Heading>
            <HStack>
              <Link href="https://facebook.com" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="https://instagram.com" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </HStack>
          </GridItem>
          <GridItem>
            <Text>&copy; {new Date().getFullYear()} Kal-Serwis. All rights reserved.</Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default Index;
