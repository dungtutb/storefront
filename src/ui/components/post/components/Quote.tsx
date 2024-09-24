interface QuoteProps {
    data: {
      title: string;
      body: string;
      author: string;
    };
  }
  
  export function Quote({ data }: QuoteProps) {
    const { body, author } = data;
  
    return (
      <blockquote className="mb-6 border-l-4 pl-4 italic text-gray-500 sm:text-lg md:mb-8 md:pl-6">
        <div className="flex flex-col">
        <p>{body}</p>
        {author ? <p>{author}</p> : "unknown"}
        </div>
      </blockquote>

    );
  }
  