import { type Metadata, type ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ProductListByCategoryDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { CategoryList } from "@/ui/components/CategoryList";
import { ProductList } from "@/ui/components/ProductList";

export const generateMetadata = async (
	{ params }: { params: { slug: string; channel: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	return {
		title: `${category?.name || "Categroy"} | ${category?.seoTitle || (await parent).title?.absolute}`,
		description: category?.seoDescription || category?.description || category?.seoTitle || category?.name,
	};
};

export default async function Page({ params }: { params: { slug: string; channel: string } }) {
	const { category } = await executeGraphQL(ProductListByCategoryDocument, {
		variables: { slug: params.slug, channel: params.channel },
		revalidate: 60,
	});

	if (!category || !category.products) {
		notFound();
	}

	const { products } = category;

	return (
		<div className="mx-auto max-w-7xl p-4 pb-8 md:p-8 md:pb-16">
			<div className="mx-auto flex max-w-screen-2xl flex-col gap-2 px-4 pb-4 text-black md:flex-row">
				<div className="order-first w-full flex-none md:max-w-[125px]">
					{<CategoryList channel={params.channel} />}
				</div>
				<div className="order-last min-h-screen w-full md:order-none">
					<ProductList products={products.edges.map((e) => e.node)} />
				</div>
				{/* <div className="order-none flex-none md:order-last md:w-[125px]">
							<FilterList list={sorting} title="Sort by" />
						</div> */}
			</div>
		</div>
	);
}
