"use client";

import clsx from "clsx";
import { usePathname } from "next/navigation";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";

export function NavLink({ href, children, mobile }: { href: string; children: JSX.Element | string; mobile: boolean }) {
	const pathname = usePathname();

	const isActive = pathname === href;

	return (
		<li className="inline-flex">
			<LinkWithChannel
				href={href}
				className={clsx(
					mobile
						? isActive
						? "border-neutral-900 text-neutral-950" // Active on mobile
						: "border-transparent text-neutral-700" // Inactive on mobile
						: isActive
						? "border-neutral-900 text-neutral-200 text-lg" // Active on non-mobile
						: "border-transparent text-neutral-50 text-lg", // Inactive on non-mobile
					"inline-flex items-center border-b-2 pt-px font-medium hover:text-neutral-500"
				)}
			>
				{children}
			</LinkWithChannel>
		</li>
	);
}
