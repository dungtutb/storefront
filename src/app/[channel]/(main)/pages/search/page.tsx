import { notFound, redirect } from "next/navigation";
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
	searchParams: Record<"query" | "cursor", string | string[] | undefined>;
}) {
    const cursor = typeof searchParams.cursor === "string" ? searchParams.cursor : null;
    const searchValue = searchParams.query;

	if (!searchValue) {
		notFound();
	}

	if (Array.isArray(searchValue)) {
		const firstValidSearchValue = searchValue.find((v) => v.length > 0);
		if (!firstValidSearchValue) {
			notFound();
		}
		redirect(`/pages/search?${new URLSearchParams({ query: firstValidSearchValue }).toString()}`);
	}

    const { pages } = await executeGraphQL(PageListDocument, {
		variables: {
			first: BlogsPerPage,
            search: searchValue,
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
        <div className="grid gap-2 sm:grid-cols-2 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
		<BlogList blogs={pages.edges?.map((e) => e.node)} />
        <Pagination
            pageInfo={{
                ...pages.pageInfo,
                basePathname: `/blogs/search`,
                urlSearchParams: newSearchParams,
            }}
        />
	</div>
    )
    
}