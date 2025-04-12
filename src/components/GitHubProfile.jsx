import React, { useState, useEffect } from "react";

function GitHubProfile() {
	const [username, setUsername] = useState("");
	const [userData, setUserData] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		if (!username) return;

		fetch(`https://api.github.com/users/${username}`)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
                setErrorMessage(null);
                (data.avatar_url) ? setUserData(data) : setErrorMessage(data.message);
			})
			.catch((error) => {
				setUserData(null);
				console.error(error.message);
				setErrorMessage(error.message);
			});
	}, [username]);

	return (
		<div>
			<h2>GitHub User Lookup</h2>
			<input
				type="text"
				placeholder="Enter GitHub username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>

			{!errorMessage && userData && (
				<div style={{ marginTop: "1rem" }}>
					<img
						src={userData.avatar_url}
						alt={`${userData.login}'s avatar`}
						width={100}
						style={{ borderRadius: "50%" }}
					/>
					<h3>{userData.name || userData.login}</h3>
					<p>{userData.bio}</p>
				</div>
			)}
            {
                errorMessage && (
                    <p className="text-red-700 text-2xl">{errorMessage}</p>
                )
            }
		</div>
	);
}

export default GitHubProfile;
