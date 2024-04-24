
import Dashboard from "@mui/icons-material/Dashboard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import MedicalInformationIcon from "@mui/icons-material/MedicalInformation";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RateReviewIcon from "@mui/icons-material/RateReview";
import EditNoteIcon from "@mui/icons-material/EditNote";
import PaymentsIcon from "@mui/icons-material/Payments";

const DrawerItems = () => {
  const Menus = [
    {
      title: "Dashboard",
      path: ``,
      icon: DashboardIcon,
    },
    {
      title: "Specialties",
      path: `/specialties`,
      icon: FolderSpecialIcon,
    },
    {
      title: "Doctors",
      path: `/doctors`,
      icon: MedicalInformationIcon,
    },
    {
      title: "Schedules",
      path: `/schedules`,
      icon: CalendarMonthIcon,
    },
    {
      title: "Appointments",
      path: `/appointments`,
      icon: DateRangeIcon,
    },
    {
      title: "Reviews",
      path: `/reviews`,
      icon: RateReviewIcon,
    },
  ];
  return [...Menus];
};

export default DrawerItems;
