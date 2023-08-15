import React from "react";
import SideBar from "../../components/Sidebar/SideBar";
import SearchPageContent from "../../components/SearchPageContent/SearchPageContent.";
import "./searchResultPage.css";
function SearchResultPage() {
  return (
    <div className="searchResult-content">
      <SideBar />
      <SearchPageContent />
    </div>
  );
}

export default SearchResultPage;
