'use client'
import * as React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";

export default function Content({name, image, details, link, review, price}) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#dc143c',
        }
    });
    return (
    <div className="p-4">
        <Card isFooterBlurred className="bg-white backdrop-sepia-0 backdrop-blur-sm bg-opacity-20 w-[350px] h-[550px] col-span-12 sm:col-span-5">
            <CardHeader className="flex-col">
                <p className="text-xl text-indigo-950 uppercase font-bold text-center underline">{name}</p>
            </CardHeader>
            <CardBody className="z-0 overflow-visible p-0 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                <div className="m-auto">
                <Image
                    alt="Card example background"
                    className="w-[350px] h-auto"
                    src={`/${image[0]}`}
                />
                </div>
            </CardBody>
            <CardFooter className="flex flex-col z-1">
                <div>
                    <StyledRating
                    name="customized-color"
                    defaultValue={review}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                    readOnly
                    />
                </div>
                <div>
                    <p className="text-black text-md">{details}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-black text-xl font-bold mr-12">₹{price}</p>
                    <Button as={Link} href = {`./${link}`} endContent={<SendIcon/>} className="text-lg" color="primary" radius="full" size="sm">
                        BUY NOW
                    </Button>
                </div>
            </CardFooter>
        </Card>
    </div>
  )
}
