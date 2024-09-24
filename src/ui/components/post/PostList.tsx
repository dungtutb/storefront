// ./frontend/src/app/[lang]/components/PostList.tsx

import { PostListItem } from "./PostListItem";

export interface Article {
	id: 4;

	title: string;
	description: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	cover: {
		url: string;
	};
	category: {
		name: string;
		slug: string;
	};
	author: {
		name: string;
		avatar: {
			url: string;
		};
	};
}

export function PostList({ data: articles, children }: { data: Article[]; children?: React.ReactNode }) {
	return (
		<>
			<div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
				{articles.map((article) => (
					<PostListItem key={article.id} article={article} />
				))}
			</div>
			{children && children}
		</>
	);
}
