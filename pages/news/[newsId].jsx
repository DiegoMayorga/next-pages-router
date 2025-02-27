// dominio.com/news/something-important

import { useRouter } from "next/router";

export default function DetailPage() {
  const router = useRouter();

  console.log(router);

  const newsId = router.query.newsId;

  return <h1>The {newsId} Page</h1>;
}
