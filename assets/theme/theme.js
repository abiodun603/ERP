export const COLORS = {
    kprimary: "#556EE6",
    ksecondary: "#74788D",
    kblack: "#000000",
    kblack2: "#171725",
    kblackCom: "#495057",
    kwhite: "#FFFFFF",
    klightGreen:"#D6F3E9",
    kdeepBlue: "#0F153A",
    kLightGray: "#EFF2F7"
}

export const SIZES = {
    base: "8px",
    font: "14px",
    radius: "12px",
    padding: "24px",

    // font sizes
    h1: "54px",
    h2: "20px",
    h3: "18px",
    h4: "21px",
    h5: "16px",
    body1: "24px",
    body2: "22px",
    body3: "16px",
    body4: "15px",
    body5: "13px",
    height: "24px"
}

export const FONTS = {
    h1: {'font-size' : SIZES.h1, "line-height": SIZES.height, color: COLORS.primary},
    h2: {'font-size' : SIZES.h2, "line-height": SIZES.height, color: COLORS.primary},
    h3: {'font-size' : SIZES.h3, "line-height": SIZES.height, color: COLORS.primary},
    h4: {'font-size' : SIZES.h4, "line-height": SIZES.height, color: COLORS.primary},
    h5: {'font-size' : SIZES.h5, "line-height": SIZES.height, color: COLORS.primary},
    h6: {'font-size' : SIZES.h6, "line-height": SIZES.height, color: COLORS.primary},
    body1: {'font-size' : SIZES.body1, "line-height": SIZES.height, color: COLORS.primary},
    body2: {'font-size' : SIZES.body2, "line-height": SIZES.height, color: COLORS.primary},
    body3: {'font-size' : SIZES.body3, "line-height": SIZES.height, color: COLORS.primary},
    body4: {'font-size' : SIZES.body4, "line-height": SIZES.height, color: COLORS.primary},

}

const appTheme = {COLORS, SIZES, FONTS };

export default appTheme