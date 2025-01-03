import { Code } from "@nextui-org/code";
import { Snippet } from "@nextui-org/snippet";

import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className={title()}>About</h1>
      <p className="text-lg">Raja - Mantri - Chor - Sipahi</p>
      <p>
        It is a type of role-playing game that is a popular pastime in India. It
        involves four players—each player takes up the role of either the king,
        Minister, thief or soldier— and the Minister (Mantri) has to guess the
        identity of the thief.
      </p>
      <Snippet hideCopyButton hideSymbol variant="bordered">
        <span>
          In Short <Code color="danger">Desi AmongUs</Code>
        </span>
      </Snippet>
    </div>
  );
}
