import type { Course } from "@/types/course";
import { apiService } from "./client";

export const courseAPI = {
  getAllCourses: async (): Promise<Course[]> => {
    return apiService.get<Course[]>("/courses");
  },

  getCourseById: async (courseId: string): Promise<Course> => {
    return apiService.get<Course>(`/courses/${courseId}`);
  },

  getEnrolledCourses: async (userId: string): Promise<Course[]> => {
    return apiService.get<Course[]>(`/users/${userId}/courses`);
  },

  enrollCourse: async (userId: string, courseId: string): Promise<Course> => {
    return apiService.post<Course>(`/courses/${courseId}/enroll`, { userId });
  },

  getCoursesByCategory: async (category: string): Promise<Course[]> => {
    return apiService.get<Course[]>(`/courses/category/${category}`);
  },

  searchCourses: async (query: string): Promise<Course[]> => {
    return apiService.get<Course[]>("/courses/search", {
      params: { q: query },
    });
  },

  getFeaturedCourses: async (): Promise<Course[]> => {
    return apiService.get<Course[]>("/courses/featured");
  },

  rateCourse: async (
    courseId: string,
    rating: number,
    review?: string
  ): Promise<void> => {
    return apiService.post(`/courses/${courseId}/rate`, { rating, review });
  },
};
