import { notFound } from "next/navigation";
import { ProductsPerPage } from "@/app/config";
import { ProductListPaginatedDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { CategoryList } from "@/ui/components/CategoryList";
import { Pagination } from "@/ui/components/Pagination";
import { ProductList } from "@/ui/components/ProductList";

export const metadata = {
	title: "Products",
	description: "All products Storefront",
};

export default async function Page({
	params,
	searchParams,
}: {
	params: { channel: string };
	searchParams: {
		cursor: string | string[] | undefined;
	};
}) {
	const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : null;

	const { products } = await executeGraphQL(ProductListPaginatedDocument, {
		variables: {
			first: ProductsPerPage,
			after: cursor,
			channel: params.channel,
		},
		revalidate: 60,
	});

	if (!products) {
		notFound();
	}

	const newSearchParams = new URLSearchParams({
		...(products.pageInfo.endCursor && { cursor: products.pageInfo.endCursor }),
	});

	return (
		<section className="mx-auto max-w-7xl p-4 pb-8 md:p-8 md:pb-16">
			<div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-4 pb-4 text-black md:flex-row">
				<div className="order-first w-full flex-none md:max-w-[125px]">
					{<CategoryList channel={params.channel} />}
				</div>
				<div className="order-last min-h-screen w-full md:order-none">
					<ProductList products={products.edges.map((e) => e.node)} />
					<Pagination
					pageInfo={{
						...products.pageInfo,
						basePathname: `/products`,
						urlSearchParams: newSearchParams,
					}}
				/>
				</div>
				{/* <div className="order-none flex-none md:order-last md:w-[125px]">
							<FilterList list={sorting} title="Sort by" />
						</div> */}
				
			</div>

			{/* <h2 className="sr-only">Product list</h2> */}
			{/* <ProductList products={products.edges.map((e) => e.node)} /> */}
		</section>
	);
}
