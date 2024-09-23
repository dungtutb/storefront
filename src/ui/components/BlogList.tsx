import { BlogElement } from "./BlogElement";
import { type PageListItemFragment } from "@/gql/graphql";

export const BlogList = ({ blogs }: { blogs: readonly PageListItemFragment[] }) => {
	return (
		<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
			{blogs.map((blog) => (
				<BlogElement
					key={blog.id}
					blog={blog}
				/>
			))}
		</div>
	);
};
