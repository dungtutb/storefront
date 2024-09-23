import { notFound } from "next/navigation";
import { BlogsPerPage, pageTypes } from "@/app/config";
import { OrderDirection, PageListDocument, PageSortField } from "@/gql/graphql";
import { executeGraphQL } from "@/lib/graphql";
import { BlogList } from "@/ui/components/BlogList";
import { Pagination } from "@/ui/components/Pagination";

export const metadata = {
	title: "Blogs",
	description: "All Blogs Storefront",
};

export default async function Page({
	searchParams,
}: {
	params: { channel: string };
	searchParams: { cursor: string | string[] | undefined };
}) {
	const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : null;

	const { pages } = await executeGraphQL(PageListDocument, {
		variables: {
			first: BlogsPerPage,
			after: cursor,
			sortBy: PageSortField.PublishedAt,
			sortDirection: OrderDirection.Desc,
			pageTypes: pageTypes,
		},
		revalidate: 60,
	});

	if (!pages) {
		notFound();
	}

	const newSearchParams = new URLSearchParams({
		...(pages.pageInfo.endCursor && { cursor: pages.pageInfo.endCursor }),
	});
	return (
		// <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
		//
		// <Pagination
		//     pageInfo={{
		//         ...pages.pageInfo,
		//         basePathname: `/pages/search`,
		//         urlSearchParams: newSearchParams,
		//     }}
		// />
		// </div>
		<div className="bg-white py-6 sm:py-8 lg:py-12">
			<div className="mx-auto max-w-screen-2xl px-4 md:px-8">
				<BlogList blogs={pages.edges?.map((e) => e.node)} />
				<Pagination
					pageInfo={{
						...pages.pageInfo,
						basePathname: `/pages/search`,
						urlSearchParams: newSearchParams,
					}}
				/>
			</div>
		</div>
	);
}
