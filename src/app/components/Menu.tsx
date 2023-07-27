import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";
import React, { useEffect, useState } from "react";
import { client } from "../../../sanity/lib/client";
import { categoryQuery } from "../../../sanity/lib/query";

interface MenuProps {
  showCatMenu: boolean;
  setShowCatMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export type categoryObjType = {
  category: string,
  count: number,
  slug: string
}

export type CategoryMenuType = { category: string, categoryCount: Number, slug: string }

export default function Menu({ showCatMenu, setShowCatMenu }: MenuProps) {

  const [subMenu, setSubMenu] = useState<categoryObjType[]>()

  useEffect(() => {

    const categoryMenu = async () => {

      const res: CategoryMenuType[] = await client.fetch(categoryQuery);

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
    { id: 2, name: "About", url: "/about" },
    { id: 3, name: "Categories", subMenu: true },
    { id: 4, name: "Contact", url: "/contact" },
  ];

  return (
    <ul className="hidden md:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="curosr-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <FiChevronDown size="14" />
                {showCatMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[250px] px-1 py-1 text-black shadow-lg ">
                    {subMenu && subMenu.map((submenu, idx) => {
                      return (
                        <Link key={idx} href={`/category/${submenu.slug}`}>
                          <li className="h-12 flex justify-between items-center px-3 hover: bg-black/[0.03] rounded-md">
                            {submenu.category}
                            <span className="opacity-50 text-sm">{submenu.count}</span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item.url!}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}
