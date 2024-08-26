import Image from "next/image";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { LinkWithChannel } from "@/ui/atoms/LinkWithChannel";
import { Footer } from "@/ui/components/Footer";

export const metadata = {
	title: "ACME Storefront, powered by Saleor & Next.js",
	description:
		"Storefront Next.js Example for building performant e-commerce experiences with Saleor - the composable, headless commerce platform for global brands.",
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

	// const products = data.collection?.products.edges.map(({ node: product }) => product);

	return (
		<>
			{/* <div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<header className="mb-4 flex items-center justify-between py-4 md:py-8">
						<a
							href="/"
							className="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl"
							aria-label="logo"
						>
							<svg
								width="95"
								height="94"
								viewBox="0 0 95 94"
								className="h-auto w-6 text-indigo-500"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M96 0V47L48 94H0V47L48 0H96Z" />
							</svg>
							ThoaTran
						</a>
						<nav className="hidden gap-12 lg:flex">
							<a href="#" className="text-lg font-semibold text-indigo-500">
								Trang chủ
							</a>
							
							<a
								href="#"
								className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
							>
								Lịch sử mua hàng
							</a>
							<a
								href="#"
								className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
							>
								Xem phim gì
							</a>
						</nav>
						<a
							href="#"
							className="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block"
						>
							Contact Sales
						</a>

						<button
							type="button"
							className="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
							Menu
						</button>
					</header>

					<div className="mb-2 md:mb-4">
						<div className="mx-auto mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-100 shadow-lg md:mb-4 md:h-32 md:w-32">
							<Image
								src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=256"
								layout="fill"
								alt="Photo by Radu Florin"
								className="!relative h-full w-full object-cover object-center"
							/>
						</div>
						<h2 className="mb-3 text-center text-3xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Thoa Trần
						</h2>

						<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							(Brand & Performance Marketing)
						</p>
					</div>
				</div>
			</div> */}

			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-8 md:px-16">
					<div className="mb-5 md:mb-8">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Tìm hiểu về tôi
						</h2>

						{/* <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							This is a section of some simple filler text, also known as placeholder text. It shares some
							characteristics of a real written text but is random or otherwise generated.
						</p> */}
					</div>
					<div className="grid grid-cols-2 gap-4 sm:grid-cols-4 md:gap-8 xl:gap-16">
						<div className="flex flex-col items-center">
							<div className="mb-2 flex h-16 w-16 items-center justify-center text-gray-950 sm:mb-4 md:h-16 md:w-16">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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
									stroke-width="1.5"
									stroke="currentColor"
									// className="size-6"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
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

			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-lg px-4 md:px-8">
					<div className="mb-8 md:mb-12">
						<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
							Khóa học của tôi
						</h2>

						<p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
							Ứng dụng Notion trong quản lý team và cá nhân
						</p>
					</div>

					<div className="grid grid-cols-2 gap-6 rounded-lg bg-indigo-500 p-6 md:grid-cols-4 md:gap-8 md:p-8">
						<div className="flex flex-col items-center">
							<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">200</div>
							<div className="text-sm text-indigo-200 sm:text-base">People</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">500+</div>
							<div className="text-sm text-indigo-200 sm:text-base">People</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">1000+</div>
							<div className="text-sm text-indigo-200 sm:text-base">Customers</div>
						</div>

						<div className="flex flex-col items-center">
							<div className="text-xl font-bold text-white sm:text-2xl md:text-3xl">A couple</div>
							<div className="text-sm text-indigo-200 sm:text-base">Coffee breaks</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-white pb-2 sm:pb-4 md:pb-6 lg:pb-8">
				<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
					<div className="flex flex-col overflow-hidden rounded-lg bg-gray-200 sm:flex-row md:h-80">
						<div className="order-first h-48 w-full bg-gray-300 sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
							<Image
								src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?auto=format&q=75&fit=crop&w=1000"
								layout="fill"
								alt="Photo by Andras Vas"
								className="!relative h-full w-full object-cover object-center"
							/>
						</div>

						<div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
							<h2 className="mb-4 text-xl font-bold text-gray-800 md:text-2xl lg:text-4xl">Help center</h2>

							<p className="mb-8 max-w-md text-gray-600">
								This is a section of some simple filler text, also known as placeholder text. It shares some
								characteristics of a real written text.
							</p>

							<div className="mt-auto">
								<a
									href="#"
									className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
								>
									Contact support
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Footer channel={params.channel} />
		</>
	);
}
