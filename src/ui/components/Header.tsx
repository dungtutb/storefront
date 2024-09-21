import Link from "next/link";
import { Suspense } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./nav/components/MobileMenu";
import { NavLinks } from "./nav/components/NavLinks";
import { SearchBar } from "./nav/components/SearchBar";
import { Nav } from "./nav/Nav";

// // Add styles inline for the scrolling text animation
// const scrollLeftStyle = {
// 	whiteSpace: "nowrap",
// 	overflow: "hidden" as const,
// 	animation: "scroll-left 10s linear infinite",
// };

const scrollKeyframes = `
	@keyframes scroll-left {
	  0% { transform: translateX(100%); }
	  100% { transform: translateX(-100%); }
	}
  `;
// Inject keyframes into the page
const Style = () => <style>{scrollKeyframes}</style>;

export function Header({ channel }: { channel: string }) {
	return (
		<>
			<Style />
			<header className="sticky top-0 z-20 bg-neutral-100/50 backdrop-blur-md">
				{/* Scrolling text section */}
				<div className="bg-gradient-to-r from-customBg-700 to-customBg-500">
					<div className="scrolling-text py-1 text-sm text-center text-white">
						<p>
							Tham gia Group{" "}
							<Link href="https://zalo.me/0348822238" target="_blank">
								{" "}
								TẠI ĐÂY{" "}
							</Link>
						</p>
					</div>
				</div>

				{/* Main header content */}
				<div className="mx-auto max-w-7xl px-3 sm:px-8 sm:py-3">
					<div className="flex h-12 justify-between gap-4 md:gap-8">
						<Suspense fallback={<div>Loading...</div>}>
							<MobileMenu>
								<SearchBar channel={channel} />
								<NavLinks channel={channel} mobile={true}/>
							</MobileMenu>
						</Suspense>
						<Logo />
						<Nav channel={channel} />
						
					</div>
				</div>
				{/* Navigation links */}
				<div className="bg-gradient-to-r from-customBg-700 to-customBg-500 hidden sm:flex">
					<div className="mx-auto max-w-7xl px-3 sm:px-8">
						<div className="flex h-12 justify-between gap-4 md:gap-8">
							<nav className="flex w-full gap-4 lg:gap-6" aria-label="Main navigation">
								<ul className="hidden gap-4 overflow-x-auto whitespace-nowrap md:flex lg:gap-8 lg:px-0">
									<NavLinks channel={channel} mobile={false} />
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
