import React from 'react';
import * as FaIcons from 'react-icons/fa' ;
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

const SidebarData = [
    {
        title: "Dashboard",
        path: "/",
        icon: <AiIcons.AiFillHome />
    },
    {
        title: "Customer",
        path: "/Customer",
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: "Machine",
        path: "/Machine",
        icon: <FaIcons.FaCartPlus />
    },
    {
        title: "Reports",
        icon: <AiIcons.AiFillHome />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        subnav: [
            {
                title: "Shift Rule",
                path: "/Reports/ShiftRule",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Transaction Rule",
                path: "/Reports/TransactionRule",
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: "Settings",
        icon: <AiIcons.AiFillHome />,
        iconOpen: <RiIcons.RiArrowUpSFill />,
        iconClose: <RiIcons.RiArrowDownSFill />,
        subnav: [
            {
                title: "Comps",
                path: "/Settings/Comps",
                icon: <IoIcons.IoIosPaper />
            },
            {
                title: "Kiosk",
                path: "/Settings/Kiosk",
                icon: <IoIcons.IoIosPaper />
            },
        ]
    },
    {
        title: "Lock",
        path: "/Lock",
        icon: <IoIcons.IoIosPaper />
    }
];

export default SidebarData