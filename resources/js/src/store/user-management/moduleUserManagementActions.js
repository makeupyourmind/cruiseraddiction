
import {UserManagement} from "../../api/userManagement";

export default {

  fetchUser(context, userId) {
    return UserManagement.getUser(userId)
      .then((response)=> {
        return response.data 
    })
  },
  removeRecord({ commit }, userId) {
    return UserManagement.delectUser(userId)
    .then((response)=> {
      return response.data 
    })

  }
}
