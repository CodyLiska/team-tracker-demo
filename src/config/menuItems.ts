import { FaUserCog, FaUserFriends, FaUsers, FaGamepad } from "react-icons/fa";

export const menuItems = [
  {
    title: "Coach Dashboard",
    icon: FaUserCog,
    description: "Manage teams, track performance, and plan training sessions",
    path: "/coach",
    gradient: "linear(to-r, blue.400, blue.600)",
  },
  {
    title: "Parent Dashboard",
    icon: FaUserFriends,
    description:
      "Monitor your child's progress and stay updated with team activities",
    path: "/parent",
    gradient: "linear(to-r, green.400, green.600)",
  },
  {
    title: "Players",
    icon: FaUsers,
    description:
      "View detailed player profiles, statistics, and development tracking",
    path: "/players",
    gradient: "linear(to-r, purple.400, purple.600)",
  },
  {
    title: "Games",
    icon: FaGamepad,
    description: "Access match schedules and results",
    path: "/games",
    gradient: "linear(to-r, orange.400, orange.600)",
  },
];
