export const formatPrice = (price) => {
    const newPriceFormat = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "gbp"
    }).format(price / 100);

    return newPriceFormat;
};

export const getUniqueValues = (data, type) => {
    let unique = data.map((item) => item[type]);

    if (type === "colors") {
        unique = unique.flat();
    }

    return ["all", ...new Set(unique)]
};
