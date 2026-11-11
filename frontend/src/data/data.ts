import { reactive, watch } from "vue"

export interface Item{
    id: number
    name: string
    description: string
    price: number
}

export interface ItemInBasket{
    id: number
    name: string
    description: string
    price: number
    count: number 
}

export const products: Item[] = [
  {
    id: 1,
    name: "Имя товара",
    description: "Описание товара",
    price: 1235
  },

  {
    id: 2,
    name: "Имя товара 2",
    description: "Описание товара 2",
    price: 1000
  },

  {
    id: 3,
    name: "Имя товара 3",
    description: "Описание товара 3",
    price: 12000
  },

  {
    id: 4,
    name: "Имя товара 4",
    description: "Описание товара 4",
    price: 6000
  }
]



export const baskets: ItemInBasket[] = reactive([])

watch(baskets, (x) => {
  localStorage.setItem('baskets', JSON.stringify(x))
})

