import { apiService } from "./client";

interface PaymentIntent {
  clientSecret: string;
  amount: number;
}

export const paymentAPI = {
  createPaymentIntent: async (
    courseIds: string[],
    amount: number
  ): Promise<PaymentIntent> => {
    return apiService.post<PaymentIntent>("/payments/create-intent", {
      courseIds,
      amount,
    });
  },

  confirmPayment: async (
    paymentIntentId: string
  ): Promise<{ success: boolean }> => {
    return apiService.post("/payments/confirm", { paymentIntentId });
  },

  getPaymentHistory: async (userId: string): Promise<any[]> => {
    return apiService.get(`/users/${userId}/payments`);
  },

  applyPromoCode: async (
    code: string,
    courseIds: string[]
  ): Promise<{ discount: number; newTotal: number }> => {
    return apiService.post("/payments/apply-promo", { code, courseIds });
  },
};
