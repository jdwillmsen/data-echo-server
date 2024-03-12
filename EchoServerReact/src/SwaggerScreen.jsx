import { Box, Text, Button } from '@chakra-ui/react';

const Sidebar = () => {
    return (
        <Box bg="gray.200" p="4" h="100%">
            <Text fontWeight="bold" mb="4">Menu</Text>
            <Button colorScheme="blue">Add Group</Button>
            {/* Add other sidebar items as needed */}
        </Box>
    );
};

export default Sidebar;