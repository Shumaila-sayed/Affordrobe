import { NavLink } from 'react-router-dom';

const Home = () => {
	return (
		<div className='lg:flex bg-grey lg:justify-between '>
			<div className='text-center text-black-50 lg:pt-20 pt-16 font-cal'>
				<h1 className='text-5xl font-bold lg:px-8 tracking-wide'>
					FIND PRODUCTS THAT MATCHES YOUR STYLE
				</h1>
				<p className='pt-4 lg:px-8 lg:mt-4 opacity-80'>
					Browse through our diverse range of meticulously crafted garments,
					designed to bring out your individuality and cater to your sense of
					style.
				</p>

				<NavLink to='/products'>
					<button className='bg-peach rounded-full mt-8 px-18 py-2 text-amber-50 text-[1.2em] cursor-pointer  border-b-6  border-coral-red hover:bg-coral-red hover:border-peach lg:mt-12 '>
						Shop Now
					</button>
				</NavLink>

				<div className='flex gap-4 justify-center mt-12 lg:mt-18'>
					<div className='border-r-black/50 border-r-2 pr-2'>
						<p className='text-left text-3xl'>200+</p>
						<p className='opacity-80'>International Brands</p>
					</div>
					<div className='border-r-black/50 border-r-2 pr-2'>
						<p className='text-left text-3xl'>2,000+</p>
						<p className='opacity-80'>High-Quality Products</p>
					</div>
					<div>
						<p className='text-left text-3xl'>35,000+</p>
						<p className='opacity-80'>Happy Customers</p>
					</div>
				</div>
			</div>
			<div className=''>
				<img
					className='lg:h-[650px] lg:w-[800px]'
					src='/hero-img1.jpg'
					alt='hero image'
				/>
			</div>
		</div>
	);
};

export default Home;
