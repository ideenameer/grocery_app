export interface ProductBO {
  productId: number;
  productName: string;
  productPrice: number;
  productImage: string;
  productDescription: string;
  productCategory: string;
  productQuantity: number;
  productDetails: string;
  productNutrients?: string;
  productRating?: number;
}
