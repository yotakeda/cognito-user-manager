import { Users } from "components/templates/Users";
import Head from "next/head";

export default function UsersPage() {
  return (
    <>
      <Head>
        <title>Cognito User Manager: Users</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Users />
    </>
  );
}
