import api from './axios';
import {toast} from 'sonner';

class ApiService {
constructor(apiInstance) {
    this.api = apiInstance;
}
 async getUserByAddress(address) {
    try {
      const response = await api.get(`/api/profile/user/${address}`);
      return response.user;
    } catch (error) {
      toast.error( error);
      throw error;
    }
  }
  async register(data) {
        try {
        const response = await api.post(`/api/profile/register/${data?.referredBy}`,{
            register: data
        });
        return response.user;
        } catch (error) {
        console.error( error);
        throw error;
    }
  }
  async dailyReward(userId) {
      try {
      const response = await api.get(`/api/rewards/daily/${userId}`);
        return response;
        } catch (error) {
        console.error( error);
        throw error;
    }
  }

  async performTask(userId) {
    try {
      const response = await api.post(`/api/rewards/claim/${userId}`);
      return response;
      } catch (error) {
      console.error( error);
      throw error;
    }
  }

  async addPaymentMethod(data) {
    try {
      const response = await api.post(`/api/trade/payment-method/${data.userId}`, data);
      return response
    } catch (error) {
      console.error( error);
      throw error;
    }
  }
}

export default ApiService;