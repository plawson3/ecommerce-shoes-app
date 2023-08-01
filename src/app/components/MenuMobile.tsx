import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { CategoryMenuType, categoryObjType } from "./Menu";
import { getCategoryProductQuery } from "../../../sanity/lib/query";
import { client } from "../../../sanity/lib/client";

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MenuMobile({
  showCatMenu,
  setShowCatMenu,
  setMobileMenu,
}: MenuProps) {

  const [subMenu, setSubMenu] = useState<categoryObjType[]>()

  useEffect(() => {

    const categoryMenu = async () => {

      const res: CategoryMenuType[] = await client.fetch(getCategoryProductQuery);

      const categorySubMenu: categoryObjType[] = [];

      res.forEach((item) => {
        let categoryObj = categorySubMenu.find(x => x.category.toLowerCase().trim() === item.category.toLowerCase().trim());

        if (categoryObj) {
          categoryObj.count += 1;
        }
        else {
          const obj: categoryObjType = {
            category: item.category,
            count: 1,
            slug: item.slug
          };

          categorySubMenu.push(obj);
        }
      });
      setSubMenu(categorySubMenu);
    };

    categoryMenu();
  }, []);

  const data = [
    { id: 1, name: "Home", url: "/" },
    { id: 2, name: "Categories", subMenu: true },
    { id: 3, name: "About", url: "/about" },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0  w-full h-[calc(100vh-50px)] bg-white border-t text-black ">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="curosr-pointer py-4 px-5 border-b flex flex-col relative  "
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <FiChevronDown size="14" />
                </div>
                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4  ">
                    {subMenu && subMenu.map((submenu, idx) => {
                      return (
                        <Link
                          key={idx}
                          href={`/category/${submenu.slug}`}
                          onClick={() => {
                            setShowCatMenu(false);
                            setMobileMenu(false);
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between ">
                            {submenu.category}
                            <span className="opacity-50 text-sm">
                              {submenu.count}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="py-4 px-5 border-b">
                <Link
                  href={item.url!}
                  onClick={() => {
                    setMobileMenu(false);
                  }}
                >
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
