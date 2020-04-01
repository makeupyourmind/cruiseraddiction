
import {UserManagement} from "../../api/userManagement";

export default {

  async fetchUser(context, userId) {
    return UserManagement.getUser(userId)
      .then((response)=> {
        return response.data 
    })
  },
  async removeRecord({ commit }, userId) {
    return UserManagement.delectUser(userId)
    .then((response)=> {
      return response.data 
    })

  }
}
