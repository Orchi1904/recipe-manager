type Props = {
  children: React.ReactNode;
  headline: string;
  subheadline?: string;
};

function RecipeDetailSection({ children, headline, subheadline }: Props) {
  return (
    <section>
      <hr />

      <h2
        className={`font-caveat font-bold text-2xl md:text-3xl ${
          !subheadline ? "my-4 md:my-8" : "mt-4 md:mt-8"
        }`}
      >
        {headline}
      </h2>

      {subheadline && (
        <h3 className="font-caveat font-semibold text-gray-500 text-xl md:text-2xl mt-1 mb-4 md:mb-8">
          {subheadline}
        </h3>
      )}

      {children}
    </section>
  );
}

export default RecipeDetailSection;
