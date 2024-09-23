import Image from "next/image";
import Link from "next/link";
import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { executeGraphQL } from "@/lib/graphql";
import { MenuGetBySlugDocument } from "@/gql/graphql";

export async function Footer({ channel }: { channel: string }) {
	const footerLinks = await executeGraphQL(MenuGetBySlugDocument, {
		variables: { slug: "footer", channel },
		revalidate: 60 * 60 * 24,
	});
	// const channels = process.env.SALEOR_APP_TOKEN
	// 	? await executeGraphQL(ChannelsListDocument, {
	// 			withAuth: false, // disable cookie-based auth for this call
	// 			headers: {
	// 				// and use app token instead
	// 				Authorization: `Bearer ${process.env.SALEOR_APP_TOKEN}`,
	// 			},
	// 	  })
	// 	: null;
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-neutral-300 bg-neutral-50">
			<div className="mx-auto max-w-7xl px-4 md:px-8 text-sm lg:text-base">
				<div className="grid grid-cols-2 gap-8 py-8">
					{footerLinks.menu?.items?.map((item) => {
						return (
							<div key={item.id}>
								<h3 className="text-xl font-semibold text-neutral-900">{item.name}</h3>
								<ul className="mt-4 space-y-4 [&>li]:text-neutral-800">
									{item.children?.map((child) => {
										if (child.category) {
											return (
												<li key={child.id}>
													<LinkWithChannel href={`/categories/${child.category.slug}`}>
														{child.category.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.collection) {
											return (
												<li key={child.id}>
													<LinkWithChannel href={`/collections/${child.collection.slug}`}>
														{child.collection.name}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.page) {
											return (
												<li key={child.id}>
													<LinkWithChannel href={`/pages/${child.page.slug}`}>
														{child.page.title}
													</LinkWithChannel>
												</li>
											);
										}
										if (child.url) {
											return (
												<li key={child.id}>
													<LinkWithChannel href={child.url}>{child.name}</LinkWithChannel>
												</li>
											);
										}
										// return (
										// 	<li key={child.id}>
										// 			<Link href={"#"}>{child.name}</Link>
										// 	</li>
										// )
									})}
								</ul>
							</div>
						);
					})}
				</div>

				{/* {channels?.channels && (
					<div className="mb-4 text-neutral-500">
						<label>
							<span>Change currency:</span> <ChannelSelect channels={channels.channels} />
						</label>
					</div>
				)} */}

				<div className="flex flex-col justify-between border-t border-neutral-200 py-10 sm:flex-row">
					<p className="text-customBg-700">Copyright &copy; {currentYear} taikhoanbk.com. <span className="hidden">{channel}</span></p>
					<p className="flex gap-1 text-customBg-700">
						Powered by{" "}
						<Link target={"_blank"} href={"https://github.com/dungpn0"}>
							dungpn0
						</Link>{" "}
						<Link href={"https://github.com/dungpn0"} target={"_blank"} className={"opacity-30"}>
							<Image alt="github repository" height={20} width={20} src={"/github-mark.svg"} />
						</Link>
					</p>
				</div>
			</div>
		</footer>
	);
}
