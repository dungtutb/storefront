"use client";
import { useCallback, useEffect, useState } from "react";
import Loading from "../products/loading";
import { type Article, PostList } from "./components/PostList";
import { fetchAPI } from "./ultis/fetch-api";

interface Meta {
	pagination: {
		start: number;
		limit: number;
		total: number;
	};
}

interface APIResponse {
	data: Article[]; // Define the Article interface as per your API response
	meta: Meta; // Meta interface as previously defined
}

export default function Profile() {
	const [meta, setMeta] = useState<Meta | undefined>();
	const [data, setData] = useState<Article[]>([]);
	const [isLoading, setLoading] = useState(true);

	const fetchData = useCallback(async (start: number, limit: number) => {
		setLoading(true);
		try {
			const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
			const path = `/articles`;
			const urlParamsObject = {
				sort: { createdAt: "desc" },
				populate: {
					cover: { fields: ["url"] },
					category: { populate: "*" },
					author: {
						populate: "*",
					},
				},
				pagination: {
					start: start,
					limit: limit,
				},
			};
			const options = { headers: { Authorization: `Bearer ${token}` } };
			const responseData = await fetchAPI<APIResponse>(path, urlParamsObject, options);

			if (start === 0) {
				setData(responseData.data);
			} else {
				setData((prevData: Article[]) => [...prevData, ...responseData.data]);
			}

			setMeta(responseData.meta);
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	}, []);

	async function loadMorePosts(): Promise<void> {
		const nextPosts = meta!.pagination.start + meta!.pagination.limit;
		await fetchData(nextPosts, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT));
	}

	useEffect(() => {
		// Define an async function inside useEffect
		const initializeFetch = async () => {
			try {
				await fetchData(0, Number(process.env.NEXT_PUBLIC_PAGE_LIMIT) || 10);
			} catch (error) {
				console.error("Error fetching initial data:", error);
			}
		};

		// Call the async function
		void initializeFetch();

		// The useEffect callback must return void (or a cleanup function), not a Promise
	}, [fetchData]);

	if (isLoading) return <Loading />;

	return (
		<div>
			<PostList data={data}>
				{meta!.pagination.start + meta!.pagination.limit < meta!.pagination.total && (
					<div className="flex justify-center">
						<button
							type="button"
							className="rounded-lg px-6 py-3 text-sm hover:underline dark:bg-gray-900 dark:text-gray-400"
							onClick={loadMorePosts}
						>
							Load more posts...
						</button>
					</div>
				)}
			</PostList>
		</div>
	);
}
