import { BlogsPerPage, pageTypes } from "../config";
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
import { ServiceSection } from "@/ui/components/ServiceSection";
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

	const {pages} = await executeGraphQL(PageListDocument, {
		variables: {
			first: BlogsPerPage,
			sortBy: PageSortField.PublishedAt,
			sortDirection: OrderDirection.Desc,
			pageTypes: pageTypes,
		},
		revalidate: 60,
	});

	const images = ["/banner.jpg", "/banner_1.jpg"];

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
					<ServiceSection />
				</div>
			</div>

			<div className="bg-gray-100 py-2 md:py-4">
				<div className="mx-auto max-w-screen-xl px-4 md:px-8">
					<h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
						<span>Tin tức tổng hợp</span>
					</h2>
					{pages && <BlogList blogs={pages?.edges.map((e) => e.node)} />}
				</div>
			</div>

			<Footer channel={params.channel} />
		</>
	);
}
