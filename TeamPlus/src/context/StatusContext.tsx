import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Status } from "../types/status";

interface StatusContextType {
  statuses: Status[];
  addStatus: (status: Status) => void;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

const STORAGE_KEY = "TEAMPLUS_STATUSES";

export function StatusProvider({children}: {children: ReactNode}){
  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    loadStatuses();
  }, []);

  const loadStatuses = async () => {
    const data = await AsyncStorage.getItem(STORAGE_KEY);
    if (data) {
      setStatuses(JSON.parse(data));
    }
  };

  const addStatus = async (status: Status) => {
    const updated = [status, ...statuses];
    setStatuses(updated);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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