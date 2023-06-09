import React from "react";
import Link from "next/link";
import { Tooltip } from "@chakra-ui/react";
import { HiUserGroup } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { MdSpaceDashboard } from "react-icons/md"
import { RiCustomerService2Fill } from "react-icons/ri"
import { MdOutlineExplore } from "react-icons/md"

const Sidebar = () => {
  return (
    <aside className="fixed min-h-[100vh] w-[60px] border-r border-[#666666] py-5 dark:border-[#605e8a]">
      <div>
        <ul className="flex flex-col items-center justify-center space-y-4 w-full">
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="HOME" fontSize="md" placement="right">
              <Link
                href="/"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <AiOutlineHome size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="DASHBOARD" fontSize="md" placement="right">
              <Link
                href="dashboard"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <MdSpaceDashboard size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="COMMUNITY" fontSize="md" placement="right">
              <Link
                href="coming-soon"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <HiUserGroup size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="SUPPORT" fontSize="md" placement="right">
              <Link
                href="/support"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <RiCustomerService2Fill size={25} />
              </Link>
            </Tooltip>
          </li>
          <li className="w-[80%] border-b text-[#666666] border-[#666666] flex justify-center pb-4 dark:text-[#605e8a] dark:border-[#605e8a]">
            <Tooltip label="Explore NFTs" fontSize="md" placement="right">
              <Link
                href="/explore"
                className="flex justify-center sm:justify-start items-center py-2"
              >
                <MdOutlineExplore size={25} />
              </Link>
            </Tooltip>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
