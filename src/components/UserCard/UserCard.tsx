import { User } from "~/models";
import "./userCard.style.css";

interface Props {
  userData: User | undefined;
  error: Error | null;
}

export const UserCard = ({ userData, error }: Props) => {
  if (!userData && !error) {
    return <></>;
  }

  if (error) {
    return (
      <>
        <p aria-label="Error Message" data-testid="error-msg">
          {error?.message}
        </p>
      </>
    );
  }

  return (
    <>
      <section aria-label="User Card" data-testid="user-section">
        <article className="user-card">
          <div className="user-image-wrapper">
            <img src={userData.image} alt="user-image" />
          </div>
          <article
            className="user-description"
            aria-label="user-description"
            data-test="user-description"
          >
            <h2>{`${userData.firstName} ${userData.lastName}`}</h2>
            <p>Email: {userData.email}</p>
            <p>Gender: {userData.gender}</p>
            <p>Username: {userData.username}</p>
          </article>
        </article>
      </section>
    </>
  );
};
