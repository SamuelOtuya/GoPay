import { useState } from "react";
import { supabase } from "../../lib/supabase";

interface Props {
  value: string;
  onChange: (url: string) => void;
  folder?: string;
}

export default function ImageUploadField({
  value,
  onChange,
  folder = "products",
}: Props) {
  const [uploading, setUploading] = useState(false);

  const uploadImage = async (file: File) => {
    setUploading(true);

    const fileExt = file.name.split(".").pop();
    const fileName = `${folder}/${Date.now()}-${Math.random()
      .toString(36)
      .substring(2)}.${fileExt}`;

    const { error } = await supabase.storage
      .from("product-images")
      .upload(fileName, file);

    if (error) {
      console.error(error);
      alert("Image upload failed");
      setUploading(false);
      return;
    }

    const { data } = supabase.storage
      .from("product-images")
      .getPublicUrl(fileName);

    onChange(data.publicUrl);
    setUploading(false);
  };

  return (
    <div className="space-y-3">
      {value && (
        <img
          src={value}
          alt="Preview"
          className="w-full h-48 object-cover rounded-xl border"
        />
      )}

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Image URL"
        className="w-full border rounded-xl px-4 py-3"
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) uploadImage(file);
        }}
        className="w-full border rounded-xl px-4 py-3"
      />

      {uploading && (
        <p className="text-sm text-slate-500">Uploading image...</p>
      )}
    </div>
  );
}
