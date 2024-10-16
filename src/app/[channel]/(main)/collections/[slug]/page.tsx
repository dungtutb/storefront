import { type Metadata, type ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { ProductList } from "@/ui/components/ProductList";

export const generateMetadata = async (
	{ params }: { params: { slug: string; channel: string } },
	parent: ResolvingMetadata,
): Promise<Metadata> => {
	const { collection } = await executeGraphQL(ProductListByCollectionDocument, {
		variables: { slug: params.slug, channel: params.channel, first: 100 },
		revalidate: 60,
	});

	return {
		title: `${collection?.name || "Collection"} | ${collection?.seoTitle || (await parent).title?.absolute}`,
		description:
			collection?.seoDescription || collection?.description || collection?.seoTitle || collection?.name,
	};
};

export default async function Page({ params }: { params: { slug: string; channel: string } }) {
	const { collection } = await executeGraphQL(ProductListByCollectionDocument, {
		variables: { slug: params.slug, channel: params.channel, first: 100 },
		revalidate: 60,
	});

	if (!collection || !collection.products) {
		notFound();
	}

	const { name, products } = collection;

	return (
		<div className="mx-auto max-w-7xl p-4 pb-8 md:p-8 md:pb-16">
			<h1 className="pb-8 text-xl font-semibold">{name}</h1>
			<ProductList products={products.edges.map((e) => e.node)} />
		</div>
	);
}
