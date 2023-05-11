import {
  SET_USER,
  SET_CHANNEL,
  SET_FAVOURITECHANNEL,
  REMOVE_FAVOURITECHANNEL,
} from "./actiontypes";
import { combineReducers } from "redux";

const defaultUserState = {
  currentUser: null,
};

const userReducer = (state = defaultUserState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser,
      };
    default:
      return state;
  }
};

const defaultChannelState = {
  currentChannel: null,
  loading: true,
};

const channelReducer = (state = defaultChannelState, action) => {
  switch (action.type) {
    case SET_CHANNEL:
      return {
        ...state,
        currentChannel: action.payload.currentChannel,
        loading: false,
      };
    default:
      return state;
  }
};

const defaultFavouriteChannelState = {
  favouriteChannel: {},
};

const favouriteChannelReducer = (
  state = defaultFavouriteChannelState,
  action
) => {
  const updatedState = { ...state.favouriteChannel };
  switch (action.type) {
    case SET_FAVOURITECHANNEL:
      const { channelId, channelName } = action.payload.favouriteChannel;
      updatedState[channelId] = channelName;
      return { favouriteChannel: updatedState };
    case REMOVE_FAVOURITECHANNEL:
      delete updatedState[action.payload.favouriteChannel.channelId];
      return { favouriteChannel: updatedState };
    default:
      return state;
  }
};

const combinedReducers = combineReducers({
  user: userReducer,
  channel: channelReducer,
  favouriteChannel: favouriteChannelReducer,
});

export default combinedReducers;
