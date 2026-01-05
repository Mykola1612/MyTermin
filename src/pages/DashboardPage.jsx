import { useOutletContext } from "react-router-dom";

const tasks = [
  {
    _id: "695b022c32617f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача в 10:00 завтра",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b32617f98184e358",
    owner: "695b016a32617f98184e35df",
    title: "Термин у ортопеда",
    description: "Термин у ортопеда в 15:00 в четверг",
    type: "appointment",
    date: "2025-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2025-01-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b0227f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у стоматолога",
    description: "Термин у врача в 14:00",
    type: "appointment",
    date: "2026-04-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b022c32617f98188",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача в пятницу",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b032617f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача в понедельник",
    type: "appointment",
    date: "2026-01-18T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b022c32617f981e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача в среду",
    type: "appointment",
    date: "2026-02-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-02-05T00:13:32.504Z",
    updatedAt: "2026-01-05T00:13:32.504Z",
  },
  {
    _id: "695b022c317f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "695b022554445c317f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "695b0234567822c317f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "695b022c317f0875498184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "695b022c317f98184e35987643216e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "69445675b022c317f97654328184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-12T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-05T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
];

function getDaysUntil(date) {
  const now = new Date();
  const target = new Date(date);

  const diffMs = target - now;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return 0;
  }

  return diffDays;
}

const borderByStatus = {
  today:
    "border-l-red-400 border-l-5 shadow-[-6px_0_20px_rgba(239,68,68,0.25)]",
  tomorrow: "border-l-orange-400",
  week: "border-l-blue-400",
  later: "border-l-green-400",
};

export const DashboardPage = () => {
  const { openModal } = useOutletContext();

  return (
    <>
      <section>
        <div className=" mx-auto w-[1164px] flex justify-between pt-16 items-center">
          <ul className="flex gap-x-8">
            <li>
              <button type="button">Today</button>
            </li>
            <li>
              <button type="button">Tomorrow</button>
            </li>
            <li>
              <button type="button">This week</button>
            </li>
            <li>
              <button type="button">All</button>
            </li>
          </ul>
          <button
            onClick={() => openModal({ type: "createtermin" })}
            type="button"
            className="bg-[#F4C550] w-[180px] h-[60px] py-4 text-[18px] text-[#121417] font-black leading-[28px] hover:bg-amber-400 hover:text-amber-50  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-300  "
          >
            Create New Termin +
          </button>
        </div>
      </section>
      <section className="pt-10 pb-10 mx-auto w-[1182px]">
        <ul className="flex flex-wrap gap-5">
          {tasks.length !== 0 &&
            tasks.map((task) => (
              <li
                onClick={() => openModal({ type: "termin", taskId: task._id })}
                key={task._id}
                className={`flex items-start  border border-black/50 rounded-2xl p-4 max-w-[380px] ${borderByStatus["today"]}`}
              >
                <div>
                  <p>До встречи осталось</p>
                  <p>
                    <span className="text-3xl font-bold text-green-500">
                      {getDaysUntil(task.date)}
                    </span>

                    <span className="text-xs uppercase text-gray-400">
                      дней
                    </span>
                  </p>
                </div>
                <div>
                  <h2 className="text-[24px] text-[#121417] font-medium">
                    {task.title}
                  </h2>
                  <p className="text-[16px] text-[#121417] font-medium">
                    {task.date}
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      openModal({ type: "termin", taskId: task._id })
                    }
                  >
                    See more
                  </button>
                </div>
              </li>
            ))}
        </ul>
      </section>
    </>
  );
};
