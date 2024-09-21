import { BlogElement } from "./BlogElement";
import { type PageListItemFragment } from "@/gql/graphql";

export const BlogList = ({ blogs }: { blogs: readonly PageListItemFragment[] }) => {
	return (
		<>
			{blogs.map((blog) => (
				<BlogElement
					key={blog.id}
					blog={blog}
				/>
			))}
		</>
	);
};
