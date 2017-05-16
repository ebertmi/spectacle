import { Children } from "react";
import isUndefined from "lodash/isUndefined";
import reduce from "lodash/reduce";

export var getSlideByIndex = function getSlideByIndex(children, slideReference, index) {
  children = Children.toArray(children);
  var slide = void 0;
  var reference = slideReference[index];
  if (reference) {
    if (isUndefined(reference.setIndex)) {
      slide = children[reference.rootIndex];
    } else {
      var setChildren = Children.toArray(children[reference.rootIndex].props.children);
      slide = setChildren[reference.setIndex];
    }
  }
  return slide;
};

export var countSlides = function countSlides(children) {
  return reduce(Children.toArray(children), function (count, child) {
    count += child.props.hasSlideChildren ? Children.toArray(child.props.children).length : 1;
    return count;
  }, 0);
};