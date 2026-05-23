import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Category {
  id: string;
  title: string;
  slug: string;
  description: string;
}

export default function TestSupabase() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data, error } = await supabase
      .from("insurance_categories")
      .select("*")
      .order("sort_order");

    if (error) {
      console.error(error);
    } else {
      setCategories(data);
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>

      <div className="space-y-4">
        {categories.map((category) => (
          <div key={category.id} className="border p-4 rounded-xl">
            <h2 className="text-xl font-semibold">{category.title}</h2>

            <p>{category.description}</p>

            <p className="text-sm text-gray-500">Slug: {category.slug}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
