import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import routes from "./routes.config.js";

const SITE_URL = "https://mowebdev.com.ng";

function extractPaths(routeArray, parent = "") {
  let paths = [];
  for (const r of routeArray) {
    if (r.index) {
      paths.push(parent || "/");
    } else if (r.path) {
      const fullPath = parent
        ? `${parent.replace(/\/$/, "")}/${r.path}`
        : r.path;
      paths.push(fullPath);
      if (r.children) {
        paths = paths.concat(extractPaths(r.children, fullPath));
      }
    } else if (r.children) {
      paths = paths.concat(extractPaths(r.children, parent));
    }
  }
  return paths;
}

const allPaths = extractPaths(routes);

const sitemapStream = new SitemapStream({ hostname: SITE_URL });
const writeStream = createWriteStream("./dist/sitemap.xml");

allPaths.forEach((p) => {
  sitemapStream.write({
    url: p,
    changefreq: "monthly",
    priority: p === "/" ? 1.0 : 0.8,
  });
});

sitemapStream.end();

streamToPromise(sitemapStream).then((data) =>
  writeStream.write(data.toString())
);
