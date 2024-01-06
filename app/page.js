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
          className="dark bg-warning-400 backdrop-sepia-0 backdrop-blur-sm bg-opacity-50"
          isBordered='true'
          isMenuOpen={isMenuOpen}
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent className="sm:hidden" justify="start">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
          </NavbarContent>

          <NavbarContent className="sm:hidden" justify="center">
            <NavbarBrand>
              <Button as={Link} href="/" color="danger" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">DEVCART</Button>
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4">
            <NavbarBrand>
            <Button as={Link} href="/" color="danger" variant="solid" size="lg" radius="md" className="font-bold text-white text-lg">DEVCART</Button>
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
                  <DropdownItem key={`${item}-${index}`}>
                      {item}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </NavbarContent>

          <NavbarContent justify="end">
            <NavbarItem className="hidden sm:flex">
            <Button as={Link} href="/main/Cart" color="danger" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">
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
          className="mySwiper h-[620px] md:h-[400px]"
        >
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            <div className="items-center flex flex-col md:flex-row">
              <div className="flex flex-row basis-2/5 justify-center mt-8">
                <Image className="rounded-lg w-auto h-[350px]" priority={true} src="/Image1.jpg" width={500} height={100} alt="clothes"></Image>
              </div>
              <div className="flex-row basis-1/5"></div>
              <div className="w-[350px] h-auto md:w-auto md:h-[350px] text-center flex-row basis-1/5 bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 rounded-lg mt-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                <div className = "md:mt-16 lg:mt-18 text-3xl text-center font-bold text-yellow-400 underline">Starting At Just ₹199</div>
                <div className = "md:text-md lg:text-xl text-center font-bold">Deals On Top Brands</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Button as={Link} href="/main/Clothing" color="success" className = "text-xl text-center font-bold text-white">Buy Now</Button>
              </div>
              <div className = "flex-row basis-1/5"></div>

            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
          <div className="items-center flex flex-col md:flex-row">
              <div className="flex flex-row basis-2/5 justify-center mt-12">
                <Image className="rounded-lg w-auto h-[250px] md:h-[320px]" src="/Image2.jpg" width={100} height={100} alt="shoes"></Image>
              </div>
              <div className="basis-1/5 "></div>
              <div className="w-[350px] h-auto md:w-auto md:h-[350px] text-center flex-row basis-1/5 bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 rounded-lg mt-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                <div className = "md:mt-16 lg:mt-18 text-3xl text-center font-bold text-yellow-400 underline">Under ₹499</div>
                <div className = "md:text-md lg:text-xl text-center font-bold">Super Saver Weekend</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Button as={Link} href="/main/FootWear" color="success" className = "text-xl text-center font-bold text-white">Buy Now</Button>
              </div>
              <div className = "basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-pink-500 to-yellow-500 ...">
          <div className="items-center flex flex-col md:flex-row">
              <div className="flex flex-row basis-2/5 justify-center mt-12">
                <Image className="rounded-lg w-auto h-[220px] md:h-[320px]" src="/Image3.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5 "></div>
              <div className="w-[350px] h-auto md:w-auto md:h-[350px] text-center flex-row basis-1/5 bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 rounded-lg mt-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                <div className = "md:mt-16 lg:mt-18 text-3xl text-center font-bold text-indigo-950 underline">Under ₹499</div>
                <div className = "text-xl text-center font-bold">Water Bottles And Lunch Boxes<KitchenIcon></KitchenIcon></div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Button as={Link} href="/main/KitchenItems" color="success" className = "text-xl text-center font-bold text-white">Buy Now</Button>
              </div>
              <div className = "basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-green-400 to-blue-500 ...">
          <div className="items-center flex flex-col md:flex-row">
              <div className="flex flex-row basis-2/5 justify-center mt-12">
                <Image className="rounded-lg w-auto h-[240px] md:h-[320px]" src="/Image4.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5 "></div>
              <div className="w-[350px] h-auto md:w-auto md:h-[350px] text-center flex-row basis-1/5 bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 rounded-lg mt-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                <div className = "md:mt-16 lg:mt-18 text-3xl text-center font-bold text-indigo-950 underline">Under ₹99</div>
                <div className = "text-xl text-center font-bold">BestSellers In Medicare<MedicationIcon></MedicationIcon></div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Button as={Link} href="/main/Medicare" color="success" className = "text-xl text-center font-bold text-white">Buy Now</Button>
              </div>
              <div className = "basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          <div className="items-center flex flex-col md:flex-row">
              <div className="flex flex-row basis-2/5 justify-center mt-8">
                <Image className="rounded-lg w-auto h-[330px] md:h-[350px]" src="/Image5.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5 "></div>
              <div className="w-[350px] h-auto md:w-auto md:h-[350px] text-center flex-row basis-1/5 bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 rounded-lg mt-4 mr-2 ml-2 sm:ml-0 sm:mr-0">
                <div className = "md:mt-16 lg:mt-18 text-3xl text-center font-bold text-yellow-400 underline">Smartphones</div>
                <div className = "text-xl text-center font-bold">Starting At ₹6,299</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-300"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Button as={Link} href="/main/SmartPhones" color="success" className = "text-xl text-center font-bold text-white">Buy Now</Button>
              </div>
              <div className = "basis-1/5"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="bg-slate-300">
        <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-1">
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 40% Off | Baby Care And Expecting Mothers"
                />
                <Image className="h-[358px] w-[500px]" src="/Card1.png" width={500} height={400} alt="Baby Care"></Image>
                <CardContent>
                  <div className = "text-center"><Button as={Link} href = "/main/Babycare" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Combo Packs Of Shirts| Under ₹599"
                />
                <Image className="h-[358px] w-[500px]" src="/Card2.png" width={500} height={400} alt="Shirts"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link} href = "/main/Clothing" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Automotive Essentials | Upto 60% off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card3.png" width={500} height={400} alt="Automotive Essesntials"></Image>
                <CardContent>
                <div className = "text-center"><Button as={Link}  href = "/main/AutomotiveEssentials" color="primary" variant="solid" size="md" radius="md" className="font-bold text-white text-lg">Vist The Store</Button></div>
                </CardContent>
              </Card>
              <Card className = "bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Under ₹499 | Pocket Friendly Fashion"
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
