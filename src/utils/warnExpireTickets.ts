import { toast } from "react-toastify";

export const warnExpireTickets = (totalExpireTodayTickets: number) => {
  toast.warn(`${totalExpireTodayTickets} of your tickets will expire today!`, {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    toastId: "warnExpireTickets",
  });
};
