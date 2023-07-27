import { close, logo, menu } from '../assets';
import { navLinks } from '../constants';
import { useState } from 'react';

const Header = () => {
	const [active, setActive] = useState('Home');
	const [toggle, setToggle] = useState(false);
	const toggleModal = () => {
		setToggle(!toggle);
	};
	//----------------------------------------------------------------
	return (
		<nav className='w-full flex navbar justify-between items-center py-6'>
			<img
				src={logo}
				alt='logo'
				className='w-[125px] h-[35px] cursor-pointer'
			/>
				<ul
				className='list-none sm:flex flex-1 justify-end items-center hidden'>
					{navLinks.map((item, index) => (
						<li
							key={item.id}
							className={`font-poppins font-medium text-[16px] cursor-pointer
							hover:scale-[130%] hover:text-[#00F6FF] transition-all duration-250 ease-out
								${active === item.title ? 'text-[#00F6FF]' : 'text-dimWhite'}
            ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}
							onClick={() => setActive(item.title)}
						>
							<a href={`#${item.id}`}>{item.title}</a>
						</li>
					))}
				</ul>
			<div className='sm:hidden flex flex-1 justify-end items-center'>
				<img
					src={toggle ? close : menu}
					alt='menu'
					className='w-[25px] h-[25px] object-contain'
					onClick={toggleModal}
				/>
				<div
					className={`${!toggle ? 'hidden' : 'flex'}
          right-0 mx-4 my-2 rounded-xl sidebar p-6 top-20 bg-black-gradient absolute min-w-[140px] `}
				>
					<ul className='list-none flex flex-col flex-1 justify-end items-start'>
						{navLinks.map((item, index) => (
							<li
								key={item.id}
								className={`font-poppins font-medium text-[16px] cursor-pointer 
								${active === item.title ? 'text-[#00F6FF]' : 'text-dimWhite'}
            ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
								onClick={() => setActive(item.title)}
							>
								<a href={`#${item.id}`}>{item.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Header;
