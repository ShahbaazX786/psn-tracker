import { title } from "@/components/primitives";

export default function RulesPage() {
  return (
    <div>
      <h1 className={title()}>Rules</h1>
      <p>
        Raja Mantri Chor Sipahi is a traditional Indian game with four roles:
        Raja (2000 points), Mantri (900 points), Sipahi (700 points), and Chor
        (0 points). Players pick chits to assign roles and the Mantri must
        identify the Chor. Correct guesses let the Mantri retain their points;
        wrong guesses give the points to the Chor. Scores are tallied after
        multiple rounds, and the highest scorer wins. Optional variations
        include adding more roles like Rani or Villager for larger groups.
      </p>
    </div>
  );
}
