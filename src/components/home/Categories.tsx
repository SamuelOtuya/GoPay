import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Personal Insurance",
    items: ["Motor", "Medical", "Home", "Travel"],
    path: "/personal",
  },
  {
    title: "Business Insurance",
    items: ["Property", "Liability", "Cyber"],
    path: "/business",
  },
  {
    title: "Employee Benefits",
    items: ["Group Medical", "Life", "Pension"],
    path: "/employee",
  },
  {
    title: "Specialty Covers",
    items: ["Engineering", "Aviation", "Marine"],
    path: "/specialty",
  },
];

function Categories() {
  const navigate = useNavigate();

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {categories.map((category) => (
        <div
          key={category.title}
          onClick={() => navigate(category.path)}
          className="cursor-pointer rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg hover:border-blue-400"
        >
          <h3 className="font-semibold text-lg text-slate-800 mb-4">
            {category.title}
          </h3>
          <ul className="space-y-2 text-sm text-slate-600">
            {category.items.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Categories;
