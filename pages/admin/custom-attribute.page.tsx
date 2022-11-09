import { Button } from "antd";
import Link from "next/link";
import React from "react";

const CustomAttributePage = () => {
  return (
    <>
      <Button type="link">
        <Link href={"/"}>Back to users page</Link>
      </Button>
      custom attribute
    </>
  );
};

export default CustomAttributePage;
