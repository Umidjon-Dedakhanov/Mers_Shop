import React from "react";
import { Heading } from "../UI/Heading";
import { MainBlock } from "./mainBlock/MainBlock";
import useAuthFetch from "../../hooks/useAuthFetch";
const CONTACT_HEADERS_ENDPOINT = 'contactHeadersAPI';

export const Contact = () => {
  const { data } = useAuthFetch(CONTACT_HEADERS_ENDPOINT, null);
  return (
    <div>
      <Heading img={data[0]?.imageUrl} routePathName="Contact" title={data[0]?.title_uz} />
      <MainBlock />
    </div>
  );
};
