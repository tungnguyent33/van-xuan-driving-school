import type { ContentBlock } from "@/content/tin-tuc";

type ArticleContentProps = {
  blocks: ContentBlock[];
};

export default function ArticleContent({ blocks }: ArticleContentProps) {
  return (
    <div className="space-y-4">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          return (
            <h2
              key={index}
              className="pt-2 text-xl font-bold text-primary"
            >
              {block.text}
            </h2>
          );
        }

        if (block.type === "list") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li
                  key={item}
                  className="text-sm leading-relaxed text-foreground/80"
                >
                  {item}
                </li>
              ))}
            </ul>
          );
        }

        return (
          <p
            key={index}
            className="text-sm leading-relaxed text-foreground/80"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}
