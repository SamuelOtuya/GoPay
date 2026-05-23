import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/admin/products");
  };

  return (
    <div className="min-h-screen bg-[#0F2240] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white rounded-2xl p-8">
        <h1 className="text-3xl font-bold text-[#0F2240] mb-2">Admin Login</h1>

        <p className="text-slate-500 mb-8">
          Sign in to manage insurance products.
        </p>

        <div className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            className="w-full border rounded-xl px-4 py-3"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border rounded-xl px-4 py-3"
          />

          <button
            onClick={login}
            disabled={loading}
            className="w-full bg-[#0F2240] text-white py-4 rounded-xl font-bold"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}
