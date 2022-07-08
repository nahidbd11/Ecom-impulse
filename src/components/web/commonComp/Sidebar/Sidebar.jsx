import React, { useState } from "react";
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import { socialicons } from "../../../../dummydata/data";
function Sidebar() {
	const [isSidebarActive, setSidebarActive] = useState(true);
	return (
		<div>
			<nav className={`socialIconNav`}>
				<ul class={`${isSidebarActive && "active"}`}>
					<li className="st-total">
						62.5k
						<p>shares</p>
					</li>
					{/* TODO:generate social icons */}
					{socialicons.map((item) => {
						const { link, icon, id, sharecount } = item;
						return (
							<li key={id}>
								<a href={link}>
									{icon} <span>{sharecount}</span>
								</a>
							</li>
						);
					})}
				</ul>
				{/* TODO:for toggling social nav menu */}
				<div
					className="toggle-socialnav"
					onClick={() => setSidebarActive(!isSidebarActive)}
				>
					{isSidebarActive ? (
						<button className="active">
							<AiOutlineDoubleRight />
						</button>
					) : (
						<button className="">
							<AiOutlineDoubleLeft />
						</button>
					)}
				</div>
			</nav>
		</div>
	);
}

export default Sidebar;
