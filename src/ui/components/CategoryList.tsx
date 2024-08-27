import clsx from "clsx";
import { Suspense } from "react";
import { FilterList } from "./filter";
import { type PathFilterItem } from "./filter/item";
import { executeGraphQL } from "@/lib/graphql";
import { CategoryListDocument } from "@/gql/graphql";

const skeleton = "mb-3 h-4 w-5/6 animate-pulse rounded";
const activeAndTitles = "bg-neutral-800 dark:bg-neutral-300";
const items = "bg-neutral-400 dark:bg-neutral-700";

export async function CategoryList({ channel }: { channel: string }) {
	const { categories } = await executeGraphQL(CategoryListDocument, {
		variables: { first: 20, channel },
	});

	const pathFilterItems: PathFilterItem[] | undefined = categories?.edges.map(({ node }) => ({
		path: `/categories/${node.slug}`,
		title: node.name,
	}));

	pathFilterItems?.unshift({
		title: "All",
		path: `/${channel}/products`
	})

	return (
		<Suspense
			fallback={
				<div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
					<div className={clsx(skeleton, activeAndTitles)} />
					<div className={clsx(skeleton, activeAndTitles)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
					<div className={clsx(skeleton, items)} />
				</div>
			}
		>
			<FilterList list={pathFilterItems} title="" />
		</Suspense>
	);
}
