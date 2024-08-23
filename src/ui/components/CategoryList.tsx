import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { CategoryListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function CategoryList({ channel }: { channel: string }) {
	const { categories } = await executeGraphQL(CategoryListDocument, {
		variables: { first: 20, channel },
	});

	return (
		<ul className="mt-4 space-y-4 [&>li]:text-neutral-950">
			<li className="text-sm">
				<LinkWithChannel href="/products">All</LinkWithChannel>
			</li>
			{categories?.edges.map(({ node }) => {
				return (
					<li key={node.id} className="text-sm">
						<LinkWithChannel href={`/categories/${node.slug}`}>{node.name}</LinkWithChannel>
					</li>
				);
			})}
		</ul>
	);
}
