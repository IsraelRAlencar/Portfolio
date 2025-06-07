'use client'

import { createContext, useContext } from "react";

type SiteInfo = {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    location: string;
};

const siteInfo: SiteInfo = {
    email: "israelalencardev@gmail.com",
    phone: "+55 (67) 99935-3697",
    github: "https://github.com/IsraelRAlencar",
    linkedin: "https://www.linkedin.com/in/israel-alencar/",
    location: "Campo Grande, Brazil"
};

const SiteInfoContext = createContext<SiteInfo>(siteInfo);

export function SiteInfoProvider({ children }: { children: React.ReactNode }) {
    return (
        <SiteInfoContext.Provider value={siteInfo}>
            {children}
        </SiteInfoContext.Provider>
    )
}

export function useSiteInfo() {
    return useContext(SiteInfoContext);
}