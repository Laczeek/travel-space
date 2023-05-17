import style from './MainNavigation.module.scss';
import logo from '../assets/shared/logo.svg';
import burger from '../assets/shared/icon-hamburger.svg';
import close from '../assets/shared/icon-close.svg';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
const MainNavigation = () => {
	const [showLinks, setShowLinks] = useState(false);
	const { pathname } = useLocation();

	const toggleLinks = () => {
		setShowLinks(prevState => !prevState);
	};

	useEffect(() => {
		if (window.innerWidth < 768) {
			setShowLinks(false);
		}
	}, [pathname]);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setShowLinks(true);
			} else {
				setShowLinks(false);
			}
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<header>
			<nav className={`page ${style.nav}`}>
				<div>
					<Link to='/'>
						<img src={logo} />
					</Link>
				</div>
				<div className={style.nav__burger}>
					<button onClick={toggleLinks}>
						<img src={burger} />
					</button>
				</div>

				{showLinks && (
					<div className={` ${style.nav__linksBox}`}>
						<button onClick={toggleLinks} className={style.nav__linksBox__closeBtn}>
							<img src={close} />
						</button>
						<ul className={style.nav__linksBox__list}>
							<li className={`${style.nav__linksBox__list__link} `}>
								<NavLink to='/' className={({ isActive }) => (isActive ? style.active : '')}>
									<span>00 </span>home
								</NavLink>
							</li>
							<li className={style.nav__linksBox__list__link}>
								<NavLink to='/destination' className={({ isActive }) => (isActive ? style.active : '')}>
									<span>01 </span>destination
								</NavLink>
							</li>
							<li className={style.nav__linksBox__list__link}>
								<NavLink to='crew' className={({ isActive }) => (isActive ? style.active : '')}>
									<span>02 </span>crew
								</NavLink>
							</li>
							<li className={style.nav__linksBox__list__link}>
								<NavLink to='technology' className={({ isActive }) => (isActive ? style.active : '')}>
									<span>03 </span>technology
								</NavLink>
							</li>
						</ul>
					</div>
				)}
			</nav>
		</header>
	);
};

export default MainNavigation;
