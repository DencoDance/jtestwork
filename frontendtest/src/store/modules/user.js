import { SET_USER_DATA } from "@/store/mutation.types";
import { UPDATE_USER } from "@/store/action.types";

const userModule = {
  state: {
    Firstname: "",
    Lastname: "",
    Age: "",
    password: "",
    phone: "",
    email: ""
  },
  mutations: {
    [SET_USER_DATA](state, data) {
      state.Firstname = data.user.Firstname;
      state.Lastname = data.user.Lastname;
      state.Age = data.user.Age;
      state.password = data.user.password;
      state.phone = data.user.phone;
      state.email = data.user.email;
    }
  },
  actions: {
    [UPDATE_USER](context, data) {
      // eslint-disable-next-line no-console
      console.log(userModule);
      context.commit([SET_USER_DATA], data);
    }
  }
};

export default userModule;
