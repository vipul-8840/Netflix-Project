import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { ChevronRight} from "lucide-react";
import { cardData } from "../../utils/constant";



const ScreenAuth = () => {
	
    const [email,setEmail]=useState("");
	const navigate = useNavigate();

	const handleFormSubmit = (e) => {
		e.preventDefault();
		navigate("/signup?email=" + email);
	};

  return (
    <div className="hero-bg relative ">
        <header className='max-w-6xl mx-auto flex items-center justify-between p-5'>
                <Link to={"/"}>
                    <img src='/netflix-logo.png' alt='logo' className='w-52' />
                </Link>
                <Link to={"/login"} className='text-white bg-red-600 py-1 px-2 rounded'>
					Sign In
				</Link>
          
        </header>
        <div className='flex flex-col items-center justify-center text-center py-40 text-white max-w-6xl mx-auto mb-25 mt-6'>
			<h1 className='text-4xl md:text-6xl font-bold mb-4'>Unlimited movies, TV shows, and more</h1>
				<p className='text-lg mb-4'>Watch anywhere. Cancel anytime.</p>
				<p className='mb-4'>Ready to watch? Enter your email to create or restart your membership.</p>

				<form className='flex flex-col md:flex-row gap-4 w-2/3' onSubmit={handleFormSubmit}>
					<input
						type='email'
						placeholder='Email address'
						className='p-2 rounded flex-1 bg-black/80 border border-gray-700'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<button className='bg-red-600 text-xl lg:text-2xl px-2 lg:px-6 py-1 md:py-2 rounded flex justify-center items-center'>
						Get Started
						<ChevronRight className='size-8 md:size-10' />
					</button>
				</form>
		</div>
		
            
			<div className='mt-20 py-100 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Enjoy on your TV</h2>
						<p className='text-lg md:text-xl'>
							Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
						</p>
					</div>
					{/* right side */}
					<div className='flex-1 relative'>
						<img src='/tv.png' alt='Tv image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1/2 z-10'
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/hero-vid.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>

			{/* seperator */}

			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col-reverse px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 relative'>
						<div className='relative'>
							<img src='/stranger-things-lg.png' alt='Stranger Things img' className='mt-2' />

							<div
								className='flex items-center gap-2 absolute bottom-5 left-1/2 -translate-x-1/2 bg-black
              w-3/4 lg:w-1/2 h-24 border border-slate-500 rounded-md px-2
              '
							>
								<img src='/stranger-things-sm.png' alt='image' className='h-full' />
								<div className=' flex justify-between items-center w-full'>
									<div className='flex flex-col gap-0'>
										<span className='text-md lg:text-lg font-bold'>Stranger Things</span>
										<span className='text-sm text-blue-500'>Downloading...</span>
									</div>

									<img src='/download-icon.gif' alt='' className='h-12' />
								</div>
							</div>
						</div>
					</div>
					{/* right side */}

					<div className='flex-1 md:text-left text-center'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-balance'>
							Download your shows to watch offline
						</h2>
						<p className='text-lg md:text-xl'>
							Save your favorites easily and always have something to watch.
						</p>
					</div>
				</div>
			</div>

			{/* separator */}

			<div className='h-2 w-full bg-[#232323]' aria-hidden='true' />

			{/* 3rd section */}
			<div className='py-10 bg-black text-white'>
				<div className='flex max-w-6xl mx-auto items-center justify-center md:flex-row flex-col px-4 md:px-2'>
					{/* left side */}
					<div className='flex-1 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-extrabold mb-4'>Watch everywhere</h2>
						<p className='text-lg md:text-xl'>
							Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
						</p>
					</div>

					{/* right side */}
					<div className='flex-1 relative overflow-hidden'>
						<img src='/device-pile.png' alt='Device image' className='mt-4 z-20 relative' />
						<video
							className='absolute top-2 left-1/2 -translate-x-1/2  h-4/6 z-10
               max-w-[63%] 
              '
							playsInline
							autoPlay={true}
							muted
							loop
						>
							<source src='/video-devices.m4v' type='video/mp4' />
						</video>
					</div>
				</div>
			</div>


			

			
			<div className='py-2 bg-black text-white'>
								<div className="flex-1 text-center md:text-left">
								<h3 className="text-3xl md:px-52 md:text-3xl font-extrabold mb-4">More reasons to join</h3>
							<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto items-stretch">
							{cardData.map((card, index) => (
								<div
									key={index}
									className="bg-gradient-to-b from-darkGray to-customPurple rounded-2xl shadow-lg p-6 flex flex-col justify-between h-44 md:h-72 relative" 
								>
									<div>
										<h1 className="text-xl font-semibold mb-4">{card.heading}</h1>
										<p className="text-sm text-gray-100">{card.description}</p>
									</div>
									<div className="absolute bottom-0 right-0 p-4 md:p-4 sm:p-2 "> 
										<card.icon className=" text-purple-500 text-5xl  h-20 w-14" /> 
									</div>
								</div>
							))}
						</div>
					</div>

			</div>

      
    </div>
  )
}

export default ScreenAuth;
