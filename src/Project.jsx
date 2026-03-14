import React, {
  useState,
  useMemo,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router";
import {ToastContainer} from 'react-toastify';
import {Navigate, useNavigate} from 'react-router';
import { Routes, Route } from "react-router";

import {
  Search,
  MapPin,
  Flag,
  User,
  LogIn,
  ChevronRight,
  X,
  Briefcase,
  Pencil,
  LayoutGrid,
  Zap,
  Globe,
  DollarSign,
  Home,
  Filter,
  Send,
  Users,
  ClipboardList,
  CheckCircle,
} from "lucide-react";
import { handleError, handleSuccess } from "./Utils";

// --- Localization Data ---
const LANGUAGES = [
  { code: "en", name: "English", country: "United States", flag: "🇺🇸" },
  { code: "hi", name: "Hindi", country: "India", flag: "🇮🇳" },
  { code: "es", name: "Spanish", country: "Spain", flag: "🇪🇸" },
  { code: "fr", name: "French", country: "France", flag: "🇫🇷" },
];

const dictionary = {
  en: {
    search_placeholder: "Search Job Titles, Companies, or Keywords...",
    sign_in: "Sign In",
    sign_up: "Sign Up",
    country_name: "India",
    find_dream_job: "Find Your Dream Job Today",
    explore_opportunities:
      "Explore thousands of opportunities from top companies across India.",
    my_profile: "My Profile", // CHANGED
    find_companies: "Find Companies",
    explore_categories: "Explore Job Categories",
    browse_jobs: "Browse jobs by your preferred industry or field.",
    works_title: "How JiViKa Works",
    works_subtitle: "A simple 3-step process to land your next job.",
    step_1_title: "Create Profile",
    step_1_desc:
      "Build a professional profile and upload your resume in minutes.",
    step_2_title: "Search & Apply",
    step_2_desc:
      "Filter jobs by location or title and apply directly to your favorites.",
    step_3_title: "Get Hired",
    step_3_desc: "Connect with employers and land your dream job offer.",
    view_openings: "View Openings",
    discover_employers: "Discover Top Employers",
    explore_companies:
      "Explore companies hiring now and find your perfect organizational fit.",
    browse_all: "Browse All Companies", // MODIFIED
    view_jobs: "View Jobs",
    show_top: "Show Top Companies", // NEW
    // New Job Seekers strings
    job_seekers_title: "Latest Job Openings",
    job_seekers_subtitle:
      "Search, filter, and apply to jobs that match your career goals.",
    filters_title: "Filter Jobs",
    filter_location: "Location",
    filter_industry: "Industry",
    filter_salary: "Salary Range",
    apply_now: "Apply Now",
    full_time: "Full-Time",
    part_time: "Part-Time",
    view_details: "View Details",
    clear_filters: "Clear Filters",
    salary_lpa: "LPA (Annual)",
    applied_successfully: "Applied Successfully", // NEW
    // New Employers strings
    employers_title: "Employer Portal",
    employer_dashboard: "Recruitment Dashboard",
    post_job: "Post a New Job",
    active_listings: "Active Listings",
    total_applicants: "Total Applicants",
    hires_made: "Hires Made",
    job_title: "Job Title",
    job_description: "Job Description",
    job_requirements: "Job Requirements",
    submit_job: "Submit Job Posting",
    post_job_form_title: "Create Job Listing",
    post_job_form_subtitle:
      "Fill out the form below to publish your job opening instantly.",
    // UPDATED: Profile Builder strings
    profile_title: "Build Your Professional Profile", // CHANGED
    profile_subtitle: "Create, edit, and manage your complete career profile.", // CHANGED
    personal_info_title: "Personal Information",
    education_title: "Education History",
    experience_title: "Work Experience",
    skills_title: "Key Skills & Competencies",
    name_placeholder: "Full Name",
    email_placeholder: "Email Address",
    phone_placeholder: "Phone Number",
    city_placeholder: "City, Country",
    job_title_placeholder: "Professional Title (e.g., Senior Developer)",
    school_placeholder: "Institution/University Name",
    degree_placeholder: "Degree/Field of Study",
    grad_year_placeholder: "Graduation Year",
    company_placeholder: "Company Name",
    job_role_placeholder: "Job Role/Position",
    start_date_placeholder: "Start Date (MM/YYYY)",
    end_date_placeholder: "End Date (MM/YYYY) or Present",
    job_desc_placeholder:
      "Key Achievements/Responsibilities (Bullet points, one per line)",
    skills_placeholder:
      "List skills separated by commas (e.g., React, Python, AWS)",
    download_resume: "Download Profile (PDF)", // CHANGED
    view_preview: "Live Preview",
    edit_form: "Edit Form",
  },
  hi: {
    search_placeholder: "जॉब टाइटल, कंपनी, या कीवर्ड खोजें...",
    sign_in: "साइन इन करें",
    sign_up: "साइन अप करें",
    country_name: "भारत",
    find_dream_job: "आज ही अपना सपनों का करियर ढूंढें",
    explore_opportunities: "भारत भर की शीर्ष कंपनियों से हजारों अवसर खोजें।",
    my_profile: "मेरी प्रोफ़ाइल", // CHANGED
    find_companies: "कंपनियां ढूंढें",
    explore_categories: "जॉब श्रेणियां खोजें",
    browse_jobs: "अपने पसंदीदा उद्योग या क्षेत्र के अनुसार जॉब्स ब्राउज़ करें।",
    works_title: "जीविका कैसे काम करता है",
    works_subtitle: "अपनी अगली नौकरी पाने के लिए एक सरल 3-चरणीय प्रक्रिया।",
    step_1_title: "प्रोफ़ाइल बनाएं",
    step_1_desc:
      "एक पेशेवर प्रोफ़ाइल बनाएं और मिनटों में अपना रिज्यूमे अपलोड करें।",
    step_2_title: "खोजें और आवेदन करें",
    step_2_desc:
      "स्थान या शीर्षक के अनुसार नौकरियों को फ़िल्टर करें और सीधे अपनी पसंदीदा नौकरियों के लिए आवेदन करें।",
    step_3_title: "हायर हो जाएं",
    step_3_desc:
      "नियोक्ताओं से जुड़ें और अपने सपनों की नौकरी का प्रस्ताव प्राप्त करें।",
    view_openings: "रिक्तियां देखें",
    discover_employers: "शीर्ष नियोक्ताओं को खोजें",
    explore_companies:
      "अभी हायरिंग करने वाली कंपनियों को एक्सप्लोर करें और अपना सही संगठनात्मक फिट खोजें।",
    browse_all: "सभी कंपनियां ब्राउज़ करें", // MODIFIED
    view_jobs: "जॉब्स देखें",
    show_top: "शीर्ष कंपनियां दिखाएं", // NEW
    // New Job Seekers strings
    job_seekers_title: "नवीनतम नौकरी के अवसर",
    job_seekers_subtitle:
      "अपने करियर लक्ष्यों से मेल खाने वाली नौकरियों को खोजें, फ़िल्टर करें और आवेदन करें।",
    filters_title: "जॉब फ़िल्टर करें",
    filter_location: "स्थान",
    filter_industry: "उद्योग",
    filter_salary: "वेतन सीमा",
    apply_now: "अभी आवेदन करें",
    full_time: "पूर्णकालिक",
    part_time: "अंशकालिक",
    view_details: "विवरण देखें",
    clear_filters: "फ़िल्टर साफ़ करें",
    salary_lpa: "एलपीए (वार्षिक)",
    applied_successfully: "आवेदन किया गया", // NEW
    // New Employers strings
    employers_title: "नियोक्ता पोर्टल",
    employer_dashboard: "भर्ती डैशबोर्ड",
    post_job: "नई नौकरी पोस्ट करें",
    active_listings: "सक्रिय लिस्टिंग",
    total_applicants: "कुल आवेदक",
    hires_made: "की गई भर्तियाँ",
    job_title: "जॉब शीर्षक",
    job_description: "जॉब विवरण",
    job_requirements: "जॉब आवश्यकताएँ",
    submit_job: "जॉब पोस्टिंग जमा करें",
    post_job_form_title: "जॉब लिस्टिंग बनाएं",
    post_job_form_subtitle:
      "अपनी नौकरी के उद्घाटन को तुरंत प्रकाशित करने के लिए नीचे दिए गए फॉर्म को भरें।",
    // UPDATED: Profile Builder strings
    profile_title: "अपनी पेशेवर प्रोफ़ाइल बनाएं", // CHANGED
    profile_subtitle:
      "मिनटों में अपनी संपूर्ण करियर प्रोफ़ाइल बनाएं, संपादित करें और प्रबंधित करें।", // CHANGED
    personal_info_title: "व्यक्तिगत जानकारी",
    education_title: "शिक्षा इतिहास",
    experience_title: "कार्य अनुभव",
    skills_title: "मुख्य कौशल और क्षमताएं",
    name_placeholder: "पूरा नाम",
    email_placeholder: "ईमेल पता",
    phone_placeholder: "फ़ोन नंबर",
    city_placeholder: "शहर, देश",
    job_title_placeholder: "पेशेवर शीर्षक (जैसे, सीनियर डेवलपर)",
    school_placeholder: "संस्थान/विश्वविद्यालय का नाम",
    degree_placeholder: "डिग्री/अध्ययन क्षेत्र",
    grad_year_placeholder: "स्नातक वर्ष",
    company_placeholder: "कंपनी का नाम",
    job_role_placeholder: "जॉब भूमिका/पद",
    start_date_placeholder: "शुरुआत की तारीख (MM/YYYY)",
    end_date_placeholder: "समाप्ति की तारीख (MM/YYYY) या वर्तमान",
    job_desc_placeholder:
      "मुख्य उपलब्धियां/जिम्मेदारियां (बुलेट पॉइंट, प्रति पंक्ति एक)",
    skills_placeholder:
      "कॉमा से अलग किए गए कौशल सूचीबद्ध करें (जैसे, रिएक्ट, पायथन, AWS)",
    download_resume: "प्रोफ़ाइल डाउनलोड करें (PDF)", // CHANGED
    view_preview: "लाइव पूर्वावलोकन",
    edit_form: "फ़ॉर्म संपादित करें",
  },
};
// --- Mock Data ---
const availableKeywords = [
  "company",
  "location",
  "tcs",
  "the online job portal",
  "jivika",
  "best job",
  "Google",
  "Microsoft",
  "Apple",
  "Linked In",
  "Oracle",
  "Finance",
  "Creative Design",
  "GIS Mapping",
  "Construction",
  "Software Developer",
  "Project Manager",
  "Data Scientist",
  "create my profile", // CHANGED: For My Profile section
  "post a new job", // For Employers
  "about us", // For About Us
];

const mockCompanies = [
  {
    id: 1,
    name: "Google",
    jobs: 350,
    logoUrl: "https://placehold.co/60x60/4285F4/FFFFFF/png?text=G",
    description: "Innovating the future of technology and information access.",
  },
  {
    id: 2,
    name: "Microsoft",
    jobs: 210,
    logoUrl: "https://placehold.co/60x60/F25022/FFFFFF/png?text=M",
    description:
      "Empowering every person and organization on the planet to achieve more.",
  },
  {
    id: 3,
    name: "TCS",
    jobs: 580,
    logoUrl: "https://placehold.co/60x60/003C5C/FFFFFF/png?text=T",
    description:
      "Global leader in IT services, consulting, and business solutions across industries.",
  },
  {
    id: 4,
    name: "Linked In",
    jobs: 150,
    logoUrl: "https://placehold.co/60x60/0A66C2/FFFFFF/png?text=L",
    description:
      "Connecting the world's professionals to make them more productive and successful.",
  },
  {
    id: 5,
    name: "Oracle",
    jobs: 95,
    logoUrl: "https://placehold.co/60x60/F80000/FFFFFF/png?text=O",
    description:
      "Providing the best in cloud infrastructure and enterprise database technology.",
  },
  {
    id: 6,
    name: "Apple",
    jobs: 180,
    logoUrl: "https://placehold.co/60x60/000000/FFFFFF/png?text=A",
    description:
      "Designing the world's most innovative consumer electronics and software.",
  },
];

const mockJobs = [
  {
    id: 101,
    title: "Senior React Developer",
    company: "Google",
    location: "Bangalore",
    salary: "30",
    industry: "IT/Software",
    type: "Full-Time",
    posted: "2 days ago",
    description:
      "Lead development of user-facing features using modern React frameworks. Requires 5+ years of experience.",
    requirements: [
      "React, Redux, Node.js",
      "Strong testing skills",
      "CI/CD experience",
    ],
  },
  {
    id: 102,
    title: "Data Scientist",
    company: "Microsoft",
    location: "Hyderabad",
    salary: "22",
    industry: "Data/AI",
    type: "Full-Time",
    posted: "5 days ago",
    description:
      "Apply machine learning techniques to solve complex business problems. Master's degree required.",
    requirements: [
      "Python, Pandas, NumPy",
      "Machine Learning algorithms",
      "Cloud computing experience",
    ],
  },
  {
    id: 103,
    title: "Project Manager",
    company: "TCS",
    location: "Pune",
    salary: "15",
    industry: "Management",
    type: "Full-Time",
    posted: "1 week ago",
    description:
      "Manage large-scale IT projects, ensuring delivery on time and within budget.",
    requirements: [
      "PMP certification",
      "Excellent communication",
      "5 years in project management",
    ],
  },
  {
    id: 104,
    title: "Creative Designer",
    company: "Linked In",
    location: "Mumbai",
    salary: "12",
    industry: "Creative Design",
    type: "Part-Time",
    posted: "3 hours ago",
    description:
      "Develop compelling visual content for marketing campaigns and platform UI/UX.",
    requirements: [
      "Adobe Creative Suite",
      "Portfolio required",
      "UX/UI principles",
    ],
  },
  {
    id: 105,
    title: "GIS Mapping Engineer",
    company: "Oracle",
    location: "Chennai",
    salary: "18",
    industry: "Engineering",
    type: "Full-Time",
    posted: "3 weeks ago",
    description:
      "Utilize GIS software to analyze spatial data and develop mapping solutions.",
    requirements: [
      "ArcGIS/QGIS proficiency",
      "Geospatial data analysis",
      "SQL knowledge",
    ],
  },
  {
    id: 106,
    title: "Construction Site Supervisor",
    company: "Larsen & Toubro",
    location: "Delhi",
    salary: "10",
    industry: "Construction",
    type: "Full-Time",
    posted: "1 day ago",
    description:
      "Oversee daily site operations, manage labor, and ensure safety compliance.",
    requirements: [
      "Civil Engineering degree",
      "Site management experience",
      "Safety certifications",
    ],
  },
  {
    id: 107,
    title: "Junior Software Engineer",
    company: "Apple",
    location: "Bangalore",
    salary: "18",
    industry: "IT/Software",
    type: "Full-Time",
    posted: "3 days ago",
    description:
      "Assist in coding, testing, and deploying new features for flagship products.",
    requirements: [
      "Java/Swift/C++",
      "Problem-solving skills",
      "Basic data structures",
    ],
  },
];

const allLocations = [...new Set(mockJobs.map((job) => job.location))].sort();
const allIndustries = [...new Set(mockJobs.map((job) => job.industry))].sort();

// --- Profile Builder Helper Components (Memoized for Stability) ---
// FIX 1: Refactor to accept 'value' directly instead of 'profileData'
// This ensures the input only re-renders when its *specific* value changes.
const MemoizedInputField = React.memo(
  ({
    label,
    name,
    placeholder,
    section,
    id,
    type = "text",
    rows,
    value, // CHANGED: Accept value directly
    handleProfileChange,
  }) => {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          {label}
        </label>
        {rows ? (
          <textarea
            name={name}
            placeholder={placeholder}
            rows={rows}
            value={value || ""} // Use the direct value prop
            onChange={(e) =>
              handleProfileChange(section, name, e.target.value, id)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
          ></textarea>
        ) : (
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={value || ""} // Use the direct value prop
            onChange={(e) =>
              handleProfileChange(section, name, e.target.value, id)
            }
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
          />
        )}
      </div>
    );
  }
);

const MemoizedArraySection = React.memo(
  ({
    sectionKey,
    title,
    fields,
    profileData, // Still needed to map over array items
    t,
    addSection,
    removeSection,
    handleProfileChange,
  }) => (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-bold text-[#387780] mb-4">{title}</h3>
      {profileData[sectionKey].map((item, index) => (
        <div
          key={item.id}
          className={`p-4 border-l-4 border-[#ff9933] bg-gray-50 rounded-lg mb-4 ${
            index > 0 ? "mt-6" : ""
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <h4 className="font-semibold text-lg text-gray-700">
              {title} Entry #{index + 1}
            </h4>
            {profileData[sectionKey].length > 1 && (
              <button
                onClick={() => removeSection(sectionKey, item.id)}
                className="text-red-500 hover:text-red-700 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field) => (
              <MemoizedInputField
                key={field.name}
                label={field.label}
                name={field.name}
                placeholder={field.placeholder}
                section={sectionKey}
                id={item.id}
                rows={field.rows}
                // FIX 2: Pass the specific value from the item
                value={item[field.name]}
                // profileData is NO LONGER PASSED
                handleProfileChange={handleProfileChange}
              />
            ))}
          </div>
        </div>
      ))}
      <button
        onClick={() => addSection(sectionKey)}
        className="mt-4 bg-[#387780]/10 text-[#387780] font-medium py-2 px-4 rounded-full hover:bg-[#387780]/20 transition duration-150 flex items-center"
      >
        <Pencil className="w-4 h-4 mr-2" /> Add{" "}
        {sectionKey === "education"
          ? t("school_placeholder")
          : t("job_role_placeholder")}
      </button>
    </div>
  )
);

const MemoizedProfileSummary = React.memo(
  (
    { data, t } // RENAMED
  ) => (
    <div className="p-8 bg-white border border-gray-200 shadow-xl rounded-xl">
      <div className="p-6 border-b-4 border-[#387780] mb-6">
        <h1 className="text-4xl font-extrabold text-[#387780]">
          {data.personal.name || "Your Name"}
        </h1>
        <p className="text-xl font-semibold text-[#ff9933] mt-1">
          {data.personal.title || t("job_title_placeholder")}
        </p>
        <div className="flex flex-wrap gap-x-6 text-sm text-gray-600 mt-2">
          {data.personal.email && (
            <span className="flex items-center">
              <User className="w-3 h-3 mr-1" /> {data.personal.email}
            </span>
          )}
          {data.personal.phone && (
            <span className="flex items-center">
              <Zap className="w-3 h-3 mr-1" /> {data.personal.phone}
            </span>
          )}
          {data.personal.city && (
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" /> {data.personal.city}
            </span>
          )}
        </div>
      </div>

      {/* Education */}
      {data.education.some((edu) => edu.school) && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#ff9933] pb-1 mb-3">
            {t("education_title")}
          </h2>
          {data.education.map(
            (edu) =>
              edu.school && (
                <div key={edu.id} className="mb-3">
                  <h3 className="font-semibold text-lg text-gray-700">
                    {edu.degree}
                  </h3>
                  <p className="text-md text-gray-600">
                    {edu.school} {edu.year && `(${edu.year})`}
                  </p>
                </div>
              )
          )}
        </div>
      )}

      {/* Experience */}
      {data.experience.some((exp) => exp.company) && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#ff9933] pb-1 mb-3">
            {t("experience_title")}
          </h2>
          {data.experience.map(
            (exp) =>
              exp.company && (
                <div key={exp.id} className="mb-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-lg text-gray-700">
                      {exp.role} at {exp.company}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {exp.start} - {exp.end}
                    </span>
                  </div>
                  {exp.description && (
                    <ul className="list-disc list-inside space-y-1 text-gray-600 text-sm mt-1 pl-4">
                      {exp.description.split("\n").map((line, i) => (
                        <li key={i}>{line.trim()}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )
          )}
        </div>
      )}

      {/* Skills */}
      {data.skills && (
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800 border-b-2 border-[#ff9933] pb-1 mb-3">
            {t("skills_title")}
          </h2>
          <p className="text-gray-700">{data.skills}</p>
        </div>
      )}
    </div>
  )
);
// --- End of Profile Builder Helper Components ---

// --- Components Moved Outside Project to Stabilize Rendering ---

// Language Dropdown Component
const LanguageDropdown = ({
  currentCountry,
  currentLang,
  isLangDropdownOpen,
  setIsLangDropdownOpen,
  setCurrentLang,
  LANGUAGES,
}) => (
  <div className="relative z-50">
    <button
      onClick={() => setIsLangDropdownOpen((prev) => !prev)}
      className="text-white flex items-center bg-gray-600/30 p-2 rounded-full transition duration-300 hover:bg-gray-600/50"
    >
      <span className="text-xl mr-2">{currentCountry.flag}</span>
      <span className="text-sm font-medium hidden sm:block">
        {currentCountry.name}
      </span>
      <ChevronRight
        className={`w-4 h-4 ml-1 transition-transform ${
          isLangDropdownOpen ? "rotate-90" : "rotate-0"
        }`}
      />
    </button>

    {isLangDropdownOpen && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
        {LANGUAGES.map((lang) => (
          <div
            key={lang.code}
            onClick={() => {
              setCurrentLang(lang.code);
              setIsLangDropdownOpen(false);
            }}
            className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 transition duration-100 ${
              currentLang === lang.code
                ? "bg-gray-50 font-semibold text-[#387780]"
                : "text-gray-700"
            }`}
          >
            <span className="text-xl mr-3">{lang.flag}</span>
            {lang.name}{" "}
            {lang.code === "hi" && (
              <span className="text-xs text-gray-400 ml-auto">
                (Translated)
              </span>
            )}
          </div>
        ))}
      </div>
    )}
  </div>
);

// FIX 3: Move NavBar outside and wrap in React.memo
const NavBar = React.memo(

  ({
    t,
    searchText,
    handleSearch,
    searchResults,
    searchInputRef,
    selectKeyword,
    setActiveTab,
    activeTab,
    openAuthModal,
    currentCountry,
    currentLang,
    isLangDropdownOpen,
    setIsLangDropdownOpen,
    setCurrentLang,
  
  }) => (
    <nav className="bg-[#387780] shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Logo (Left) */}
          <div className="flex-shrink-0">
            <span
              className="text-white text-3xl font-extrabold tracking-wider cursor-pointer"
              onClick={() => setActiveTab("Home")}
            >
              <span className="text-[#ff9933] text-5xl">J</span>iViKa
            </span>
          </div>

          {/* 2. Main Search Bar (Center) - Visible on all screens */}
          {/* <div className="flex-1 max-w-lg mx-4 relative hidden md:block">
            <div className="flex items-center bg-white rounded-lg shadow-inner border border-gray-200">
              <Search className="text-gray-400 w-5 h-5 ml-4" /> */}
              {/* Input is a controlled component, memoization fixes the jump */}
              {/* <input
                id="input-box"
                type="text"
                placeholder={t("search_placeholder")}
                value={searchText}
                onChange={(e) => handleSearch(e.target.value)}
                ref={searchInputRef}
                className="w-full p-3 pl-2 pr-12 text-gray-800 rounded-lg focus:outline-none bg-transparent"
              />
              <button className="bg-[#ff9933] text-white p-3 rounded-r-lg hover:bg-opacity-90 transition duration-150 absolute right-0 top-0 bottom-0">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div> */}

            {/* Autocomplete Results Box */}
            {/* {searchResults.length > 0 && (
              <ul className="absolute z-40 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    onClick={() => selectKeyword(result)}
                    className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-100 border-b border-gray-100 last:border-b-0"
                  >
                    {result}
                  </li>
                ))}
              </ul>
            )}
          </div> */}

          {/* 3. Right Side - Flag and Auth Buttons */}
          <div className="flex items-center space-x-4">
            {/* 3a. Flag/Location Indicator */}
            <LanguageDropdown
              currentCountry={currentCountry}
              currentLang={currentLang}
              isLangDropdownOpen={isLangDropdownOpen}
              setIsLangDropdownOpen={setIsLangDropdownOpen}
              setCurrentLang={setCurrentLang}
              LANGUAGES={LANGUAGES}
            />

            {/* 3b. Sign In / Sign Up Buttons */}
           
           <Link to = "signin"><button
              onClick={() => openAuthModal("signIn")}
              // onClick={() => navigate("/login")}
              className="bg-white text-[#387780] font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-gray-100 shadow-md flex items-center"
            >
            
              <LogIn className="w-4 h-4 mr-2" /> {t("sign_in")}
            
            </button></Link> 
            <Link to = "/singup" ><button
              onClick={() => openAuthModal("signUp")}
              // onClick={() => navigate("/signup")}
              className="bg-[#ff9933] text-white font-semibold py-2 px-4 rounded-full transition duration-300 hover:bg-[#e68a00] shadow-md flex items-center hidden sm:flex"
            >
              <User className="w-4 h-4 mr-2" /> {t("sign_up")}
            </button> </Link>
           
          </div>
        </div>
      </div>
      {/* Sub-Navigation Bar (Below Header) */}
      <div className="bg-[#ff9933] shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 h-12">
            {[
              "Home",
              "Job Seekers",
              "Employers",
              "Companies",
              "My Profile", // CHANGED
              // "Resume Building",
              "About Us",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`text-white text-sm font-medium transition duration-150 border-b-2 ${
                  activeTab === item
                    ? "border-white"
                    : "border-transparent hover:border-gray-100/50"
                }`}
              >
                {item === "Home" ? (
                  <Home className="w-4 h-4 inline mr-1" />
                ) : (
                  ""
                )}
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
);

const HeroSection = React.memo(
  ({
    t,
    searchText,
    handleSearch,
    searchResults,
    searchInputRef,
    selectKeyword,
    setActiveTab,
  }) => (
    <div className="bg-[#387780] py-20 text-white shadow-xl">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">
          {t("find_dream_job")}
        </h1>
        <p className="text-xl opacity-90 mb-10">
          {t("explore_opportunities")}
        </p>

        {/* Search Bar (Larger version) */}
        <div className="relative max-w-2xl mx-auto">
          <div className="flex items-center bg-white rounded-xl shadow-2xl border-4 border-[#ff9933]">
            <Search className="text-gray-400 w-6 h-6 ml-6" />
            {/* Input is a controlled component, memoization fixes the jump */}
            <input
              type="text"
              placeholder={t("search_placeholder")}
              value={searchText}
              onChange={(e) => handleSearch(e.target.value)}
              ref={searchInputRef} // Attach ref
              className="w-full p-4 pl-4 pr-16 text-gray-800 rounded-xl focus:outline-none bg-transparent text-lg"
            />
            <button className="bg-[#ff9933] text-white p-4 rounded-r-xl hover:bg-opacity-90 transition duration-150 absolute right-0 top-0 bottom-0">
              <ChevronRight className="w-7 h-7" />
            </button>
          </div>

          {/* Autocomplete Results Box (Larger for Hero) */}
          {searchResults.length > 0 && (
            <ul className="absolute z-40 w-full mt-3 bg-white border border-gray-200 rounded-lg shadow-xl max-h-60 overflow-y-auto left-0 right-0 mx-auto">
              {searchResults.map((result, index) => (
                <li
                  key={index}
                  onClick={() => selectKeyword(result)}
                  className="p-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition duration-100 border-b border-gray-100 last:border-b-0 text-left"
                >
                  {result}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="flex justify-center space-x-4 mt-8">
          <button
            onClick={() => setActiveTab("My Profile")} // CHANGED: Navigates to My Profile
            className="bg-[#ff9933] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            {t("my_profile")}
          </button>
          <button
            onClick={() => setActiveTab("Companies")}
            className="bg-white text-[#387780] font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            {t("find_companies")}
          </button>
        </div>
      </div>
    </div>
  )
);

const AuthModal = React.memo(({ isOpen, onClose, mode, setMode, t }) => {
  if (!isOpen) return null;
  // <Routes>
  //   <Route path="/" element = {<Navigate to = "/signIn" />} />
  //   <Route path="/signin" element = {<signIn />} />
  //   <Route  path="/signup" element = {<User />}  />
  // </Routes>
  const [authMode, setAuthMode] = useState("signIn");
  const [statusMessage, setStatusMessage] = useState('');
  const handleSignup = async (e) =>{
    e.preventDefault();
    const {name, email, password} = signupInfo;
    if(!name || !email || !password){
      return handleError('name, email and password are required');
    }
    try{
      const url = "http://localhost:8080/auth/signup";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(signupInfo)
      })
      const result = await response.json();
      const {success, message} = result;
      if(success){
        handleSuccess(message);
        setTimeout(() => {
         
          setMode("signIn");
          navigate('/login');
          setStatusMessage('');
        },1000)
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
      console.log(result);
    }catch(err){
      handleError(err);
    }
  }
  const [signupInfo , setSignupInfo] = useState({
    name:'',
    email:'',
    password:''
  });
 const navigate = useNavigate();
  const handleChange = (e) =>{
    const {name, value} = e.target;
    console.log(value);
    const copySignupInfo = {...signupInfo};
    copySignupInfo[name] = value;
    setSignupInfo(copySignupInfo);
  }
//login form
const [activeTab, setActiveTab] = useState("Home");
  const handleLogin = async (e) =>{
    e.preventDefault();
    const { email, password} = loginInfo;
     
    if(!email || !password){
      return handleError('email and password are required');
    }
    try{
      const url = "http://localhost:8080/auth/login";
      const response = await fetch(url,{
        method:"POST",
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(loginInfo)
      })
      const result = await response.json();
      const {success, message, jwtToken, name, error} = result;
       if(success){
        handleSuccess(message);
        localStorage.setItem('token', jwtToken);
        localStorage.setItem('loggedInUser', name);
        setTimeout(() => {
          
          onClose();
          navigate('/');
          navigate('/home');
          
        },1000)
      }else if(error){
        const details = error?.details[0].message;
        handleError(details);
      }else if(!success){
        handleError(message);
      }
      console.log(result);
    }
    catch(err){
      handleError(err);
    }

    //for avoiding error
  
  }
  const [loginInfo , setLoginInfo] = useState({
    email:'',
    password:''
  });

  const handleChanges = (e) =>{
    const {name, value} = e.target;
    console.log(value);
    const copyLoginInfo = {...loginInfo};
    copyLoginInfo[name] = value;
    setLoginInfo(copyLoginInfo);
  }

  // console.log('signupInfo->', signupInfo);

  const title = mode === "signIn" ? "Welcome Back!" : "Join JiViKa";
  const formContent = mode === "signIn" ? (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <form  onSubmit={handleLogin}>
      <input
        onChange={handleChanges}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387780] focus:border-transparent transition duration-150"
        type="email"
        placeholder="Email Address"
        name = 'email'
        value={loginInfo.email}
      />
      <input
        onChange={handleChanges}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387780] focus:border-transparent transition duration-150"
        type="password"
        placeholder="Password"
        name = 'password'
        value={loginInfo.password}
      />
     <Link to = "/signin"> <button className="w-full cursor-pointer bg-[#ff9933] text-white font-bold py-3 rounded-full hover:bg-[#e68a00] transition duration-150 shadow-lg">
        {t("sign_in")}
      </button></Link>
      <p className="text-center text-sm text-gray-600 mt-4">
        Don't have an account?{" "}
        <Link to = "/signup"><button
          onClick={() => setMode("signUp")}
          className="text-[#387780] cursor-pointer font-semibold cur hover:text-[#ff9933] transition"
        >
          {t("sign_up")}
        </button></Link>
      </p>
      </form>
      <ToastContainer />
    </>
  ) : (
    <>
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
      <form onSubmit={handleSignup}>
   
      <input
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387780] focus:border-transparent transition duration-150"
        type="text"
        placeholder="Full Name"
        name='name'
        value={signupInfo.name}
      />
      <input
        onChange={handleChange}
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387780] focus:border-transparent transition duration-150"
        type="email"
        placeholder="Email Address"
        name = 'email'
        value={signupInfo.email}
      />
      <input
        onChange={handleChange}
        className="w-full p-3 mb-6 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#387780] focus:border-transparent transition duration-150"
        type="password"
        placeholder="Create Password"
        name = 'password'
        value={signupInfo.password}
      />
      <button type='submit' className="w-full cursor-pointer bg-[#387780] text-white font-bold py-3 rounded-full hover:bg-[#2c6369] transition duration-150 shadow-lg">
        {t("sign_up")}
      </button>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account?{" "}
        <button
          onClick={() => setMode("signIn")}
         
          className="cursor-pointer text-[#ff9933] font-semibold hover:text-[#387780] transition"
        >
          {t("sign_in")}
        </button>
      </p>
      
      </form>
      <ToastContainer />
    </>
  );

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[100]"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-sm w-full p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <span className="text-[#387780] text-3xl font-extrabold tracking-wider">
            <span className="text-[#ff9933] text-5xl">J</span>iViKa
          </span>
        </div>
        {formContent}
      </div>
    </div>
  );
});
// (Other Section components like JobSeekersSection, Footer, etc., should also be moved outside
// and memoized for best practice, but for a minimal fix, we'll keep the rest here
// if they don't contain inputs with cursor issues or severe performance problems.)

// --- Main Application Component ---
const Project = () => {
  // ADDED: Ref for Search Input to handle focus persistence
  const searchInputRef = useRef(null);

  // State for Search Functionality
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // State for Authentication Modal
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signIn"); // 'signIn' or 'signUp'

  // State for Navigation (simulating page change)
  const [activeTab, setActiveTab] = useState("Home");

  // State for Localization
  const [currentLang, setCurrentLang] = useState("en");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // NEW: State for Companies Section
  const [showAllCompanies, setShowAllCompanies] = useState(false);

  // State for Job Seekers Filters (MODIFIED: Added search)
  const [jobFilters, setJobFilters] = useState({
    location: "",
    industry: "",
    salary: 0, // Minimum salary in LPA
    search: "", // ADDED: For search bar query
  });
  const [selectedJob, setSelectedJob] = useState(null);
  const [isJobModalOpen, setIsJobModalOpen] = useState(false);

  // NEW: State to track applied jobs
  const [appliedJobs, setAppliedJobs] = useState(new Set());

  // Profile Data State (Refactored from resumeData)
  const [profileData, setProfileData] = useState({
    personal: { name: "", title: "", email: "", phone: "", city: "" },
    education: [{ id: 1, school: "", degree: "", year: "" }],
    experience: [
      { id: 1, company: "", role: "", start: "", end: "", description: "" },
    ],
    skills: "",
  });
  const [previewMode, setPreviewMode] = useState(false); // To toggle between form and summary

  // Translation Function
  const t = useCallback(
    (key) => dictionary[currentLang]?.[key] || dictionary["en"][key],
    [currentLang]
  );
  const currentCountry = useMemo(
    () => LANGUAGES.find((lang) => lang.code === currentLang),
    [currentLang]
  );

  // ADDED: Company Names Memo for quick search check
  const companyNames = useMemo(
    () => mockCompanies.map((c) => c.name.toLowerCase()),
    []
  );

  // NEW: Expanded list for "Browse All" feature
  const expandedMockCompanies = useMemo(() => {
    // Duplicate the 6 companies to make 12 for better visual effect on "Browse All"
    return [
      ...mockCompanies,
      ...mockCompanies.map((c, index) => ({
        ...c,
        id: c.id + 10 + index,
        name: `Global ${c.name}`,
        jobs: c.jobs + 50 + index * 5,
        logoUrl: c.logoUrl
          .replace("60x60", "60x60")
          .replace(c.name.charAt(0), "G"),
        description: `A multinational extension of ${c.name}. ${c.description}`,
      })),
      {
        // Add one more to hit "13" for a different number
        id: 20,
        name: "Larsen & Toubro",
        jobs: 400,
        logoUrl: "https://placehold.co/60x60/0047AB/FFFFFF/png?text=L",
        description:
          "An Indian multinational conglomerate with interests in construction, technology, and finance.",
      },
    ];
  }, []); // Re-calculate only if mockCompanies changes

  // Handle Search Logic (for NavBar/Hero Search)
  const handleSearch = useCallback((input) => {
    setSearchText(input);
    if (input.length > 1) {
      const results = availableKeywords.filter((keyword) =>
        keyword.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, []);

  // Select Autocomplete Result (MODIFIED: Added navigation logic)
  const selectKeyword = (keyword) => {
    const lowerKeyword = keyword.toLowerCase();

    setSearchResults([]);
    console.log(`Searching for: ${keyword}`);

    // Logic to determine which tab to open
    if (
      lowerKeyword.includes("company") ||
      lowerKeyword.includes("employer") ||
      companyNames.includes(lowerKeyword)
    ) {
      setActiveTab("Companies");
      setSearchText(""); // Clear search text after navigation
    } else if (
      lowerKeyword.includes("profile") ||
      lowerKeyword.includes("resume")
    ) {
      // UPDATED for 'profile'
      setActiveTab("My Profile");
      setSearchText(""); // Clear search text after navigation
    } else if (
      lowerKeyword.includes("post a new job") ||
      lowerKeyword.includes("employer")
    ) {
      setActiveTab("Employers");
      setSearchText(""); // Clear search text after navigation
    } else if (
      lowerKeyword.includes("about") ||
      lowerKeyword.includes("jivika")
    ) {
      setActiveTab("About Us");
      setSearchText(""); // Clear search text after navigation
    } else if (
      lowerKeyword.includes("jobs") ||
      lowerKeyword.includes("company")
    ) {
      setActiveTab("Job Seekers");
      setSearchText(""); // Clear search text after navigation
    } else {
      // Default: Search for jobs, apply filter, and go to Job Seekers
      setActiveTab("Job Seekers");
      // Set search filter for Job Seekers tab
      setJobFilters((prev) => ({ ...prev, search: keyword }));
      setSearchText(""); // Clear search text after successful filter application
    }
  };

  // Open Auth Modal
  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  // Close Auth Modal
  const closeAuthModal = () => {
    setIsAuthOpen(false);
  };

  // --- Job Seekers Logic ---
  const handleFilterChange = (key, value) => {
    setJobFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleClearFilters = () => {
    setJobFilters({ location: "", industry: "", salary: 0, search: "" }); // MODIFIED
  };

  const closeJobModal = () => {
    setIsJobModalOpen(false);
    setSelectedJob(null);
  };

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));
  const [loggedInUserName, setLoggedInUserName] = useState(localStorage.getItem('loggedInUser') || null);

  // ... (Other state, memoized values, and handlers like t, openAuthModal, closeAuthModal, closeJobModal) ...

  // 👈 NEW HANDLER: Called by AuthModal upon successful login
  const handleLoginSuccess = useCallback((userName) => {
    setIsLoggedIn(true);
    setLoggedInUserName(userName);

    console.log(isLoggedIn);
  }, []);
  // NEW: Handle application
  const handleApplyNow = (jobId) => {
    // const token = localStorage.getItem('token');

    if (!isLoggedIn) {
      // User is NOT logged in
      closeJobModal();
      
      // 2. Open the Auth modal in 'signUp' mode (as requested)
      openAuthModal("signUp"); 
      return; 
    }
    setAppliedJobs((prev) => new Set(prev).add(jobId)); // Add the job ID
    alert(
      `${t(
        "applied_successfully"
      )} for Job ID: ${jobId}! We will notify the employer.`
    );
    closeJobModal(); // Close the modal
    
  };

  // MODIFIED: Added search term to the job filtering logic
  const filteredJobs = useMemo(() => {
    const searchTerm = jobFilters.search.toLowerCase();

    return mockJobs.filter((job) => {
      const matchesLocation = jobFilters.location
        ? job.location === jobFilters.location
        : true;
      const matchesIndustry = jobFilters.industry
        ? job.industry === jobFilters.industry
        : true;
      const matchesSalary = jobFilters.salary
        ? parseFloat(job.salary) >= jobFilters.salary
        : true;

      // ADDED: Matches search by title, company, location, or industry
      const matchesSearch = searchTerm
        ? job.title.toLowerCase().includes(searchTerm) ||
          job.company.toLowerCase().includes(searchTerm) ||
          job.location.toLowerCase().includes(searchTerm) ||
          job.industry.toLowerCase().includes(searchTerm)
        : true;

      return (
        matchesLocation && matchesIndustry && matchesSalary && matchesSearch
      ); // MODIFIED
    });
  }, [jobFilters]);

  const openJobModal = (job) => {
    setSelectedJob(job);
    setIsJobModalOpen(true);
  };

  // --- Profile Builder Logic (Refactored for Stability with useCallback) ---

  // Helper functions for dynamic array state (Education/Experience) - WRAPPED IN useCallBack
  const addSection = useCallback((key) => {
    setProfileData((prev) => ({
      ...prev,
      [key]: [
        ...prev[key],
        {
          id: Date.now(),
          ...(key === "education"
            ? { school: "", degree: "", year: "" }
            : { company: "", role: "", start: "", end: "", description: "" }),
        },
      ],
    }));
  }, []);

  const removeSection = useCallback((key, id) => {
    setProfileData((prev) => ({
      ...prev,
      [key]: prev[key].filter((item) => item.id !== id),
    }));
  }, []);

  const handleProfileChange = useCallback((section, field, value, id) => {
    if (section === "personal") {
      setProfileData((prev) => ({
        ...prev,
        [section]: { ...prev[section], [field]: value },
      }));
    } else if (section === "skills") {
      setProfileData((prev) => ({
        ...prev,
        [section]: value,
      }));
    } else {
      // education or experience
      setProfileData((prev) => ({
        ...prev,
        [section]: prev[section].map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        ),
      }));
    }
  }, []);

  // --- Job Seekers Section Component ---
  // (Remaining sectional components follow the definition of the above moved components)

  const JobCard = ({ job, openJobModal }) => (
    <div
      onClick={() => openJobModal(job)}
      className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#387780] hover:shadow-xl transition duration-300 cursor-pointer hover:border-[#ff9933]"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{job.title}</h3>
        <span className="text-xs font-medium text-[#387780] bg-[#387780]/10 py-1 px-3 rounded-full">
          {job.type}
        </span>
      </div>
      <p className="text-md text-[#ff9933] font-semibold mb-2">
        {job.company}
      </p>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
        <span className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" /> {job.location}
        </span>
        <span className="flex items-center">
          <DollarSign className="w-4 h-4 mr-1" /> {job.salary} LPA
        </span>
        <span className="text-xs text-gray-400 self-center ml-auto">
          Posted: {job.posted}
        </span>
      </div>
    </div>
  );

  const JobDetailModal = ({ job, onClose, onApply, appliedJobs, t }) => {
    if (!job) return null;
   
    const isApplied = appliedJobs.has(job.id);

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-[100]"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8">
            <div className="border-b pb-4 mb-6">
              <h2 className="text-3xl font-extrabold text-[#387780] mb-1">
                {job.title}
              </h2>
              <p className="text-xl font-semibold text-[#ff9933]">
                {job.company}
              </p>
            </div>

            <div className="flex flex-wrap justify-between gap-4 text-md text-gray-600 mb-6 border-b pb-4">
              <span className="flex items-center">
                <MapPin className="w-5 h-5 mr-1 text-[#ff9933]" />{" "}
                {job.location}
              </span>
              <span className="flex items-center">
                <DollarSign className="w-5 h-5 mr-1 text-[#ff9933]" />{" "}
                {job.salary} {t("salary_lpa")}
              </span>
              <span className="flex items-center">
                <Briefcase className="w-5 h-5 mr-1 text-[#ff9933]" />{" "}
                {job.type}
              </span>
              <span className="flex items-center">
                <LayoutGrid className="w-5 h-5 mr-1 text-[#ff9933]" />{" "}
                {job.industry}
              </span>
            </div>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {" "}
              Job Description{" "}
            </h3>
            <p className="text-gray-700 mb-6">{job.description}</p>

            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              {" "}
              Requirements{" "}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8 pl-4">
              {job.requirements.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>

            <div className="text-center">
              <button
                onClick={isApplied ? null : () => onApply(job.id)} // Operational click handler
                disabled={isApplied} // Disable if applied
                className={`font-bold py-3 px-10 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform ${
                  isApplied
                    ? "bg-green-600 text-white cursor-not-allowed opacity-80"
                    : "bg-[#ff9933] text-white hover:scale-105"
                }`}
              >
                {isApplied ? t("applied_successfully") : t("apply_now")}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const JobSeekersSection = () => (
    <section className="py-12 bg-gray-50 min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-[#387780] mb-2">
            {t("job_seekers_title")}
          </h1>
          <p className="text-xl text-gray-600">{t("job_seekers_subtitle")}</p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters (Left Sidebar) */}
          <div className="w-full lg:w-1/4 bg-white p-6 rounded-xl shadow-lg h-fit sticky top-24 border border-gray-100">
            <h2 className="text-2xl font-bold text-[#387780] mb-6 flex justify-between items-center">
              {t("filters_title")}
              <button
                onClick={handleClearFilters}
                className="text-sm font-medium text-red-500 hover:text-red-700 flex items-center transition"
              >
                <Filter className="w-4 h-4 mr-1" /> {t("clear_filters")}
              </button>
            </h2>

            <div className="space-y-6">
              {/* Location Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("filter_location")}
                </label>
                <select
                  value={jobFilters.location}
                  onChange={(e) =>
                    handleFilterChange("location", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition bg-white"
                >
                  <option value="">All Locations</option>
                  {allLocations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Industry Filter */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t("filter_industry")}
                </label>
                <select
                  value={jobFilters.industry}
                  onChange={(e) =>
                    handleFilterChange("industry", e.target.value)
                  }
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition bg-white"
                >
                  <option value="">All Industries</option>
                  {allIndustries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Salary Filter (Range Slider) */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-4">
                  {t("filter_salary")}
                </label>
                <input
                  type="range"
                  min="0"
                  max="40"
                  step="5"
                  value={jobFilters.salary}
                  onChange={(e) =>
                    handleFilterChange("salary", parseInt(e.target.value, 10))
                  }
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer range-lg accent-[#ff9933]"
                />
                <div className="mt-2 text-center text-sm font-medium text-[#387780]">
                  Min: **{jobFilters.salary} {t("salary_lpa")}**
                </div>
              </div>
            </div>
          </div>

          {/* Job Listings (Right) */}
          <div className="w-full lg:w-3/4">
            <p className="text-md text-gray-600 mb-6">
              {" "}
              Showing **{filteredJobs.length}** results{" "}
            </p>
            <div className="space-y-6">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} openJobModal={openJobModal} />
                ))
              ) : (
                <div className="bg-white p-12 text-center rounded-xl shadow-lg border border-gray-200">
                  <Zap className="w-12 h-12 text-[#387780] mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    {" "}
                    No Jobs Found{" "}
                  </h3>
                  <p className="text-gray-500 mt-2">
                    {" "}
                    Try adjusting your filters or search terms.{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <JobDetailModal
          job={selectedJob}
          onClose={closeJobModal}
          onApply={handleApplyNow} // NEW PROP
          appliedJobs={appliedJobs} // NEW PROP
          t={t}
        />
      </div>
    </section>
  );

  // Employer Section Components
  const StatCard = ({ icon: Icon, title, value, color }) => (
    <div className={`p-5 rounded-xl shadow-md ${color}`}>
      <div className="flex items-center">
        <Icon className="w-8 h-8 mr-4" />
        <div>
          <p className="text-sm font-medium opacity-80">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
        </div>
      </div>
    </div>
  );

  const EmployerDashboard = ({ setActiveTab }) => (
    <div className="p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-[#387780] mb-8">
        {t("employer_dashboard")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <StatCard
          icon={ClipboardList}
          title={t("active_listings")}
          value="12"
          color="bg-[#ff9933]/10 text-[#ff9933]"
        />
        <StatCard
          icon={Users}
          title={t("total_applicants")}
          value="450"
          color="bg-[#387780]/10 text-[#387780]"
        />
        <StatCard
          icon={CheckCircle}
          title={t("hires_made")}
          value="7"
          color="bg-green-500/10 text-green-600"
        />
      </div>

      <button
        onClick={() => setActiveTab("Post Job")}
        className="bg-[#387780] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2c6369] transition duration-300 flex items-center transform hover:scale-[1.02]"
      >
        <Send className="w-5 h-5 mr-2" /> {t("post_job")}
      </button>

      {/* Mock Recent Applicants List */}
      <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6 border-b pb-2">
        Recent Applicants
      </h3>
      <div className="space-y-4">
        {[
          { name: "Anjali Sharma", job: "Senior React Developer", status: "New" },
          { name: "Ravi Kumar", job: "Data Scientist", status: "Reviewing" },
          { name: "Priya Singh", job: "Creative Designer", status: "Interview" },
        ].map((applicant, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-150"
          >
            <div>
              <p className="font-semibold text-gray-800">{applicant.name}</p>
              <p className="text-sm text-gray-500">
                Applied for: {applicant.job}
              </p>
            </div>
            <span
              className={`text-xs font-medium py-1 px-3 rounded-full ${
                applicant.status === "New"
                  ? "bg-blue-100 text-blue-800"
                  : applicant.status === "Reviewing"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {applicant.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const PostJobForm = ({ setActiveTab }) => {
    const [formData, setFormData] = useState({
      title: "",
      location: "",
      salary: "",
      description: "",
      requirements: "",
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Job Posted:", formData);
      alert(
        `Job "${formData.title}" posted successfully! Returning to dashboard.`
      );
      // Simulate API call success and go back to dashboard
      setActiveTab("Employers");
      setFormData({
        title: "",
        location: "",
        salary: "",
        description: "",
        requirements: "",
      });
    };

    return (
      <div className="p-8 bg-white rounded-xl shadow-2xl">
        <h2 className="text-3xl font-extrabold text-[#387780] mb-1">
          {t("post_job_form_title")}
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          {t("post_job_form_subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title and Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("job_title")}
              </label>
              <input
                name="title"
                value={formData.title}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Senior Data Scientist"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {t("filter_location")}
              </label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                type="text"
                placeholder="e.g., Mumbai, IN"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
              />
            </div>
          </div>

          {/* Salary Range */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Expected Salary ({t("salary_lpa")})
            </label>
            <input
              name="salary"
              value={formData.salary}
              onChange={handleChange}
              type="text"
              placeholder="e.g., 20-25 LPA"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("job_description")}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="5"
              placeholder="Detailed responsibilities and benefits..."
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
            ></textarea>
          </div>

          {/* Job Requirements */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {t("job_requirements")}
            </label>
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
              rows="4"
              placeholder="List required skills, degrees, and experience (one per line)"
              required
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff9933] transition"
            ></textarea>
          </div>

          <div className="flex justify-between items-center pt-4">
            <button
              type="button"
              onClick={() => setActiveTab("Employers")}
              className="text-[#387780] hover:text-[#ff9933] font-medium transition"
            >
              Cancel / Go to Dashboard
            </button>
            <button
              type="submit"
              className="bg-[#387780] text-white font-bold py-3 px-10 rounded-full shadow-lg hover:bg-[#2c6369] transition duration-300 flex items-center"
            >
              <Send className="w-5 h-5 mr-2" /> {t("submit_job")}
            </button>
          </div>
        </form>
      </div>
    );
  };

  const EmployersSection = () => (
    <section className="py-12 bg-gray-50 min-h-[calc(100vh-140px)]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-10 text-center">
          <h1 className="text-5xl font-extrabold text-[#387780] mb-2">
            {t("employers_title")}
          </h1>
          <p className="text-xl text-gray-600">
            Post your openings and find top talent instantly.
          </p>
        </header>
        {activeTab === "Employers" ? (
          <EmployerDashboard setActiveTab={setActiveTab} />
        ) : (
          <PostJobForm setActiveTab={setActiveTab} />
        )}
      </div>
    </section>
  );

  // Home Page Components/Sections
  const CategoryCard = ({ icon: Icon, title, count }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-center border-t-4 border-[#ff9933]">
      <div className="p-4 bg-[#387780]/10 rounded-full inline-block mb-4">
        <Icon className="w-10 h-10 text-[#387780]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{count} Jobs Available</p>
      <a
        href="#"
        onClick={() => {
          setActiveTab("Job Seekers");
          setJobFilters((prev) => ({ ...prev, industry: title }));
        }}
        className="mt-4 inline-flex items-center text-sm font-medium text-[#ff9933] hover:text-[#387780] transition"
      >
        {t("view_openings")} <ChevronRight className="w-4 h-4 ml-1" />
      </a>
    </div>
  );

  const CategoriesSection = () => (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#387780] mb-3">
          {t("explore_categories")}
        </h2>
        <p className="text-lg text-gray-600 mb-12">{t("browse_jobs")}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryCard
            icon={Briefcase}
            title="IT/Software"
            count={3500}
          />
          <CategoryCard
            icon={DollarSign}
            title="Finance"
            count={1200}
          />
          <CategoryCard
            icon={Pencil}
            title="Creative Design"
            count={800}
          />
          <CategoryCard
            icon={Zap}
            title="Data/AI"
            count={1500}
          />
        </div>
      </div>
    </section>
  );

  const HowItWorksSection = () => (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-[#387780] mb-3">
            {t("works_title")}
          </h2>
          <p className="text-lg text-gray-600">{t("works_subtitle")}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-[#387780]">
            <div className="p-4 bg-[#387780]/10 rounded-full inline-block mb-4">
              <User className="w-10 h-10 text-[#387780]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              1. {t("step_1_title")}
            </h3>
            <p className="text-gray-600">{t("step_1_desc")}</p>
          </div>

          {/* Step 2 */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-[#ff9933]">
            <div className="p-4 bg-[#ff9933]/10 rounded-full inline-block mb-4">
              <Search className="w-10 h-10 text-[#ff9933]" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              2. {t("step_2_title")}
            </h3>
            <p className="text-gray-600">{t("step_2_desc")}</p>
          </div>

          {/* Step 3 */}
          <div className="text-center p-6 bg-gray-50 rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="p-4 bg-green-500/10 rounded-full inline-block mb-4">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              3. {t("step_3_title")}
            </h3>
            <p className="text-gray-600">{t("step_3_desc")}</p>
          </div>
        </div>
      </div>
    </section>
  );

  const CompanyCard = ({ company, setActiveTab, setJobFilters }) => (
    <div className="bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.01] flex flex-col h-full border border-gray-100">
      <div className="flex items-center space-x-4 mb-4">
        <img
          src={company.logoUrl}
          alt={`${company.name} logo`}
          className="w-14 h-14 object-contain rounded-full border border-gray-200"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/60x60/CCCCCC/000000?text=${company.name.charAt(
              0
            )}`;
          }}
        />
        <h3 className="text-2xl font-bold text-gray-800">{company.name}</h3>
      </div>
      <p className="text-gray-500 mb-4 flex-grow text-sm">
        {company.description}
      </p>
      <div className="flex justify-between items-center pt-3 border-t border-gray-100">
        <span className="text-lg font-semibold text-[#387780]">
          {company.jobs} Jobs
        </span>
        <button
          onClick={() => {
            setActiveTab("Job Seekers");
            setJobFilters((prev) => ({ ...prev, search: company.name }));
          }}
          className="text-sm font-medium text-[#ff9933] hover:text-[#387780] transition duration-150 flex items-center"
        >
          {t("view_jobs")} <ChevronRight className="w-4 h-4 ml-1" />
        </button>
      </div>
    </div>
  );

  // Companies Section Component
  const CompaniesSection = () => {
    // Logic to determine which list to display
    const companiesToRender = showAllCompanies
      ? expandedMockCompanies
      : expandedMockCompanies.slice(0, 6);
    const companyCountText = showAllCompanies
      ? expandedMockCompanies.length
      : mockCompanies.length; // Use the count of the initial list for the 'Top Companies' view

    return (
      <section className="py-12 bg-gray-50 min-h-[calc(100vh-140px)]">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold text-[#387780] mb-2">
              {t("discover_employers")}
            </h1>
            <p className="text-xl text-gray-600">
              {t("explore_companies")}
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companiesToRender.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
                setActiveTab={setActiveTab}
                setJobFilters={setJobFilters}
              />
            ))}
          </div>

          {/* Toggle Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAllCompanies((prev) => !prev)}
              className="bg-[#ff9933] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
            >
              <Globe className="w-5 h-5 mr-2" />
              {showAllCompanies ? t("show_top") : t("browse_all")}
              <span className="ml-2 text-sm">({companyCountText})</span>
            </button>
          </div>
        </div>
      </section>
    );
  };

  // Profile Builder Section
  const MyProfileSection = () => {
    // Simple mock function for download
    const handleDownload = () => {
      alert("Simulating Profile PDF Download...");
      console.log("Profile Data:", profileData);
    };

    const educationFields = [
      {
        label: t("school_placeholder"),
        name: "school",
        placeholder: t("school_placeholder"),
      },
      {
        label: t("degree_placeholder"),
        name: "degree",
        placeholder: t("degree_placeholder"),
      },
      {
        label: t("grad_year_placeholder"),
        name: "year",
        placeholder: t("grad_year_placeholder"),
      },
    ];

    const experienceFields = [
      {
        label: t("company_placeholder"),
        name: "company",
        placeholder: t("company_placeholder"),
      },
      {
        label: t("job_role_placeholder"),
        name: "role",
        placeholder: t("job_role_placeholder"),
      },
      {
        label: t("start_date_placeholder"),
        name: "start",
        placeholder: t("start_date_placeholder"),
      },
      {
        label: t("end_date_placeholder"),
        name: "end",
        placeholder: t("end_date_placeholder"),
      },
      {
        label: t("job_desc_placeholder"),
        name: "description",
        placeholder: t("job_desc_placeholder"),
        rows: 5,
      },
    ];

    return (
      <section className="py-12 bg-gray-50 min-h-[calc(100vh-140px)]">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-extrabold text-[#387780] mb-2">
              {t("profile_title")} {/* CHANGED */}
            </h1>
            <p className="text-xl text-gray-600">
              {t("profile_subtitle")} {/* CHANGED */}
            </p>
            <div className="mt-6 flex justify-center space-x-4">
              <button
                onClick={() => setPreviewMode(false)}
                className={`py-2 px-6 rounded-full font-bold transition ${
                  !previewMode
                    ? "bg-[#ff9933] text-white shadow-md"
                    : "bg-white text-[#ff9933] border border-[#ff9933] hover:bg-gray-100"
                }`}
              >
                <Pencil className="w-4 h-4 inline mr-2" /> {t("edit_form")}
              </button>
              <button
                onClick={() => setPreviewMode(true)}
                className={`py-2 px-6 rounded-full font-bold transition ${
                  previewMode
                    ? "bg-[#387780] text-white shadow-md"
                    : "bg-white text-[#387780] border border-[#387780] hover:bg-gray-100"
                }`}
              >
                <CheckCircle className="w-4 h-4 inline mr-2" />{" "}
                {t("view_preview")}
              </button>
            </div>
          </header>

          <div
            className={`flex gap-8 ${
              previewMode ? "justify-center" : "lg:flex-row flex-col"
            }`}
          >
            {/* Profile Form (Left) */}
            {!previewMode && (
              <div className="w-full lg:w-3/5 space-y-8">
                {/* Personal Information */}
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#387780] mb-4">
                    {t("personal_info_title")}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* FIX 4: Pass specific value for personal inputs */}
                    <MemoizedInputField
                      label={t("name_placeholder")}
                      name="name"
                      placeholder={t("name_placeholder")}
                      section="personal"
                      value={profileData.personal.name}
                      handleProfileChange={handleProfileChange} // Pass stable handler
                    />
                    <MemoizedInputField
                      label={t("job_title_placeholder")}
                      name="title"
                      placeholder={t("job_title_placeholder")}
                      section="personal"
                      value={profileData.personal.title}
                      handleProfileChange={handleProfileChange}
                    />
                    <MemoizedInputField
                      label={t("email_placeholder")}
                      name="email"
                      placeholder={t("email_placeholder")}
                      section="personal"
                      type="email"
                      value={profileData.personal.email}
                      handleProfileChange={handleProfileChange}
                    />
                    <MemoizedInputField
                      label={t("phone_placeholder")}
                      name="phone"
                      placeholder={t("phone_placeholder")}
                      section="personal"
                      type="tel"
                      value={profileData.personal.phone}
                      handleProfileChange={handleProfileChange}
                    />
                    <div className="md:col-span-2">
                      <MemoizedInputField
                        label={t("city_placeholder")}
                        name="city"
                        placeholder={t("city_placeholder")}
                        section="personal"
                        value={profileData.personal.city}
                        handleProfileChange={handleProfileChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Education History */}
                <MemoizedArraySection
                  sectionKey="education"
                  title={t("education_title")}
                  fields={educationFields}
                  profileData={profileData}
                  t={t}
                  addSection={addSection}
                  removeSection={removeSection}
                  handleProfileChange={handleProfileChange}
                />

                {/* Work Experience */}
                <MemoizedArraySection
                  sectionKey="experience"
                  title={t("experience_title")}
                  fields={experienceFields}
                  profileData={profileData}
                  t={t}
                  addSection={addSection}
                  removeSection={removeSection}
                  handleProfileChange={handleProfileChange}
                />

                {/* Skills */}
                <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#387780] mb-4">
                    {t("skills_title")}
                  </h3>
                  <MemoizedInputField
                    label={t("skills_placeholder")}
                    name="skills"
                    placeholder={t("skills_placeholder")}
                    section="skills"
                    rows={4}
                    // FIX 5: Pass specific value for skills input
                    value={profileData.skills}
                    handleProfileChange={handleProfileChange}
                  />
                </div>
              </div>
            )}

            {/* Profile Preview (Right) - Always visible in non-preview mode on desktop, full-width in preview mode */}
            <div
              className={`h-fit sticky top-24 ${
                previewMode ? "w-full" : "hidden lg:block lg:w-2/5"
              }`}
            >
              <h2
                className={`text-2xl font-bold text-gray-800 mb-4 flex items-center ${
                  previewMode ? "hidden" : ""
                }`}
              >
                <CheckCircle className="w-5 h-5 mr-2 text-[#ff9933]" />{" "}
                {t("view_preview")}
              </h2>
              <MemoizedProfileSummary data={profileData} t={t} />{" "}
              {/* RENAMED */}
              {/* Download button next to preview (only in non-preview mode on desktop) */}
              {!previewMode && (
                <button
                  onClick={handleDownload}
                  className="w-full mt-4 bg-[#387780] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2c6369] transition duration-300 flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2 transform -rotate-45" />{" "}
                  {t("download_resume")}
                </button>
              )}
            </div>
          </div>
          {/* Download Button for Mobile/Full Preview */}
          <div className={`mt-8 ${!previewMode ? "lg:hidden" : ""}`}>
            <button
              onClick={handleDownload}
              className="w-full bg-[#387780] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2c6369] transition duration-300 flex items-center justify-center"
            >
              <Send className="w-5 h-5 mr-2 transform -rotate-45" />{" "}
              {t("download_resume")}
            </button>
          </div>
        </div>
      </section>
    );
  };

  const Footer = () => (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-xl font-extrabold mb-4 text-[#ff9933]">
            JiViKa
          </h4>
          <p className="text-sm text-gray-400">
            Your path to a brighter career starts here. Connecting talent with
            opportunity.
          </p>
        </div>
        {/* Links 1 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Job Seekers</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Search Jobs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Create Resume
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Job Alerts
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Career Advice
              </a>
            </li>
          </ul>
        </div>
        {/* Links 2 */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Employers</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Post Job
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Recruitment Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Employer Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#ff9933] transition">
                Find Talent
              </a>
            </li>
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
          <p className="text-sm text-gray-400 space-y-2">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-2" /> Bangalore, India
            </span>
            <span className="flex items-center">
              <Zap className="w-4 h-4 mr-2" /> info@jivika.com
            </span>
            <span className="flex items-center">
              <Flag className="w-4 h-4 mr-2" /> +91 98765 43210
            </span>
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} JiViKa. All rights reserved.
      </div>
    </footer>
  );

  const AboutUsSection = () => (
    <section className="py-12 bg-white min-h-[calc(100vh-140px)]">
      <div className="max-w-4xl mx-auto py-20 px-6">
        <h1 className="text-4xl font-bold text-[#387780] mb-6">
          About JiViKa
        </h1>
        <p className="text-gray-700 text-lg mb-4">
          JiViKa is dedicated to bridging the gap between talent and
          opportunity in India. Our platform offers a seamless experience
          for both job seekers and employers.
        </p>
        <h2 className="text-2xl font-semibold text-[#ff9933] mt-8 mb-4">
          For Job Seekers
        </h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 pl-4">
          <li>Intuitive design for easy navigation.</li>
          <li>Advanced search and filtering options.</li>
          <li>Secure and transparent communication channels.</li>
        </ul>
        <h2 className="text-2xl font-semibold text-[#ff9933] mt-8 mb-4">
          For Employers
        </h2>
        <p className="text-gray-700 text-lg">
          Find the perfect candidates effortlessly. Post job openings,
          manage applications, and connect with qualified professionals
          ready to make an impact.
        </p>
      </div>
    </section>
  );

  // Render the appropriate section based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "Job Seekers":
        return <Link to = "/jobseeker"><JobSeekersSection /></Link> ;
      case "Employers":
      case "Post Job":
        return <Link to = "/employersection"> <EmployersSection /></Link>;
      case "Companies":
        return <Link to = "/companises" ><CompaniesSection /> </Link>;
      case "My Profile":
        return <Link to = "/myprofile" ><MyProfileSection /></Link>;
      case "About Us":
        return <Link to = "/aboutus"><AboutUsSection /></Link>;
      case "Home":
      default:
        return (
          <>
            <HeroSection
              t={t}
              searchText={searchText}
              handleSearch={handleSearch}
              searchResults={searchResults}
              searchInputRef={searchInputRef}
              selectKeyword={selectKeyword}
              setActiveTab={setActiveTab}
            />
            <CategoriesSection />
            <HowItWorksSection />
            <CompaniesSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar
        t={t}
        searchText={searchText}
        handleSearch={handleSearch}
        searchResults={searchResults}
        searchInputRef={searchInputRef}
        selectKeyword={selectKeyword}
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        openAuthModal={openAuthModal}
        currentCountry={currentCountry}
        currentLang={currentLang}
        isLangDropdownOpen={isLangDropdownOpen}
        setIsLangDropdownOpen={setIsLangDropdownOpen}
        setCurrentLang={setCurrentLang}
      />

      <main className="flex-grow">{renderContent()}</main>

      <Footer />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={closeAuthModal}
        mode={authMode}
        setMode={setAuthMode}
        t={t}
      />
    </div>
  );
};

export default Project;