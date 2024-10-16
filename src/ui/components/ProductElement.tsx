import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { ProductImageWrapper } from "@/ui/atoms/ProductImageWrapper";

import type { ProductListItemFragment } from "@/gql/graphql";
import { formatMoney } from "@/lib/utils";

export function ProductElement({
	product,
	loading,
	priority,
}: { product: ProductListItemFragment } & { loading: "eager" | "lazy"; priority?: boolean }) {
	const price = product?.pricing?.priceRange?.start?.gross && formatMoney(product?.pricing?.priceRange?.start?.gross.amount, product?.pricing?.priceRange?.start?.gross.currency);
	
	const priceUndiscounted = product?.pricing?.priceRangeUndiscounted?.start?.gross && formatMoney(product?.pricing?.priceRangeUndiscounted?.start?.gross.amount, product?.pricing?.priceRangeUndiscounted?.start?.gross.currency);
	
	const discount = product?.pricing?.priceRange?.start?.gross && product?.pricing?.priceRangeUndiscounted?.start?.gross && Math.ceil((product?.pricing?.priceRange?.start?.gross.amount - product?.pricing?.priceRangeUndiscounted?.start?.gross.amount) * 100 / product?.pricing?.priceRangeUndiscounted?.start?.gross.amount);

	return (
		<li data-testid="ProductElement">
			<LinkWithChannel href={`/products/${product.slug}`} key={product.id}>
				<div>
					{product?.thumbnail?.url && (
						<ProductImageWrapper
							loading={loading}
							src={product.thumbnail.url}
							alt={product.thumbnail.alt ?? ""}
							width={512}
							height={512}
							sizes={"512px"}
							priority={priority}
						/>
					)}
					<div className="mt-2 items-center text-center">
						<p className="mt-1 text-sm text-neutral-500" data-testid="ProductElement_Category">
								{product.category?.name}
						</p>
						<h3 className="mt-1 text-sm font-semibold text-neutral-900">{product.name}</h3>
						<p className="mt-1 text-sm font-medium text-customBg-900 leading-relaxed" data-testid="ProductElement_PriceRange">
							{price} {discount < 0 && (<s className="text-gray-400">{priceUndiscounted}</s>)} {discount < 0 && (<span className="bg-red-50 text-red-600 text-sm font-medium me-2 px-1 py-1 rounded dark:bg-red-600 dark:text-red-50">{discount}%</span>)}
						</p>
					</div>
				</div>
			</LinkWithChannel>
		</li>
	);
}
