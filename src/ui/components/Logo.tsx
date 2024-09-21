"use client";

import Image from "next/image";
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
		<div className="text-customBg-700 flex items-center gap-2.5 text-2xl font-bold md:text-3xl">
			<LinkWithChannel aria-label="homepage" href="/">
				<Image
					src={"/logo_name.png"}
					width={1024}
					height={248}
					alt={""}
					className="h-full w-full object-cover object-center"
				/>
			</LinkWithChannel>
		</div>
	);
};
