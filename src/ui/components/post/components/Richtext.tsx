import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface RichTextProps {
  data: {
    body: string;
  };
}

export function RichText({ data }: RichTextProps) {
  // TODO: STYLE THE MARKDOWN
  return (
    <section className="prose lg:prose-xl max-w-full mb-6 md:mb-8">
       <Markdown remarkPlugins={[remarkGfm]}>{data.body}</Markdown>
    </section>
  );
}