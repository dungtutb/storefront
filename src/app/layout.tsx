import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import { DraftModeNotification } from "@/ui/components/DraftModeNotification";
import { ContactIcons } from "@/ui/components/ContactIcons";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "TaiKhoanBK",
	description: "Starter pack for building performant e-commerce experiences.",
	metadataBase: process.env.NEXT_PUBLIC_STOREFRONT_URL
		? new URL(process.env.NEXT_PUBLIC_STOREFRONT_URL)
		: undefined,
};

export default function RootLayout(props: { children: ReactNode }) {
	const { children } = props;

	return (
		<html lang="en" className="min-h-dvh">
			<body className={`${inter.className} min-h-dvh`}>
				{children}
				<DraftModeNotification />
				<ContactIcons />
			</body>
		</html>
	);
}
