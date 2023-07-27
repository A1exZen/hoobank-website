import styles from '../style';
import { arrowUp } from '../assets';
import { motion } from 'framer-motion';

const container = {
	hidden: { opacity: 0, scale: 0 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			delayChildren: 0.3,
			staggerChildren: 0.3,
		},
	},
};

const item = {
	hidden: { y: 10, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,
	},
};

const GetStarted = () => {
	return (
		<motion.div
			variants={container}
			initial='hidden'
			animate='visible'
			whileHover={{ scale: 1.1, boxShadow: '0px 0px 10px 1px rgba(51,187,207,1)'}}
			whileTap={{
				scale: 0.95,
			}}
			className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer group  `}
		>
			<motion.div
				variants={item}
				
				className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
			>
				<div className={`${styles.flexStart} flex-row`}
				>
					<p className='font-poppins font-medium text-[18px]  leading-[23px] text-gradient  duration-700'>
						Get
					</p>
					<img
						src={arrowUp}
						className='w-[23px] h-[23px] object-contain duration-700'
					/>
				</div>
				<p className='font-poppins font-medium text-[18px] leading-[23px] text-gradient duration-700'>
					Started
				</p>
			</motion.div>
		</motion.div>
	);
};

export default GetStarted;
