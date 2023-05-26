const logoUrl =
  process.env.NODE_ENV === "production"
    ? "https://proshop.blob.core.windows.net/proshop-container/logo.png"
    : "/images/logo.png";

const notFoundUrl =
  process.env.NODE_ENV === "production"
    ? "https://proshop.blob.core.windows.net/proshop-container/404.png"
    : "/images/404.png";

const commentImageUrl =
  process.env.NODE_ENV === "production"
    ? "https://proshop.blob.core.windows.net/proshop-container/no-comment.png"
    : "/images/no-comment.png";

const cartImageUrl =
  process.env.NODE_ENV === "production"
    ? "https://proshop.blob.core.windows.net/proshop-container/shopping-cart.jpg"
    : "/images/shopping-cart.jpg";

export { logoUrl, notFoundUrl, commentImageUrl, cartImageUrl };
