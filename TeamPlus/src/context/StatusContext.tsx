import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Status } from "../types/status";

interface StatusContextType {
  statuses: Status[];
  addStatus: (status: Status) => void;
  deleteStatus: (id: string) => void;
  updateStatus: (status: Status) => void;
  reloadStatuses: () => Promise<void>;
}

const StatusContext = createContext<StatusContextType | undefined>(undefined);

const STORAGE_KEY = "TEAMPLUS_STATUSES";

export function StatusProvider({ children }: { children: ReactNode }) {
  const [statuses, setStatuses] = useState<Status[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await AsyncStorage.getItem(STORAGE_KEY);
        if (data) setStatuses(JSON.parse(data));
      } catch (e) {
        console.error("Load failed", e);
      }
    })();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(statuses));
  }, [statuses]);

  const addStatus = (status: Status) => {
    setStatuses((prev) => [status, ...prev]);
  };

  const deleteStatus = (id: string) => {
    setStatuses((prev) => prev.filter((s) => s.id !== id));
  };

  const updateStatus = (updated: Status) => {
    setStatuses((prev) =>
      prev.map((s) => (s.id === updated.id ? updated : s))
    );
  };

  const reloadStatuses = async() => {
    try{
      const data = await AsyncStorage.getItem(STORAGE_KEY);
      if(data){
        setStatuses(JSON.parse(data));
      }
    }catch(e){
      console.error("reload failed ", e);
      
    }
  }

  return (
    <StatusContext.Provider
      value={{statuses, addStatus, deleteStatus, updateStatus, reloadStatuses}}
    >
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