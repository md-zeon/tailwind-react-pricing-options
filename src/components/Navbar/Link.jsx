import React from "react";

const Link = ({route}) => {
	return (
		<li className="rounded-2xl p-2 hover:bg-amber-400">
			<a href={route.path}>{route.name}</a>
		</li>
	);
};

export default Link;
