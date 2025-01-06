import express from 'express';
import { fetchFromTMDB } from '../services/tmdb.service.js';



export async function getTrendingMovies(req, res) {
    try {
      
      const data = await fetchFromTMDB('https://api.themoviedb.org/3/trending/movie/day?language=en-US')

      const randomMovie = data.results[Math.floor(Math.random() * data.results?.length)];
       res.status(200).json({ success: true, content: randomMovie });
    }
     catch (error) {
        res.status(500).send({ success: false, message: "Internal server error" });
    }
};

export async function getMovieTrailers(req,res){
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`);
        res.status(200).json({success:true,trailers:data.results});

    }catch(errors){
        if(errors.message.includes === "404"){
            res.status(404).send(null);
    }
    else{
        res.status(500).send({success:false,message:"Internal server error"});
    }
 }
}

export async function getMovieDetails(req,res){
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}?language=en-US`);
        res.status(200).json({success:true,content:data});
    }catch(errors){
        if(errors.message.includes === "404"){
            res.status(404).send(null);
    }
    else{
        res.status(500).send({success:false,message:"Internal server error"});
    }
 }
}

export async function getSimilarMovies(req,res){
    try{
        const {id} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${id}/similar?language=en-US`);
        res.status(200).json({success:true,similar:data.results});
    }catch(errors){
        
    
        res.status(500).send({success:false,message:"Internal server error"});
    
 }
}

export async function getMoviesByCategory(req,res){
    try{
        const {category} = req.params;
        const data = await fetchFromTMDB(`https://api.themoviedb.org/3/movie/${category}?language=en-US`);
        res.status(200).json({success:true,content:data.results});
    }catch(errors){
        
    
        res.status(500).send({success:false,message:"Internal server error"});
    
 }
}