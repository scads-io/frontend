export const opacityVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export const priceCardVariants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const tokenomicsCardVariants = {
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const treasuryCardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
}

export const walletCardVariants = {
  offscreen: {
    x: 100,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const imgVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: -20,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const investPageVariants = {
  offscreen: {
    y: "100%",
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const accordionCardVariants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const TWINECardVariants = {
  enter: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: 300,
    duration: 1,
  },
}

export const scadsCardVariants = {
  enter: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -300,
    duration: 1,
  },
}

export const howToCardVariants = (item) => ({
  offscreen: {
    y: 100,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: item.duration,
    },
  },
})

export const whitePaperVariants = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export const roadmapCardVariantsToLeft = {
  offscreen: {
    x: 200,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const roadmapCardVariantsToRight = {
  offscreen: {
    x: -200,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const roadmapCardVariantsMobile = {
  offscreen: {
    y: 50,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1,
    },
  },
}

export const fromTop = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
}

export const fromBottom = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
  },
}