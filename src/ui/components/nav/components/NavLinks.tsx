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
			path: "/categories/hoc-tap",
			channel: channel
		},
		// {
		// 	title: "Tạo website con",
		// 	path: "#",
		// 	channel: channel
		// },
		{
			title: "GIẢI TRÍ",
			path: "/categories/giai-tri",
			channel: channel
		},
		{
			title: "THIẾT KẾ",
			path: "/categories/thiet-ke",
			channel: channel
		},
		{
			title: "CÔNG VIỆC",
			path: "/categories/cong-viec",
			channel: channel
		},
		{
			title: "VPN",
			path: "/categories/keyvpnproxy",
			channel: channel
		},
		{
			title: "ĐẠT VÉ CGV",
			path: "/cgv",
			channel: channel
		},
		{
			title: "BLOGS",
			path: "/blogs",
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
