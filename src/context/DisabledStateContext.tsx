import React, { createContext, useContext, useState, ReactNode } from "react";
import { DisabledStateContextType } from "../interface/character";

const disabledStateContext = createContext<
  DisabledStateContextType | undefined
>(undefined);

export const useDisabledState = () => {
  const context = useContext(disabledStateContext);
  if (!context) {
    throw new Error(
      "useDisabledState must be used within a DisabledStateProvider"
    );
  }
  return context;
};
export const DisabledStateProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDisabled, setIsDisabled] = useState<Record<number, boolean>>({});

  return (
    <disabledStateContext.Provider value={{ isDisabled, setIsDisabled }}>
      {children}
    </disabledStateContext.Provider>
  );
};
