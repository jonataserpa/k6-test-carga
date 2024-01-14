import GetCategorie from "./scenarios/get-categorie.js";
import CreateCategorie from "./scenarios/create-categorie.js";
import {group , sleep} from 'k6';
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";


export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}

export default() =>{

  /*group('Endpoint Get Categorie - API k6', () => {
    GetCategorie();
  });*/

  group('Endpoint Create Categorie - API k6', () => {
    CreateCategorie();
 });

}