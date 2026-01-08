import { apiService } from "./client";

interface UserProgress {
  courseId: string;
  completedLessons: string[];
  quizScores: { [quizId: string]: number };
  overallProgress: number;
}

export const progressAPI = {
  getUserProgress: async (
    userId: string
  ): Promise<{ [courseId: string]: UserProgress }> => {
    return apiService.get(`/users/${userId}/progress`);
  },

  getCourseProgress: async (
    userId: string,
    courseId: string
  ): Promise<UserProgress> => {
    return apiService.get(`/users/${userId}/progress/${courseId}`);
  },

  markLessonComplete: async (
    userId: string,
    courseId: string,
    lessonId: string
  ): Promise<{ courseId: string; lessonId: string }> => {
    return apiService.post(
      `/users/${userId}/progress/${courseId}/lessons/${lessonId}`
    );
  },

  submitQuizScore: async (
    userId: string,
    courseId: string,
    quizId: string,
    score: number
  ): Promise<{ courseId: string; quizId: string; score: number }> => {
    return apiService.post(
      `/users/${userId}/progress/${courseId}/quizzes/${quizId}`,
      { score }
    );
  },

  getCertificate: async (userId: string, courseId: string): Promise<Blob> => {
    return apiService.get(`/users/${userId}/certificates/${courseId}`, {
      responseType: "blob",
    });
  },
};
