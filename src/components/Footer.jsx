import styles from '../style';
import { logo } from '../assets';
import { motion } from 'framer-motion';
import { footerLinks, socialMedia } from '../constants';

const Footer = () => {
	return (
		<footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
			<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
				<div className='flex-[1] flex flex-col justify-start mr-10'>
					<img
						src={logo}
						alt='logo'
						className='w-[266px] h-[72px] object-contain'
					/>
					<p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
						A new way to make the payments easy, reliable and secure.
					</p>
				</div>
				<div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
					{footerLinks.map((footerLink) => (
						<div
							key={footerLink.title}
							className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
						>
							<h4 className='text-poppins text-white text-[18px] font-medium leading-[27px]'>
								{footerLink.title}
							</h4>
							<ul className='list-none mt-4'>
								{footerLink.links.map((link, index) => (
									<motion.li
										key={link.name}
										whileHover={{ scale: 1.2, color: '#00F6FF', originX: 0 }}
										className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite cursor-pointer 
                ${index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'}`}
									>
										{link.name}
									</motion.li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>

			<div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]'>
				<p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>
					Copyright Ⓒ 2022 HooBank. All Rights Reserved.
				</p>
				<div className='flex flex-row md:mt-0 mt-6 '>
					{socialMedia.map((item, index) => (
						<img
							key={item.id}
							src={item.icon}
							alt={item.id}
							className={`
							w-[21px] h-[21px] object-contain cursor-pointer
							${index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
							onClick={() => window.open(item.link, '_blank')}
						/>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
