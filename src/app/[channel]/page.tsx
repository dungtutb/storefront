import Image from "next/image";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import { Carousel } from "@/ui/components/carousel";

export const metadata = {
	title: "Thoa Tran Storefront",
	description: "Storefront platform for global brands.",
};

export default async function Page({ params }: { params: { channel: string } }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "best-seller",
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) {
		return null;
	}

	// const products = data.collection?.products?.edges.map(({ node: product }) => product);

	return (
		<>
			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Header channel={params.channel} />

					<div className="my-2 md:my-4">
						{/* <div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
							<Image
								src={"/logo.png"}
								alt="Photo by Radu Florin"
								className="!relative h-full w-full object-cover object-center"
								fill
							/>
						</div> */}
						<h2 className="mb-3 text-center text-3xl font-bold text-gray-800 md:mb-2 lg:text-3xl">
							THOA TRAN
						</h2>

						<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							Chuyên cung cấp và bảo hành tài khoản
						</p>
					</div>
				</div>
			</div>

			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-8 md:px-16">
					<div className="mb-2 md:mb-4">
						{/* <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Tìm hiểu về tôi
						</h2> */}

						{/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							This is a section of some simple filler text, also known as placeholder text. It shares some
							characteristics of a real written text but is random or otherwise generated.
						</p> */}
					</div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8 xl:grid-cols-5 xl:gap-16">
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
									// className="size-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Học tập</LinkWithChannel>
							</button>

							{/* <h3 className="mb-2 text-center text-lg font-semibold md:text-xl">Growth</h3>
							<p className="mb-2 text-center text-gray-500">
								Filler text is dummy text which has no meaning however looks very similar to real text.
							</p>
							<a
								href="#"
								className="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
							>
								More
							</a> */}
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>AI</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Giải trí</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Công việc</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M7.5 3.75H6A2.25 2.25 0 0 0 3.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0 1 20.25 6v1.5m0 9V18A2.25 2.25 0 0 1 18 20.25h-1.5m-9 0H6A2.25 2.25 0 0 1 3.75 18v-1.5M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Thiết kế</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Key/VPN/Proxy</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Dating</LinkWithChannel>
							</button>
						</div>
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									width="64"
									height="64"
									strokeWidth={1.5}
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
									/>
								</svg>
							</div>

							<button
								type="button"
								className="mb-2 me-2 rounded-full bg-gray-950 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
							>
								<LinkWithChannel href={"/categories/app-ai"}>Khuyến mãi</LinkWithChannel>
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="flex flex-col overflow-hidden rounded-lg bg-gray-900 sm:flex-row md:h-80">
						<div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-2/5">
							<h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
								Giảm giá mùa khai giảng
								<br />
								Lên tới 20%
							</h2>

							<p className="mb-8 max-w-md text-gray-400">
								Liên hệ ngay để được tư vấn
							</p>

							{/* <div className="mt-auto">
								<a
									href="#"
									className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
								>
									Mua ngay
								</a>
							</div> */}
						</div>

						<div className="order-first h-48 w-full bg-gray-700 sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
							<Image
									src={"/cover_shop.jpg"}
									width={1000}
									height={500}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<Carousel channel={params.channel} />
				</div>
			</div>

			{/* <div className="bg-white py-6 sm:py-8 lg:py-12">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<div className="mb-10 md:mb-16">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							<span>Sân khấu &quot;học tập&quot;</span>
						</h2>
					</div>

					<div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 lg:gap-x-8 lg:gap-y-12">
						{data.collection?.products?.edges.map(({ node: product }) => {
							return (
								<div key={product.id} className="flex flex-col items-center">
									<div className="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
										{product.thumbnail?.url && (
											<Image
												src={product.thumbnail?.url}
												width={200}
												height={200}
												alt={product.thumbnail?.alt ?? ""}
												className="h-full w-full object-cover object-center"
											/>
										)}
									</div>

									<div>
										<div className="text-center font-bold text-gray-950 md:text-lg">{product.name}</div>
										<p className="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
											{product.category?.name}
										</p>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div> */}

			<Footer channel={params.channel} />
		</>
	);
}
