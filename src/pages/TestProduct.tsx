import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function TestProduct() {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const { data, error } = await supabase
      .from("insurance_products")
      .select("*")
      .eq("slug", "home-insurance")
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setProduct(data);
  };

  if (!product) return <p className="p-10">Loading...</p>;

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">{product.title}</h1>
      <p className="mt-3 text-gray-600">{product.short_description}</p>

      <div className="mt-8 border rounded-xl p-5">
        <h2 className="text-2xl font-bold">
          {product.page_content.hero.title}
        </h2>
        <p>{product.page_content.hero.tagline}</p>
        <p>{product.page_content.hero.body1}</p>
      </div>
    </div>
  );
}
