// App constants
export const APP_NAME = "ReelVerse";
export const APP_VERSION = "1.0.0";

// API Configuration
export const API_TIMEOUT = 30000;
export const MAX_RETRY_ATTEMPTS = 3;

// Pagination
export const DEFAULT_PAGE_SIZE = 20;
export const MAX_PAGE_SIZE = 100;

// Course Constants
export const COURSE_DIFFICULTY_LEVELS = {
  BEGINNER: "beginner",
  INTERMEDIATE: "intermediate",
  ADVANCED: "advanced",
  EXPERT: "expert",
} as const;

export const COURSE_CATEGORIES = [
  "Development",
  "Business",
  "Design",
  "Marketing",
  "IT & Software",
  "Personal Development",
  "Photography",
  "Music",
  "Health & Fitness",
  "Teaching & Academics",
] as const;

// Progress Constants
export const COMPLETION_THRESHOLD = 0.9; // 90% completion to consider course complete
export const PASSING_SCORE = 70; // 70% to pass a quiz

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: "authToken",
  REFRESH_TOKEN: "refreshToken",
  USER_PREFERENCES: "userPreferences",
  THEME: "theme",
  LANGUAGE: "language",
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: "Network error. Please check your connection.",
  UNAUTHORIZED: "Please log in to continue.",
  SERVER_ERROR: "Server error. Please try again later.",
  VALIDATION_ERROR: "Please check your input and try again.",
  NOT_FOUND: "Resource not found.",
} as const;
