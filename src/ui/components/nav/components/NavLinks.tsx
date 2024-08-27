import { type PathFilterItem } from "../../filter/item";
import { NavLink } from "./NavLink";

export const NavLinks = async ({ channel }: { channel: string }) => {
	// const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
	// 	variables: { slug: "navbar", channel },
	// 	revalidate: 60 * 60 * 24,
	// });

	const navLinks: PathFilterItem[] = [
		{
			title: "Mua tài khoản",
			path: "/products",
			channel: channel
		},
		{
			title: "Lịch sử mua hàng",
			path: "#",
			channel: channel
		},
		{
			title: "Tạo website con",
			path: "#",
			channel: channel
		},
		{
			title: "Xem phim gì?",
			path: "#",
			channel: channel
		},
		{
			title: "Quà tặng",
			path: "#",
			channel: channel
		},
	];

	return (
		<>
			{/* <NavLink href="/products">All</NavLink> */}
			{navLinks.map((item, index) => {
				return (
					<NavLink key={`nav-${index}`} href={item.path}>
						{item.title}
					</NavLink>
				);
			})}
		</>
	);
};
