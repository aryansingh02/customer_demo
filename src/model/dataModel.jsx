// @flow

export type ItemStatus = "IN_STOCK" | "OUT_OF_STOCK";

export type Money = {
  amount: number,
  currency?: string,
};

export type MenuItemVariation = {
  _id: string,
  name: string,
  price: Money,
};

export type MenuItemModifierOption = {
  _id: string,
  name: string,
  price: Money,
};

export type MenuItemModifier = {
  _id: string,
  name: string,
  minimum?: number,
  maximum?: number,
  options: Array<MenuItemModifierOption>,
};

export type MenuItem = {
  _id: string,
  name: string,
  description: string,
  imagePaths: Array<string>,
  allergen?: Array<string>,
  spiceLevel?: number,
  calories?: number,
  categories?: Array<string>,
  status: ItemStatus,
  variations: Array<MenuItemVariation>,
  modifier: Array<MenuItemModifier>,
  minimumModifiers: number,
  maximumModifiers: number,
};

export type Menu = {
  _id: string,
  name: string,
  menuItems: Array<MenuItem>,
};

export type Tag = {
  _id: string,
  name: string,
  type: string,
  iconImagePath: string,
};

export type SquareInfo = {
  locationId: string,
};

export type CloverInfo = {
  apiAccessKey: string,
};
export type PointOfSalType = "SQUARE" | "CLOVER" | "TOAST" | "REVEL";
export type PointOfSaleInfo = {
  pointOfSaleAuthInfoId: string,
  type: PointOfSalType,
  squareInfo: SquareInfo,
  cloverInfo: CloverInfo,
};

export type DayOfTheWeek =
  | "MON"
  | "TUE"
  | "WED"
  | "THU"
  | "FRI"
  | "SAT"
  | "SUN";

export type BusinessHoursPeriod = {
  dayOfTheWeek: DayOfTheWeek,
  // Specified in local time using partial-time RFC3339 format HH:MM:SS
  startTime: string,
  // Specified in local time using partial-time RFC3339 format HH:MM:SS
  endTime: string,
};

export type BusinessHours = {
  businessHoursPeriod: Array<BusinessHoursPeriod>,
};

export type Stall = {
  _id: string,
  name: string,
  eventId?: string,
  storeId: string,
  menu: Menu,
  // Fields inherited from Store.
  description: string,
  tag: Array<Tag>,
  logoImagePath: string,
  bannerImagePath: string,
  expenseLevel: number,
  reviews?: number,
  rating?: number,
  pointOfSaleInfo: PointOfSaleInfo,
  businessHours: BusinessHours,
};

export type TrendingItem = {
  stallId: string,
  menuItemId: string,
};

export type FilterObject = {
  cuisine: string,
  expenseLevel: number,
};

export type Event = {
  _id: string,
  name: string,
  description?: string,
  // TODO: Change name in the following line from Store to Stall.
  stalls: Array<Stall>,
  logoImagePath: string,
  trendingItems: Array<TrendingItem>,
};

export type CartModifier = {
  _id: string,
  name: string,
  // List of Modifier option values chosen from Array<MenuItemModifierOption>
  // from the corresponding MenuItemModifier.
  chosenValue: Array<MenuItemModifierOption>,
};

export type Checkout = {
  phoneNumber: string,
};

export type CartItem = {
  itemId: string,
  name: string,
  // Price will be equal to the chosen MenuItemVariation.
  selectedVariation: MenuItemVariation,
  // List of Modifiers with at least one selection from Array<MenuItemModifier>
  modifiers: Array<CartModifier>,
};

export type LineItem = {
  _id: string,
  cartItem: CartItem,
  count: number,
  // Free form note.
  note: string,
  // Price of one cartItem inclusive of all the modifications and variations.
  price: Money,
};

export type Cart = {
  stallId: string,
  storeId: string,
  lineItems: Array<LineItem>,
  // Free form note.
  note: string,
  requestedEta: number,
  requestedDynamicFee: Money,
};

export type OrderStatus =
  | "RECEIVED"
  | "PREPARING"
  | "READY"
  | "CANCELLED"
  | "COMPLETED";

// TODO: expand Order schema as needed.

export type UserInfo = {
  phoneNumber: string,
  orders: Array<Order>,
};

export type FullFillmentInfo = {
  type: string,
  customer: UserInfo,
};
export type OrderItem = {
  name: string,
  quantity: number,
  totalMoney: Money,
};

export type Update = {
  timestamp: number,
  type: string,
  newStatus: string,
  oldStatus: string,
};

export type Invoice = {
  subTotal: Money,
  surgeFee: Money,
  tip: Money,
  tax: Money,
  total: Money,
};

export type Order = {
  _id: string,
  status: OrderStatus,
  fulfillmentInfor: FullFillmentInfo,
  invoice: Invoice,
  lineItems: Array<OrderItem>,
  updates: Array<Update>,
  paymentMethod?: any,
  creationTimestamp: number,
};

export type DynamicSetting = {
  requestedEta: number,
  requestedDynamicFee: number,
};
