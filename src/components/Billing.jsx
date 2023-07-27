import { apple, bill, google } from '../assets';
import styles, { layout } from '../style';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Billing = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);

	return (
		<section ref={ref} id='product' className={layout.sectionReverse}>
			<div
				style={{
					transform: isInView ? 'none' : 'translateX(-200px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s',
				}}
				className={layout.sectionImgReverse}
			>
				<img src={bill} />
			</div>
			<div
				style={{
					transform: isInView ? 'none' : 'translateX(400px)',
					opacity: isInView ? 1 : 0,
					transition: 'all 0.9s',
				}}
				className={layout.sectionInfo}
			>
				<h2 className={styles.heading2}>
					Easily control your billing & invoicing.
				</h2>
				<p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
					Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
					aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
					placerat.
				</p>
				<div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
					<img
						src={apple}
						alt='apple'
						className='w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer'
					/>
					<img
						src={google}
						alt='google'
						className='w-[144.17px] h-[43.08px] object-contain cursor-pointer'
					/>
				</div>
			</div>
		</section>
	);
};

export default Billing;
