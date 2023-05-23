"use client";
import { useState, useEffect } from "react";
import BlogCard from "../components/blogCard";

async function getData() {
  const res = await fetch("http://localhost:3000/api/getPosts", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default function Page() {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseData = await getData();
        setData(responseData);
        setFilteredData(responseData);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchData();
  }, []);


  const filterTags = (searchInput: any) => {
    const filteredData = data.filter((blog: any) => {
      const lowerCaseSearchInput = searchInput.toLowerCase();
      return blog.tags.some((tag: any) =>
        tag.toLowerCase().includes(lowerCaseSearchInput)
      );
    });
    setFilteredData(filteredData);
  };

  const handleSearch = (e: any) => {
    const { value } = e.target;
    setSearchInput(value);
    filterTags(value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Search for a tag"
        value={searchInput}
        onChange={handleSearch}
      />
      <div className="container flex flex-col sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto justify-center items-center gap-4">
        {(searchInput === "" ? data : filteredData).map((blog: any) => (
          <BlogCard
            key={blog.title}
            slug={blog.slug}
            title={blog.title}
            date={blog.date}
            authors={blog.authors}
            metaTitle={blog.metaTitle}
            imageURL={blog.mainImage}
            height={blog.mainImageHeight}
            width={blog.mainImageWidth}
          />
        ))}
      </div>
    </>
  );
}
