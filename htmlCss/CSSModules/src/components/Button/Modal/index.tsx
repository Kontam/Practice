import React from "react";
import { useModal } from "./useModal";

type Props = {
  id: string;
  name: string;
};

export const UserProfile: React.FC<Props> = (props) => {
  const openModal = useModal(props);

  return (
    <div>
      <h1>{props.name}</h1>
      <button type="button" onClick={openModal}>
        Detail
      </button>
    </div>
  );
};

