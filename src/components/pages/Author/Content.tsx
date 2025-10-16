import { useAppSelector } from "../../../app/hooks";
import css from "./author.module.css";

export default function AuthorContent() {
  const { userDetails } = useAppSelector((state) => state.user);

  // dummy data
  const stats = [
    { title: "Total Polls", value: 12 },
    { title: "Active Polls", value: 5 },
    { title: "Pending Polls", value: 7 },
    { title: "Events Created", value: 3 },
  ];
  console.log(userDetails);
  return (
    <div className={css.authorContent}>
      <h2 className="text-xl font-semibold mb-4">Author Dashboard</h2>

      {/* User Info */}
      <div className={css.card}>
        <h3 className="text-lg font-bold mb-2">User Information</h3>
        <p>
          <strong>Name:</strong> {userDetails?.displayName || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {userDetails?.email || "N/A"}
        </p>
        <p>
          <strong>Role:</strong> {userDetails?.role || "Author"}
        </p>
      </div>

      {/* Stats Section */}
      <div className={css.cardGrid}>
        {stats.map((item, i) => (
          <div key={i} className={css.card}>
            <h4 className="text-lg font-semibold">{item.title}</h4>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              {item.value}
            </p>
          </div>
        ))}
      </div>

      {/* Pending List */}
      <div className={css.card} style={{ marginTop: "2rem" }}>
        <h3 className="text-lg font-bold mb-2">Pending Polls</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Local Election Poll (Awaiting Approval)</li>
          <li>Public Opinion on Budget 2025</li>
          <li>Festival Safety Awareness Poll</li>
        </ul>
        <button className={css.btn}>View All Pending</button>
      </div>
    </div>
  );
}
