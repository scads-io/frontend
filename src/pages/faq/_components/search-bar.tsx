"use client";

import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

interface SearchBarProps {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchValue,
  setSearchValue,
}) => {
  const [inputValue, setInputValue] = useState(searchValue);

  const handleSearch = (event: FormEvent) => {
    event.preventDefault();
    setSearchValue(inputValue);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleBlur = () => {
    setSearchValue(inputValue);
  };

  const handleClear = () => {
    setInputValue("");
    setSearchValue("");
  };

  useEffect(() => {
    if (inputValue === "") {
      setSearchValue("");
    }
  }, [inputValue, setSearchValue]);

  return (
    <form
      onSubmit={handleSearch}
      className="mx-auto flex w-fit items-center gap-x-2 rounded-3xl bg-white/10 px-4 py-3"
    >
      <Button
        type="submit"
        size="icon"
        variant="ghost"
        className="size-fit p-0 hover:bg-transparent"
      >
        <Search
          strokeWidth={1.5}
          className="text-white transition-opacity hover:opacity-70"
        />
      </Button>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Search here..."
        className="bg-transparent text-white focus:outline-none md:w-96"
      />
      <Button
        type="button"
        size="icon"
        variant="ghost"
        onClick={handleClear}
        className="size-fit p-0 hover:bg-transparent"
      >
        <X className="size-4 text-white transition-opacity hover:opacity-70" />
      </Button>
    </form>
  );
};

export default SearchBar;
