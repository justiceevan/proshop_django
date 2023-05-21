const logoUrl =
  process.env.NODE_ENV === "production"
    ? "https://proeshopstorage.blob.core.windows.net/proshopcontainer/logo.png"
    : "/images/logo.png";

const notFoundUrl =
  process.env.NODE_ENV === "production"
    ? "https://proeshopstorage.blob.core.windows.net/proshopcontainer/404.png"
    : "/images/404.png";

const commentImageUrl =
  process.env.NODE_ENV === "production"
    ? "https://proeshopstorage.blob.core.windows.net/proshopcontainer/no-comment.png"
    : "/images/no-comment.png";

export { logoUrl, notFoundUrl, commentImageUrl };
