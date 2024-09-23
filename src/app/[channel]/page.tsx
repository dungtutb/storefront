import Image from "next/image";
import Link from "next/link";
import { BlogsPerPage } from "../config";
import {
	OrderDirection,
	PageListDocument,
	PageSortField,
	ProductListByCollectionDocument,
} from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { BlogList } from "@/ui/components/BlogList";
import { Footer } from "@/ui/components/Footer";
import { Header } from "@/ui/components/Header";
import { ProductList } from "@/ui/components/ProductList";
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
			first: 12,
		},
		revalidate: 60,
	});

	const pageTypes = ["UGFnZVR5cGU6Ng=="];

	const blogs = await executeGraphQL(PageListDocument, {
		variables: {
			first: BlogsPerPage,
			sortBy: PageSortField.PublishedAt,
			sortDirection: OrderDirection.Asc,
			pageTypes: pageTypes,
		},
		revalidate: 60,
	});

	const images = [
		'/banner.jpg',
		'/banner.jpg',
		'/banner.jpg',
	];

	return (
		<>
			<div className="bg-gray-100">
				<div className="mx-auto max-w-screen-2xl">
					<Header channel={params.channel} />
				</div>
			</div>

			<div className="bg-gray-200 py-2 md:py-4">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
						<div className="h-auto w-full overflow-hidden rounded-sm bg-gray-100 shadow-sm">
							<Carousel images={images} />
						</div>
				</div>
				
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						<span>Top bán chạy</span>
					</h2>
					{data.collection?.products && (
						<ProductList products={data.collection?.products?.edges.map((e) => e.node)} />
					)}
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-7xl px-4 md:px-8">
					<div className="grid grid-cols-2 gap-2 md:grid-cols-4 md:gap-4 lg:gap-8	">
						<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
								<Image
									src={"/banquyen.png"}
									width={128}
									height={128}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
							</div>

							<div>
								<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">
									Phần mềm bản quyền
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">100% từ nhà phát triển</p>
							</div>
						</div>

						<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
								<Image
									src={"/baohanh.png"}
									width={128}
									height={128}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
							</div>

							<div>
								<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">
									Chính sách bảo hành
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">Bảo hành cụ thể theo từng sản phẩm</p>
							</div>
						</div>

						<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
								<Image
									src={"/sanpham.png"}
									width={128}
									height={128}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
							</div>

							<div>
								<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">
									Thêm mới sản phẩm
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									Hỗ trợ nâng các tài khoản chưa có trên web liên hệ zalo
								</p>
							</div>
						</div>

						<div className="flex gap-2 rounded-lg bg-white p-2 hover:border-customBg-600 lg:gap-4">
							<div className="flex h-12 w-12 shrink-0 items-center justify-center md:h-14 md:w-14 md:rounded-xl">
								<Image
									src={"/hoivienvip.png"}
									width={128}
									height={128}
									alt={""}
									className="h-full w-full object-cover object-center"
								/>
							</div>

							<div>
								<h3 className="text-sm font-semibold text-gray-950 md:text-base lg:text-lg">
									Hội viên VIP
								</h3>
								<p className="text-sm text-gray-500 lg:text-base">
									Trở thành hội viên VIP sẽ được hưởng các đặc quyền{" "}
									<Link href="https://zalo.me/0348822238" target="_blank">
										{" "}
										TẠI ĐÂY{" "}
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						<span>Tin tức tổng hợp</span>
					</h2>
					<div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
						{blogs.pages && <BlogList blogs={blogs.pages?.edges.map((e) => e.node)} />}
					</div>
				</div>
			</div>

			<Footer channel={params.channel} />
		</>
	);
}
