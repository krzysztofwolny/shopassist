import { FC } from 'react';
import ShopDataInterface from './shopDataInterface';

export default interface FlatListGridProps {
    FirstItem: React.FC<FC>;
    Item: React.FC<ShopDataInterface>;
    data?: ShopDataInterface[] | [];
};