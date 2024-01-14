import http from "k6/http";
import { sleep } from "k6";
import { check, fail } from "k6";

export default function () {
  const categorie = {
    title: "Categorie test",
    uri: "test",
    description: "Categorie desc",
    cover: "cover",
    type: "type",
    companyId: 1,
  };

  let params = {
    headers: {
      'accept': 'application/json',
      'Content-Type': 'application/json',
      'monitor': false,
    },
  };

  let res = http.post("http://localhost:3000/api/v1/categorie", JSON.stringify(categorie), params);

  let durationMsg = "Falha na execução do cenário de teste news";

  if (
    !check(res, {
      "is statuscode 201 - endpoint news": (r) => r.status === 201,
    })
  ) {
    fail(durationMsg);
  }

  sleep(1);
}
