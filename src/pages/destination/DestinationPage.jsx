import { useState } from 'react';

import moon from '../../assets/destination/image-moon.webp';
import mars from '../../assets/destination/image-mars.webp';
import europa from '../../assets/destination/image-europa.webp';
import titan from '../../assets/destination/image-titan.webp';

import style from './DestinationPage.module.scss';

import { motion } from 'framer-motion';

const DestinationPage = ({ destinations }) => {
	const [destination, setDestination] = useState(0);
	const currentDestination = destinations[destination];

	const image = () => {
		switch (currentDestination.name) {
			case 'Moon':
				return moon;

			case 'Mars':
				return mars;
			case 'Europa':
				return europa;
			case 'Titan':
				return titan;

			default:
				return moon;
		}
	};

	const changeDestinationHandler = id => {
		setDestination(id);
	};

	return (
		<main className={`page ${style.destination}`}>
			<div className={`wrapper ${style.wrapper}`}>
				<div className={style.destination__header}>
					<h2>
						<span>01</span>pick your destination
					</h2>
					<motion.div
						className={style.destination__header__img}
						initial={{ x: -800 }}
						animate={{ x: 0 }}
						exit={{ x: -800 }}
						transition={{ delay: 0.2 }}>
						<img src={image()} alt={currentDestination.name} />
					</motion.div>
				</div>
				<motion.div
					className={style.destination__bottom}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 0.2 }}>
					<div className={style.destination__bottom__nav}>
						<span
							onClick={() => changeDestinationHandler(0)}
							className={currentDestination.name === 'Moon' ? style.active : ''}>
							Moon
						</span>
						<span
							onClick={() => changeDestinationHandler(1)}
							className={currentDestination.name === 'Mars' ? style.active : ''}>
							Mars
						</span>
						<span
							onClick={() => changeDestinationHandler(2)}
							className={currentDestination.name === 'Europa' ? style.active : ''}>
							Europa
						</span>
						<span
							onClick={() => changeDestinationHandler(3)}
							className={currentDestination.name === 'Titan' ? style.active : ''}>
							Titan
						</span>
					</div>

					<h3 className={`title ${style.destination__bottom__name}`}>{currentDestination.name}</h3>
					<p className={`text ${style.destination__bottom__description}`}>{currentDestination.description}</p>
					<hr />
					<div className={style.destination__bottom__info}>
						<div className={style.destination__bottom__info__box}>
							<p className={style.destination__bottom__info__box__title}>avg. distance</p>
							<p className={`subtitle ${style.destination__bottom__info__box__content}`}>
								{currentDestination.distance}
							</p>
						</div>
						<div className={style.destination__bottom__info__box}>
							<p className={style.destination__bottom__info__box__title}>est. travel time</p>
							<p className={`subtitle ${style.destination__bottom__info__box__content}`}>{currentDestination.travel}</p>
						</div>
					</div>
				</motion.div>
				
			</div>
		</main>
	);
};

export default DestinationPage;
