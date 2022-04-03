import ShopDataInterface from "../../dataInterfaces/shopDataInterface";

export const addShop = (newShopData: ShopDataInterface) => (
    {
      type: 'ADD_SHOP',
      payload: newShopData,
    }
  );
  