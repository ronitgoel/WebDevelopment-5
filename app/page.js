'use client'
import * as React from 'react';
import { useEffect, useContext } from 'react';
import './globals.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css/navigation';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import KitchenIcon from '@mui/icons-material/Kitchen';
import MedicationIcon from '@mui/icons-material/Medication';
import Image from 'next/image';
import Link from 'next/link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
import { CartContext } from '@/components/Cart';
import { signOut, useSession } from 'next-auth/react';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';

const options = [
  <div key = {1}>
    <Link href="/main/Clothing" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Clothing</Link>
    <Link href="/main/FootWear" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">FootWear</Link>
    <Link href="/main/ElectronicDevices" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Electronic Devices</Link>
    <Link href="/main/SmartPhones" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">SmartPhones</Link>
    <Link href="/main/Accessories" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Accessories</Link>
    <Link href="/main/HomeDecor" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">HomeDecor</Link>
    <Link href="/main/Travel" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Travel</Link>
    <Link href="/main/KitchenItems" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">KitchenItems</Link>
    <Link href="/main/Softwares" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Softwares</Link>
    <Link href="/main/Watches" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Watches</Link>
    <Link href="/main/Medicare" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Medicare</Link>
    <Link href="/main/Babycare" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Babycare</Link>
    <Link href="/main/AutomotiveEssentials" className = "justify-center flex w-[300px] md:w-[400px] text-red-900 text-[20px] bg-yellow-400 hover:bg-yellow-500 font-bold">Automotive Essentials</Link>
  </div>
];

let nav1 = "Enter Your Details";
let nav2 = "Sir/Mam";
const ITEM_HEIGHT = 48;
export default function Home() {
  const {data : session} = useSession();
  if (session)
  {
    nav1 = session.user.name;
    nav2 = "Sign Out";
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const {Cart} = useContext(CartContext);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = React.useState({
    right : false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      style={{color: 'black'}}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      alt=""
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['YourAccount', 'YourOrders', 'PersonalDetails','DeliveredOrders','OrdersRejected','YourWishlist','LikedProducts'].map((text, index) => (
          <ListItem className="bg-blue-950" key={text} disablePadding>
            <Link className="hover:bg-red-500 rounded-xl" style={{color: 'yellow', margin:'auto'}} href={`/main/Settings/${text}`}>
              <ListItemButton>
                <ListItemText primary={text} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
     <div>
        <div className="nav flex flex-col justify-between xl:flex-row">
          <div className="flex flex-col justify-center md:flex-row">
            <div className="nav pr-2 pt-1.5 flex flex-row justify-center">
              <Link className = "pl-2 text-2xl font-black text-orange-400 hover:text-amber-400 w-52 mt-4 sm:text-3xl" href="/">DEVCART</Link>
              <Link className="text-white pt-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." href="/Signup">
                <div className="flex gap-3 text-center" style={{width:'240px', fontSize:'20px'}}>
                  <EditLocationAltIcon style={{fontSize:'50px'}}></EditLocationAltIcon>
                  Hello,
                  {nav1}
                  <Image src={session?.user?.image || "/Profile.png"} alt="profile photo" style={{height:'40px', width:'auto'}} width={40} height={40} className="rounded-full"></Image>
                </div>
              </Link>
            </div>
            <div className="justify-center flex mt-5 ml-4 mb-1.5 text-center">
              <Button variant="outlined" size="medium"
                  className = "w-[300px] md:w-[400px]"
                  aria-label="more"
                  id="long-button"
                  aria-controls={open ? 'long-menu' : undefined}
                  aria-expanded={open ? 'true' : undefined}
                  aria-haspopup="true"
                  onClick={handleClick}>
                  Select Your Category
              </Button>
              <Menu
                  
                  MenuListProps={{
                    'aria-labelledby': 'long-button',
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  className="w-[300px] md:w-[400px]"
                  PaperProps={{
                    style: {
                      maxHeight: ITEM_HEIGHT * 4.5
                    },
                  }}
                >
                  {options.map((option) => (
                    <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                      {option}
                    </MenuItem>
                  ))}
              </Menu>
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div style={{color:'aquamarine'}} className = "w-30 text-xl inline text-center mt-6 mr-8 animate-bounce md:w-80 md:mr-16">
              Welcome To Your Own Shopping Centre
            </div>
            <div className=" bg-pink-500 hover:bg-pink-600 rounded-full px-6 py-0 mt-3 mb-1 ml-2 inline md:ml-8">
                <Link style={{color: 'white', fontSize:'1rem' }} href="/main/Cart">
                  <ShoppingCartOutlinedIcon className="inline-block" style={{ color: 'white', fontSize:'4rem' }}></ShoppingCartOutlinedIcon>
                  Cart ({Cart.length})
                </Link>
            </div>
            <div>
              {['right'].map((anchor) => (
                <React.Fragment key={anchor}>
                  <FormatAlignJustifyIcon onClick={toggleDrawer(anchor, true)} style={{color:'white', fontSize:'4rem', marginTop:'16px'}} ></FormatAlignJustifyIcon>
                  <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                  >
                    <div className = "login">
                      <Button onClick={() => signOut()}><Link href = "/SignIn" className = "login2 hover:bg-yellow-300 font-bold rounded-lg">{nav2}</Link></Button>
                    </div>
                    {list(anchor)}
                    <div className="bg-yellow-600 text-center text-2xl py-2 border-red-600 border-t-8 font-bold">
                      Welcome OnBoard
                    </div>
                    <div className="bg-yellow-600 text-center text-2xl py-2">
                      Top Quality Products
                    </div>
                    <div className="bg-yellow-600 text-center text-2xl py-2">
                      <div className = "hover:animate-spin w-2" style={{margin:'auto'}}>@</div>
                    </div>
                    <div className="bg-yellow-600 text-center text-2xl py-2 hover:underline">
                      Reasonable Rates
                    </div>
                  </Drawer>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
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
          className="mySwiper h-[800px] md:h-[400px]"
        >
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            <div className="flex flex-col md:flex-row">
              <div className="flex-row basis-1/5 "></div>
              <div className="flex-row basis-1/5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "text-3xl text-center font-bold text-yellow-400">Starting At Just ₹199</div>
                <div className = "md:text-md lg:text-xl text-center font-bold">Deals On Top Brands</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Link href="/main/Clothing"><div style={{margin:'auto', width:'9rem'}} className = "rounded-lg text-xl text-center font-bold text-yellow-400 hover:bg-purple-800">Buy Now</div></Link>
              </div>
              <div className = "flex-row basis-1/5"></div>
              <div className="flex flex-row basis-1/5 justify-center pt-4">
                <Image priority={true} src="/Image1.jpg" width={500} height={100} alt="clothes"></Image>
              </div>
              <div className="flex-row basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...">
          <div className="flex flex-col md:flex-row">
              <div className="basis-1/5 "></div>
              <div className="basis-1/5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "text-3xl text-center font-bold text-yellow-400">Under ₹499</div>
                <div className = "md:text-md lg:text-xl text-center font-bold">Super Saver Weekend</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Link href="/main/FootWear"><div style={{margin:'auto', width:'10rem'}} className = "rounded-lg text-xl text-center font-bold text-yellow-400 hover:bg-purple-800">Buy Now</div></Link>
              </div>
              <div className = "basis-1/5"></div>
              <div className="flex flex-row basis-1/5 justify-center pt-4">
                <Image className="h-[358px] w-[500px]" src="/Image2.jpg" width={100} height={100} alt="shoes"></Image>
              </div>
              <div className="basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-pink-500 to-yellow-500 ...">
          <div className="flex flex-col md:flex-row">
              <div className="basis-1/5 "></div>
              <div className="basis-1/5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "text-3xl text-center font-bold text-yellow-400">Under ₹499</div>
                <div className = "text-xl text-center font-bold">Water Bottles And Lunch Boxes<KitchenIcon></KitchenIcon></div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Link href="/main/KitchenItems"><div style={{margin:'auto', width:'10rem'}} className = "rounded-lg  text-xl text-center font-bold text-yellow-400 hover:bg-purple-800">Buy Now</div></Link>
              </div>
              <div className = "basis-1/5"></div>
              <div className="flex flex-row basis-1/5 justify-center pt-4">
                <Image className="h-[358px] w-[600px]" src="/Image3.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-green-400 to-blue-500 ...">
          <div className="flex flex-col md:flex-row">
              <div className="basis-1/5 "></div>
              <div className="basis-1/5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "text-3xl text-center font-bold text-yellow-400">Under ₹99</div>
                <div className = "text-xl text-center font-bold">BestSellers In Medicare<MedicationIcon></MedicationIcon></div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Link href="/main/Medicare"><div style={{margin:'auto', width:'10rem'}} className = "rounded-lg text-xl text-center font-bold text-yellow-400 hover:bg-purple-800">Buy Now</div></Link>
              </div>
              <div className = "basis-1/5"></div>
              <div className="flex flex-row basis-1/5 justify-center pt-4">
                <Image className="h-[358px] w-[500px]" src="/Image4.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5"></div>
            </div>
          </SwiperSlide>
          <SwiperSlide className = "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
          <div className="flex flex-col md:flex-row">
              <div className="basis-1/5 "></div>
              <div className="basis-1/5">
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div className = "text-3xl text-center font-bold text-yellow-400">Smartphones</div>
                <div className = "text-xl text-center font-bold">Starting At ₹6,299</div>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><LocalShippingIcon></LocalShippingIcon>Free Delivery On First Order</div>
                <br></br>
                <div className = "text-lg text-center bg-purple-800 rounded-lg text-pink-400"><TrendingUpIcon></TrendingUpIcon>Latest Trends</div>
                <br></br>
                <Link href="/main/SmartPhones"><div style={{margin:'auto', width:'10rem'}} className = "rounded-lg text-xl text-center font-bold text-yellow-400 hover:bg-purple-800">Buy Now</div></Link>
              </div>
              <div className = "basis-1/5"></div>
              <div className="flex flex-row basis-1/5 justify-center pt-4">
                <Image className="h-[358px] w-[500px]" src="/Image5.jpg" width={500} height={400} alt="clothes"></Image>
              </div>
              <div className="basis-1/5"></div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="bg-slate-400">
        <br></br>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-1">
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 40% Off | Baby Care And Expecting Mothers"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (1).png" width={500} height={400} alt="Baby Care"></Image>
                <CardContent>
                  <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Babycare">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Combo Packs Of Shirts| Under ₹599"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (2).png" width={500} height={400} alt="Shirts"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Clothing">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Automotive Essentials | Upto 60% off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (3).png" width={500} height={400} alt="Automotive Essesntials"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/AutomotiveEssentials">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Under ₹499 | Pocket Friendly Fashion"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (4).png" width={500} height={400} alt="Fashion"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Clothing">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Electronic Devices For Offices"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (5).png" width={500} height={400} alt="Electronic Items"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/ElectronicDevices">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Starting ₹99 | Baby Essentials And Toys"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (6).png" width={500} height={400} alt="Baby Care"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Babycare">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 60% Off | Styles For Women"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (7).png" width={500} height={400} alt="Women Style"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Clothing">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Appliances For Home | Upto 55% Off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (8).png" width={500} height={400} alt="Appliances"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/ElectronicDevices">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Revamp Your Home In Style In Budget Friendly Way"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (9).png" width={500} height={400} alt="Home Decor"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/HomeDecor">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 70% Off | Clearance Store"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (10).png" width={500} height={400} alt="Devices"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/ElectronicDevices">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Upto 60% Off | Styles For Men"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (11).png" width={500} height={400} alt="Men Style"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Clothing">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
              <Card className = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ..." sx={{ maxWidth: 350}}>
                <CardHeader
                  title="Banarsi Sarees For Women | Upto 40% Off"
                />
                <Image className="h-[358px] w-[500px]" src="/Card (12).png" width={500} height={400} alt="Women"></Image>
                <CardContent>
                <div className = "text-center"><Button className="bg-pink-600" variant="contained"><Link href = "/main/Clothing">Visit The Store</Link></Button></div>
                </CardContent>
              </Card>
          </div>
          <br></br>
        </div>
     </div>
  )
}
