import { Button } from "@nextui-org/button";

import { title } from "@/components/primitives";

export default function BlogPage() {
  return (
    <div>
      <h1 className={title()}>Welcome to Darbaar</h1>
      <p className="mt-4">
        There is a chor among the people present in the game, find the thief
        sucessfully to proceed with the game further.
      </p>
      <div className="flex flex-row justify-center items-center gap-6 mt-4">
        <Button color="default" size="lg">
          Begin
        </Button>
        <Button color="warning" size="lg">
          Rules
        </Button>
      </div>
    </div>
  );
}
