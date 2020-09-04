// @flow
import React from "react";
import config from "react-global-configuration";
import NumberFormat from "react-number-format";
import {format} from "date-fns";
import moment from "moment";
import type {
  Cart,
  CartItem,
  Event,
  FilterObject,
  LineItem,
  Menu,
  MenuItem,
  Money,
  Order,
  Stall,
  Tag,
} from "./model/dataModel";

export const GenerateCurrenyNumber = (price: Money) => {
  return (
    <NumberFormat
      value={price.amount / 100}
      decimalScale={2}
      fixedDecimalScale={true}
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
      renderText={(value) => <span>{value}</span>}
    />
  );
};

export const CalculateCartLength = (cart: Cart) => {
  let count = 0;
  cart.lineItems.map((item) => {
    count += item.count;
  });
  return count;
};

const SearchStringMatch = (needle: string, haystack: string): boolean => {
  return haystack.toLowerCase().indexOf(needle.toLowerCase()) !== -1;
};

const IsMenuMatch = (menu: Menu, searchQuery: string) => {
  for (const menuItem: MenuItem of menu.menuItems) {
    if (
      SearchStringMatch(searchQuery, menuItem.name) ||
      SearchStringMatch(searchQuery, menuItem.description)
    ) {
      return true;
    }
  }
  return false;
};

export const CalculateWindowWidth = () => {
  if (window.innerWidth <= 600) {
    return window.innerWidth;
  } else {
    return 600;
  }
};

export const IsTagMatch = (searchQuery: string, tag: Array<Tag>) => {
  if (Array.isArray(tag)) {
    for (let i = 0; i < tag.length; i++) {
      if (tag[i].name.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1) {
        return true;
      }
    }
    return false;
  }
};

export const Search = (eventState: Event, searchQuery: string) => {
  let searchedStalls: Array<Stall> = [];
  for (const stall: Stall of eventState.stalls) {
    if (
      searchQuery.length === 0 ||
      SearchStringMatch(searchQuery, stall.name) ||
      SearchStringMatch(searchQuery, stall.description) ||
      IsTagMatch(searchQuery, stall.tag) ||
      IsMenuMatch(stall.menu, searchQuery)
    ) {
      searchedStalls.push(stall);
    }
  }
  return searchedStalls;
};

export const TagFilter = (stalls: Array<Stall>, activeTagFilterId: string) => {
  let searchedStalls: Array<Stall> = [];
  for (const stall: Stall of stalls) {
    if (
      !activeTagFilterId ||
      activeTagFilterId.length === 0 ||
      stall.tag.findIndex((tag) => tag._id === activeTagFilterId) >= 0
    ) {
      searchedStalls.push(stall);
    }
  }
  return searchedStalls;
};

export const FormatDateTime = (timestamp: number, verbose: boolean = false) => {
  let d = new Date(timestamp);
  if (verbose) {
    return format(d, "PP");
  }
  return d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
};

export const ExtractTime = (timestamp: number) => {
  let d = new Date(timestamp);
  return format(d, "p");
};

export const ActiveThemeStyleSheet = () => {
  return config.get("theme_config")[config.get("active_theme")]["style_sheet"];
};

export const FindMenuItem = (menu: Menu, id: string): MenuItem | void => {
  if (menu && menu.menuItems) {
    return menu.menuItems.find((item) => item._id === id);
  }
};

export const FindStall = (event: Event, id: string): Stall | null => {
  if (event && event.stalls) {
    const stallIndex: number = event.stalls.findIndex(
      (stall) => stall._id === id
    );
    if (stallIndex >= 0) {
      return event.stalls[stallIndex];
    }
  }
  return null;
};

export const FindLineItem = (
  cart: Cart,
  lineItemId: string
): LineItem | null => {
  if (cart && cart.lineItems) {
    const itemIndex: number = cart.lineItems.findIndex(
      (lineItem) => lineItem._id === lineItemId
    );
    if (itemIndex >= 0) {
      return cart.lineItems[itemIndex];
    }
  }
  return null;
};

export const GenerateWaitTime = (time: number) => {
  return Math.round(time / (1000 * 60));
};

export const FindOrder = (orders: Array<Order>, orderId: string) => {
  const itemIndex: number = orders.findIndex((order) => order._id === orderId);
  return itemIndex;
};

export const DeleteLineItemFromCart = (cart: Cart, lineItemId: string) => {
  if (cart && cart.lineItems) {
    const itemIndex: number = cart.lineItems.findIndex(
      (item) => item._id === lineItemId
    );
    if (itemIndex >= 0) {
      cart.lineItems.splice(itemIndex, 1);
    }
  }
};

export const GenerateExpenseLevel = (expenseLevel: number) => {
  let i = expenseLevel;
  let str = "";
  while (i > 0) {
    str += "$";
    i--;
  }
  return str;
};

const FilterbyTag = (stalls: Array<Stall>, tag: string): Array<Stall> => {
  return stalls.filter((stall: Stall) => {
    const validTags = stall.tag.filter((item: Tag) => {
      if (item.name === tag) {
        return true;
      }
    });
    return validTags.length > 0;
  });
};

const FilterByExpenseLevel = (
  stalls: Array<Stall>,
  price: number
): Array<Stall> => {
  return stalls.filter((stall) => {
    if (typeof parseInt(price) === "number") {
      return stall.expenseLevel === parseInt(price);
    }
  });
};

export const ModifyTime = (time: string) => {
  if (time) {
    let timeArr = time.split(":");
    if (timeArr[0] >= "12") {
      if (timeArr[0] === "12") {
        return `${timeArr[0]}:${timeArr[1]} PM`;
      }
      return `${parseInt(timeArr[0]) - 12}:${timeArr[1]} PM`;
    }
    return `${timeArr[0]}:${timeArr[1]} AM`;
  }
  return "";
};

export const CheckValidTime = (businessTime: any) => {
  if (businessTime) {
    var today = new Date();
    var time = today;
    // today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var startTime = moment(businessTime.startTime, "HH:mm:ss");
    var endTime = moment(businessTime.endTime, "HH:mm:ss");
    if (moment(time).isAfter(startTime) && moment(time).isBefore(endTime)) {
      return true;
    }
    return false;
  }
};

export const FilterStalls = (
  stalls: Array<Stall>,
  filterObject: FilterObject,
  sortType: string
) => {
  let filteredStalls = stalls;
  if (filterObject.cuisine) {
    filteredStalls = FilterbyTag(filteredStalls, filterObject.cuisine);
  }
  if (filterObject.expenseLevel) {
    filteredStalls = FilterByExpenseLevel(
      filteredStalls,
      filterObject.expenseLevel
    );
  }
  if (sortType !== "") {
    let copyStalls = [...filteredStalls];
    if (sortType === "Recommended") {
    }
    if (sortType === "Popular") {
      copyStalls.sort(function (a: Stall, b: Stall) {
        if (a && b && a.reviews && b.reviews) {
          return b.reviews - a.reviews;
        }
        return 0;
      });
    }
    if (sortType === "Rating") {
      copyStalls.sort(function (a: Stall, b: Stall) {
        if (a && b && a.rating && b.rating) {
          return b.rating - a.rating;
        }
        return 0;
      });
    }
    return copyStalls;
  }
  return filteredStalls;
};

export const CalculateObjectNonEmptyLength = (obj: any) => {
  return Object.values(obj).filter((value) => !!value).length;
};

export const CreateCategories = (menuItems: Array<MenuItem>) => {
  let catObj = {};
  menuItems.map((menuItem: MenuItem) => {
    if (menuItem && menuItem.categories && menuItem.categories.length > 0) {
      menuItem.categories.map((category) => {
        if (catObj.hasOwnProperty(category)) {
          catObj[category].push(menuItem);
        } else {
          catObj[category] = [];
          catObj[category].push(menuItem);
        }
      });
    } else {
      if (catObj.hasOwnProperty("Misc")) {
        // $FlowFixMe
        catObj["Misc"].push(menuItem);
      } else {
        // $FlowFixMe
        catObj["Misc"] = [];
        // $FlowFixMe
        catObj["Misc"].push(menuItem);
      }
    }
  });
  // If there is only one category then rename category to "Menu" itself.
  const keys = Object.keys(catObj);
  if (keys.length === 1) {
    catObj = {
      Menu: catObj[keys[0]],
    };
  }
  return catObj;
};

export const UpdateItemInCart = (cart: Cart, lineItem: LineItem) => {
  if (cart && cart.lineItems) {
    const itemIndex: number = cart.lineItems.findIndex(
      (item) => item._id === lineItem._id
    );
    if (lineItem.count === 0) {
      cart.lineItems.splice(itemIndex, 1);
    } else {
      cart.lineItems.splice(itemIndex, 1, lineItem);
    }
  }
};

export const GetExpenseLevels = (stalls: Array<Stall>) => {
  let priceObj = {};
  stalls.map((stall: Stall) => {
    if (stall.expenseLevel) {
      if (priceObj.hasOwnProperty(stall.expenseLevel)) {
        priceObj[stall.expenseLevel].push(stall);
      } else {
        priceObj[stall.expenseLevel] = [];
        priceObj[stall.expenseLevel].push(stall);
      }
    }
  });
  return priceObj;
};

export const compareValues = (key: string) => {
  return function innerSort(a: any, b: any) {
    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
      return 0;
    }
    let comparison = 0;
    if (a[key] > b[key]) {
      comparison = 1;
    } else if (a[key] < b[key]) {
      comparison = -1;
    }
    return comparison;
  };
};

export function truncateString(str: string, num: number) {
  if (!str) {
    return str;
  }
  // If the length of str is less than or equal to num
  // just return str--don't truncate it.
  if (str.length <= num) {
    return str;
  }
  // Return str truncated with '...' concatenated to the end of str.
  return str.slice(0, num) + "...";
}

export const findTag = (tagType: string, tags: Array<Tag>) => {
  if (Array.isArray(tags)) {
    const cuisineTag = tags.find((tag) => tag.type === "CUISINE");
    if (cuisineTag) {
      return cuisineTag.name;
    }
    return "";
  }
};

export function CalculateLineItemTotal(cartItem: CartItem) {
  let subTotal = cartItem.selectedVariation.price.amount;
  if (cartItem.modifiers) {
    cartItem.modifiers.forEach((modGroup) => {
      modGroup.chosenValue.forEach((modValue) => {
        subTotal += modValue.price.amount;
      });
    });
  }
  return {
    amount: subTotal,
    currency: cartItem.selectedVariation.price.currency,
  };
}

export async function CalculateInvoice(
  cart: Cart,
  requestedTipPercent: number = 0.0
): Promise<any> {
  const response = await fetch(config.get("backend") + "/order/invoice", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      cart: cart,
    }),
  });
  return await response.json();
}

export async function getEvent(eventId: string) {
  const response = await fetch(config.get("backend") + "/event?id=" + eventId);
  return await response.json();
}

export async function getStall(stallId: string) {
  const response = await fetch(config.get("backend") + "/stall/" + stallId);
  return await response.json();
}

export function getActiveTags(event: Event) {
  let activeTagMap = {};
  const duplicatedTags = event.stalls.map((stall) => stall.tag).flat();
  for (const tag of duplicatedTags) {
    activeTagMap[tag._id] = tag;
  }
  return Object.values(activeTagMap);
}

export function loadScript(scriptSource: string, callback: any) {
  let scriptLoad = document.createElement("script");
  scriptLoad.src = scriptSource;
  scriptLoad.type = "text/javascript";
  scriptLoad.async = false;
  scriptLoad.onload = callback;
  document.getElementsByTagName("head")[0].appendChild(scriptLoad);
}
