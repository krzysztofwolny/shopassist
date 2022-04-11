import productTypesInterface from "./productTypesInterface";

export default interface ShopDataInterface {
    itemId: number; 
    itemName: string;
    departments: productTypesInterface[] | []
};