export const latestOrders = [
  {
    id: '1090',
    courier: 'UPS',
    createdAt: new Date('2021-09-09T10:10:45.475Z'),
    currency: 'USD',
    currencySymbol: '$',
    customer: {
      city: 'Madrid',
      country: 'Spain',
      firstName: 'Thadeus',
      lastName: 'Jacketts'
    },
    discountAmount: 0,
    lineItems: [
      {
        currency: 'USD',
        currencySymbol: '$',
        discountAmount: 0,
        image: '/static/product-01.png',
        name: 'Watch with Leather Strap',
        quantity: 1,
        sku: 'BBAK01-A',
        subtotalAmount: 160,
        taxAmount: 32.5,
        totalAmount: 192.5,
        unitAmount: 160
      }
    ],
    paymentId: 'DZS194LD',
    paymentMethod: 'stripe',
    paymentStatus: 'paid',
    status: 'processed',
    trackingCode: null,
    totalAmount: 100,
    updatedAt: new Date('2021-09-09T10:10:45.475Z')
  },
  {
    id: '1111',
    courier: 'Purolator',
    createdAt: new Date('2021-05-21T02:02:45.475Z'),
    currency: 'USD',
    currencySymbol: '$',
    customer: {
      city: 'Barcelona',
      country: 'Spain',
      firstName: 'Rad',
      lastName: 'Jose'
    },
    discountAmount: 0,
    lineItems: [
      {
        currency: 'USD',
        currencySymbol: '$',
        discountAmount: 0,
        image: '/static/product-01.png',
        name: 'Watch with Leather Strap',
        quantity: 1,
        sku: 'BBAK01-A',
        subtotalAmount: 160,
        taxAmount: 32.5,
        totalAmount: 192.5,
        unitAmount: 160
      }
    ],
    paymentId: 'OTIK283L',
    paymentMethod: 'debit',
    paymentStatus: 'paid',
    status: 'processed',
    trackingCode: null,
    totalAmount: 60,
    updatedAt: new Date('2021-05-21T02:02:45.475Z')
  }
];
