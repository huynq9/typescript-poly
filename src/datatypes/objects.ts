// Object
const obj: { name: string; age?: number; hometown: string } = {
  name: "Bình",
  age: 20,
  hometown: "Hà Nội",
};

// Interface
interface Book {
  authors: { id: number; name: string; slug: string }[];
  book_cover: string;
  categories: { id: number; name: string; is_leaf: boolean };
  current_seller: Seller[];
  description: string;
  image: Image[];
  list_price: number;
  name: string;
  original_price: number;
  quantity_sold: Quantity_sold[];
  rating_average: number;
  short_description: string;
  specifications: Specification[];
}
interface Specification {
  name: string;
  attributes: { code: string; name: string; value: string }[];
}
interface Quantity_sold {
  text: string;
  value: number;
}
interface Image {
  base_url: string;
  is_gallery: boolean;
  label: string;
  large_url: string;
  medium_url: string;
  position: string;
  small_url: string;
  thumbnail_url: string;
}
interface Seller {
  id: number;
  sku: string;
  name: string;
  link: string;
  logo: string;
  price: number;
  product_id: string;
  store_id: number;
  is_best_store: boolean;
  is_offline_installment_supported?: string;
}

let book: Book;

let book2: Book;

let seller: Seller;
