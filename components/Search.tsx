"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { formUrlQuery, removeKeysFromQuery } from "@/lib/utils";

export const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        const newUrl = formUrlQuery({
          searchParams: searchParams.toString(),
          key: "query",
          value: query,
        });

        router.push(newUrl, { scroll: false });
      } else {
        const newUrl = removeKeysFromQuery({
          searchParams: searchParams.toString(),
          keysToRemove: ["query"],
        });

        router.push(newUrl, { scroll: false });
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [router, searchParams, query]);

  return (
    <div className="flex space-x-2 sm:w-[350px] w-full">
      <Input
        className="flex w-full rounded-[16px] border-2 border-stone-500 bg-white px-4 shadow-sm shadow-purple-200/15 md:max-w-96"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
      />
    </div>
  );
};
