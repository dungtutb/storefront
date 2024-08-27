"use client";

import { usePathname } from "next/navigation";
import { LinkWithChannel } from "../atoms/LinkWithChannel";

const companyName = "ACME";

export const Logo = () => {
	const pathname = usePathname();

	if (pathname === "/") {
		return (
			<h1 className="flex items-center font-bold" aria-label="homepage">
				{companyName}
			</h1>
		);
	}
	return (
		<div className="flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl">
			<LinkWithChannel aria-label="homepage" href="/">
				<svg
					width="95"
					height="94"
					viewBox="0 0 95 94"
					className="h-auto w-6 text-indigo-500"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M96 0V47L48 94H0V47L48 0H96Z" />
				</svg>
			</LinkWithChannel>
		</div>
	);
};
