import { type PathFilterItem } from "../../filter/item";
import { NavLink } from "./NavLink";

export const NavLinks = () => {
	// const navLinks = await executeGraphQL(MenuGetBySlugDocument, {
	// 	variables: { slug: "navbar", channel },
	// 	revalidate: 60 * 60 * 24,
	// });

	const navLinks: PathFilterItem[] = [
		{
			title: "Mua tài khoản",
			path: "/products"
		},
		{
			title: "Lịch sử mua hàng",
			path: "#"
		},
		{
			title: "Tạo website con",
			path: "#"
		},
		{
			title: "Xem phim gì?",
			path: "#"
		},
		{
			title: "Quà tặng",
			path: "#"
		},
	]

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
