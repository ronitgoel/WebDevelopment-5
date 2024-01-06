'use client'
import '../globals.css'
import * as React from 'react';
import { useContext } from 'react';
import Link from 'next/link';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { CartContext } from '@/components/Cart';
import Wishlist from '@/components/Wishlist';
import Likelist from '@/components/Likelist';
import Deliveredlist from '@/components/Delivered';
import Orderedlist from '@/components/Orders';
import { useSession, signOut } from 'next-auth/react';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, DropdownMenu, DropdownTrigger, Dropdown, DropdownItem, Avatar} from "@nextui-org/react";

const menuItems = [
  <div key = {1}>
    <Link href="/main/Clothing" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Clothing</Link>
    <Link href="/main/FootWear" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">FootWear</Link>
    <Link href="/main/ElectronicDevices" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Electronic Devices</Link>
    <Link href="/main/SmartPhones" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">SmartPhones</Link>
    <Link href="/main/Accessories" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Accessories</Link>
    <Link href="/main/HomeDecor" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">HomeDecor</Link>
    <Link href="/main/Travel" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Travel</Link>
    <Link href="/main/KitchenItems" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">KitchenItems</Link>
    <Link href="/main/Softwares" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Softwares</Link>
    <Link href="/main/Watches" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Watches</Link>
    <Link href="/main/Medicare" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Medicare</Link>
    <Link href="/main/Babycare" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Babycare</Link>
    <Link href="/main/AutomotiveEssentials" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Automotive Essentials</Link>
  </div>
];
const list = [
  <div key = {1}>
    <Link href="/main/Settings/YourAccount" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Your Account</Link>
    <Link href="/main/Settings/PersonalDetails" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Personal Details</Link>
    <Link href="/main/Settings/YourOrders" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Your Orders</Link>
    <Link href="/main/Settings/DeliveredOrders" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Delivered Orders</Link>
    <Link href="/main/Settings/OrdersRejected" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Orders Rejected</Link>
    <Link href="/main/Settings/YourWishlist" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Wishlist</Link>
    <Link href="/main/Settings/LikedProducts" className = "justify-center flex text-white text-[16px] bg-warning-400 hover:bg-indigo-950 font-bold pb-2 pt-2">Liked Products</Link>
  </div>
];
const topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};
let nav1 = "";
let nav2 = "Sign Up";
  export default function RootLayout({ children }) {
    const {Cart} = useContext(CartContext);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const {data : session} = useSession();
    if (session)
    {
      nav1 = session.user.name;
      nav2 = "Sign Out";
    }
    return (
      <div>
        <Navbar
          className="dark bg-warning-400 backdrop-sepia-0 backdrop-blur-sm bg-opacity-50"
          isBordered="true"
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            />
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="center">
            <NavbarBrand>
                <Button
                  as={Link}
                  href="/"
                  color="danger"
                  variant="solid"
                  size="md"
                  radius="md"
                  className="font-bold text-white text-lg"
                >
                  DEVCART
                </Button>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4">
            <NavbarBrand>
                <Button
                  as={Link}
                  href="/"
                  color="danger"
                  variant="solid"
                  size="lg"
                  radius="md"
                  className="font-bold text-white text-lg"
                >
                  DEVCART
                </Button>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="md:w-[300px] lg:w-[400px] p-0 bg-indigo-950 md:text-lg lg:text-2xl font-bold text-yellow-500"
                    radius="md"
                    variant="solid"
                    size="lg"
                    color="danger"
                  >
                    Select Your Category
                  </Button>
                </DropdownTrigger>
              </NavbarItem>
              <DropdownMenu
                aria-label="Categories"
                className="w-[340px]"
                itemClasses={{
                  base: "gap-4",
                }}
              >
                {menuItems.map((item, index) => (
                  <DropdownItem key={`${item}-${index}`}>{item}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden sm:flex">
                <Button
                  as={Link}
                  href="/main/Cart"
                  color="danger"
                  variant="solid"
                  size="md"
                  radius="md"
                  className="font-bold text-white text-lg"
                >
                  <ShoppingCartOutlinedIcon className="inline-block"></ShoppingCartOutlinedIcon>
                  Cart ({Cart.length})
                </Button>
            </NavbarItem>
            <NavbarItem>
              {
                !session && 
                (
                <Button as={Link} href="/Signup" color="danger" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">
                  {nav2}
                 </Button>
                )
              }
              {
                session &&
                (
                 <Button as={Link} onClick={() => signOut()} href="/Signup" color="danger" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">
                  {nav2}
                 </Button>
                )
              }
            </NavbarItem>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  color="danger"
                  size="md"
                  src={session?.user?.image}
                  showFallback
                  fallback={<Avatar src="/Profile.png" alt="profile"></Avatar>}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem
                  key="profile"
                  className="h-14 gap-2 text-center text-indigo-950 font-bold bg-warning-400"
                >
                  <p className="font-semibold">Welcome Back</p>
                  <p className="font-semibold">{nav1}</p>
                </DropdownItem>
                {list.map((item, index) => (
                  <DropdownItem key={`${item}-${index}`}>{item}</DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <NavbarMenu>
            <NavbarItem className="flex sm:hidden justify-center">
                <Button
                  href="/main/Cart"
                  as={Link}
                  color="danger"
                  variant="solid"
                  size="md"
                  radius="md"
                  className="font-bold text-white text-lg"
                >
                  <ShoppingCartOutlinedIcon className="inline-block"></ShoppingCartOutlinedIcon>
                  Cart ({Cart.length})
                </Button>
            </NavbarItem>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>{item}</NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <Orderedlist>
          <Deliveredlist>
            <Likelist>
              <Wishlist>{children}</Wishlist>
            </Likelist>
          </Deliveredlist>
        </Orderedlist>
        <div className="bg-indigo-950 text-center text-red-500 font-bold text-lg">
          <Button
            className="m-2"
            color="danger"
            onClick={topFunction}
            title="Go to top"
          >
            Back To Top
          </Button>
        </div>
      </div>
    );
  }