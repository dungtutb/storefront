import Link from "next/link";
import { GridTileImage } from "./grid/tile";
import { ProductListByCollectionDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function Carousel({ channel }: { channel: string }) {
	const data = await executeGraphQL(ProductListByCollectionDocument, {
		variables: {
			slug: "best-seller",
			channel: channel,
		},
		revalidate: 60,
	});

	if (!data.collection?.products) {
		return null;
	}

	const products = data.collection?.products?.edges.map(({ node: product }) => product);

	const carouselProducts = [...products, ...products, ...products];

	return (
		<div className="w-full overflow-x-hidden pb-6 pt-1">
			<ul className="animate-carousel flex gap-4">
				{carouselProducts.map((product, i) => (
					<li
						key={`${product.id}${i}`}
						className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
					>
						{product?.thumbnail?.url && (<Link href={product?.thumbnail?.url} className="relative h-full w-full">
							<GridTileImage
								alt={product.thumbnail.alt ?? ""}
								label={{
									title: product.name,
									// amount: product.priceRange.maxVariantPrice.amount,
									// currencyCode: product.priceRange.maxVariantPrice.currencyCode,
								}}
								src={product?.thumbnail?.url}
								fill
								sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
							/>
						</Link>)
}
					</li>
				))}
			</ul>
		</div>
	);
}
