import { Suspense } from "react";
import { CartNavItem } from "./components/CartNavItem";
import { SearchBar } from "./components/SearchBar";
import { UserMenuContainer } from "./components/UserMenu/UserMenuContainer";

export const Nav = ({ channel }: { channel: string }) => {
	return (
		<nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
			<div className="ml-auto w-full flex items-center justify-center gap-4 whitespace-nowrap lg:gap-8">
				<div className="hidden sm:flex flex-grow">
					<SearchBar channel={channel} />
				</div>
				
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-6" />}>
					<CartNavItem channel={channel} />
				</Suspense>
			</div>
			<div className="flex items-center">
				<Suspense fallback={<div className="w-8" />}>
					<UserMenuContainer />
				</Suspense>
			</div>
			
		</nav>
	);
};
