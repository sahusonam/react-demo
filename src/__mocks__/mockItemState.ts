import { ItemState } from "../redux/items/types";
import { mockItemsList } from "./mockItemsList";

export const mockItemState: ItemState = {
    itemsList: mockItemsList,
    status: 'success'
}