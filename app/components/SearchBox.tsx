"use client";

import useAutoSearch from "@/app/hooks/useAutoSearch";

import { ChangeEvent, useCallback, useState } from "react";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const { data } = useAutoSearch(query);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    const keyCode = event.keyCode;
    if (query === "") return;

    if (keyCode === 13) {
      setQuery(data[activeIndex]?.title);
    }

    if (data.length === 0) return;

    if (keyCode === 40) {
      //user down

      if (activeIndex === -1 || activeIndex === data?.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex((prev) => prev + 1);
      }
    } else if (keyCode === 38) {
      // user up
      if (activeIndex === -1 || activeIndex === 0) {
        setActiveIndex(data?.length - 1);
      } else {
        setActiveIndex((prev) => prev - 1);
      }
    }
  };

  return (
    <div className="w-full lg:max-w-[496px] relative">
      <article className="group h-11 lg:h-14 p-4 w-full lg:max-w-[496px] bg-[#f0f0f5] focus-within:bg-white focus-within:rounded-2xl rounded-[12px] focus-within:shadow-input flex items-center gap-3 ">
        <div className="hidden group-focus-within:flex ">
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="rgba(2, 6, 12, 0.75)"
          >
            <path
              d="M7.46869 3.43394C7.79171 3.13249 8.29794 3.14998 8.59939 3.473C8.90083 3.79602 8.88334 4.30225 8.56033 4.60369L5.0839 7.84795C4.94511 7.97748 4.82252 8.0921 4.71414 8.19502L15.0937 8.19502C15.5355 8.19502 15.8937 8.5532 15.8937 8.99502C15.8937 9.43685 15.5355 9.79502 15.0937 9.79502L4.6665 9.79502C4.78625 9.90939 4.92436 10.0386 5.08389 10.1875L8.51791 13.3922C8.84092 13.6937 8.8584 14.1999 8.55695 14.5229C8.2555 14.8459 7.74927 14.8634 7.42626 14.5619L3.95463 11.3221C3.54648 10.9413 3.18179 10.601 2.92647 10.2871C2.64873 9.94573 2.41671 9.53755 2.41672 9.01769C2.41672 8.49783 2.64874 8.08965 2.92648 7.74824C3.18181 7.43439 3.54649 7.09412 3.95465 6.7133L7.46869 3.43394Z"
              fill-opacity="0.92"
            ></path>
          </svg>
        </div>
        <input
          onKeyUp={handleKeyUp}
          onChange={handleChange}
          className="w-full bg-transparent outline-0"
          placeholder="Search for Dishes and Restaurants"
          type="text"
          value={query}
        />

        <div className="flex group-focus-within:hidden ">
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            aria-hidden="true"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M13.0998 8.84232C13.0998 11.7418 10.7493 14.0922 7.84989 14.0922C4.95046 14.0922 2.6 11.7418 2.6 8.84232C2.6 5.94289 4.95046 3.59243 7.84989 3.59243C10.7493 3.59243 13.0998 5.94289 13.0998 8.84232ZM12.1431 14.1802C10.9686 15.1261 9.47534 15.6922 7.84989 15.6922C4.0668 15.6922 1 12.6254 1 8.84232C1 5.05923 4.0668 1.99243 7.84989 1.99243C11.633 1.99243 14.6998 5.05923 14.6998 8.84232C14.6998 10.4974 14.1128 12.0153 13.1357 13.1993L18.319 17.9606C18.7226 18.3313 18.7359 18.9637 18.3483 19.3511C17.9634 19.7357 17.3365 19.7254 16.9645 19.3282L12.1431 14.1802Z"
              fill="rgba(2, 6, 12, 0.6)"
              fill-opacity="0.92"
            ></path>
          </svg>
        </div>
      </article>
      {data.length > 0 && (
        <div className="absolute z-10 w-full bg-white shadow-input  rounded-xl p-4 flex flex-col ">
          {data?.map((item, index) => (
            <div
              onClick={() => setQuery(item.title)}
              key={item.id}
              className={`${
                index === activeIndex ? "bg-blue-400" : ""
              } p-2 cursor-pointer rounded hover:bg-blue-400`}
            >
              {item.title}
            </div>
          ))}
        </div>
      )}
      {query && data.length === 0 && (
        <div className="absolute z-10 w-full bg-white shadow-input  rounded-xl p-4 flex flex-col text-center">
          No Item found
        </div>
      )}
    </div>
  );
};
export default SearchBox;
