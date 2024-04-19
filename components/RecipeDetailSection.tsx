type Props = {
  children: React.ReactNode;
  headline: string;
};

function RecipeDetailSection({ children, headline }: Props) {
  return (
    <section>
      <hr />

      <h2 className="font-caveat font-bold text-2xl md:text-3xl my-4 md:my-8">
        {headline}
      </h2>

      {children}
    </section>
  );
}

export default RecipeDetailSection;
