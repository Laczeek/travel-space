import styles from './HomePage.module.scss';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const HomePage = () => {
	const navigate = useNavigate();
	return (
		<main className={`page ${styles.home}`}>
			<motion.div className={`wrapper ${styles.wrapper}`}
			initial={{opacity:0, y:-400}}
			animate={{opacity:1, y:0}}
			exit={{opacity:0, y:-400}}
			transition={{delay:0.2}}
			>
				<div className={styles.home__text}>
					<h1>
						<span className={`subtitle ${styles.home__text__subtitle}`}>so, you want to travel to</span>
						<br />
						<span className={`title ${styles.home__text__title}`}>space</span>
					</h1>
					<p className={`text ${styles.home__text__content}`}>
						Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind
						of on the edge of it. Well sit back, and relax because we'll give you a truly out of this world experience!
					</p>
				</div>
				<div className={styles.home__btn} onClick={() => navigate('/destination')}>
					<span>explore</span>
				</div>
			</motion.div>
		</main>
	);
};
export default HomePage;
