import {createSlice, PayloadAction} from "@reduxjs/toolkit";

let initialState: any = {
  name: "",
  phone: "",
  orders: [
    {
      _id: "5f26492ea88b9261201f3aa0",
      creationTimestamp: 1596344622000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8b1",
          name: "Cheeseburger",
          totalMoney: {
            amount: 1198,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8af",
            name: "Large",
            price: {
              amount: 1198,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da752",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74e",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f1df74f397eb3ea808da748",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          note: "Blah 1",
        },
      ],
      invoice: {
        subTotal: {
          amount: 2396,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 216,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2612,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596344622391,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596344922000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f2643691cc79a5ceadda657",
      creationTimestamp: 1596343145000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8bd",
          name: "Double Cheeseburger",
          totalMoney: {
            amount: 1132,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8ba",
            name: "Small",
            price: {
              amount: 1119,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74d",
                  name: "Beef",
                  price: {
                    amount: 13,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da748",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          note: "test",
        },
      ],
      invoice: {
        subTotal: {
          amount: 2251,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 203,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2454,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596343145259,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596343445000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263f9bee5e755b5c00822a",
      creationTimestamp: 1596342171000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8b1",
          name: "Cheeseburger",
          totalMoney: {
            amount: 1286,
            currency: "USD",
          },
          quantity: 1,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8af",
            name: "Large",
            price: {
              amount: 1198,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da753",
                  name: "Mustard",
                  price: {
                    amount: 75,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74d",
                  name: "Beef",
                  price: {
                    amount: 13,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
        {
          itemId: "5f1df751397eb3ea808da8ed",
          name: "Berry Patch",
          totalMoney: {
            amount: 480,
            currency: "USD",
          },
          quantity: 1,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8ec",
            name: "Large",
            price: {
              amount: 480,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 1766,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 179,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 223,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2168,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596342171067,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596342471000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263e22bbcdc15adbdaaa52",
      creationTimestamp: 1596341794000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          name: "Potato Wedges",
          totalMoney: {
            amount: 939,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8b4",
            name: "Large",
            price: {
              amount: 718,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da753",
                  name: "Mustard",
                  price: {
                    amount: 75,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74f",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da743",
                  name: "Wheat",
                  price: {
                    amount: 146,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Chicken Tender Bites",
          totalMoney: {
            amount: 1146,
            currency: "USD",
          },
          quantity: 3,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8d0",
            name: "Large",
            price: {
              amount: 1080,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da755",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da745",
                  name: "Multigrain",
                  price: {
                    amount: 66,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 4963,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 447,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 5410,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596341794375,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596342094000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263b09d3eca25ab631c249",
      creationTimestamp: 1596341001000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          name: "Cheeseburger",
          totalMoney: {
            amount: 1263,
            currency: "USD",
          },
          quantity: 1,
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da754",
                  name: "Mayonnaise",
                  price: {
                    amount: 65,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 1263,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 114,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 1377,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596341001864,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596341301000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f26492ea88b9261201f3aa0",
      creationTimestamp: 1596344622000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8b1",
          name: "Cheeseburger",
          totalMoney: {
            amount: 1198,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8af",
            name: "Large",
            price: {
              amount: 1198,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da752",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74e",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f1df74f397eb3ea808da748",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          note: "Blah 1",
        },
      ],
      invoice: {
        subTotal: {
          amount: 2396,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 216,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2612,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596344622391,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596344922000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f2643691cc79a5ceadda657",
      creationTimestamp: 1596343145000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8bd",
          name: "Double Cheeseburger",
          totalMoney: {
            amount: 1132,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8ba",
            name: "Small",
            price: {
              amount: 1119,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74d",
                  name: "Beef",
                  price: {
                    amount: 13,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da748",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          note: "test",
        },
      ],
      invoice: {
        subTotal: {
          amount: 2251,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 203,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2454,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596343145259,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596343445000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263f9bee5e755b5c00822a",
      creationTimestamp: 1596342171000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          itemId: "5f1df751397eb3ea808da8b1",
          name: "Cheeseburger",
          totalMoney: {
            amount: 1286,
            currency: "USD",
          },
          quantity: 1,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8af",
            name: "Large",
            price: {
              amount: 1198,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da753",
                  name: "Mustard",
                  price: {
                    amount: 75,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74d",
                  name: "Beef",
                  price: {
                    amount: 13,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da746",
              name: "Toppings",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da749",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
        {
          itemId: "5f1df751397eb3ea808da8ed",
          name: "Berry Patch",
          totalMoney: {
            amount: 480,
            currency: "USD",
          },
          quantity: 1,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8ec",
            name: "Large",
            price: {
              amount: 480,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da744",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 1766,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 179,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 223,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 2168,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596342171067,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596342471000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263e22bbcdc15adbdaaa52",
      creationTimestamp: 1596341794000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          name: "Potato Wedges",
          totalMoney: {
            amount: 939,
            currency: "USD",
          },
          quantity: 2,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8b4",
            name: "Large",
            price: {
              amount: 718,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da753",
                  name: "Mustard",
                  price: {
                    amount: 75,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da74c",
              name: "Protein",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da74f",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da743",
                  name: "Wheat",
                  price: {
                    amount: 146,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Chicken Tender Bites",
          totalMoney: {
            amount: 1146,
            currency: "USD",
          },
          quantity: 3,
          selectedVariation: {
            _id: "5f1df751397eb3ea808da8d0",
            name: "Large",
            price: {
              amount: 1080,
              currency: "USD",
            },
          },
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da755",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f1df74f397eb3ea808da742",
              name: "Base",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da745",
                  name: "Multigrain",
                  price: {
                    amount: 66,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 4963,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 447,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 5410,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596341794375,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596342094000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
    {
      _id: "5f263b09d3eca25ab631c249",
      creationTimestamp: 1596341001000,
      status: "PREPARING",
      merchantInfo: {
        storeId: "5f1df754397eb3ea808daa04",
        merchantName: "Brix",
        stallId: "5f1df755397eb3ea808daa05",
      },
      lineItems: [
        {
          name: "Cheeseburger",
          totalMoney: {
            amount: 1263,
            currency: "USD",
          },
          quantity: 1,
          modifiers: [
            {
              _id: "5f1df74f397eb3ea808da751",
              name: "Dressing",
              chosenValue: [
                {
                  _id: "5f1df74f397eb3ea808da754",
                  name: "Mayonnaise",
                  price: {
                    amount: 65,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
        },
      ],
      invoice: {
        subTotal: {
          amount: 1263,
          currency: "USD",
        },
        tip: {
          amount: 0,
          currency: "USD",
        },
        tax: {
          amount: 114,
          currency: "USD",
        },
        chargedFee: [
          {
            type: "SKIP_LINE_FEE",
            fee: {
              amount: 0,
              currency: "USD",
            },
          },
        ],
        total: {
          amount: 1377,
          currency: "USD",
        },
      },
      fulfillmentInfo: {
        type: "PICKUP",
        customer: {
          name: "Demo user",
          phone: "+16508618669",
        },
      },
      updates: [
        {
          timestamp: 1596341001864,
          type: "STATUS_CHANGE",
          newStatus: "RECEIVED",
        },
        {
          timestamp: 1596341301000,
          type: "STATUS_CHANGE",
          newStatus: "PREPARING",
          oldStatus: "RECEIVED",
        },
      ],
    },
  ],
  stall: {
    _id: "5f3577a7405bae54c65239b4",
    name: "Forge Pizza",
    eventId: "5f3577a7405bae54c65239b2",
    storeId: "5f3577a7405bae54c65239b3",
    menu: {
      name: "pp2",
      _id: "5f3577a5405bae54c652371a",
      menuItems: [
        {
          name: "Pepperoni",
          description:
            "Freshly baked pizza with mozzarella cheese and pepperoni ",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523719",
              name: "Large",
              price: {
                amount: 1558,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c6523717",
              name: "Small",
              price: {
                amount: 909,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c6523718",
              name: "Regular",
              price: {
                amount: 1299,
                currency: "USD",
              },
            },
          ],
          categories: ["Drink"],
          modifier: [
            {
              _id: "5f3577a3405bae54c6523704",
              name: "Toppings",
              minimum: 1,
              maximum: 5,
              options: [
                {
                  _id: "5f3577a3405bae54c6523705",
                  name: "Onion",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523706",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523707",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523708",
                  name: "Avocado",
                  price: {
                    amount: 9,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523709",
                  name: "Cheese",
                  price: {
                    amount: 152,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c6523700",
              name: "Base",
              minimum: 0,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c6523701",
                  name: "Wheat",
                  price: {
                    amount: 227,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523702",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523703",
                  name: "Multigrain",
                  price: {
                    amount: 115,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c652370f",
              name: "Dressing",
              minimum: 0,
              maximum: 3,
              options: [
                {
                  _id: "5f3577a3405bae54c6523710",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523711",
                  name: "Mustard",
                  price: {
                    amount: 47,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523712",
                  name: "Mayonnaise",
                  price: {
                    amount: 153,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523713",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 1,
          maximumModifiers: 1,
          allergen: ["Contains Milk"],
          calories: 400,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.11.43AM.png"],
          _id: "5f3577a5405bae54c652371b",
        },
        {
          name: "Pronto's Special",
          description:
            "Salami, pepperoni, mushrooms, green peppers, red onions, Italian sausage.",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c652371d",
              name: "Regular",
              price: {
                amount: 1599,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c652371e",
              name: "Large",
              price: {
                amount: 1918,
                currency: "USD",
              },
            },
          ],
          categories: ["Main"],
          modifier: [
            {
              _id: "5f3577a3405bae54c652370a",
              name: "Protein",
              minimum: 0,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c652370b",
                  name: "Beef",
                  price: {
                    amount: 77,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370c",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370d",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370e",
                  name: "Portobello Mushroom",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c6523704",
              name: "Toppings",
              minimum: 2,
              maximum: 5,
              options: [
                {
                  _id: "5f3577a3405bae54c6523705",
                  name: "Onion",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523706",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523707",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523708",
                  name: "Avocado",
                  price: {
                    amount: 9,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523709",
                  name: "Cheese",
                  price: {
                    amount: 152,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 1,
          maximumModifiers: 2,
          allergen: ["Contains Milk"],
          calories: 650,
          spiceLevel: 1,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.34.20AM.png"],
          _id: "5f3577a5405bae54c652371f",
        },
        {
          name: "Vegetarian's Special",
          description:
            "Mushrooms, green peppers, red onions, black olives, tomatoes, garlic.",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523720",
              name: "Small",
              price: {
                amount: 1189,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c6523721",
              name: "Regular",
              price: {
                amount: 1698,
                currency: "USD",
              },
            },
          ],
          modifier: [
            {
              _id: "5f3577a3405bae54c652370f",
              name: "Dressing",
              minimum: 0,
              maximum: 3,
              options: [
                {
                  _id: "5f3577a3405bae54c6523710",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523711",
                  name: "Mustard",
                  price: {
                    amount: 47,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523712",
                  name: "Mayonnaise",
                  price: {
                    amount: 153,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523713",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 1,
          maximumModifiers: 1,
          allergen: ["Contains Milk"],
          calories: 500,
          spiceLevel: 1,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.35.35AM.png"],
          _id: "5f3577a5405bae54c6523723",
        },
        {
          name: "Hawaiian Style",
          description: "Ham, Bacon, Pineapple,",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523726",
              name: "Large",
              price: {
                amount: 2038,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c6523725",
              name: "Regular",
              price: {
                amount: 1698,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c6523724",
              name: "Small",
              price: {
                amount: 1189,
                currency: "USD",
              },
            },
          ],
          categories: ["Appetizer"],
          allergen: ["Contains Milk"],
          calories: 650,
          spiceLevel: 1,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.38.09AM.png"],
          _id: "5f3577a5405bae54c6523727",
        },
        {
          name: "San Francisco Special",
          description:
            "Pepperoni, ham, black olives, feta cheese and italian sausage",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523728",
              name: "Small",
              price: {
                amount: 1189,
                currency: "USD",
              },
            },
          ],
          categories: ["Main", "Drink", "Appetizer"],
          modifier: [
            {
              _id: "5f3577a3405bae54c652370f",
              name: "Dressing",
              minimum: 0,
              maximum: 3,
              options: [
                {
                  _id: "5f3577a3405bae54c6523710",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523711",
                  name: "Mustard",
                  price: {
                    amount: 47,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523712",
                  name: "Mayonnaise",
                  price: {
                    amount: 153,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523713",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c6523700",
              name: "Base",
              minimum: 1,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c6523701",
                  name: "Wheat",
                  price: {
                    amount: 227,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523702",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523703",
                  name: "Multigrain",
                  price: {
                    amount: 115,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c652370a",
              name: "Protein",
              minimum: 0,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c652370b",
                  name: "Beef",
                  price: {
                    amount: 77,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370c",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370d",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370e",
                  name: "Portobello Mushroom",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 0,
          maximumModifiers: 1,
          allergen: ["Contains Milk"],
          calories: 600,
          spiceLevel: 1,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.40.29AM.png"],
          _id: "5f3577a5405bae54c652372b",
        },
        {
          name: "Buffalo Wings",
          description: "Fried Chicken Wings with buffalo sauce",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c652372d",
              name: "Regular",
              price: {
                amount: 999,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c652372c",
              name: "Small",
              price: {
                amount: 699,
                currency: "USD",
              },
            },
            {
              _id: "5f3577a5405bae54c652372e",
              name: "Large",
              price: {
                amount: 1198,
                currency: "USD",
              },
            },
          ],
          categories: ["Appetizer"],
          calories: 300,
          spiceLevel: 3,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.42.19AM.png"],
          _id: "5f3577a5405bae54c652372f",
        },
        {
          name: "Garlic Bread",
          description:
            "With mozzarella cheese, garlic and topped with oregano.",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523732",
              name: "Large",
              price: {
                amount: 1198,
                currency: "USD",
              },
            },
          ],
          modifier: [
            {
              _id: "5f3577a3405bae54c6523704",
              name: "Toppings",
              minimum: 2,
              maximum: 5,
              options: [
                {
                  _id: "5f3577a3405bae54c6523705",
                  name: "Onion",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523706",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523707",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523708",
                  name: "Avocado",
                  price: {
                    amount: 9,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523709",
                  name: "Cheese",
                  price: {
                    amount: 152,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c6523700",
              name: "Base",
              minimum: 1,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c6523701",
                  name: "Wheat",
                  price: {
                    amount: 227,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523702",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523703",
                  name: "Multigrain",
                  price: {
                    amount: 115,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c652370a",
              name: "Protein",
              minimum: 0,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c652370b",
                  name: "Beef",
                  price: {
                    amount: 77,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370c",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370d",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370e",
                  name: "Portobello Mushroom",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 0,
          maximumModifiers: 2,
          calories: 200,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.44.24AM.png"],
          _id: "5f3577a5405bae54c6523733",
        },
        {
          name: "Chef's Salad",
          description:
            "Lettuce, Red Onions, Black Olives, Mozzarella Cheese, Salami, Ham & Pepperoni",
          status: "IN_STOCK",
          variations: [
            {
              _id: "5f3577a5405bae54c6523734",
              name: "Small",
              price: {
                amount: 489,
                currency: "USD",
              },
            },
          ],
          categories: ["Appetizer", "Drink"],
          modifier: [
            {
              _id: "5f3577a3405bae54c6523704",
              name: "Toppings",
              minimum: 2,
              maximum: 5,
              options: [
                {
                  _id: "5f3577a3405bae54c6523705",
                  name: "Onion",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523706",
                  name: "Tomatoes",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523707",
                  name: "Jalapeno",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523708",
                  name: "Avocado",
                  price: {
                    amount: 9,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523709",
                  name: "Cheese",
                  price: {
                    amount: 152,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c652370f",
              name: "Dressing",
              minimum: 0,
              maximum: 3,
              options: [
                {
                  _id: "5f3577a3405bae54c6523710",
                  name: "Ketchup",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523711",
                  name: "Mustard",
                  price: {
                    amount: 47,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523712",
                  name: "Mayonnaise",
                  price: {
                    amount: 153,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523713",
                  name: "Olive oil",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c6523700",
              name: "Base",
              minimum: 1,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c6523701",
                  name: "Wheat",
                  price: {
                    amount: 227,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523702",
                  name: "Regular",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c6523703",
                  name: "Multigrain",
                  price: {
                    amount: 115,
                    currency: "USD",
                  },
                },
              ],
            },
            {
              _id: "5f3577a3405bae54c652370a",
              name: "Protein",
              minimum: 0,
              maximum: 1,
              options: [
                {
                  _id: "5f3577a3405bae54c652370b",
                  name: "Beef",
                  price: {
                    amount: 77,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370c",
                  name: "Chicken",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370d",
                  name: "Tofu",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
                {
                  _id: "5f3577a3405bae54c652370e",
                  name: "Portobello Mushroom",
                  price: {
                    amount: 0,
                    currency: "USD",
                  },
                },
              ],
            },
          ],
          minimumModifiers: 3,
          maximumModifiers: 4,
          calories: 140,
          imagePaths: ["/img/auto_gen/ScreenShot2020-03-22at12.46.23AM.png"],
          _id: "5f3577a5405bae54c6523737",
        },
      ],
    },
    description: "Hand tossed pizza baked freshly on premise",
    tag: [
      {
        _id: "5f3577a7405bae54c65239af",
        name: "Pizza",
        type: "CUISINE",
        status: "ACTIVE",
        iconImagePath: "/img/tags/pizza.png",
      },
    ],
    logoImagePath: "/img/auto_gen/pronto-pizza-logo.jpg",
    bannerImagePath: "/img/auto_gen/ScreenShot2020-03-21at6.39.03PM.png",
    expenseLevel: 2,
    reviews: 176,
    rating: 4,
    pointOfSaleInfo: {
      pointOfSaleAuthInfoId: "5f3577a5405bae54c6523716",
      type: "SQUARE",
      squareInfo: {
        locationId: "53eca4c8acadb37fe1ad4e52aa404fab",
      },
    },
    businessHours: {},
  },
};

const userDemo = createSlice({
  name: "userDemo",
  initialState,
  reducers: {
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload.name;
    },
    setPhone(state, action: PayloadAction<string>) {
      state.phone = action.payload.phone;
    },
    insertBeginning(state, action: PayloadAction<any>) {
      state.orders.unshift(action.payload);
    },
    insertEnd(state, action: PayloadAction<any>) {
      state.orders.push(action.payload);
    },
  },
});

export const {setName, setPhone, insertBeginning, insertEnd} = userDemo.actions;

export default userDemo.reducer;
