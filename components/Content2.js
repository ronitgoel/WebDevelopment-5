'use client'
import * as React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Rating from '@mui/material/Rating';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Image from 'next/image';

export default function Content({name, image, details, link, review, price}) {
    const StyledRating = styled(Rating)({
        '& .MuiRating-iconFilled': {
          color: '#dc143c',
        }
    });
    return (
    <div>
        <Card sx={{ maxWidth: 350 }} style={{margin:"2rem"}} className="bg-yellow-500 shadow-2xl shadow-indigo-500/50">
            <CardHeader
                className = "text-center text-white"
                title = {name}
            />
            <div className="bg-white h-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
                <Image priority={true} style={{height:'auto', width:'350px',margin:'auto', paddingTop:'5rem', paddingLeft:'1rem', paddingRight:'1rem'}} src={`/${image[0]}`} width={350} height={350} alt="Photo"></Image>
            </div>
            <CardContent>
                <Typography className="text-center font-bold" variant="body2" color="text.secondary">
                 {details}
                </Typography>
            </CardContent>
            <StyledRating
                className="flex justify-center"
                name="customized-color"
                defaultValue={review}
                precision={0.5}
                icon={<FavoriteIcon fontSize="inherit" />}
                emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
                readOnly
            />
            <CardActions className="flex justify-center">
                <Button className = "bg-pink-500 mr-2"variant="contained" endIcon={<SendIcon />}>
                    <Link href = {`./${link}`}>BUY NOW</Link>
                </Button>
                <p className="font-bold font-sans ...">₹{price}</p>
            </CardActions>
        </Card>
    </div>
  )
}
