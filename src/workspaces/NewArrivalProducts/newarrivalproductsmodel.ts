// Review type for products
export type NewArrivalProductsReview = {
    user?: string;
    name: string;
    email: string;
    rating: number;
    review: string;
    date: string;
};

// Allowed badge types
export type ProductBadge = "new" | "sale" | null;

// Main product model
export interface NewArrivalProducts {
    id: string;
    sku: string;
    img: string;
    title: string;
    slug: string;
    unit: string;
    badge: ProductBadge;   // only "new" | "sale" | null
    imageURLs: {
        color?: {
            name: string;
            clrCode: string;
        };
        img: string;
    }[];
    parent: string;
    children: string;
    price: number;
    discount: number;
    quantity: number;
    brand: {
        name: string;
    };
    category: {
        name: string;
    };
    status: string;
    reviews?: NewArrivalProductsReview[];
    productType: string;
    description: string;
    orderQuantity?: number;
    additionalInformation: {
        key: string;
        value: string;
    }[];
    featured?: boolean;
    sellCount: number;
    offerDate?: {
        startDate: string;
        endDate: string;
    };
    tags?: string[];
    videoId?: string;
    sizes?: string[];
}
