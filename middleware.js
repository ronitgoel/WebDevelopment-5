export {default} from "next-auth/middleware";

export const config = {matcher : ["/main/Settings/DeliveredOrders", "/main/Settings/LikedProducts",
"/main/Settings/OrdersRejected","/main/Settings/PersonalDetails","/main/Settings/YourAccount","/main/Settings/YourOrders","/main/Settings/YourWishlist", "/main/Cart"]};