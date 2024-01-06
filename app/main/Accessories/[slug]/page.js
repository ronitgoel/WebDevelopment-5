'use client'
import * as React from 'react'
import { useEffect, useContext } from 'react';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SendIcon from '@mui/icons-material/Send';
import { CartContext } from '@/components/Cart';
import { WishContext } from '@/components/Wishlist';
import { LikeContext } from '@/components/Likelist';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, EffectCube, Navigation} from 'swiper/modules';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import {CheckboxGroup, Checkbox, Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";


export default function Page({params}) {
  const router = useRouter();
  const {data : session} = useSession();
  const [color, setcolor] = React.useState(' ');
  const [size, setsize] = React.useState(' ');
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
     fetch(`${process.env.NEXT_PUBLIC_API_URL}api/accessories`)
     .then(res => res.json())
     .then((data) => setProduct(data["Accessories"]));
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
    <div className="text-4xl sm:text-5xl font-bold text-blue-950 text-center">
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
                    <Card isFooterBlurred className="bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 w-[350px] h-[550px] col-span-12 sm:col-span-5">
                        <CardHeader className="flex-col">
                            <p className="text-xl text-indigo-950 uppercase font-bold text-center underline">{Shirt.name}</p>
                        </CardHeader>
                        <CardBody className="z-0 overflow-visible p-0 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                            <div className="m-auto">
                            <Image
                                alt="Card example background"
                                className="w-auto h-[350px]"
                                src={`/${Shirt.image[0]}`}
                            />
                            </div>
                        </CardBody>
                        <CardFooter className="flex flex-col z-1">
                            <div>
                                <StyledRating
                                name="customized-color"
                                defaultValue={Shirt.review}
                                precision={0.5}
                                icon={<FavoriteIcon fontSize="inherit" />}
                                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                                readOnly
                                />
                            </div>
                            <div>
                                <p className="text-black text-md">{Shirt.details}</p>
                            </div>
                            <div className="flex justify-between">
                                <p className="text-black text-xl font-bold mr-12">₹{price}</p>
                                    <Button as={Link} href = {`../${Shirt.link}`} endContent={<SendIcon/>} className="text-lg" color="primary" radius="full" size="sm">
                                        BUY NOW
                                    </Button>
                            </div>
                        </CardFooter>
                    </Card>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
  </div>
  )
}
