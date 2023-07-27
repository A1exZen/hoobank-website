import { clients } from '../constants';
import styles from '../style';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
const Clients = () => {
	const ref = useRef(null);
	const isInView = useInView(ref);
	return (
		<section
			style={{
				transform: isInView ? 'none' : 'translateY(100px)',
				opacity: isInView ? 1 : 0,
				transition: 'all .9s',
			}}
			ref={ref}
			className={`${styles.flexCenter} my-4`}
		>
			<div className={`${styles.flexCenter} flex-wrap w-full`}>
				{clients.map((client) => (
					<div
						key={client.id}
						className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
					>
						<img
							src={client.logo}
							alt='client_logo'
							className='sm:w-[192px] w-[100px] object-contain'
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Clients;
