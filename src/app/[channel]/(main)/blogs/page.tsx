"use client";
import { PostSection } from "@/ui/components/PostSection";

export default function Page() {
	const limit = Number(process.env.NEXT_PUBLIC_PAGE_LIMIT);
	return (
		<>
			<PostSection loadMore={true} limit={limit}/>
		</>
	)
}
