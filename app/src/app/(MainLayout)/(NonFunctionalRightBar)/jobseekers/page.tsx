"use client";
import { BottomBar, JobseekerList, Navbar } from "@/components/components";
import SearchSectionWrapper from "@/components/ui/SearchSectionWrapper";
import { useFilterStore } from "@/store/filterStore";
import React, { ChangeEvent, useEffect } from "react";

function JobseekerListPage() {
  const { filters, setFilter } = useFilterStore();
  useEffect(() => {
    return () => {
      setFilter({
        search: "",
        min_requiredExperience: 0,
        min_salary: 0,
        location: "",
        sort: "",
      });
    };
  }, []);
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFilter({
      ...filters,
      search:value
    })

  }
    return (
    <div className="flex flex-col">
      <Navbar className="text-xl mt-3 md:text-2xl md:pl-8">JobSeekers</Navbar>
      <SearchSectionWrapper>
        <input
          type="text"
          placeholder="Search for jobseekers"
          className="bg-transparent px-6 outline-none"
          value={filters.search}
          onChange={handleInputChange}
        />
      </SearchSectionWrapper>
      <JobseekerList/>
      <BottomBar/>

    </div>
  );
}

export default JobseekerListPage;
