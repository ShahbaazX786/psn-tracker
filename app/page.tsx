import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title, subtitle } from "@/components/primitives";
import { SearchIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center leading-8">
        <span className={title({ size: "lg" })}>Everything&nbsp;</span>
        <span className={title({ size: "lg", color: "blue" })}>
          Playstation&nbsp;
        </span>
        <br />
        <span className={title({ size: "lg" })}>All at once here</span>
        <div className={subtitle({ class: "mt-4" })}>
          Enjoy the greatest PSN experience ever.
        </div>
      </div>

      <div className="flex gap-8">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            size: "lg",
          })}
          href={"/"}
        >
          Get Started
        </Link>
        <Link
          className={buttonStyles({
            variant: "bordered",
            radius: "full",
            size: "lg",
          })}
          href={"/"}
        >
          <SearchIcon size={20} />
          Check Latest Games
        </Link>
      </div>

      <div className="mt-8">
        <Snippet hideCopyButton hideSymbol variant="bordered">
          <span>
            Check out about <Code color="primary">for proper guides</Code>
          </span>
        </Snippet>
      </div>
    </section>
  );
}
