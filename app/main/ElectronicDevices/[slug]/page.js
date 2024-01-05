'use client'
import * as React from 'react'
import { useEffect } from 'react';
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { Button } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from '@/components/Cart';
import { WishContext } from '@/components/Wishlist';
import { LikeContext } from '@/components/Likelist';
import { Swiper, SwiperSlide } from 'swiper/react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { EffectCoverflow, Pagination, EffectCube, Navigation} from 'swiper/modules';
import Link from 'next/link';
import SendIcon from '@mui/icons-material/Send';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';


export default function Page({params}) {
    const router = useRouter();
    const {data : session} = useSession();
  const [color, setcolor] = React.useState('Red');
  const [size, setsize] = React.useState(' ');
  const handlecolor = (event, newColor) => {
    setcolor(newColor)
  };
  const {addprod} = useContext(CartContext);
  const {addwish} = useContext(WishContext);
  const {addLike} = useContext(LikeContext);
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#dc143c',
    }
  });
  const [product, setProduct] = React.useState([]);
  useEffect(() => {
     fetch(`${process.env.NEXT_PUBLIC_API_URL}api/electronicdevices`)
     .then(res => res.json())
     .then((data) => setProduct(data["Electronicdevices"]));
  }, []);
  let name = 'hello';
  let image = [];
  let details = 'hello';
  let review = 0;
  let price = 0;
  let ele= {};
  let another = product.filter(p => !p.link.includes(params.slug))
  for (const element of product)
  {
    if (element.link.includes(params.slug))
    {
        ele = element;
        name = element.name;
        image = element.image;
        details = element.details;
        review = element.review;
        price = element.price;
    }
  }
  function add(ele)
  {
    if (session)
    {
        addprod(ele, color, size);
        toast.success('🦄 Item Added To Cart!!', {
            position: "bottom-left",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }
    else
    {
        router.push('/SignIn');
    }
  }
  function wish(ele)
  {
    if (session)
    {
       addwish(ele);
       toast.success('🦄 Item Added To Wishlist!!', {
           position: "bottom-left",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
       });
    }
    else
    {
       router.push('/SignIn');
    }
  }
  function like(ele)
  {
    if (session)
    {
       addLike(ele);
       toast.success('🦄 Item Added To Liked Products!!', {
           position: "bottom-left",
           autoClose: 3000,
           hideProgressBar: false,
           closeOnClick: false,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "dark",
       });
    }
    else
    {
       router.push('/SignIn');
    }
  }
  return (
  <div className="text-gray-800 bg-yellow-500 body-font overflow-hidden py-24">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <Swiper
        style={{width: '400px', height: '400px', background: 'white'}}
        effect={'cube'}
        grabCursor={true}
        navigation={true}
        pagination={true}
        cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
        }}
        modules={[EffectCube, Navigation, Pagination]}
        className="mySwiper"
        >
            <SwiperSlide>
            <Image  style={{height:'400px', width:'auto',margin:'auto'}} alt="ecommerce" width={500} height={500} src={`/${image[0]}`}></Image>
            </SwiperSlide>
            <SwiperSlide>
            <Image  style={{height:'400px', width:'auto',margin:'auto'}} alt="ecommerce" width={500} height={500} src={`/${image[0]}`}></Image>
            </SwiperSlide>
            <SwiperSlide>
            <Image  style={{height:'400px', width:'auto',margin:'auto'}} alt="ecommerce" width={500} height={500} src={`/${image[0]}`}></Image>
            </SwiperSlide>
            <SwiperSlide>
            <Image  style={{height:'400px', width:'auto',margin:'auto'}} alt="ecommerce" width={500} height={500} src={`/${image[0]}`}></Image>
            </SwiperSlide>
        </Swiper>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-purple-900 tracking-widest">ITEM NAME</h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
            <div className="flex mb-4">
                <span className="flex items-center">
                    <StyledRating
                        name="customized-color"
                        defaultValue={review}
                        precision={0.5}
                        icon={<FavoriteIcon fontSize="inherit" />}
                        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                        readOnly
                    />
                    <span className="text-gray-600 ml-3">{review*127} Reviews</span>
                </span>
            </div>
            <p className="leading-relaxed font-bold text-lg">
                {details}
            </p>
            <div className="flex mt-6 items-center pb-4 border-b-2 border-red-800 mb-5">
                <div className="flex mr-4">
                    <span className="mr-3 font-bold text-lg">Color:</span>
                    <div className="bg-orange-200">
                        <ToggleButtonGroup value={color} exclusive onChange={handlecolor} color="error" size="medium">    
                            <ToggleButton value="Red" variant="contained" className="border-2 border-red-800 font-bold bg-red-500 hover:bg-red-700">Red</ToggleButton>
                            <ToggleButton value="Blue" variant="contained" className="border-2 border-red-800 font-bold bg-blue-800 hover:bg-blue-500">Blue</ToggleButton>
                            <ToggleButton value="Green" variant="contained" className="border-2 border-red-800 font-bold bg-green-600 hover:bg-green-700">Green</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
            </div>
            <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">₹{price}</span>
                <Button onClick={() => {add(ele);}} className="flex ml-auto text-white bg-indigo-700 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add To Cart</Button>
                <Button onClick={() => {wish(ele);}} className="rounded-full w-10 h-10 bg-indigo-700 p-0 border-1 inline-flex items-center justify-center ml-4 hover:bg-indigo-600">
                    <FavoriteIcon style={{color:'red'}}></FavoriteIcon>
                </Button>
                <Button onClick={() => {like(ele);}} className="rounded-full w-10 h-10 bg-indigo-700 p-0 border-1 inline-flex items-center justify-center ml-4 hover:bg-indigo-600">
                    <ThumbUpIcon style={{color:'red'}}></ThumbUpIcon>
                </Button>
                <ToastContainer
                    position="bottom-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover
                    theme="dark"
                />
            </div>
        </div>
    </div>
    <br></br>
    <br></br>
    <div className="text-5xl font-bold text-blue-950 text-center">
        More Recommendations For You
    </div>
    <br></br>
    <div>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            navigation={true}
            coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="mySwiper"
        > 
            {another.map((Shirt) => (
                <SwiperSlide key = {Shirt.key} style={{width:"auto", height:"500"}}>
                    <Card sx={{ maxHeight : 500 }} style={{margin:"2rem"}} className="bg-blue-950 shadow-2xl shadow-indigo-500/50">
                        <CardHeader
                            className = "text-center text-white"
                            title = {Shirt.name}
                        />
                        <div className="bg-white h-[300px] w-[300px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                            <Image style={{height:'300px', width:'auto',margin:'auto', padding:'1rem'}} src={`/${Shirt.image[0]}`} width={500} height={350} alt="Photo"></Image>
                        </div>
                        <CardContent>
                            <Typography className="text-center text-white font-bold" variant="body2" color="text.secondary">
                            {Shirt.details}
                            </Typography>
                        </CardContent>
                        <StyledRating
                            style={{marginLeft:"0.5rem"}}
                            name="customized-color"
                            defaultValue={Shirt.review}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                            readOnly
                        />
                        <CardActions>
                            <Button className = "bg-pink-500" style={{marginRight:"1rem"}} variant="contained" endIcon={<SendIcon />}>
                                <Link href = {`../${Shirt.link}`}>BUY NOW</Link>
                            </Button>
                            <div><p className="text-white font-bold font-sans ...">₹{Shirt.price}</p></div>
                        </CardActions>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  </div>
  )
}
