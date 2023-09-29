import Image from "next/image";
import Hero from "../../components/Hero";
import Brand from "../../components/Brand";
import Navbar from "../../components/Navbar";
import MainPage from "../../components/MainPage";

export default function Home() {
	return (
		<div>
			<Hero />
			<MainPage />
		</div>
	);
}
