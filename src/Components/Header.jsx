import { useState } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Menu,
  MenuList,
  MenuItem,
  MenuDivider,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Links = ['Dashboard', 'Projects', 'Team'];

const NavLink = ({ children }) => (
  <Link
    className="px-2 py-1 rounded-md hover:text-gray-800 hover:bg-gray-200"
    href="#">
    {children}
  </Link>
);

export default function Simple() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Box className="bg-gray-100 px-4">
        <Flex className="h-16 items-center justify-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={handleToggle}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>Logo</Box>
            <HStack
              as="nav"
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box className="p-4">Main Content Here</Box>
    </>
  );
}
