import { io } from 'socket.io-client';

let socket;

export const initializeSocket = (token) => {
  // Close any existing socket connection
  if (socket) {
    socket.disconnect();
  }

  // Create a new socket connection
  socket = io(import.meta.env.VITE_API_URL || 'http://localhost:3000', {
    auth: {
      token
    }
  });

  // Set up event listeners
  socket.on('connect', () => {
    console.log('Socket connected');
  });

  socket.on('disconnect', () => {
    console.log('Socket disconnected');
  });

  socket.on('error', (error) => {
    console.error('Socket error:', error);
  });

  return socket;
};

export const getSocket = () => {
  if (!socket) {
    console.warn('Socket not initialized. Call initializeSocket first.');
  }
  return socket;
};

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

// Trade-related socket methods
export const createAd = (adData) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('create-ad', adData, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to create ad'));
      }
    });
  });
};

export const getAds = (filters = {}) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('get-ads', filters, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to fetch ads'));
      }
    });
  });
};

export const getAdDetails = (adId) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('get-ad-details', adId, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to fetch ad details'));
      }
    });
  });
};

export const updateAd = (adData) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('update-ad', adData, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to update ad'));
      }
    });
  });
};

export const deleteAd = (adId) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('delete-ad', adId, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to delete ad'));
      }
    });
  });
};

export const getUserAds = (userId = null) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('get-user-ads', userId, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to fetch user ads'));
      }
    });
  });
};

export const toggleAdStatus = (adId, status) => {
  return new Promise((resolve, reject) => {
    if (!socket) {
      reject(new Error('Socket not initialized'));
      return;
    }

    socket.emit('toggle-ad-status', { adId, status }, (response) => {
      if (response.success) {
        resolve(response.data);
      } else {
        reject(new Error(response.error || 'Failed to toggle ad status'));
      }
    });
  });
};

// Subscribe to real-time updates
export const subscribeToAdUpdates = (callbacks = {}) => {
  if (!socket) {
    console.warn('Socket not initialized');
    return () => {}; // Return empty cleanup function
  }

  // New ad created
  if (callbacks.onNewAd) {
    socket.on('new-ad-created', callbacks.onNewAd);
  }

  // Ad updated
  if (callbacks.onAdUpdated) {
    socket.on('ad-updated', callbacks.onAdUpdated);
  }

  // Ad deleted
  if (callbacks.onAdDeleted) {
    socket.on('ad-deleted', callbacks.onAdDeleted);
  }

  // Ad status changed
  if (callbacks.onAdStatusChanged) {
    socket.on('ad-status-changed', callbacks.onAdStatusChanged);
  }

  // Return a cleanup function
  return () => {
    if (socket) {
      if (callbacks.onNewAd) socket.off('new-ad-created', callbacks.onNewAd);
      if (callbacks.onAdUpdated) socket.off('ad-updated', callbacks.onAdUpdated);
      if (callbacks.onAdDeleted) socket.off('ad-deleted', callbacks.onAdDeleted);
      if (callbacks.onAdStatusChanged) socket.off('ad-status-changed', callbacks.onAdStatusChanged);
    }
  };
};