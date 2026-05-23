import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { Link } from "react-router-dom";
import { useAdminAuth } from "./auth/AdminAuthContext";

interface Product {
  id: string;
  title: string;
  slug: string;
  short_description: string;
  status: string;
  sort_order: number;
}

export default function ProductsAdmin() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const { logout } = useAdminAuth();

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("insurance_products")
      .select("*")
      .order("sort_order");

    if (error) {
      console.error(error);
    } else {
      setProducts(data || []);
    }

    setLoading(false);
  };

  if (loading) {
    return <div className="p-10">Loading products...</div>;
  }

  const deleteProduct = async (id: string, title: string) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${title}"? This cannot be undone.`,
    );

    if (!confirmDelete) return;

    const { error } = await supabase
      .from("insurance_products")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to delete product");
      return;
    }

    alert("Product deleted successfully");
    fetchProducts();
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#0F2240]">Products CMS</h1>
            <p className="text-slate-500">
              Manage insurance products from Supabase
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/admin/products/new"
              className="inline-flex items-center justify-center bg-[#0F2240] text-white px-5 py-3 rounded-xl font-semibold hover:bg-[#1B3A6B] transition-colors cursor-pointer"
            >
              + Add Product
            </Link>

            <button
              onClick={async () => {
                await logout();
                window.location.href = "/admin/login";
              }}
              className="bg-red-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#0F2240] text-white">
              <tr>
                <th className="text-left px-5 py-4">Product</th>
                <th className="text-left px-5 py-4">Slug</th>
                <th className="text-left px-5 py-4">Status</th>
                <th className="text-right px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b last:border-b-0">
                  <td className="px-5 py-4">
                    <p className="font-semibold text-[#0F2240]">
                      {product.title}
                    </p>
                    <p className="text-slate-500 text-xs">
                      {product.short_description}
                    </p>
                  </td>

                  <td className="px-5 py-4 text-slate-600">{product.slug}</td>

                  <td className="px-5 py-4">
                    <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      {product.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-right">
                    <div className="flex items-center justify-end gap-4">
                      <Link
                        to={`/admin/products/${product.id}/edit`}
                        className="text-[#185FA5] font-semibold"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => deleteProduct(product.id, product.title)}
                        className="text-red-600 font-semibold"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {products.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="px-5 py-10 text-center text-slate-500"
                  >
                    No products found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
