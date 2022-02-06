import { NextPage } from "next";
import { classnames, container } from "tailwindcss-classnames";

import { Button } from "../components/Button";

const mainStyle = classnames(container());

const Page: NextPage = () => {
  return (
    <main className={mainStyle}>
      <Button>button</Button>
    </main>
  );
};

export default Page;
