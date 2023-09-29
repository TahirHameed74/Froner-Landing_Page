"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ShineOnHover from "./ShineOnHover";

const NavbarBanner = ({ setIsOpen }) => {
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
			className={`absolute left-2 top-2 overflow-auto whitespace-nowrap h-fit max-w-[100vw] transition-all ease duration-1000 ${show} z-[100] bg-transparent`}>
			<div className="flex bg-transparent font-[surtRegular] lg:text-[24.96px] items-center justify-between">
				<Link
					href="/"
					onMouseLeave={() => setLogoHover(false)}
					onMouseEnter={() => setLogoHover(true)}
					className="flex lg:text-3xl md:text-[35px] bg-transparent cursor-pointer text-lg">
					<img
						className="lg:w-32 md:w-28 w-20 bg-transparent  min-h-full "
						src="/Logo-Kriss-white.png"
					/>
				</Link>
			</div>
		</div>
	);
};

export default NavbarBanner;
