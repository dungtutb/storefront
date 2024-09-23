import { type ReactNode } from "react";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import { ServiceSection } from "@/ui/components/ServiceSection";

export const metadata = {
	title: "Thoa Tran Shop",
	description: "Starter pack for building performant e-commerce experiences.",
};

export default function RootLayout(props: { children: ReactNode; params: { channel: string } }) {
	return (
		<>
			<Header channel={props.params.channel} />
			<div className="min-h-[calc(100dvh-64px)]">
				<main>
				{props.children}
				</main>
				<div className="bg-gray-100 py-2 md:py-4">
					<div className="mx-auto max-w-7xl px-4 md:px-8">
						<ServiceSection/>
					</div>
				</div>
				<Footer channel={props.params.channel} />
			</div>
		</>
	);
}
