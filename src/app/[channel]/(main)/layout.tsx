import { type ReactNode } from "react";
import { CollectionList } from "@/ui/components/CollectionList";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";

export const metadata = {
	title: "Saleor Storefront example",
	description: "Starter pack for building performant e-commerce experiences with Saleor.",
};

export default function RootLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			<Header channel={props.params.channel} />
			<div className="flex min-h-[calc(100dvh-64px)] flex-col">
				<main className="flex-1">
					<div className="mx-auto flex max-w-screen-2xl flex-col gap-8 px-4 pb-4 text-black md:flex-row dark:text-white">
						<div className="order-first w-full flex-none md:max-w-[125px]">{<CollectionList channel={props.params.channel} />}</div>
						<div className="order-last min-h-screen w-full md:order-none">{props.children}</div>
						<div className="order-none flex-none md:order-last md:w-[125px]">
							{/* <FilterList list={sorting} title="Sort by" /> */}
						</div>
					</div>
				</main>
				<Footer channel={props.params.channel} />
			</div>
		</>
	);
}
