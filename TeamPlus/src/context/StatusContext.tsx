import { createContext, ReactNode, useContext, useState } from "react";
import { Status } from "../types/status";

interface StatusContextType {
    statuses: Status[];
    addStatus: (status: Status) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export function StatusProvider({children}: {children: ReactNode}){
    const [statuses, setStatuses] = useState<Status[]>([]);

    const addStatus = (status: Status) => {
        setStatuses((prev) => [status, ...prev]);
    };

    return(
        <StatusContext.Provider value={{statuses, addStatus}}>
            {children}
        </StatusContext.Provider>
    )
}

export function useStatus(){
    const context = useContext(StatusContext);

    if(!context){
        throw new Error("useStatus must be used within StatusProvider");
    }
    return context;
}