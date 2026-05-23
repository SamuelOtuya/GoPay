import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

interface Appointment {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  insurance_product: string;
  preferred_date: string;
  preferred_time: string;
  message: string;
  status: string;
  created_at: string;
}

export default function AppointmentsAdmin() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
      alert("Failed to load appointments");
    } else {
      setAppointments(data || []);
    }

    setLoading(false);
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase
      .from("appointments")
      .update({ status })
      .eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to update status");
      return;
    }

    fetchAppointments();
  };

  const deleteAppointment = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this appointment?",
    );

    if (!confirmDelete) return;

    const { error } = await supabase.from("appointments").delete().eq("id", id);

    if (error) {
      console.error(error);
      alert("Failed to delete appointment");
      return;
    }

    fetchAppointments();
  };

  if (loading) {
    return <div className="p-10">Loading appointments...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-50 p-8 pt-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#0F2240]">
            Appointment Requests
          </h1>
          <p className="text-slate-500">
            View and manage appointments submitted from the website.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-[#0F2240] text-white">
              <tr>
                <th className="text-left px-5 py-4">Client</th>
                <th className="text-left px-5 py-4">Contact</th>
                <th className="text-left px-5 py-4">Purpose</th>
                <th className="text-left px-5 py-4">Schedule</th>
                <th className="text-left px-5 py-4">Status</th>
                <th className="text-right px-5 py-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {appointments.map((item) => (
                <tr key={item.id} className="border-b last:border-b-0">
                  <td className="px-5 py-4 align-top">
                    <p className="font-semibold text-[#0F2240]">
                      {item.full_name}
                    </p>
                    <p className="text-slate-400 text-xs">
                      {new Date(item.created_at).toLocaleString()}
                    </p>
                  </td>

                  <td className="px-5 py-4 align-top text-slate-600">
                    <p>{item.phone}</p>
                    <p className="text-xs">{item.email || "No email"}</p>
                  </td>

                  <td className="px-5 py-4 align-top text-slate-600">
                    <p className="font-medium">{item.insurance_product}</p>
                    <p className="text-xs text-slate-400">{item.message}</p>
                  </td>

                  <td className="px-5 py-4 align-top text-slate-600">
                    <p>{item.preferred_date}</p>
                    <p className="text-xs">{item.preferred_time}</p>
                  </td>

                  <td className="px-5 py-4 align-top">
                    <select
                      value={item.status}
                      onChange={(e) => updateStatus(item.id, e.target.value)}
                      className="border rounded-lg px-3 py-2 text-xs"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="confirmed">Confirmed</option>
                      <option value="closed">Closed</option>
                    </select>
                  </td>

                  <td className="px-5 py-4 align-top text-right">
                    <button
                      onClick={() => deleteAppointment(item.id)}
                      className="text-red-600 font-semibold"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}

              {appointments.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-slate-500"
                  >
                    No appointment requests found.
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
