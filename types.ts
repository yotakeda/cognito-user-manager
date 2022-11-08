import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement } from "react";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => JSX.Element;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type SearchCondition = {
  Name?: string;
  Username?: string;
};
