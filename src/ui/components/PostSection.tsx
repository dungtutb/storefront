"use client";
import clsx from "clsx";
import { useCallback, useEffect, useState } from "react";
import { PostList, type APIResponse, type Article, type Meta } from "./post/PostList";
import { fetchAPI } from "./post/ultis/fetch-api";
import Loading from "@/app/[channel]/(main)/products/loading";

export function PostSection({ loadMore, limit }: { loadMore: boolean, limit: number }) {
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
		await fetchData(nextPosts, limit);
	}

	useEffect(() => {
		// Define an async function inside useEffect
		const initializeFetch = async () => {
			try {
				await fetchData(0, limit);
			} catch (error) {
				console.error("Error fetching initial data:", error);
			}
		};

		// Call the async function
		void initializeFetch();

		// The useEffect callback must return void (or a cleanup function), not a Promise
	}, [fetchData, limit]);

	if (isLoading) return <Loading />;

	return (
		<div className="bg-gray-200 py-2 md:py-4">
			<div className="mx-auto max-w-7xl px-4 md:px-8">
				<PostList data={data}>
					{loadMore && meta!.pagination.start + meta!.pagination.limit < meta!.pagination.total && (
						<div className="flex justify-center gap-x-4 border-neutral-200 px-4 pt-4 md:pt-8">
							<button
								type="button"
								className={clsx("px-4 py-2 text-sm font-medium ", {
                                    "rounded bg-neutral-900 text-neutral-50 hover:bg-neutral-800": meta!.pagination.start + meta!.pagination.limit < meta!.pagination.total,
                                    "cursor-not-allowed rounded border text-neutral-400": meta!.pagination.start + meta!.pagination.limit >= meta!.pagination.total,
                                    "pointer-events-none": meta!.pagination.start + meta!.pagination.limit >= meta!.pagination.total,
                                })}
								onClick={loadMorePosts}
							>
								Xem thêm
							</button>


						</div>
					)}
				</PostList>
			</div>
		</div>
	);
}
