import {FiUser, FiSettings, FiLogOut} from "react-icons/fi"
import {BiCreditCard, BiDetail, BiHomeCircle} from "react-icons/bi"
import {VscCalendar} from "react-icons/vsc"
import {HiOutlineChatAlt2} from "react-icons/hi"
import {FaRegHospital, FaRegUserCircle, FaUserMinus} from "react-icons/fa"
import { RiDashboard2Fill } from "react-icons/ri";
import { IoReceiptOutline } from "react-icons/io5"

export const user_menu =  [
    {
        icon : FiUser,
        content : "Profile"
    },
    {
        icon : FiSettings,
        content : "Settings"
    },
    {
       icon : FiLogOut,
        content: "Logout"
    } 
]

export const appoint = [
    {
        name  :"Dr Kingsley Orile"
    }
]

const MENU_OPTIONS = [
{
    name: "Dashboard",
    icon: BiHomeCircle,
    url: "/",
},
{
    name: "Users",
    icon: FaUserMinus,
    url: "#",
    subItems: [
    {
        name: "Individual Users",
        url: "/users/claims-report",
    },
    {
        name: "Companies",
        url: "#",
    },
    {
        name: "Healthcare Providers",
        url: "#",
    },
    {
        name: "Indepentent Doctors",
        url: "#",
    },
    ],
},
{
    name: "Chat",
    icon: HiOutlineChatAlt2,
    url: "#",
},
{
    name: "Claims",
    icon: IoReceiptOutline,
    url: "#",
    subItems: [
    {
        name: "Healthcare Providers",
        url: "/health-claims/healthProvide",
    },
    {
        name: "Telemedicine",
        url: "#",
    }
    ],
},
{
    name: "Payment",
    icon: BiCreditCard,
    url: "#",
    subItems: [
    {
        name: "Subscription Payment",
        url: "/payments/subs-payment",
    },
    {
        name: "Claims Payment",
        url: "/payments/claims-payment",
    },
    {
        name: "Escrow Payment",
        url: "#",
    },
    {
        name: "Manage Subscription",
        url: "/",
    },
    ],
},
{
    name: "Appointments",
    icon: VscCalendar,
    url: "#",
    subItems: [
    {
        name: "Hospitals",
        url: "/appointments/hospital-appoint",
    },
    {
        name: "Telemedicine",
        url: "/",
    },
    ],
},
{
    name: "Recommentations",
    icon: BiDetail,
    url: "#",
},
{
    name: "Account Setting",
    icon: FaRegUserCircle,
    url: "/account-setting/profile",
}
];

function makeMenuLevel(options, depth = 0){
  return options.map((option, idx) => ({
    ...option,
    id: depth === 0 ? idx.toString() : `${depth}.${idx}`,
    depth,
    subItems:
      option.subItems && option.subItems.length > 0
        ? makeMenuLevel(option.subItems, depth + 1)
        : undefined,
  }));
}

export const MENU_ITEMS = makeMenuLevel(MENU_OPTIONS);
