'use client'
import './globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import * as React from 'react';
import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MedicationIcon from '@mui/icons-material/Medication';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Button, DropdownMenu, DropdownTrigger, Dropdown, DropdownItem, Avatar} from "@nextui-org/react";
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '@/components/Cart';
import { signOut, useSession } from 'next-auth/react';
import CategoryIcon from '@mui/icons-material/Category';

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

let nav1 = "";
let nav2 = "Sign Up";
export default function Home() {
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
          position="static"
          className="bg-white"
          isBordered='true'
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            <NavbarBrand>
              <Link href="/"><div className="font-bold text-lg font-serif">SWIFTCART</div></Link>
            </NavbarBrand>
          </NavbarContent>
          
          <NavbarContent className="hidden sm:flex">
            <NavbarBrand>
              <Link href="/"><div className="font-bold sm:text-xl md:text-3xl lg:text-4xl font-serif">SWIFTCART</div></Link>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex md:mr-10">
            <Dropdown>
              <NavbarItem>
                <DropdownTrigger>
                  <Button
                    disableRipple
                    className="md:w-[300px] lg:w-[400px] text-md justify-between font-bold text-black font-sans"
                    radius="md"
                    variant="bordered"
                    size="lg"
                    color="danger"
                  >
                    Select Your Category
                    <CategoryIcon style={{fontSize:'50px'}}></CategoryIcon>
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
                  <DropdownItem key={`${item}-${index}`}>
                      {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden sm:flex">
            <div className="text-lg font-sans">
            <Link href="/main/Cart">
                <ShoppingCartOutlinedIcon style={{fontSize:'30px'}} className="inline-block"></ShoppingCartOutlinedIcon>
                Cart ({Cart.length})
            </Link>
            </div>
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
                  fallback={<Avatar src='/Profile.png' alt='profile'></Avatar>}
                />
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2 text-center text-indigo-950 font-bold bg-warning-400">
                  <p className="font-semibold">Welcome Back</p>
                  <p className="font-semibold">{nav1}</p>
                </DropdownItem>
                  {list.map((item, index) => (
                    <DropdownItem key={`${item}-${index}`}>
                        {item}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <NavbarMenu>
            <NavbarItem className="flex sm:hidden justify-center">
            <Button as={Link} href="/main/Cart" color="danger" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">
                <ShoppingCartOutlinedIcon className="inline-block"></ShoppingCartOutlinedIcon>
                Cart ({Cart.length})
            </Button>
            </NavbarItem>
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                  {item}
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
        <div className="bg-slate-200">
        <div className="p-4 flex md:hidden absolute z-0 left-0 right-0">
        <Swiper
          rewind={true}
          direction={'horizontal'}
          centeredSlides={true}
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-[600px] rounded-xl"
        >
          <SwiperSlide>
            <img alt="clothing" src="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img23/BAU-Dec/Laptops_Brand-Banners/Intel_Mainstream2_978x900._SS900_QL85_.jpg" height={350} width={350} className="m-auto w-auto h-[600px] rounded-xl"></img>
          </SwiperSlide>
          <SwiperSlide >
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/kmargso/Baby/SuperBottoms440x440.jpg" height={350} width={350} className="m-auto w-auto h-[600px] rounded-xl"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img17/Home/LA/LASA/2018/ACs._CB502902454_.jpg" height={350} width={350} className="m-auto w-auto h-[600px] rounded-xl"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img17/Home/LA/LASA/2018/Ref._CB502902448_.jpg" height={350} width={350} className="m-auto w-auto h-[600px] rounded-xl"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://m.media-amazon.com/images/G/31/img21/MA2023/DECWRS/tops/brands/USPA_978x1383._SY530_QL85_FMpng_.png" height={350} width={350} className="m-auto w-auto h-[600px] rounded-xl"></img>
          </SwiperSlide>
        </Swiper>
        </div>
        <div className="p-4 hidden md:flex absolute z-0 left-0 right-0">
        <Swiper
          rewind={true}
          direction={'horizontal'}
          centeredSlides={true}
          navigation={true}
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}
          modules={[Navigation, Autoplay]}
          className="mySwiper h-auto rounded-xl"
        >
          <SwiperSlide>
            <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img24/Consumables/SVD/Jan24/GW/Unrec_PC_Hero_3000x1200_ICICI._CB585113227_.jpg" height={350} width={350} className="w-full h-auto"></img>
          </SwiperSlide>
          <SwiperSlide >
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img2020/img21/apparelGW/jan24atf/unrec/hsbc/MA_3000._CB585877493_.jpg" height={350} width={350} className="w-full h-auto"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/OHL/23/Central/BAU/NOv/Desktop_Hero_3000x1200_2_2x._CB574373355_.jpg" height={350} width={350} className="w-full h-auto"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img24/Beauty/GW/atf/janv6/PC-Hero-2._CB585567351_.jpg" height={350} width={350} className="w-full h-auto"></img>
          </SwiperSlide>
          <SwiperSlide>
          <img alt="clothing" src="https://images-eu.ssl-images-amazon.com/images/W/MEDIAX_792452-T1/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg" height={350} width={350} className="w-full h-auto"></img>
          </SwiperSlide>
        </Swiper>
        </div>
        <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-1 relative mt-[620px] md:mt-[180px] lg:mt-[250px] xl:mt-[350px] z-1">
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 40% Off | Baby Care And Expecting Mothers"
                  className="md:bg-white"
                />
                <Image className="h-[358px] w-[500px]" src="/Card1.png" width={500} height={400} alt="Baby Care"></Image>
                <CardContent>
                  <div className = "text-center"><Button as={Link} href = "/main/Babycare" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Combo Packs Of Shirts| Under ₹599"
                  className="md:bg-white"
                />
                <Image className="h-[358px] w-[500px]" src="/Card2.png" width={500} height={400} alt="Shirts"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Automotive Essentials | Upto 60% off"
                  className="lg:bg-white"
                />
                <Image className="h-[358px] w-[500px]" src="/Card3.png" width={500} height={400} alt="Automotive Essesntials"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link}  href = "/main/AutomotiveEssentials" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Under ₹499 | Pocket Friendly Fashion"
                  className="xl:bg-white"
                />
                <Image className="h-[358px] w-[500px]" src="/Card4.png" width={500} height={400} alt="Fashion"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Electronic Devices For Offices"
                />
                <Image className="h-[358px] w-[500px]" src="/Card5.png" width={500} height={400} alt="Electronic Items"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/ElectronicDevices" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Starting ₹99 | Baby Essentials And Toys"
                />
                <Image className="h-[358px] w-[500px]" src="/Card6.png" width={500} height={400} alt="Baby Care"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Babycare" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 60% Off | Styles For Women"
                />
                <Image className="h-[358px] w-[500px]" src="/Card7.png" width={500} height={400} alt="Women Style"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Appliances For Home | Upto 55% Off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card8.png" width={500} height={400} alt="Appliances"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/ElectronicDevices" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Revamp Your Home In Style In Budget Friendly Way"
                />
                <Image className="h-[358px] w-[500px]" src="/Card9.png" width={500} height={400} alt="Home Decor"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/HomeDecor" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 70% Off | Clearance Store"
                />
                <Image className="h-[358px] w-[500px]" src="/Card10.png" width={500} height={400} alt="Devices"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/ElectronicDevices" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 60% Off | Styles For Men"
                />
                <Image className="h-[358px] w-[500px]" src="/Card11.png" width={500} height={400} alt="Men Style"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Banarsi Sarees For Women | Upto 40% Off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card12.png" width={500} height={400} alt="Women"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
          </div>
          <br></br>
        </div>
     </div>
  )
}
