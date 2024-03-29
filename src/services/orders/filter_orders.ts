import AppDataSource from "../../data-source";
import { PurchaseOrdersItems } from "../../entities/purchasse_order_items_entities";
import { IPurchaseOrdersItems } from "../../interface/orders/interface_orders";
import { arrayhistorySchema, historySchemaResult } from "../../schemas/orders_schemas";

export const filterOrdersItemsService = async (
  filter: any
): Promise<IPurchaseOrdersItems[] | any> => {

  const myRepository = AppDataSource.getRepository(PurchaseOrdersItems);

  if (filter) {

    for (const key in filter) {
      
      if(key == "price"){
        
        
        const filterOrders = await myRepository.find({
          where: {
            price: filter.price
          },
          relations: {product:true}
        });

        
        const result = arrayhistorySchema.parse(filterOrders);

        return result

      }else if(key == "quantity"){

        const filterOrders = await myRepository.find({
          where: {
            quantity: filter.quantity
          },
          relations: {product:true}
        });

        const result = arrayhistorySchema.parse(filterOrders);
        
        return result
      }
    }
  }

};
