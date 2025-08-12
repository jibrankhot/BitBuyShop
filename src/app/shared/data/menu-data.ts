import { IMenuItem, IMobileType } from "../types/menu-d-type";

export const menu_data: IMenuItem[] = [
  // Men
  {
    id: 1,
    link: '/shop/men',
    title: 'Men',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Topwear',
        link: '/shop/men/topwear',
        dropdown_menus: [
          { title: 'T-Shirts', link: '/shop/men/t-shirts' },
          { title: 'Casual Shirts', link: '/shop/men/casual-shirts' },
          { title: 'Formal Shirts', link: '/shop/men/formal-shirts' },
          { title: 'Sweatshirts', link: '/shop/men/sweatshirts' },
          { title: 'Sweaters', link: '/shop/men/sweaters' },
          { title: 'Jackets', link: '/shop/men/jackets' },
          { title: 'Blazers & Coats', link: '/shop/men/blazers-coats' },
          { title: 'Suits', link: '/shop/men/suits' }
        ]
      },
      {
        id: 2,
        title: 'Bottomwear',
        link: '/shop/men/bottomwear',
        dropdown_menus: [
          { title: 'Jeans', link: '/shop/men/jeans' },
          { title: 'Casual Trousers', link: '/shop/men/casual-trousers' },
          { title: 'Formal Trousers', link: '/shop/men/formal-trousers' },
          { title: 'Shorts', link: '/shop/men/shorts' },
          { title: 'Track Pants & Joggers', link: '/shop/men/track-pants' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/men/footwear',
        dropdown_menus: [
          { title: 'Casual Shoes', link: '/shop/men/casual-shoes' },
          { title: 'Sports Shoes', link: '/shop/men/sports-shoes' },
          { title: 'Formal Shoes', link: '/shop/men/formal-shoes' },
          { title: 'Sneakers', link: '/shop/men/sneakers' },
          { title: 'Sandals & Floaters', link: '/shop/men/sandals-floaters' },
          { title: 'Flip Flops', link: '/shop/men/flip-flops' },
          { title: 'Socks', link: '/shop/men/socks' }
        ]
      },
      {
        id: 4,
        title: 'Sportswear',
        link: '/shop/men/sportswear',
        dropdown_menus: [
          { title: 'Track Pants & Shorts', link: '/shop/men/track-pants-shorts' },
          { title: 'T-Shirts', link: '/shop/men/sports-t-shirts' },
          { title: 'Jackets', link: '/shop/men/sports-jackets' }
        ]
      },
      {
        id: 5,
        title: 'Innerwear & Sleepwear',
        link: '/shop/men/innerwear-sleepwear',
        dropdown_menus: [
          { title: 'Briefs & Trunks', link: '/shop/men/briefs-trunks' },
          { title: 'Vests', link: '/shop/men/vests' },
          { title: 'Sleepwear & Lounge', link: '/shop/men/sleepwear-lounge' }
        ]
      },
      {
        id: 6,
        title: 'Accessories',
        link: '/shop/men/accessories',
        dropdown_menus: [
          { title: 'Wallets', link: '/shop/men/wallets' },
          { title: 'Belts', link: '/shop/men/belts' },
          { title: 'Caps & Hats', link: '/shop/men/caps-hats' },
          { title: 'Jewellery', link: '/shop/men/jewellery' },
          { title: 'Sunglasses', link: '/shop/men/sunglasses' },
          { title: 'Phone Cases', link: '/shop/men/phone-cases' }
        ]
      }
    ]
  },

  // Women
  {
    id: 2,
    link: '/shop/women',
    title: 'Women',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Indian & Fusion Wear',
        link: '/shop/women/indian-fusion',
        dropdown_menus: [
          { title: 'Kurtas & Suits', link: '/shop/women/kurtas-suits' },
          { title: 'Kurtis, Tunics & Tops', link: '/shop/women/kurtis-tunics' },
          { title: 'Sarees', link: '/shop/women/sarees' },
          { title: 'Ethnic Wear', link: '/shop/women/ethnic-wear' },
          { title: 'Leggings, Salwars & Churidars', link: '/shop/women/leggings-salwars' },
          { title: 'Skirts & Palazzos', link: '/shop/women/skirts-palazzos' },
          { title: 'Dress Materials', link: '/shop/women/dress-materials' },
          { title: 'Lehenga Cholis', link: '/shop/women/lehenga-cholis' }
        ]
      },
      {
        id: 2,
        title: 'Western Wear',
        link: '/shop/women/western-wear',
        dropdown_menus: [
          { title: 'Dresses', link: '/shop/women/dresses' },
          { title: 'Tops', link: '/shop/women/tops' },
          { title: 'T-Shirts', link: '/shop/women/t-shirts' },
          { title: 'Jeans', link: '/shop/women/jeans' },
          { title: 'Trousers & Capris', link: '/shop/women/trousers-capris' },
          { title: 'Shorts & Skirts', link: '/shop/women/shorts-skirts' },
          { title: 'Sweaters & Sweatshirts', link: '/shop/women/sweaters-sweatshirts' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/women/footwear',
        dropdown_menus: [
          { title: 'Flats', link: '/shop/women/flats' },
          { title: 'Casual Shoes', link: '/shop/women/casual-shoes' },
          { title: 'Heels', link: '/shop/women/heels' },
          { title: 'Boots', link: '/shop/women/boots' },
          { title: 'Sports Shoes & Floaters', link: '/shop/women/sports-shoes-floaters' }
        ]
      },
      {
        id: 4,
        title: 'Lingerie & Sleepwear',
        link: '/shop/women/lingerie-sleepwear',
        dropdown_menus: [
          { title: 'Bra', link: '/shop/women/bra' },
          { title: 'Briefs & Panties', link: '/shop/women/briefs-panties' },
          { title: 'Sleepwear & Loungewear', link: '/shop/women/sleepwear-loungewear' }
        ]
      },
      {
        id: 5,
        title: 'Sports & Activewear',
        link: '/shop/women/sports-activewear',
        dropdown_menus: [
          { title: 'Track Pants & Shorts', link: '/shop/women/track-pants-shorts' },
          { title: 'T-Shirts', link: '/shop/women/sports-t-shirts' },
          { title: 'Jackets', link: '/shop/women/sports-jackets' }
        ]
      },
      {
        id: 6,
        title: 'Accessories',
        link: '/shop/women/accessories',
        dropdown_menus: [
          { title: 'Bags & Wallets', link: '/shop/women/bags-wallets' },
          { title: 'Belts', link: '/shop/women/belts' },
          { title: 'Jewellery', link: '/shop/women/jewellery' },
          { title: 'Sunglasses', link: '/shop/women/sunglasses' },
          { title: 'Hair Accessories', link: '/shop/women/hair-accessories' }
        ]
      }
    ]
  },

  // Kids
  {
    id: 3,
    link: '/shop/kids',
    title: 'Kids',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Boys Clothing',
        link: '/shop/kids/boys-clothing',
        dropdown_menus: [
          { title: 'T-Shirts', link: '/shop/kids/boys-t-shirts' },
          { title: 'Shirts', link: '/shop/kids/boys-shirts' },
          { title: 'Jeans', link: '/shop/kids/boys-jeans' },
          { title: 'Shorts', link: '/shop/kids/boys-shorts' },
          { title: 'Track Pants', link: '/shop/kids/boys-track-pants' }
        ]
      },
      {
        id: 2,
        title: 'Girls Clothing',
        link: '/shop/kids/girls-clothing',
        dropdown_menus: [
          { title: 'Dresses', link: '/shop/kids/girls-dresses' },
          { title: 'Tops', link: '/shop/kids/girls-tops' },
          { title: 'T-Shirts', link: '/shop/kids/girls-t-shirts' },
          { title: 'Jeans', link: '/shop/kids/girls-jeans' },
          { title: 'Skirts & Shorts', link: '/shop/kids/girls-skirts-shorts' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/shop/kids/footwear',
        dropdown_menus: [
          { title: 'Casual Shoes', link: '/shop/kids/casual-shoes' },
          { title: 'Sports Shoes', link: '/shop/kids/sports-shoes' },
          { title: 'Sandals', link: '/shop/kids/sandals' },
          { title: 'Flip Flops', link: '/shop/kids/flip-flops' }
        ]
      },
      {
        id: 4,
        title: 'Accessories',
        link: '/shop/kids/accessories',
        dropdown_menus: [
          { title: 'Bags & Backpacks', link: '/shop/kids/bags-backpacks' },
          { title: 'Hats & Caps', link: '/shop/kids/hats-caps' },
          { title: 'Watches', link: '/shop/kids/watches' }
        ]
      }
    ]
  },

  // Beauty
  {
    id: 5,
    link: '/beauty',
    title: 'Beauty',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Makeup',
        link: '/beauty/makeup',
        dropdown_menus: [
          { title: 'Face Makeup', link: '/beauty/makeup/face' },
          { title: 'Eye Makeup', link: '/beauty/makeup/eye' },
          { title: 'Lipsticks', link: '/beauty/makeup/lipsticks' },
          { title: 'Nail Polish', link: '/beauty/makeup/nail-polish' }
        ]
      },
      {
        id: 2,
        title: 'Skincare',
        link: '/beauty/skincare',
        dropdown_menus: [
          { title: 'Cleansers', link: '/beauty/skincare/cleansers' },
          { title: 'Moisturizers', link: '/beauty/skincare/moisturizers' },
          { title: 'Masks & Peels', link: '/beauty/skincare/masks-peels' }
        ]
      },
      {
        id: 3,
        title: 'Hair Care',
        link: '/beauty/hair-care',
        dropdown_menus: [
          { title: 'Shampoo', link: '/beauty/hair-care/shampoo' },
          { title: 'Conditioner', link: '/beauty/hair-care/conditioner' },
          { title: 'Hair Treatments', link: '/beauty/hair-care/treatments' }
        ]
      },
      {
        id: 4,
        title: 'Fragrances',
        link: '/beauty/fragrances',
        dropdown_menus: [
          { title: 'Perfumes', link: '/beauty/fragrances/perfumes' },
          { title: 'Deodorants', link: '/beauty/fragrances/deodorants' }
        ]
      }
    ]
  },

  // GenZ
  {
    id: 6,
    link: '/genz',
    title: 'GenZ',
    mega_menu: true,
    product_menus: [
      {
        id: 1,
        title: 'Clothing',
        link: '/genz/clothing',
        dropdown_menus: [
          { title: 'Graphic T-Shirts', link: '/genz/clothing/graphic-tshirts' },
          { title: 'Hoodies & Sweatshirts', link: '/genz/clothing/hoodies' },
          { title: 'Jeans & Pants', link: '/genz/clothing/jeans-pants' }
        ]
      },
      {
        id: 2,
        title: 'Accessories',
        link: '/genz/accessories',
        dropdown_menus: [
          { title: 'Backpacks', link: '/genz/accessories/backpacks' },
          { title: 'Caps & Hats', link: '/genz/accessories/caps-hats' },
          { title: 'Phone Cases', link: '/genz/accessories/phone-cases' }
        ]
      },
      {
        id: 3,
        title: 'Footwear',
        link: '/genz/footwear',
        dropdown_menus: [
          { title: 'Sneakers', link: '/genz/footwear/sneakers' },
          { title: 'Sandals', link: '/genz/footwear/sandals' }
        ]
      }
    ]
  },
];


// mobile menu data
export const mobile_menu: IMobileType[] = [
  {
    id: 1,
    homes: true,
    title: 'Home',
    link: '/home/fashion',
    home_pages: [
      {
        id: 2,
        title: 'Fashion',
        img: '/assets/img/menu/menu-home-2.jpg',
        link: '/home/fashion'
      }
    ]
  },
  {
    id: 2,
    sub_menu: true,
    title: 'Products',
    link: '/shop',
    sub_menus: [
      { title: 'Grid Layout', link: '/shop' },
      { title: 'Shop Categories', link: '/shop/shop-category' },
      { title: 'List Layout', link: '/shop/shop-list' },
      { title: 'Full width Layout', link: '/shop/shop-full-width' },
      { title: '1600px Layout', link: '/shop/shop-1600' },
      { title: 'Left Sidebar', link: '/shop' },
      { title: 'Right Sidebar', link: '/shop/shop-right-sidebar' },
      { title: 'Hidden Sidebar', link: '/shop/shop-no-sidebar' },
      { title: 'Filter Dropdown', link: '/shop/shop-filter-dropdown' },
      { title: 'Filters Offcanvas', link: '/shop/shop-filter-offcanvas' },
      { title: 'Load More button', link: '/shop/shop-load-more' },
      { title: '1600px Layout', link: '/shop/shop-1600' },
    ],
  },
  {
    id: 3,
    sub_menu: true,
    title: 'Products Details',
    link: '/shop/shop-details',
    sub_menus: [
      { title: 'Product Simple', link: '/shop/shop-details' },
      { title: 'With Video', link: '/shop/shop-details-with-video' },
      { title: 'With Countdown Timer', link: '/shop/shop-details-with-countdown' },
      { title: 'Variations Swatches', link: '/shop/shop-details' },
      { title: 'List View', link: '/shop/shop-details-list' },
      { title: 'Details Gallery', link: '/shop/shop-details-gallery' }
    ],
  },
  {
    id: 4,
    sub_menu: true,
    title: 'eCommerce',
    link: '/shop/cart',
    sub_menus: [
      { title: 'Shopping Cart', link: '/shop/cart' },
      { title: 'Track Your Order', link: '/shop/order' },
      { title: 'Compare', link: '/shop/compare' },
      { title: 'Wishlist', link: '/shop/wishlist' },
      { title: 'Checkout', link: '/pages/checkout' },
      { title: 'My account', link: '/pages/profile' }
    ],
  },
  {
    id: 5,
    sub_menu: true,
    title: 'More Pages',
    link: '/login',
    sub_menus: [
      { title: 'About', link: '/pages/about' },
      { title: 'Login', link: '/pages/login' },
      { title: 'Register', link: '/pages/register' },
      { title: 'Forgot Password', link: '/pages/forgot' },
      { title: '404 Error', link: '/pages/404' }
    ],
  },
  {
    id: 8,
    single_link: true,
    title: 'Contact',
    link: '/pages/contact',
  },
]


