"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ShineOnHover from "./ShineOnHover";

const Navbar = ({ setIsOpen }) => {
	const [logoHover, setLogoHover] = useState(false);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [show, setShow] = useState("top-0");
	const controlNavbar = () => {
		if (window.scrollY > 1700) {
			if (window.scrollY > lastScrollY) {
				setShow("translate-y-[-60px]");
			} else {
				setShow("top-0");
			}
		} else {
			setShow("top-0");
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<div
			className={`sticky p-3 m-0 overflow-auto whitespace-nowrap h-fit max-w-[100vw] transition-all ease duration-1000 ${show} z-[100] bg-transparent`}>
			<div className="flex bg-transparent font-[surtRegular] lg:text-[24.96px] items-center justify-between">
				<Link
					href="/"
					onMouseLeave={() => setLogoHover(false)}
					onMouseEnter={() => setLogoHover(true)}
					className="flex lg:text-3xl md:text-[35px] bg-transparent cursor-pointer text-lg">
					{/* <span className="bg-transparent">FOR</span>
					<span
						className={`transition-all bg-transparent ease-in duration-300  ${
							logoHover && "mt-2"
						}`}>
						NER 
					</span> */}
					<img
						className="lg:w-32 md:w-28 w-20 bg-transparent  min-h-full "
						src="Logo-Kriss-Black@4x.png"
					/>
				</Link>
				<div
					onClick={() => setIsOpen(true)}
					className="text-sm lg:text-2xl md:text-2xl bg-transparent  cursor-pointer">
					MENU
				</div>
			</div>
		</div>
	);
};

export default Navbar;
