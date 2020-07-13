export const signIn = (credentials) => async (firebase, history) => {
  try {
    await firebase.login(credentials);
    console.log("Success");
    history.goBack();
  } catch (e) {
    console.log(e.message);
  }
};

export const signInWithGoogle = () => async (firebase, history) => {
  try {
    await firebase.login({
      provider: "google",
      type: "popup",
    });
    console.log("Success");
    history.goBack();
  } catch (e) {
    console.log(e.message);
  }
};

export const signInWithProviderID = (providerID) => async (
  firebase,
  history
) => {
  try {
    if (!["github", "twitter", "facebook"].includes(providerID)) {
      return;
    }
    await firebase.login({
      provider: providerID,
      type: "popup",
    });
  } catch (e) {
    if (e.code === "auth/account-exists-with-different-credential") {
      const methods = await firebase.auth().fetchSignInMethodsForEmail(e.email);
    } else {
      // dispatch({ type: actions.SIGN_IN_FAIL, payload: e });
    }
  }
};

export const signOut = () => async (firebase, history) => {
  try {
    await firebase.logout();
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};

export const createNewUser = (email, password, username) => async (
  firebase,
  history
) => {
  try {
    console.log(email, password, username);
    await firebase.createUser({ email, password }, { username, email });
    history.goBack();
    console.log(history);
  } catch (e) {
    console.log(e.message);
    alert(e.message);
    return e.message;
  }
};

export const addNewUser = (user) => async (firestore, history) => {
  try {
    const { email, username, phone_number } = user;
    await firestore.add("users", { email, username, phone_number });
    console.log("success");
  } catch (e) {
    console.log(e.message);
  }
};
