export default {
  moveToLeftFromRight: {
    exit: {
      name: 'moveToLeft'
    },
    enter: {
      name: 'moveFromRight'
    }
  },
  moveToRightFromLeft: {
    exit: {
      name: 'moveToRight'
    },
    enter: {
      name: 'moveFromLeft'
    }
  },
  moveToTopFromBottom: {
    exit: {
      name: 'moveToTop'
    },
    enter: {
      name: 'moveFromBottom'
    }
  },
  moveToBottomFromTop: {
    exit: {
      name: 'moveToBottom'
    },
    enter: {
      name: 'moveFromTop'
    }
  },
  fadeFromRight: {
    exit: {
      name: 'fade'
    },
    enter: {
      name: 'moveFromRight',
      onTop: true
    }
  },
  fadeFromLeft: {
    exit: {
      name: 'fade'
    },
    enter: {
      name: 'moveFromLeft',
      onTop: true
    }
  },
  fadeFromBottom: {
    exit: {
      name: 'fade'
    },
    enter: {
      name: 'moveFromBottom',
      onTop: true
    }
  },
  fadeFromTop: {
    exit: {
      name: 'fade'
    },
    enter: {
      name: 'moveFromTop',
      onTop: true
    }
  },
  fadeLeftFadeRight: {
    exit: {
      name: 'moveToLeftFade'
    },
    enter: {
      name: 'moveFromRightFade'
    }
  },
  fadeRightFadeLeft: {
    exit: {
      name: 'moveToRightFade'
    },
    enter: {
      name: 'moveFromLeftFade'
    }
  },
  fadeTopFadeBottom: {
    exit: {
      name: 'moveToTopFade'
    },
    enter: {
      name: 'moveFromBottomFade'
    }
  },
  fadeBottomFadeTop: {
    exit: {
      name: 'moveToBottomFade'
    },
    enter: {
      name: 'moveFromTopFade'
    }
  },
  scaleDownFromRight: {
    exit: {
      name: 'scaleDown'
    },
    enter: {
      name: 'moveFromRight',
      onTop: true
    }
  },
  scaleDownFromLeft: {
    exit: {
      name: 'scaleDown'
    },
    enter: {
      name: 'moveFromLeft',
      onTop: true
    }
  },
  scaleDownFromBottom: {
    exit: {
      name: 'scaleDown'
    },
    enter: {
      name: 'moveFromBottom',
      onTop: true
    }
  },
  scaleDownFromTop: {
    exit: {
      name: 'scaleDown'
    },
    enter: {
      name: 'moveFromTop',
      onTop: true
    }
  },
  scaleDownScaleDown: {
    exit: {
      name: 'scaleDown'
    },
    enter: {
      name: 'scaleUpDown',
      delay: 300
    }
  },
  scaleUpScaleUp: {
    exit: {
      name: 'scaleDownUp'
    },
    enter: {
      name: 'scaleUp',
      delay: 300
    }
  },
  moveToLeftScaleUp: {
    exit: {
      name: 'moveToLeft',
      onTop: true
    },
    enter: {
      name: 'scaleUp'
    }
  },
  moveToRightScaleUp: {
    exit: {
      name: 'moveToRight',
      onTop: true
    },
    enter: {
      name: 'scaleUp'
    }
  },
  moveToTopScaleUp: {
    exit: {
      name: 'moveToTop',
      onTop: true
    },
    enter: {
      name: 'scaleUp'
    }
  },
  moveToBottomScaleUp: {
    exit: {
      name: 'moveToBottom',
      onTop: true
    },
    enter: {
      name: 'scaleUp'
    }
  },
  scaleDownScaleUp: {
    exit: {
      name: 'scaleDownCenter'
    },
    enter: {
      name: 'scaleUpCenter',
      delay: 400
    }
  },
  glueLeftFromRight: {
    exit: {
      name: 'rotateRightSideFirst'
    },
    enter: {
      name: 'moveFromRight',
      delay: 200,
      onTop: true
    }
  },
  glueRightFromLeft: {
    exit: {
      name: 'rotateLeftSideFirst'
    },
    enter: {
      name: 'moveFromLeft',
      delay: 200,
      onTop: true
    }
  },
  glueBottomFromTop: {
    exit: {
      name: 'rotateTopSideFirst'
    },
    enter: {
      name: 'moveFromTop',
      delay: 200,
      onTop: true
    }
  },
  glueTopFromBottom: {
    exit: {
      name: 'rotateBottomSideFirst'
    },
    enter: {
      name: 'moveFromBottom',
      delay: 200,
      onTop: true
    }
  },
  flipRight: {
    exit: {
      name: 'flipOutRight'
    },
    enter: {
      name: 'flipInLeft',
      delay: 500
    }
  },
  flipLeft: {
    exit: {
      name: 'flipOutLeft'
    },
    enter: {
      name: 'flipInRight',
      delay: 500
    }
  },
  flipTop: {
    exit: {
      name: 'flipOutTop'
    },
    enter: {
      name: 'flipInBottom',
      delay: 500
    }
  },
  flipBottom: {
    exit: {
      name: 'flipOutBottom'
    },
    enter: {
      name: 'flipInTop',
      delay: 500
    }
  },
  fall: {
    exit: {
      name: 'rotateFall',
      onTop: true
    },
    enter: {
      name: 'scaleUp'
    }
  },
  newspaper: {
    exit: {
      name: 'rotateOutNewspaper'
    },
    enter: {
      name: 'rotateInNewspaper',
      delay: 500
    }
  },
  pushLeftFromRight: {
    exit: {
      name: 'rotatePushLeft'
    },
    enter: {
      name: 'moveFromRight'
    }
  },
  pushRightFromLeft: {
    exit: {
      name: 'rotatePushRight'
    },
    enter: {
      name: 'moveFromLeft'
    }
  },
  pushTopFromBottom: {
    exit: {
      name: 'rotatePushTop'
    },
    enter: {
      name: 'moveFromBottom'
    }
  },
  pushBottomFromTop: {
    exit: {
      name: 'rotatePushBottom'
    },
    enter: {
      name: 'moveFromTop'
    }
  },
  pushLeftPullRight: {
    exit: {
      name: 'rotatePushLeft'
    },
    enter: {
      name: 'rotatePullRight',
      delay: 180
    }
  },
  pushRightPullLeft: {
    exit: {
      name: 'rotatePushRight'
    },
    enter: {
      name: 'rotatePullLeft',
      delay: 180
    }
  },
  pushTopPullBottom: {
    exit: {
      name: 'rotatePushTop'
    },
    enter: {
      name: 'rotatePullBottom',
      delay: 180
    }
  },
  pushBottomPullTop: {
    exit: {
      name: 'rotatePushBottom'
    },
    enter: {
      name: 'rotatePullTop',
      delay: 180
    }
  },
  foldLeftFromRight: {
    exit: {
      name: 'rotateFoldLeft'
    },
    enter: {
      name: 'moveFromRightFade'
    }
  },
  foldRightFromLeft: {
    exit: {
      name: 'rotateFoldRight'
    },
    enter: {
      name: 'moveFromLeftFade'
    }
  },
  foldTopFromBottom: {
    exit: {
      name: 'rotateFoldTop'
    },
    enter: {
      name: 'moveFromBottomFade'
    }
  },
  foldBottomFromTop: {
    exit: {
      name: 'rotateFoldBottom'
    },
    enter: {
      name: 'moveFromTopFade'
    }
  },
  moveToRightUnfoldLeft: {
    exit: {
      name: 'moveToRightFade'
    },
    enter: {
      name: 'rotateUnfoldLeft'
    }
  },
  moveToLeftUnfoldRight: {
    exit: {
      name: 'moveToLeftFade'
    },
    enter: {
      name: 'rotateUnfoldRight'
    }
  },
  moveToBottomUnfoldTop: {
    exit: {
      name: 'moveToBottomFade'
    },
    enter: {
      name: 'rotateUnfoldTop'
    }
  },
  moveToTopUnfoldBottom: {
    exit: {
      name: 'moveToTopFade'
    },
    enter: {
      name: 'rotateUnfoldBottom'
    }
  },
  roomToLeft: {
    exit: {
      name: 'rotateRoomLeftOut',
      onTop: true
    },
    enter: {
      name: 'rotateRoomLeftIn'
    }
  },
  roomToRight: {
    exit: {
      name: 'rotateRoomRightOut',
      onTop: true
    },
    enter: {
      name: 'rotateRoomRightIn'
    }
  },
  roomToTop: {
    exit: {
      name: 'rotateRoomTopOut',
      onTop: true
    },
    enter: {
      name: 'rotateRoomTopIn'
    }
  },
  roomToBottom: {
    exit: {
      name: 'rotateRoomBottomOut',
      onTop: true
    },
    enter: {
      name: 'rotateRoomBottomIn'
    }
  },
  cubeToLeft: {
    exit: {
      name: 'rotateCubeLeftOut',
      onTop: true
    },
    enter: {
      name: 'rotateCubeLeftIn'
    }
  },
  cubeToRight: {
    exit: {
      name: 'rotateCubeRightOut',
      onTop: true
    },
    enter: {
      name: 'rotateCubeRightIn'
    }
  },
  cubeToTop: {
    exit: {
      name: 'rotateCubeTopOut',
      onTop: true
    },
    enter: {
      name: 'rotateCubeTopIn'
    }
  },
  cubeToBottom: {
    exit: {
      name: 'rotateCubeBottomOut',
      onTop: true
    },
    enter: {
      name: 'rotateCubeBottomIn'
    }
  },
  carouselToLeft: {
    exit: {
      name: 'rotateCarouselLeftOut',
      onTop: true
    },
    enter: {
      name: 'rotateCarouselLeftIn'
    }
  },
  carouselToRight: {
    exit: {
      name: 'rotateCarouselRightOut',
      onTop: true
    },
    enter: {
      name: 'rotateCarouselRightIn'
    }
  },
  carouselToTop: {
    exit: {
      name: 'rotateCarouselTopOut',
      onTop: true
    },
    enter: {
      name: 'rotateCarouselTopIn'
    }
  },
  carouselToBottom: {
    exit: {
      name: 'rotateCarouselBottomOut',
      onTop: true
    },
    enter: {
      name: 'rotateCarouselBottomIn'
    }
  },
  slides: {
    exit: {
      name: 'rotateSidesOut'
    },
    enter: {
      name: 'rotateSidesIn',
      delay: 200
    }
  },
  slide: {
    exit: {
      name: 'rotateSlideOut'
    },
    enter: {
      name: 'rotateSlideIn'
    }
  }
};
