import { LinkWithChannel } from "../atoms/LinkWithChannel";
import { CollectionListDocument } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";

export async function CollectionList({ channel }: { channel: string }) {
	const { collections } = await executeGraphQL(CollectionListDocument, {
		variables: { first: 20, channel },
	});

	return (
		<ul className="mt-4 space-y-4 [&>li]:text-neutral-500">
			<li className="text-sm">
				<LinkWithChannel href="/products">All</LinkWithChannel>
			</li>
			{collections?.edges.map(({ node }) => {
				return (
					<li key={node.id} className="text-sm">
						<LinkWithChannel href={`/collections/${node.slug}`}>{node.name}</LinkWithChannel>
					</li>
				);
			})}
		</ul>
	);
}
