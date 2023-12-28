import React, { useState } from 'react';
import LinkNav from '../../fragments/link/LinkNav';
import Button from '../../fragments/button/index';

const Navbar = () => {
	const links = [
		{ name: 'Home', to: '/' },
		{ name: 'About', to: '/about' },
		{ name: 'Projects', to: '/projects' },
		{ name: 'Contact', to: '/contact' },
	];

	const [isOpen, setIsOpen] = useState(false);
	console.log(isOpen);

	return (
		<React.Fragment>
			<nav className="bg-gradient-to-r from-[#323232] to-[#323232] px-10 py-5 relative">
				<div
					className={`flex ${
						isOpen ? 'flex-col' : 'flex-row items-center justify-between'
					} items-start gap-5`}
				>
					<LinkNav className="text-white font-extrabold text-xl" to="/">
						Effenril Agung Marpaung
					</LinkNav>
					<div className="absolute top-6 right-5">
						{isOpen ? (
							<div onClick={() => setIsOpen(!isOpen)}>
								<ion-icon name="close-circle-outline" size="large"></ion-icon>
							</div>
						) : (
							<div onClick={() => setIsOpen(!isOpen)} className="lg:hidden">
								<ion-icon
									name="menu"
									size="large"
									className="hidden bg-yellow-100 "
								></ion-icon>
							</div>
						)}
					</div>
					<div className={`${isOpen ? 'flex' : 'hidden'} flex-col gap-5 `}>
						{links.map((link, index) => {
							return (
								<LinkNav
									className="text-white-200 hover:text-white-100 text-xl font-semibold"
									key={index}
									to={link.to}
								>
									{link.name}
								</LinkNav>
							);
						})}
						<Button className="bg-black py-2 px-5 rounded hover:bg-white hover:text-black">
							Let's Talk
						</Button>
					</div>

					<div className="hidden lg:flex">
						{links.map((link, index) => {
							return (
								<LinkNav
									className=" text-white-200 hover:text-white-100 text-xl font-bold mx-5"
									key={index}
									to={link.to}
								>
									{link.name}
								</LinkNav>
							);
						})}
					</div>
					<Button className="hidden lg:block bg-black py-2 lg:px-5 rounded cursor-pointer font-semibold hover:bg-white hover:text-black">
						Let's Talk
					</Button>
				</div>
			</nav>
		</React.Fragment>
	);
};

export default Navbar;
