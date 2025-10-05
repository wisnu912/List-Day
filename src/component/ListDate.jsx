import React from "react";

const ListDate = ({ Jam }) => {
  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-lg font-semibold mb-4">Daftar Jam</h2>
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 border border-gray-300">No</th>
            <th className="px-4 py-2 border border-gray-300">Shift</th>
            <th className="px-4 py-2 border border-gray-300">Jam Masuk</th>
            <th className="px-4 py-2 border border-gray-300">Jam Pulang</th>
          </tr>
        </thead>
        <tbody>
          {Jam.length === 0 ? (
            <tr>
              <td
                colSpan="4"
                className="text-center px-4 py-3 text-gray-500"
              >
                Belum ada data
              </td>
            </tr>
          ) : (
            Jam.map((item, index) => (
              <tr key={item.id} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300 text-center">
                  {index + 1}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {item.shifName}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(item.jamMasuk).toLocaleString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {new Date(item.jamPulang).toLocaleString("id-ID", {
                    weekday: "long",
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ListDate;
