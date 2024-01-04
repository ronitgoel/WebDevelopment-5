'use client'
import * as React from 'react';
import { useEffect, useContext } from 'react';
import Link from 'next/link';
import '../globals.css'
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
import Wishlist from '@/components/Wishlist';
import Likelist from '@/components/Likelist';
import Deliveredlist from '@/components/Delivered';
import Orderedlist from '@/components/Orders';
import { useSession, signOut } from 'next-auth/react';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import Image from 'next/image';
const topFunction = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};
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
  export default function RootLayout({ children }) {
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
                  <Image src={session?.user?.image || "/Profile.png"} alt=""width={40} height={40}  style={{height:'40px', width:'auto'}} className="rounded-full"></Image>
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
                    <MenuItem key={option} selected={option == 'Pyxis'} onClick={handleClose}>
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
            <Orderedlist>
            <Deliveredlist>
            <Likelist>
            <Wishlist>
            {children}
            </Wishlist>
            </Likelist>
            </Deliveredlist>
            </Orderedlist>
            <div className = "bg-violet-950 text-center text-red-500 font-bold text-lg"><button className = "hover:bg-slate-700" onClick={topFunction} title="Go to top">Back To Top</button></div>
        </div>
        
    )
  }