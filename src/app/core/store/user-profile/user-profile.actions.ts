import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

import { GoogleBasicProfile } from './user-profile.reducer';

@Injectable()
export class UserProfileActions {
  static UPDATE = '[UserProfile] UPDATE';
  static ADD_PLAYLISTS = '[UserProfile] ADD_PLAYLISTS';
  static UPDATE_TOKEN = '[UserProfile] UPDATE_TOKEN';
  static LOG_OUT = '[UserProfile] LOG_OUT';
  static UPDATE_NEXT_PAGE_TOKEN = '[UserProfile] UPDATE_NEXT_PAGE_TOKEN';
  static USER_PROFILE_COMPLETED = '[UserProfile] USER_PROFILE_COMPLETED';
  static UPDATE_USER_PROFILE = '[UserProfile] UPDATE_USER_PROFILE';
  static USER_PROFILE_RECIEVED = '[UserProfile] USER_PROFILE_RECIEVED';

  updateData(data: any) {
    return {
      type: UserProfileActions.UPDATE,
      payload: data
    };
  }

  addPlaylists(playlists: Array<any>) {
    return {
      type: UserProfileActions.ADD_PLAYLISTS,
      payload: playlists
    };
  }

  updateToken(token: string) {
    return {
      type: UserProfileActions.UPDATE_TOKEN,
      payload: token
    };
  }

  signOut() {
    return {
      type: UserProfileActions.LOG_OUT
    };
  }

  updatePageToken(token: string) {
    return {
      type: UserProfileActions.UPDATE_NEXT_PAGE_TOKEN,
      payload: token
    };
  }

  userProfileCompleted() {
    return {
      type: UserProfileActions.USER_PROFILE_COMPLETED
    };
  }

  userProfileRecieved (profile: any) {
    return {
      type: UserProfileActions.USER_PROFILE_RECIEVED,
      payload: profile
    };
  }

  updateUserProfile (profile: GoogleBasicProfile) {
    return {
      type: UserProfileActions.UPDATE_USER_PROFILE,
      payload: profile
    };
  }
}
