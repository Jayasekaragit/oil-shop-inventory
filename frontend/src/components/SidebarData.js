import React from 'react'
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import InventoryIcon from '@mui/icons-material/Inventory';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
export const SidebarData = [
    {
        title: "Home",
        icon:<AddHomeWorkIcon/>,
        link:"/cashierDash"
    },
    {
        title: "Inventory",
        icon:<InventoryIcon/>,
        link:"/inventory"
    },
    {
        title: "Sales",
        icon:<MonetizationOnIcon/>,
        link:"/sales"
    },
    {
        title: "Suppliers",
        icon:<LocalShippingIcon/>,
        link:"/suppliers"
    },
    {
        title: "Reports",
        icon:<AutoGraphIcon/>,
        link:"/reports"
    },

]

