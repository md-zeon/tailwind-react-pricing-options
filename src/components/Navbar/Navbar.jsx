import React, { useState } from "react";
import Link from "./Link.jsx";
import { Menu, X } from "lucide-react";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const navigationData = [
		{ id: 1, name: "Home", path: "/" },
		{ id: 2, name: "About", path: "/about" },
		{ id: 3, name: "Services", path: "/services" },
		{ id: 4, name: "Blog", path: "/blog" },
		{ id: 5, name: "Contact", path: "/contact" },
	];

	const links = navigationData.map((route) => (
		<Link
			key={route.id}
			route={route}
		/>
	));

	return (
		<nav className="flex justify-between items-center mx-10 my-10">
			<span
				className="flex gap-3"
				onClick={() => setOpen(!open)}
			>
				{open ? <X className="md:hidden"></X> : <Menu className="md:hidden"></Menu>}
				<ul className={`md:hidden absolute text-black rounded-2xl p-3 space-y-1 ${open ? 'top-6' : '-top-40'} duration-1000 bg-amber-200`}>{links}</ul>
				<h3 className="text-3xl">My Navbar</h3>
			</span>
			{/* <ul className='flex gap-10'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul> */}
			{/* <ul className="flex gap-10">
				{navigationData.map((route) => (
					<li key={route.id}>
						<a href={route.path}>{route.name}</a>
					</li>
				))}
			</ul> */}

			<ul className="hidden md:flex gap-10 justify-center items-center">{links}</ul>
			<button className="btn">Sign In</button>
		</nav>
	);
};

export default Navbar;
