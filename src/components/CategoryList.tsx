type CategoryListProps = {
  categories: string[];
};

export const CategoryList = ({ categories }: CategoryListProps) => {
  if (!categories || categories.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((category) => (
        <span
          key={category}
          className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
        >
          {category}
        </span>
      ))}
    </div>
  );
};
