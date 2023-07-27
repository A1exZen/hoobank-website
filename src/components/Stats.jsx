import { stats } from '../constants';

import { useRef } from 'react';
import { useInView } from 'framer-motion';
import styles from '../style';

const Stats = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section
			style={{
				transform: isInView ? 'none' : 'translateY(100px)',
				opacity: isInView ? 1 : 0,
				transition: 'all 1.5s',
			}}
			ref={ref}
			className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
		>
			{stats.map((stat) => (
				<div
					key={stat.id}
					className='flex flex-1 justify-start items-center flex-row m-3'
				>
					<h4 className='font-poppins text-white text-[30px] xs:text-[40.89px] xs:leading-[50px] font-semibold leading-10'>
						{stat.value}
					</h4>
					<p className=' font-poppins text-gradient xs:text-[20px] text-[15px] xs:leading-[25px] font-normal uppercase leading-[21.5px] ml-3'>
						{stat.title}
					</p>
				</div>
			))}
		</section>
	);
};

export default Stats;
