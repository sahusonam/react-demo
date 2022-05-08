
export interface ItemState {
    itemsList: Item[],
    status: string
}

export interface Item {
    id: number,
    task: string,
    status: string
}

