import io from 'socket.io-client';
import { backendUrl } from "../api/axios";


class SocketService {
  constructor() {
    this.socket = null;
    this.isConnected = false;
  }

  connect(url = backendUrl()) {
    if (this.socket) return;
    this.socket = io(url);

    this.socket.on('connect', () => {
      console.log('Connected to socket server');
      this.isConnected = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Disconnected from socket server');
      this.isConnected = false;
    });

    // Listen for global events
    this.socket.on('new-ad-created', (ad) => {
      // You can implement custom event handling or use a state management solution
      document.dispatchEvent(new CustomEvent('new-ad-created', { detail: ad }));
    });

    this.socket.on('ad-updated', (ad) => {
      document.dispatchEvent(new CustomEvent('ad-updated', { detail: ad }));
    });

    this.socket.on('ad-deleted', (data) => {
      document.dispatchEvent(new CustomEvent('ad-deleted', { detail: data }));
    });

    this.socket.on('ad-status-changed', (ad) => {
      document.dispatchEvent(new CustomEvent('ad-status-changed', { detail: ad }));
    });
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.isConnected = false;
    }
  }

  // Create a new ad
  createAd(adData, userId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('create-ad', { adData, userId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to create ad'));
        }
      });
    });
  }

  // Get all ads with optional filtering
  getAds(filters = {}) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('get-ads', filters, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to fetch ads'));
        }
      });
    });
  }

  // Get specific ad details
  getAdDetails(adId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('get-ad-details', { adId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to fetch ad details'));
        }
      });
    });
  }

  // Update an existing ad
  updateAd(adData, userId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('update-ad', { adData, userId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to update ad'));
        }
      });
    });
  }

  // Delete an ad
  deleteAd(adId, userId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('delete-ad', { adId, userId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to delete ad'));
        }
      });
    });
  }

  // Get ads created by a specific user
  getUserAds(userId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('get-user-ads', { userId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to fetch user ads'));
        }
      });
    });
  }

  // Toggle ad status (active/inactive)
  toggleAdStatus(adId, status, userId) {
    return new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Socket not connected'));
        return;
      }

      this.socket.emit('toggle-ad-status', { adId, status, userId }, (response) => {
        if (response.success) {
          resolve(response.data);
        } else {
          reject(new Error(response.error || 'Failed to toggle ad status'));
        }
      });
    });
  }

  // Add event listener for custom socket events
  on(event, callback) {
    if (!this.socket) return;
    this.socket.on(event, callback);
  }

  // Remove event listener
  off(event, callback) {
    if (!this.socket) return;
    this.socket.off(event, callback);
  }
}



export default SocketService;