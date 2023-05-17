import { useState } from 'react';

import douglas from '../../assets/crew/image-douglas-hurley.webp';
import mark from '../../assets/crew/image-mark-shuttleworth.webp';
import victor from '../../assets/crew/image-victor-glover.webp';
import anousheh from '../../assets/crew/image-anousheh-ansari.webp';

import styles from './CrewPage.module.scss';

import { motion } from 'framer-motion';

const CrewPage = ({ crew }) => {
	const [crewId, setCrewId] = useState(0);

	const currentCrew = crew[crewId];
	console.log(currentCrew);

	const image = () => {
		switch (crewId) {
			case 0:
				return douglas;
			case 1:
				return mark;
			case 2:
				return victor;
			case 3:
				return anousheh;
			default:
				return douglas;
		}
	};

	return (
		<main className={`page ${styles.crew}`}>
			<div className='wrapper'>
				<h3 className='subtitle'>
					<span>02</span>meet your crew
				</h3>
				<div className={styles.crew__box}>
					<div className={styles.crew__box__text}>
						<div className={styles.crew__box__text__info}>
							<p className={`title ${styles.crew__box__text__info__role}`}>{currentCrew.role}</p>
							<h2 className={`title ${styles.crew__box__text__info__name}`}>{currentCrew.name}</h2>
							<p className={`text ${styles.crew__box__text__info__bio}`}>{currentCrew.bio}</p>
						</div>
						<div className={styles.crew__box__text__nav}>
							<span onClick={() => setCrewId(0)} className={crewId === 0 ? styles.active : ''}></span>
							<span onClick={() => setCrewId(1)} className={crewId === 1 ? styles.active : ''}></span>
							<span onClick={() => setCrewId(2)} className={crewId === 2 ? styles.active : ''}></span>
							<span onClick={() => setCrewId(3)} className={crewId === 3 ? styles.active : ''}></span>
						</div>
					</div>
					<motion.div className={styles.crew__box__img}
					key={crewId}
					initial={{ x: 800 }}
					animate={{ x: 0 }}
					exit={{ x: 800 }}
					transition={{ delay: 0.2 }}>
					
						<img src={image()} alt={currentCrew.name} />
					</motion.div>
				</div>
			</div>
		</main>
	);
};

export default CrewPage;
