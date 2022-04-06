import React from "react";
import FlatListGridProps from '../dataInterfaces/FlatListGridPropsForShops';

export const ShopsScreenContext = React.createContext<FlatListGridProps | undefined>(undefined);