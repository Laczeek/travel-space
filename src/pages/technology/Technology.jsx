import { useEffect, useState } from 'react';
import styles from './Technology.module.scss';

import launchLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg';
import launchPortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg';

import capsuleLandscape from '../../assets/technology/image-space-capsule-landscape.jpg';
import capsulePortrait from '../../assets/technology/image-space-capsule-portrait.jpg';

import spaceportLandscape from '../../assets/technology/image-spaceport-landscape.jpg';
import spaceportPortrait from '../../assets/technology/image-spaceport-portrait.jpg';

import { motion } from 'framer-motion';

const TechnologyPage = ({ technology }) => {
	const [techId, setTechId] = useState(0);
	const [portraitView, setPortraitView] = useState(false);
	const currentTechnology = technology[techId];
	let currentImage;

	const image = () => {
		switch (techId) {
			case 1:
				if (portraitView) {
					currentImage = capsulePortrait;
				} else {
					currentImage = capsuleLandscape;
				}
				break;
			case 2:
				if (portraitView) {
					currentImage = spaceportPortrait;
				} else {
					currentImage = spaceportLandscape;
				}
				break;

			default:
				if (portraitView) {
					currentImage = launchPortrait;
				} else {
					currentImage = launchLandscape;
				}
				break;
		}
	};
	image();

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1200) {
				setPortraitView(true);
			} else {
				setPortraitView(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<main className={styles.tech}>
			<div className='wrapper'>
				<h3 className='subtitle'>
					<span>03</span>space launch 101
				</h3>
				<div className={styles.tech__box}>
					<div className={styles.tech__box__top}>
						<div className={styles.tech__box__top__img}>
							<img src={currentImage} alt={currentTechnology.name} />
						</div>
					</div>
					<div className={styles.tech__box__content}>
						<div className={styles.tech__box__content__nav}>
							<span onClick={() => setTechId(0)} className={techId === 0 ? styles.active : ''}>
								1
							</span>
							<span onClick={() => setTechId(1)} className={techId === 1 ? styles.active : ''}>
								2
							</span>
							<span onClick={() => setTechId(2)} className={techId === 2 ? styles.active : ''}>
								3
							</span>
						</div>
						<motion.div
							className={styles.tech__box__content__text}
							key={techId}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ delay: 0.1 }}>
							<p className={`text ${styles.tech__box__content__text__terminology}`}>the therminology</p>
							<h2 className={styles.tech__box__content__text__device}>{currentTechnology.name}</h2>
							<p className={`text ${styles.tech__box__content__text__description}`}>{currentTechnology.description}</p>
						</motion.div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default TechnologyPage;
