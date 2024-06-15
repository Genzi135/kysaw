export const formatCurrency = (amount) => {
    let formattedAmount = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    formattedAmount += "đ";
    return formattedAmount;
}
