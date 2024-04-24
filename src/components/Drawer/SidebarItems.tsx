import { DrawerItem } from '@/types/common';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import {
      Box,
      Divider,
      List,
      ListItem,
      ListItemButton,
      ListItemIcon,
      ListItemText,
      Typography,
    } from "@mui/material";
type TSidebar={
      item:DrawerItem;
      index:number;
}
const SidebarItems = ({item,index}:TSidebar) => {
      const linkPath=`/dashboard${item.path}`;
      const pathName=usePathname()
      return (
            <Link href={linkPath}>
                  
            <ListItem key={index}
             disablePadding
             sx={{
                  ...(pathName === linkPath
                    ? { borderRight: "3px solid blue", "& svg": { color: "blue" },my:2 }
                    : {}),
                    
                }}
             >
              <ListItemButton>
                <ListItemIcon>
                  {item.icon&&<item.icon/>}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
         
            </Link>
      );
};

export default SidebarItems;