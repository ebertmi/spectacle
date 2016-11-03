import { handleActions } from "redux-actions";

var reducer = handleActions({
  UPDATE_ROUTE: function UPDATE_ROUTE(state, action) {
    var _action$payload = action.payload,
        location = _action$payload.location,
        slideCount = _action$payload.slideCount;

    var proposedSlideIndex = parseInt(location.pathname.replace(/\//g, ""));
    var isWithinBounds = proposedSlideIndex < slideCount && proposedSlideIndex >= 0;

    return Object.assign({}, {
      slide: isWithinBounds ? proposedSlideIndex : 0,
      params: location.search.replace("?", "").split("&")
    });
  }
}, { slide: 0, params: [] });

export default reducer;