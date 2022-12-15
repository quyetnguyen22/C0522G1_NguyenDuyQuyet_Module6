import {ProducerDto} from "./producer-dto";
import {CosmeticTypeDto} from "./cosmetic-type-dto";
import {BrandDto} from "./brand-dto";

export interface ProductDto {
  id?: number;
  name?: string;
  volume?: string;
  price?: number;
  gender?: number;
  description?: string;
  usingProduct?: string;
  producer?: ProducerDto;
  brand?: BrandDto;
  cosmeticType?: CosmeticTypeDto;
  imageLink?: string;
  cosmeticId?: number;

}
