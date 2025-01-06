export const SMALL_IMG_BASE_URL = "https://image.tmdb.org/t/p/w500";
export const ORIGINAL_IMG_BASE_URL = "https://image.tmdb.org/t/p/original";
import { Laptop, MoveDown, Telescope,Sticker } from "lucide-react";

export const MOVIE_CATEGORIES = ["now_playing", "top_rated", "popular", "upcoming"];
export const TV_CATEGORIES = ["airing_today", "on_the_air", "popular", "top_rated"];

export const cardData =[
    {
        heading:"Enjoy on your TV",
        description:"Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
        icon:Laptop


    },
    {
        heading:"Download your shows to watch offline",
        description:"Save your favourites easily and always have something to watch.",
        icon:MoveDown
    },
    {
        heading:"Watch everywhere",
        description:"Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.",
        icon:Telescope 
    },
    {
        heading:"Create profiles for kids",
        description:"Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
        icon: Sticker 
    }
]