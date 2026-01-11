import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";

const tasks = [
  {
    _id: "695b022c32617f98184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача в 10:00 завтра",
    type: "appointment",
    date: "2026-01-13T22:30:00.000Z",
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
    date: "2026-01-25T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-01T00:13:32.504Z",
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
    date: "2026-02-19T22:30:00.000Z",
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
    date: "2026-01-19T22:30:00.000Z",
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
    date: "2026-01-10T22:30:00.000Z",
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
    date: "2026-01-10T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-04T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "695b022c317f98184e35987643216e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-22T22:30:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-016T00:13:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
  {
    _id: "69445675b022c317f97654328184e35e8",
    owner: "695b016a32617f98184e35df",
    title: "Термин у врача",
    description: "Термин у врача завтра в 10:00",
    type: "appointment",
    date: "2026-01-10T15:59:00.000Z",
    notifications: [],
    address: "Carl-Schurz-Straße 51",
    attendees: [],
    createdAt: "2026-01-11T00:18:32.504Z",
    updatedAt: "2026-01-09T00:13:32.504Z",
  },
];

function getDaysUntil(date) {
  const now = new Date();
  const target = new Date(date);

  const diffMs = target - now;

  if (diffMs <= 0) {
    return { value: 0, unit: "done" };
  }

  const totalMinutes = Math.ceil(diffMs / (1000 * 60));

  if (totalMinutes < 60) {
    if (totalMinutes === 1) {
      return { value: totalMinutes, unit: "minute" };
    }
    return { value: totalMinutes, unit: "minutes" };
  }

  const totalHours = Math.ceil(totalMinutes / 60);

  if (totalHours < 24) {
    if (totalHours === 1) {
      return { value: totalHours, unit: "hour" };
    }
    return { value: totalHours, unit: "hours" };
  }

  const totalDays = Math.ceil(totalHours / 24);
  if (totalDays === 1) {
    return { value: totalDays, unit: "day" };
  }
  return { value: totalDays, unit: "days" };
}

const borderByStatus = (date) => {
  const now = new Date();
  const target = new Date(date);

  const diffMs = target - now;
  const diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) {
    return { border: " border-l-red-400", text: "text-red-500" };
  }
  if (diffDays === 1) {
    return { border: " border-l-orange-400", text: "text-orange-500" };
  }
  if (diffDays <= 7) {
    return { border: " border-l-blue-400", text: "text-blue-500" };
  }
  return { border: "  border-l-green-400", text: "text-green-500" };
};

export const DashboardPage = () => {
  const { openModal } = useOutletContext();
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(Date.now());
    }, 60000); // раз в минуту

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="pt-14">
        <div className=" mx-auto w-[1182px] flex justify-between items-center">
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
        {tasks.length !== 0 ? (
          <ul className="flex flex-wrap gap-5">
            {tasks.map((task) => (
              <li
                onClick={() => openModal({ type: "termin", taskId: task._id })}
                key={task._id}
                className={`flex items-start  border border-black/50
                   rounded-2xl p-4 max-w-[380px] border-l-5 
                  ${borderByStatus(task.date).border}`}
              >
                <div>
                  <svg className="w-30 stroke-3">
                    <use href="/sprite.svg#icon-time-progress" />
                  </svg>
                  <p>До встречи осталось</p>
                  <p>
                    <span
                      className={`text-3xl font-bold
                       ${borderByStatus(task.date).text}`}
                    >
                      {getDaysUntil(task.date).value}{" "}
                      {getDaysUntil(task.date).unit}
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
        ) : (
          <div className="flex flex-col items-center justify-center text-center py-20 text-gray-400">
            <div className="text-6xl mb-6">🗓️</div>

            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              No appointments yet
            </h2>

            <p className="text-sm mb-6">
              Your future schedule will appear here
            </p>
          </div>
        )}
      </section>
    </>
  );
};
