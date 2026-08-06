import { Recipe } from './types';
import { baseRecipes } from './base';
import { rajasthanRecipes } from './rajasthan';
import { tamilNaduRecipes } from './tamil-nadu';
import { keralaRecipes } from './kerala';
import { andhraPradeshRecipes } from './andhra-pradesh';
import { karnatakaRecipes } from './karnataka';
import { telanganaRecipes } from './telangana';
import { maharashtraRecipes } from './maharashtra';
import { odishaRecipes } from './odisha';
import { chhattisgarhRecipes } from './chhattisgarh';
import { madhyaPradeshRecipes } from './madhya-pradesh';
import { gujaratRecipes } from './gujarat';
import { uttarPradeshRecipes } from './uttar-pradesh';
import { biharRecipes } from './bihar';
import { haryanaRecipes } from './haryana';
import { punjabRecipes } from './punjab';
import { jammuAndKashmirRecipes } from './jammu-and-kashmir';
import { himachalPradeshRecipes } from './himachal-pradesh';
import { uttarakhandRecipes } from './uttarakhand';
import { delhiRecipes } from './delhi';
import { jharkhandRecipes } from './jharkhand';
import { westBengalRecipes } from './west-bengal';
import { sikkimRecipes } from './sikkim';
import { meghalayaRecipes } from './meghalaya';
import { tripuraRecipes } from './tripura';
import { assamRecipes } from './assam';
import { arunachalPradeshRecipes } from './arunachal-pradesh';
import { mizoramRecipes } from './mizoram';
import { manipurRecipes } from './manipur';
import { nagalandRecipes } from './nagaland';
import { bakeryRecipes } from './bakery';
import { snacksRecipes } from './snacks';
import { drinksRecipes } from './drinks';

export type { Recipe, Ingredient } from './types';

export const recipes: Recipe[] = [
  ...baseRecipes,
  ...rajasthanRecipes,
  ...tamilNaduRecipes,
  ...keralaRecipes,
  ...andhraPradeshRecipes,
  ...karnatakaRecipes,
  ...telanganaRecipes,
  ...maharashtraRecipes,
  ...odishaRecipes,
  ...chhattisgarhRecipes,
  ...madhyaPradeshRecipes,
  ...gujaratRecipes,
  ...uttarPradeshRecipes,
  ...biharRecipes,
  ...haryanaRecipes,
  ...punjabRecipes,
  ...jammuAndKashmirRecipes,
  ...himachalPradeshRecipes,
  ...uttarakhandRecipes,
  ...delhiRecipes,
  ...jharkhandRecipes,
  ...westBengalRecipes,
  ...sikkimRecipes,
  ...meghalayaRecipes,
  ...tripuraRecipes,
  ...assamRecipes,
  ...arunachalPradeshRecipes,
  ...mizoramRecipes,
  ...manipurRecipes,
  ...nagalandRecipes,
  ...bakeryRecipes,
  ...snacksRecipes,
  ...drinksRecipes,
];
