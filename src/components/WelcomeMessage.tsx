import type { FC } from "react";

type WelcomeMessageprops = {
  isLoggedIn: boolean;
};
const WelcomeMessage: FC<WelcomeMessageprops> = ({ isLoggedIn }) => {
  return (
    <>
      <p>{isLoggedIn ? "User is loggedin " : "user is not loggedin"}</p>
    </>
  );
};

export default WelcomeMessage;
