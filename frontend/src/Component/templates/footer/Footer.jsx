import React from 'react';
import LinkNav from '../../fragments/link/LinkNav';
import heart from '../../../assets/icon/heart.gif';

const Footer = () => {
	return (
		<footer className="flex flex-col items-center justify-center mt-28 mb-5 lg:mt-[135px] lg:mb-5">
			<h2 className="text-white text-3xl font-bold">EFFENRIL AGUNG</h2>
			<div className="flex flex-row my-[30px]">
				<LinkNav className="font-bold text-md hover:text-blue" to="/">
					Home
				</LinkNav>
				<LinkNav className="font-bold text-md hover:text-blue mx-7" to="/about">
					About
				</LinkNav>
				<LinkNav
					className="font-bold text-md hover:text-blue mr-7"
					to="/projects"
				>
					Projects
				</LinkNav>
				<LinkNav className="font-bold text-md hover:text-blue" to="/contact">
					Contact
				</LinkNav>
			</div>
			<div className="text-center flex justify-center items-center font-bold text-sm">
				Made with <img src={heart} alt="icon heart" /> in Medan, Sumatera Utara
			</div>
		</footer>
	);
};

export default Footer;
