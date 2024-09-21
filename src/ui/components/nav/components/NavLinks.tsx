import { type PathFilterItem } from "../../filter/item";
import { NavLink } from "./NavLink";

export const NavLinks = async ({ channel, mobile }: { channel: string; mobile: boolean }) => {
	// const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
	// 	variables: { slug: "navbar", channel },
	// 	revalidate: 60 * 60 * 24,
	// });

	const navLinks: PathFilterItem[] = [
		{
			title: "TRANG CHỦ",
			path: "/",
			channel: channel
		},
		{
			title: "HỌC TẬP",
			path: "#",
			channel: channel
		},
		// {
		// 	title: "Tạo website con",
		// 	path: "#",
		// 	channel: channel
		// },
		{
			title: "GIẢI TRÍ",
			path: "#",
			channel: channel
		},
		{
			title: "THIẾT KẾ",
			path: "#",
			channel: channel
		},
		{
			title: "CÔNG VIỆC",
			path: "#",
			channel: channel
		},
		{
			title: "VPN",
			path: "#",
			channel: channel
		},
		{
			title: "ĐẠT VÉ CGV",
			path: "#",
			channel: channel
		},
		{
			title: "BLOGS",
			path: "#",
			channel: channel
		},

	];

	return (
		<>
			{/* <NavLink href="/products">All</NavLink> */}
			{navLinks.map((item, index) => {
				return (
					<NavLink key={`nav-${index}`} href={item.path} mobile={mobile}>
						{item.title}
					</NavLink>
				);
			})}
		</>
	);
};
